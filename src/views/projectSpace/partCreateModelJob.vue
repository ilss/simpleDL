/*
 * @Author:任雷雷
 * @Date: 2018-12-30 10:04:31
 * @LastEditors: 任雷雷
 * @LastEditTime: 2019-08-18 10:31:59
 * @Description:我参与的项目-创建模型预测
 */
<template>
    <div class="views-personal">
        <el-form :model="ruleForm"
            :rules="modelRules"
            ref="ruleForm"
            :label-width="labelWidth"
            class="views-icon-ruleForm">
            <!--基本信息 -->
            <div class="views-header-inf">
                <span>{{$t('views.modelPrediction.basicInf')}}</span>
            </div>
            <div class="views-develop-inf">
                <div class="views-task-input">
                    <el-form-item :label="$t('views.modelPrediction.job')"
                        prop="name">
                        <el-input v-model="ruleForm.name"
                            minlength="2"
                            maxlength="30"
                            :placeholder="$t('views.development.youCan')"
                            clearable></el-input>
                    </el-form-item>
                </div>
                <div class="views-task-image">
                    <el-form-item :label="$t('views.development.remarks')"
                        prop="desc">
                        <el-input type="textarea"
                            :rows="6"
                            maxlength="200"
                            :placeholder="$t('views.development.pleaseContents')"
                            v-model="ruleForm.desc">
                        </el-input>
                    </el-form-item>
                </div>
            </div>
            <!-- 参数配置 -->
            <div class="views-header-inf">
                <span>{{$t('views.modelPrediction.parameterConfig')}}</span>
            </div>
            <!-- 接口类型 -->
            <div class="views-develop-inf views-model-image">
                <div class="views-task-input">
                    <el-form-item :label="$t('views.modelPrediction.interfaceType')"
                        prop="radio">
                        <el-radio-group v-model="ruleForm.radio"
                            @change="interfaceType">
                            <el-radio :label="item.label"
                                v-for="item in faceType"
                                :key="item.label">
                                {{item.value}}
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
                <!-- 引擎类型 -->
                <div class="views-develop-resources">
                    <el-form-item :label="$t('views.trainingTask.engineType')"
                        prop="engine">
                        <el-select v-model="ruleForm.engine"
                            :placeholder="$t('views.development.pleaseChoose')"
                            disabled>
                            <el-option v-for="item in practiceengine"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <!-- 版本信息 -->
                    <el-form-item :label="$t('views.trainingTask.versionInf')"
                        prop="version">
                        <el-select v-model="ruleForm.version"
                            :placeholder="$t('views.development.pleaseChoose')">
                            <el-option v-for="item in version"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <!-- 使用模型-->
                <div class="views-develop-image">
                    <!-- <el-tooltip class="item" effect="dark" placement="bottom-start">
                        <div slot="content">计算节点的帮助信息计算节点的帮助信息帮助信<br>计算节点的帮助信息计算节点的帮助信息帮助信</div>
                        <i class="iconfont icon-Group views-icon-group"></i>
                    </el-tooltip> -->
                    <el-form-item :label="$t('views.modelPrediction.useModel')"
                        prop="useModel">
                        <div class="views-develop-choice">
                            <el-input v-model="ruleForm.useModel"
                                :readonly="true"></el-input>
                            <el-button type="primary"
                                class="view-btn-medium"
                                @click="choice">选择</el-button>
                        </div>
                    </el-form-item>
                </div>
                <!-- 作业参数-->
                <div class="views-develop-image views-model-job">
                    <!-- <el-tooltip class="item" effect="dark" placement="bottom-start">
                        <div slot="content">计算节点的帮助信息计算节点的帮助信息帮助信<br>计算节点的帮助信息计算节点的帮助信息帮助信</div>
                        <i class="iconfont icon-Group views-icon-group"></i>
                    </el-tooltip> -->
                    <el-form-item :label="$t('views.modelPrediction.jobParameter')"
                        prop="task"
                        class="views-divelop-none">
                        <div class="views-develop-choice views-develop-block">
                            <el-input v-model="ruleForm.paramsName"
                                disabled></el-input>
                            <b class="views-task-sign">=</b>
                            <el-form-item label-width="0"
                                prop="task">
                                <el-input v-model="ruleForm.task"
                                    :placeholder="$t('views.development.youCan')"
                                    clearable
                                    minlength="2"
                                    maxlength="30"></el-input>
                            </el-form-item>
                        </div>
                    </el-form-item>
                </div>
                <!-- 计算节点规则-->
                <div class="views-develop-image">
                    <!-- <el-tooltip class="item" effect="dark" placement="bottom-start">
                        <div slot="content">计算节点的帮助信息计算节点的帮助信息帮助信<br>计算节点的帮助信息计算节点的帮助信息帮助信</div>
                        <i class="iconfont icon-Group views-icon-group"></i>
                    </el-tooltip> -->
                    <el-form-item :label="$t('views.modelPrediction.nodeRules')"
                        prop="memory">
                        <div class="views-model-task views-task-border">
                            <div class="views-task-sitting views-task-sitting-mg">
                                <span class="views-task-cpu">CPU</span>
                                <el-select v-model="ruleForm.cpu"
                                    placeholder="请选择">
                                    <el-option v-for="item in projectconfig.cpu_config"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>&nbsp;核
                                <!-- <span class="views-task-cpu">GPU</span>
                                <el-select v-model="value1" placeholder="请选择">
                                    <el-option v-for="item in opData" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select> -->
                                <span class="views-task-cpu">{{$t('views.projectContent.memory')}}</span>
                                <el-select v-model="ruleForm.memory"
                                    placeholder="请选择">
                                    <el-option v-for="item in  projectconfig.memory_config"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                &nbsp;G
                            </div>
                        </div>
                    </el-form-item>
                </div>
            </div>
            <div class="views-develop-btn">
                <el-button @click="resetForm('ruleForm')">{{$t('views.button.cancel')}}</el-button>
                <el-button type="primary"
                    class="view-btn-big"
                    @click="submitForm('ruleForm')"
                    :loading="isLoading">
                    {{$t('views.button.run')}}
                </el-button>
            </div>
        </el-form>
        <!-- 选择使用模型 -->
        <el-dialog :title="modelDialog.title"
            :visible.sync="modelDialog.dialogCode"
            :before-close="handleClose"
            class="small">
            <div class="content">
               <component :is="assembly"
                    :isFirst="modelDialog.isFirst"
                    :isSecond="modelDialog.isSecond"
                    :type='modelDialog.type'
                    :projectId="projectId">
                </component>
            </div>
            <span slot="footer"
                class="dialog-footer">
                <el-button class="cancel"
                    @click="dialogColse">{{$t('views.button.cancel')}}</el-button>
                <el-button class="primary"
                    type="primary"
                    @click="dialogSure()">{{$t('views.button.sure')}}</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import ViewsCodeDirectory from './components/codeDirectory'
import { validateUsername, valiName } from '@/util/validate.js'
export default {
  data () {
    var name = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入名称'))
      } else if (!validateUsername(value)) {
        callback(new Error('只能输入2-30位字母、数字、下划线'))
      } else {
        callback()
      }
    }
    var task = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入作业参数'))
      } else if (!validateUsername(value)) {
        callback(new Error('只能输入2-30位字母、数字、下划线'))
      } else {
        callback()
      }
    }
    var desc = (rule, value, callback) => {
      if (value === '') {
        callback()
      } else if (!valiName(value)) {
        callback(new Error('不得包含特殊字符:<>:\'"/\\.'))
      } else {
        callback()
      }
    }
    return {
      input: '',
      textarea: '',
      obj: {
        project_id: ''
      },
      projectId: '',
      labelWidth: '120px',
      storage_id: {},
      storage_object_id: {},
      modelDialog: {
        title: '选择使用模型',
        dialogCode: false,
        isFirst: false,
        isSecond: false,
        type: 1
      },
      isLoading: false,
      assembly: '',
      mount_info: '',
      ruleForm: {
        name: '',
        memory: '4',
        useModel: '',
        task: '',
        engine: 'tensorflow',
        version: '',
        cpu: '1',
        paramsName: 'model_name',
        model: '',
        radio: 'GRPC',
        desc: ''
      },
      modelRules: {
        name: [
          { required: true, validator: name, trigger: 'blur' },
          { min: 2, max: 30, message: this.$t('views.development.youCan'), trigger: 'blur' }
        ],
        engine: [
          { required: true, message: '请选择引擎类型', trigger: 'change' }
        ],
        version: [
          { required: true, message: '请选择版本信息', trigger: 'change' }
        ],
        memory: [
          { required: true, message: '内存不能为空', trigger: 'change' }
        ],
        cpu: [
          { required: true, message: 'CPU不能为空', trigger: 'change' }
        ],
        useModel: [
          { required: true, message: '请选择使用的模型', trigger: 'change' }
        ],
        task: [
          { required: true, validator: task, trigger: 'blur' },
          { min: 2, max: 30, message: this.$t('views.development.youCan'), trigger: 'blur' }
        ],
        desc: [
          { required: false, validator: desc, trigger: 'blur' }
        ],
        radio: [
          { required: true, message: '请选择接口类型', trigger: 'change' }
        ]
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    let id = this.$route.query.partId
    if (to.name === 'partProjectDetails' && to.query.partId === undefined) {
      this.$router.push({
        name: 'partProjectDetails',
        query: {
          partId: id
        }
      })
    } else {
      next()
    }
  },
  created () {
    // 请求引擎类型数据，函数调用
    this.$store.dispatch('getPracticeengine')
    // 请求版本信息数据，函数调用
    this.$store.dispatch('getPracticeengineversion')
    // 请求接口类型数据，函数调用
    this.$store.dispatch('getModelinterfacetype')
    // 请求节点配置数据，函数调用
    let id = this.$route.query.partId
    this.projectId = this.obj.project_id = id
    this.$store.dispatch('getProjectconfig', this.obj)
  },
  watch: {
    STORE_THEME_LANG: {
      handler (options, oldOptions) {
        if (this.STORE_THEME_LANG === 'zh') {
          this.labelWidth = '120px'
        }
        if (this.STORE_THEME_LANG === 'en') {
          this.labelWidth = '200px'
        }
      }
    }
  },
  mounted () {
    if (this.STORE_THEME_LANG === 'zh') {
      this.labelWidth = '120px'
    }
    if (this.STORE_THEME_LANG === 'en') {
      this.labelWidth = '200px'
    }
  },
  methods: {
    // 处理storage_id和storage_object_id数据函数封装
    storageId (data) {
      // console.log(JSON.stringify(data))
      let arr = []
      for (let key in data) {
        arr.push(data[key])
      }
      // console.log(JSON.stringify(arr))
      return arr
    },
    // 提交
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let storage = this.storageId(this.storage_id)
          let storageObject = this.storageId(this.storage_object_id)
          let storageId = Array.from(new Set(storage))
          let storageObjectId = Array.from(new Set(storageObject))
          let data = {
            project_id: this.obj.project_id,
            name: this.ruleForm.name,
            describe: this.ruleForm.desc,
            engine: this.ruleForm.engine,
            engine_version: this.ruleForm.version,
            mount_info: this.mount_info,
            gpu: 0,
            cpu: this.ruleForm.cpu,
            memory: this.ruleForm.memory,
            type: this.ruleForm.radio,
            param: {
              model_name: this.ruleForm.task
            }
          }
          let obj = {
            ModelPrediction: data,
            storage_object_id: storageObjectId,
            storage_id: storageId
          }
          // console.log(JSON.stringify(obj))
          this.isLoading = true
          this.modelpredictioncreate(obj)
        } else {
          return false
        }
      })
    },
    // 取消
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.$router.go(-1)
    },
    interfaceType (value) {
      console.log(value)
    },
    // 打开使用模型弹出框
    choice () {
      // console.log(index)
      let data = []
      this.assembly = 'ViewsCodeDirectory'
      this.$store.commit('projectpath', { data })
      this.modelDialog.dialogCode = true
      this.modelDialog.isFirst = true
      this.modelDialog.isSecond = true
    },
    // 确定选择的使用模型
    dialogSure () {
      let projectpath = this.$store.state.projectSpace.projectpath
      if (projectpath === '') {
        this.$message({
          message: '请选择目录',
          type: 'warning'
        })
      } else {
        let key = Object.keys(projectpath)[0]
        this.ruleForm.useModel = key
        this.storage_id.first = projectpath.storage_id
        this.storage_object_id.first = projectpath.storage_object_id
        this.mount_info = {
          'model_path': projectpath[key]
        }
        this.modelDialog.dialogCode = false
        // console.log(this.mount_info)
        this.assembly = ''
      }
    },
    dialogColse () {
      this.modelDialog.dialogCode = false
      // console.log(this.mount_info)
      this.assembly = ''
    },
    // 关闭弹出框
    handleClose (done) {
      done()
    },
    // 创建模型预测
    modelpredictioncreate (obj) {
      this.$post('/model/modelpredictioncreate', obj).then(res => {
        // console.log(JSON.stringify(res))
        this.isLoading = false
        if (res.code === 200) {
          this.$message({
            message: res.message,
            type: 'success'
          })
          this.$router.go(-1)
        } else {
          this.$message({
            message: res.message,
            type: 'error'
          })
        }
      })
    }
  },
  components: { ViewsCodeDirectory },
  computed: {
    // 引擎类型
    practiceengine () {
      return this.$store.getters.postPracticeengine
    },
    // 节点配置
    projectconfig () {
      return this.$store.getters.postProjectconfig
    },
    // 版本信息
    version () {
      return this.$store.getters.postVersion
    },
    // 接口类型
    faceType () {
      return this.$store.getters.postFaceType
    }
  }
}
</script>
