webpackJsonp([70],{

/***/ "afeU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/help/downloadData.vue


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

/* harmony default export */ var downloadData = ({
  name: 'downloafData',
  data: function data() {
    return {
      file_list: [],
      pageSize: 5,
      tableData: { // 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        url: '/document-data-list',
        loading: true,
        Pagination: {
          page: 1,
          total_count: 10
        },
        sel: {
          files_name: ''
        }
      }
    };
  },
  created: function created() {
    this.getActiveTab('tableData');
  },
  mounted: function mounted() {},

  methods: {
    changePage: function changePage(data) {
      this.getActiveTab(data);
    },
    getActiveTab: function getActiveTab(name) {
      var _this = this;

      // 获取当前展示的表格、搜索等信息
      var lin = {};
      if (this[name].Pagination !== undefined) {
        lin = assign_default()({}, this[name].Pagination, {
          count: this.pageSize
        });
      }
      if (this[name].sel !== undefined) {
        lin = assign_default()({}, lin, this[name].sel);
      }
      this.$axios.get('/document-data-list', { params: lin }).then(function (data) {
        _this.file_list = [].concat(toConsumableArray_default()(data.data.data.document_list));
        _this.tableData.Pagination.total_count = data.data.data.total_count;
      });
    },
    doSearch: function doSearch(name) {
      // 按条件搜索
      if (this[name].Pagination !== undefined) {
        this[name].Pagination.page = 1;
      }
      this.getActiveTab(name);
    },
    viewFile: function viewFile(id) {
      // 查看pdf文档事件
      this.$axios.post('/download-pdfFile', { files_id: id }).then(function (data) {
        // do somthing
      });
    }
  },
  components: {},
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-462f27f2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/help/downloadData.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"download-data"},[_c('div',{staticClass:"help-search"},[_c('el-input',{attrs:{"placeholder":_vm.$t("views.help.enter")},model:{value:(_vm.tableData.sel.files_name),callback:function ($$v) {_vm.$set(_vm.tableData.sel, "files_name", $$v)},expression:"tableData.sel.files_name"}}),_vm._v(" "),_c('el-button',{staticClass:"btn dark mid btn-search",on:{"click":function($event){_vm.doSearch('tableData')}}},[_vm._v(_vm._s(_vm.$t("views.help.download.btnSelect")))])],1),_vm._v(" "),_c('div',{staticClass:"data-list"},[_c('ul',_vm._l((_vm.file_list),function(list,index){return _c('li',{key:index},[_c('div',{staticClass:"list-info"},[_c('span',{staticClass:" iconfont icon-pdf views-icon-PDF"}),_vm._v(" "),_c('div',{staticClass:"list-cont"},[_c('h3',{staticClass:"title"},[_vm._v(_vm._s(list.files_name))]),_vm._v(" "),_c('p',[_c('em',[_vm._v(_vm._s(_vm.$t("views.help.download.abstracts"))+"：")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(list.files_summary))])])])]),_vm._v(" "),_c('el-button',{staticClass:"btn dark mid",attrs:{"id":list.files_id},on:{"click":function($event){_vm.viewFile(list.files_id)}}},[_vm._v(_vm._s(_vm.$t("views.help.download.btnDownload")))])],1)}))]),_vm._v(" "),_c('el-pagination',{staticClass:"tab-page",attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"current-page":_vm.tableData.Pagination.page,"total":_vm.tableData.Pagination.total_count},on:{"update:currentPage":function($event){_vm.$set(_vm.tableData.Pagination, "page", $event)},"current-change":function($event){_vm.changePage('tableData')}}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var help_downloadData = (esExports);
// CONCATENATED MODULE: ./src/views/help/downloadData.vue
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
  downloadData,
  help_downloadData,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_help_downloadData = __webpack_exports__["default"] = (Component.exports);


/***/ })

});