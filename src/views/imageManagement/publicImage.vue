/*
* @Author: 633
* @Date: 2019-01-10 15:05:03
* @Description:公共镜像管理
*/
/*
* @LastEditors: aFei
* @LastEditTime: 2019-08-22 11:19:14
*/
<template>
  <div class="views-public-image-manage">
    <div class="tab-select">
      <div>
        <span class="tab-select-title">{{$t("views.imageManagement.mirrorName")}}</span>
        <el-input v-model="tableData.sel.name"
                  :placeholder="$t('views.imageManagement.enter')"></el-input>
      </div>
      <div>
        <span class="tab-select-title">{{$t("views.imageManagement.creationTime")}}</span>
        <el-date-picker v-model="tableData.sel.full_date"
                        type="daterange"
                        align="right"
                        unlink-panels
                        value-format="yyyy-MM-dd"
                        range-separator="-"
                        :start-placeholder="$t('views.imageManagement.beginTime')"
                        :end-placeholder="$t('views.imageManagement.endTime')"
                        :picker-options="pickerOptions">
        </el-date-picker>
      </div>
      <div>
        <span class="tab-select-title">{{$t("views.imageManagement.status")}}</span>
        <el-select v-model="tableData.sel.status"
                   clearable
                   filterable
                   :placeholder="$t('views.imageManagement.chose')">
          <el-option v-for="(item, index) in imageStatusOptions"
                     :key="index"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        <span class="tab-select-title">{{$t("views.imageManagement.mirrorClassification")}}</span>
        <el-select v-model="tableData.sel.category"
                   clearable
                   filterable
                   :placeholder="$t('views.imageManagement.chose')">
          <el-option v-for="(item,index) in imageTypeOptions"
                     :key="index"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
      </div>
      <div>
        <el-button class="btn light small"
                   @click="clearSearch('tableData')">{{$t("views.imageManagement.reset")}}</el-button>
        <el-button class="btn light small"
                   @click="initMsg()">{{$t("views.imageManagement.select")}}</el-button>
      </div>
    </div>
    <div v-if="isManager"
         class="controls-else">
      <el-button class="btn dark mid"
                 @click="changeImage()">
        {{$t("views.imageManagement.createMirror")}}
      </el-button>
      <el-button class="btn dark mid"
                 @click="deleteMulImage()">{{$t("views.imageManagement.deleteMirror")}}</el-button>
    </div>
    <el-table class="tab-content"
              :data="tableData.msg"
              @selection-change="handleSelectionChange"
              @sort-change="sortTable"
              style="margin-top:10px;"
              v-loading="tableData.loading"
              border>
      <el-table-column v-if="isManager"
                       type="selection"
                       width="55"
                       align="center">
      </el-table-column>
      <el-table-column v-if="!isManager"
                       type="index"
                       :label="'序号'"
                       width="55"
                       align="center">
      </el-table-column>
      <el-table-column :label="$t('views.imageManagement.mirrorName')"
                       sortable='custom'
                       prop="name"
                       show-overflow-tooltip>
        <template slot-scope="scope"
                  header-align="center"
                  align="center">
          <a size="mini"
             @click="handleDetail(scope.$index, scope.row)">{{scope.row.name}}</a>
        </template>
      </el-table-column>
      <el-table-column :label="$t('views.imageManagement.status')"
                       show-overflow-tooltip
                       width="100px"
                       align="center">
        <template slot-scope="scope"
                  header-align="center"
                  align="center">{{scope.row.status==0 ? '上传中' : scope.row.status==1 ? '可用' : '失败'}}</template>
      </el-table-column>
      <el-table-column prop="created_at"
                       show-overflow-tooltip
                       sortable='custom'
                       :label="$t('views.imageManagement.creationTime')"
                       width="200px"
                       align="center"></el-table-column>
      <el-table-column prop="category"
                       sortable='custom'
                       show-overflow-tooltip
                       :label="$t('views.imageManagement.mirrorClassification')">
        <template slot-scope="scope"
                  header-align="center"
                  align="center">{{scope.row.imageCategory.name}}</template>
      </el-table-column>
      <el-table-column prop="describe"
                       show-overflow-tooltip
                       :label="$t('views.imageManagement.mirrorDescription')"></el-table-column>
      <el-table-column v-if="isManager"
                       show-overflow-tooltip
                       :label="$t('views.imageManagement.operating')"
                       width="180px"
                       align="center">
        <template slot-scope="scope">
          <button class="btn"
                  @click="changeImage(scope.row.id)">{{$t("views.imageManagement.modify")}}</button>
          <button class="del"
                  @click="deleteSingleImage(scope.row.id)">{{$t("views.imageManagement.delete")}}</button>
        </template>
      </el-table-column>
      <!--暂无数据情况-->
      <div slot="empty">
        <div class="views-empty">
          <span class="views-empty-table"></span>
          <p class="views-empty-text">{{$t('views.table.noData')}}</p>
        </div>
      </div>
    </el-table>
    <el-pagination class="tab-page"
                   layout="prev, pager, next"
                   :page-size="pageSize"
                   :current-page.sync="tableData.Pagination.page"
                   :total="tableData.Pagination.total_count"
                   @current-change="initMsg()"></el-pagination>
    <el-dialog :title="$t('views.imageManagement.mirrorDetails')"
               :visible.sync="detailDialogVisible">
      <ImageDetail :detailData.sync="detailData"></ImageDetail>
      <span slot="footer"
            class="dialog-footer">
        <el-button class="primary"
                   type="primary"
                   @click="detailDialogVisible = false">{{$t('views.imageManagement.close')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ImageDetail from './imageDetail'
export default {
  name: 'publicImage',
  data () {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: this.$t('views.imageManagement.recentOneWeek'),
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: this.$t('views.imageManagement.recentOneMonth'),
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: this.$t('views.imageManagement.recentThreeMonth'),
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      imageTypeOptions: [],
      imageStatusOptions: [
        {
          value: 0,
          label: '上传中'
        },
        {
          value: 1,
          label: '可用'
        },
        {
          value: 2,
          label: '失败'
        }
      ],
      pageSize: 10,
      detailDialogVisible: false,
      detailData: {},
      isManager: false,
      multipleSelection: [],
      tableData: {// 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        url: '/image/imagelist',
        loading: false,
        Pagination: {
          page: 1,
          total_count: 1
        },
        sel: {
          is_init: 1,
          name: '',
          sort: '',
          category: '',
          status: '',
          full_date: '',
          start_time: '',
          end_time: ''
        }
      },
      imageId: ''
    }
  },
  created () {
    this.initMsg()
    this.$get('/image/imagecategorylist', {is_init: this.tableData.sel.is_init}).then(res => {
      if (res.code === 200) {
        this.imageTypeOptions = res.data.category
      }
    })
    // 获取角色
    this.isManager = this.$store.getters.checkUserCharacter === 'admin'
  },
  methods: {
    handleDetail (index, row) {
      this.detailDialogVisible = true
      this.detailData = row
      console.log(this.detailData)
    },
    handleSelectionChange (rows) {
      this.multipleSelection = []
      if (rows) {
        rows.forEach((val, index, rows) => {
          this.multipleSelection.push(val.id)
        })
      }
      this.multipleSelection = [...this.multipleSelection]
    },
    deleteMulImage () {
      if (this.multipleSelection.length) {
        this.deleteRequest(this.multipleSelection)
      } else {
        this.$message({
          type: 'warning',
          message: this.$t('views.dialogText.selectNull')
        })
      }
    },
    deleteSingleImage (id) {
      this.deleteRequest([id])
    },
    clearSearch () {
      for (let key in this.tableData.sel) {
        this.tableData.sel[key] = ''
        this.tableData.sel.is_init = 1
      }
      if (this.tableData.Pagination !== undefined) {
        this.tableData.Pagination.page = 1
      }
      this.initMsg()
    },
    // 表格数据请求
    initMsg () {
      this.tableData.loading = true
      let lin = {}
      if (this.tableData.Pagination !== undefined) {
        lin = { // 对象合并，也属于深度拷贝，只复制值，不改变原数据
          count: this.pageSize,
          page: this.tableData.Pagination.page
        }
      }
      if (this.tableData.sel !== undefined) {
        if (this.tableData.sel.full_date && this.tableData.sel.full_date.length === 2) {
          this.tableData.sel.start_time = this.tableData.sel.full_date[0] + ' 00:00:00'
          this.tableData.sel.end_time = this.tableData.sel.full_date[1] + ' 23:59:59'
        } else {
          this.tableData.sel.start_time = ''
          this.tableData.sel.end_time = ''
        }
        lin = Object.assign({}, lin, this.tableData.sel)
      }
      this.$get(this.tableData.url, lin).then(res => {
        // 根据后台接口更改
        let tableDate = res.data.image_list
        // 数据处理
        this.tableData.msg = [...tableDate] // 深度拷贝
        // 重置数据总数
        if (this.tableData.Pagination !== undefined) {
          this.tableData.Pagination.total_count = res.data.total_count
        }
        this.pageSize = res.data.per_page || 10
        this.tableData.loading = false
      })
    },
    // 镜像删除
    deleteRequest (id) {
      this.mixinConfirm('/image/imagedelete', {image_id: id}).then(res => {
        if (res) {
          this.initMsg()
        }
      })
    },
    // 表格排序
    sortTable (event) {
      if (event.order === 'descending') {
        this.tableData.sel.sort = '-' + event.prop
      } else {
        this.tableData.sel.sort = event.prop
      }
      this.initMsg()
    },
    changeImage (id) {
      if (isNaN(id)) {
        this.imageId = ''
        this.$router.push({ name: 'pubEditImage', query: { is_init: 1 } })
      } else {
        this.imageId = id
        this.$router.push({ name: 'pubEditImage', query: { imageId: id, is_init: 1 } })
      }
    }
  },
  components: {
    ImageDetail
  },
  beforeRouteLeave (to, from, next) {
    if (to.name === 'pubEditImage') {
      if (this.imageId === '') {
        to.meta.title = 'views.nav.addImage'
      } else {
        to.meta.title = 'views.nav.editImage'
      }
    }
    next()
  }
}
</script>
