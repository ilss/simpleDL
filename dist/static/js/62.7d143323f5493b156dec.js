webpackJsonp([62],{

/***/ "rOlG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./src/views/imageManagement/imageDetail.vue + 2 modules
var imageDetail = __webpack_require__("dclA");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/imageManagement/publicImage.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var publicImage = ({
  name: 'publicImage',
  data: function data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: this.$t('views.imageManagement.recentOneWeek'),
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: this.$t('views.imageManagement.recentOneMonth'),
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: this.$t('views.imageManagement.recentThreeMonth'),
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      imageTypeOptions: [],
      imageStatusOptions: [],
      pageSize: 10,
      detailDialogVisible: false,
      detailData: {},
      isManager: false,
      multipleSelection: [],
      tableData: { // 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        url: '/pblicImage',
        loading: false,
        Pagination: {
          page: 1,
          total_count: 20
        },
        sel: {
          image_name: '',
          image_type: '',
          image_status: '',
          full_date: '',
          star_date: '',
          end_date: ''
        }
      },
      imageId: ''
    };
  },
  created: function created() {
    var _this = this;

    this.$axios.get(this.tableData.url).then(function (res) {
      var tableDate = res.data.data.image_list;
      var imageTypeOptionsDate = res.data.data.image_type_option;
      var imageStatusOptionData = res.data.data.image_status_option;
      _this.tableData.msg = [].concat(toConsumableArray_default()(tableDate)); // 深度拷贝
      _this.imageTypeOptions = [].concat(toConsumableArray_default()(imageTypeOptionsDate));
      _this.imageStatusOptions = [].concat(toConsumableArray_default()(imageStatusOptionData));
      if (_this.tableData.Pagination !== undefined) {
        _this.tableData.Pagination.total_count = res.data.data.total_count;
      }
      _this.tableData.loading = false;
    });
    // 获取角色
    this.isManager = this.$store.getters.checkUserCharacter === 'admin';
  },

  methods: {
    handleDetail: function handleDetail(index, row) {
      this.detailDialogVisible = true;
      this.detailData = row;
    },
    handleSelectionChange: function handleSelectionChange(rows) {
      var _this2 = this;

      this.multipleSelection = [];
      if (rows) {
        rows.forEach(function (val, index, rows) {
          _this2.multipleSelection.push(val.image_id);
        });
      }
      this.multipleSelection = [].concat(toConsumableArray_default()(this.multipleSelection));
    },
    deleteMulImage: function deleteMulImage() {
      if (this.multipleSelection.length) {
        this.deleteRequest(this.multipleSelection);
      } else {
        this.$message({
          type: 'info',
          message: '请至少选择一条数据！'
        });
      }
    },
    deleteSingleImage: function deleteSingleImage(id) {
      this.deleteRequest([id]);
    },
    clearSearch: function clearSearch() {
      for (var key in this.tableData.sel) {
        this.tableData.sel[key] = '';
      }
      if (this.tableData.Pagination !== undefined) {
        this.tableData.Pagination.page = 1;
      }
      this.initMsg();
    },
    initMsg: function initMsg() {
      var _this3 = this;

      this.tableData.loading = true;
      var lin = {};
      if (this.tableData.Pagination !== undefined) {
        lin = assign_default()({}, this.tableData.Pagination, { // 对象合并，也属于深度拷贝，只复制值，不改变原数据
          count: this.pageSize
        });
      }
      if (this.tableData.sel !== undefined) {
        if (this.tableData.sel.full_date && this.tableData.sel.full_date.length === 2) {
          this.tableData.sel.star_date = this.tableData.sel.full_date[0];
          this.tableData.sel.end_date = this.tableData.sel.full_date[1];
        } else {
          this.tableData.sel.star_date = '';
          this.tableData.sel.end_date = '';
        }
        lin = assign_default()({}, lin, this.tableData.sel);
      }
      this.$axios.get(this.tableData.url, { params: lin }).then(function (res) {
        // 根据后台接口更改
        var tableDate = res.data.data.image_list;
        // 数据处理
        _this3.tableData.msg = [].concat(toConsumableArray_default()(tableDate)); // 深度拷贝
        // 重置数据总数
        if (_this3.tableData.Pagination !== undefined) {
          _this3.tableData.Pagination.total_count = res.data.data.total_count;
        }
        _this3.tableData.loading = false;
      });
    },
    deleteRequest: function deleteRequest(id) {
      var _this4 = this;

      this.$confirm('确定要删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this4.$axios.post('/delete-image', { image_id: id }).then(function (res) {
          _this4.$message({
            type: 'success',
            message: '删除成功'
          });
          _this4.initMsg();
        }).catch(function (errno) {
          _this4.$message({
            type: 'warning',
            message: '删除失败!'
          });
        });
      }).catch(function () {
        // 已取消
      });
    },
    changeImage: function changeImage(id) {
      if (isNaN(id)) {
        this.imageId = '';
        this.$router.push({ name: 'editImage' });
      } else {
        this.imageId = id;
        this.$router.push({ name: 'editImage', query: { imageId: id } });
      }
    }
  },
  components: {
    ImageDetail: imageDetail["a" /* default */]
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (to.name === 'editImage') {
      if (this.imageId === '') {
        to.meta.title = 'views.nav.addImage';
      } else {
        to.meta.title = 'views.nav.editImage';
      }
    }
    next();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4919ac52","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/imageManagement/publicImage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-public-image-manage"},[_c('div',{staticClass:"tab-select"},[_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.mirrorName")))]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":_vm.$t('views.imageManagement.enter')},model:{value:(_vm.tableData.sel.image_name),callback:function ($$v) {_vm.$set(_vm.tableData.sel, "image_name", $$v)},expression:"tableData.sel.image_name"}})],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.creationTime")))]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"-","start-placeholder":_vm.$t('views.imageManagement.beginTime'),"end-placeholder":_vm.$t('views.imageManagement.endTime'),"picker-options":_vm.pickerOptions},model:{value:(_vm.tableData.sel.full_date),callback:function ($$v) {_vm.$set(_vm.tableData.sel, "full_date", $$v)},expression:"tableData.sel.full_date"}})],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.status")))]),_vm._v(" "),_c('el-select',{attrs:{"clearable":"","filterable":"","placeholder":_vm.$t('views.imageManagement.chose')},model:{value:(_vm.tableData.sel.image_status),callback:function ($$v) {_vm.$set(_vm.tableData.sel, "image_status", $$v)},expression:"tableData.sel.image_status"}},_vm._l((_vm.imageStatusOptions),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.mirrorClassification")))]),_vm._v(" "),_c('el-select',{attrs:{"clearable":"","filterable":"","placeholder":_vm.$t('views.imageManagement.chose')},model:{value:(_vm.tableData.sel.image_type),callback:function ($$v) {_vm.$set(_vm.tableData.sel, "image_type", $$v)},expression:"tableData.sel.image_type"}},_vm._l((_vm.imageTypeOptions),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('div',[_c('button',{on:{"click":function($event){_vm.clearSearch()}}},[_vm._v(_vm._s(_vm.$t("views.imageManagement.reset")))]),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.initMsg()}}},[_vm._v(_vm._s(_vm.$t("views.imageManagement.select")))])])]),_vm._v(" "),(_vm.isManager)?_c('div',{staticClass:"controls-else"},[_c('el-button',{staticClass:"btn dark mid",on:{"click":function($event){_vm.changeImage()}}},[_vm._v("\n        "+_vm._s(_vm.$t("views.imageManagement.createMirror"))+"\n    ")]),_vm._v(" "),_c('el-button',{staticClass:"btn dark mid",on:{"click":function($event){_vm.deleteMulImage()}}},[_vm._v(_vm._s(_vm.$t("views.imageManagement.deleteMirror")))])],1):_vm._e(),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.tableData.loading),expression:"tableData.loading"}],staticClass:"tab-content",attrs:{"data":_vm.tableData.msg,"border":""},on:{"selection-change":_vm.handleSelectionChange}},[(_vm.isManager)?_c('el-table-column',{attrs:{"type":"selection","width":"55","align":"center"}}):_vm._e(),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.imageManagement.mirrorName')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('a',{attrs:{"size":"mini"},on:{"click":function($event){_vm.handleDetail(scope.$index, scope.row)}}},[_vm._v(_vm._s(scope.row.image_name))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.imageManagement.status'),"width":"100px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(scope.row.image_status))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"build_time","label":_vm.$t('views.imageManagement.creationTime'),"width":"200px","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"image_type","label":_vm.$t('views.imageManagement.mirrorClassification')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"image_desc","label":_vm.$t('views.imageManagement.mirrorDescription')}}),_vm._v(" "),(_vm.isManager)?_c('el-table-column',{attrs:{"label":_vm.$t('views.imageManagement.operating'),"width":"150px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('button',{staticClass:"btn",on:{"click":function($event){_vm.changeImage(scope.row.image_id)}}},[_vm._v(_vm._s(_vm.$t("views.imageManagement.modify")))]),_vm._v(" "),_c('button',{staticClass:"del",on:{"click":function($event){_vm.deleteSingleImage(scope.row.image_id)}}},[_vm._v(_vm._s(_vm.$t("views.imageManagement.delete")))])]}}])}):_vm._e(),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])])],1),_vm._v(" "),_c('el-pagination',{staticClass:"tab-page",attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"current-page":_vm.tableData.Pagination.page,"total":_vm.tableData.Pagination.total_count},on:{"update:currentPage":function($event){_vm.$set(_vm.tableData.Pagination, "page", $event)},"current-change":function($event){_vm.initMsg()}}}),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.$t('views.imageManagement.mirrorDetails'),"visible":_vm.detailDialogVisible},on:{"update:visible":function($event){_vm.detailDialogVisible=$event}}},[_c('image-detail',{attrs:{"detailData":_vm.detailData}}),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"primary",attrs:{"type":"primary"},on:{"click":function($event){_vm.detailDialogVisible = false}}},[_vm._v(_vm._s(_vm.$t('views.imageManagement.close')))])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var imageManagement_publicImage = (esExports);
// CONCATENATED MODULE: ./src/views/imageManagement/publicImage.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  publicImage,
  imageManagement_publicImage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_imageManagement_publicImage = __webpack_exports__["default"] = (Component.exports);


/***/ })

});