webpackJsonp([5],{

/***/ "ikah":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("kk/y");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("5534d2a8", content, true, {});

/***/ }),

/***/ "kk/y":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "wlFC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/storageManagement/announcement.vue


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

/* harmony default export */ var announcement = ({
  name: 'announcement',
  data: function data() {
    return {
      createStorageDialog: false,
      states: '',
      linTabData: '',
      linUrl: '',
      createStorage: {
        storage_name: '',
        storage_description: ''
      },
      storageIdList: [],
      pageSize: 10,
      tableData: { // 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        url: '/storage-manage',
        loading: true,
        Pagination: {
          page: 1,
          total_count: 5
        },
        sel: {
          storage_name: '',
          full_date: []
        }
      }
    };
  },

  methods: {
    // 创建弹窗
    changeStorage: function changeStorage() {
      this.createStorageDialog = true;
    },
    saveStorage: function saveStorage() {
      var _this = this;

      if (this.createStorage.storage_name === '') {
        this.$message({ message: '空间名称不能为空', type: 'error' });
        return false;
      }
      if (this.createStorage.storage_description === '') {
        this.$message({ message: '描述不能为空', type: 'error' });
        return false;
      }
      this.$post('/create-storage-space', this.createStorage).then(function (res) {
        if (res.code === 200) {
          _this.$message({ message: '创建成功', type: 'success' });
          _this.createStorageDialog = false;
          _this.getActiveTab('tableData');
        }
      });
    },
    getActiveTab: function getActiveTab(name) {
      // 获取当前展示的表格、搜索等信息
      this.linTabData = name;
      this.linUrl = this[name].url;
      this.initMsg();
    },
    clearSearch: function clearSearch(name) {
      // 清除搜索条件
      for (var key in this[name].sel) {
        this[name].sel[key] = '';
      }
      if (this[name].Pagination !== undefined) {
        this[name].Pagination.page = 1;
      }
      this.getActiveTab(name);
    },
    doSearch: function doSearch(name) {
      // 按条件搜索
      if (this[name].Pagination !== undefined) {
        this[name].Pagination.page = 1;
      }
      this.getActiveTab(name);
    },
    changePage: function changePage(name) {
      // 改变分页
      this.getActiveTab(name);
    },
    initMsg: function initMsg() {
      var _this2 = this;

      this[this.linTabData].loading = true;
      var lin = {};
      if (this[this.linTabData].Pagination !== undefined) {
        lin = assign_default()({}, this[this.linTabData].Pagination, {
          count: this.pageSize
        });
      }
      if (this[this.linTabData].sel !== undefined) {
        if (this[this.linTabData].sel.full_date && this[this.linTabData].sel.full_date.length === 2) {
          this[this.linTabData].sel.star_date = this[this.linTabData].sel.full_date[0];
          this[this.linTabData].sel.end_date = this[this.linTabData].sel.full_date[1];
        } else {
          this[this.linTabData].sel.star_date = '';
          this[this.linTabData].sel.end_date = '';
        }
        lin = assign_default()({}, lin, this[this.linTabData].sel);
      }
      this.$axios.get(this[this.linTabData].url, { params: lin }).then(function (data) {
        // 根据后台接口更改
        var tableDate = data.data.data.storage_list;
        // 数据处理
        _this2[_this2.linTabData].msg = [].concat(toConsumableArray_default()(tableDate));
        // 重置数据总数
        if (_this2[_this2.linTabData].Pagination !== undefined) {
          _this2[_this2.linTabData].Pagination.total_count = data.data.data.total_count;
        }
        _this2[_this2.linTabData].loading = false;
      });
    },
    fileManage: function fileManage(id) {
      this.$router.push({ name: 'storageDetail', query: { storageId: id } });
    },
    deleteStorage: function deleteStorage(id) {
      var _this3 = this;

      this.$confirm('是否删除这条信息？', '确认信息').then(function () {
        _this3.$axios.post('/init-pwd-user', { storage_id: id }).then(function (data) {
          _this3.$message({ message: '删除成功', type: 'success' });
        });
      }).catch(function () {
        console.log('取消');
      });
    }
  },
  created: function created() {
    // 每有一个表格就要写个初始化赋值
    this.getActiveTab('tableData');
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b1c9468c","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/storageManagement/announcement.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"announcement"},[_c('div',{staticClass:"tab-select"},[_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v("存储空间名称")]),_vm._v(" "),_c('el-input',{staticClass:"views-input-text",attrs:{"placeholder":'存储空间名称'},model:{value:(_vm.tableData.sel.storage_name),callback:function ($$v) {_vm.$set(_vm.tableData.sel, "storage_name", $$v)},expression:"tableData.sel.storage_name"}})],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t('views.table.createTime')))]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","editable":false,"range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":_vm.$t('views.button.startDate'),"end-placeholder":_vm.$t('views.button.endDate')},model:{value:(_vm.tableData.sel.full_date),callback:function ($$v) {_vm.$set(_vm.tableData.sel, "full_date", $$v)},expression:"tableData.sel.full_date"}})],1),_vm._v(" "),_c('div',[_c('button',{on:{"click":function($event){_vm.clearSearch('tableData')}}},[_vm._v(_vm._s(_vm.$t("views.button.reset")))]),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.doSearch('tableData')}}},[_vm._v(_vm._s(_vm.$t("views.button.search")))])])]),_vm._v(" "),_c('div',{staticClass:"controls-else"},[_c('el-button',{staticClass:"view-btn-medium",on:{"click":_vm.changeStorage}},[_vm._v("创建公共存储空间")])],1),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.tableData.loading),expression:"tableData.loading"}],staticClass:"tab-content",attrs:{"data":_vm.tableData.msg,"border":""}},[_c('el-table-column',{attrs:{"type":"index","label":"序号","width":"55","header-align":"center","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":'存储空间名称'},scopedSlots:_vm._u([{key:"default",fn:function(item){return [_c('router-link',{staticClass:"link",attrs:{"to":{name:'storageDetail',query:{storageId:item.row.storage_id}}}},[_vm._v(_vm._s(item.row.storage_name))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","width":"200","label":_vm.$t('views.table.createTime')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"storage_desc","label":'描述'}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.table.operate'),"width":"140"},scopedSlots:_vm._u([{key:"default",fn:function(item){return _c('div',{staticClass:"options text-center"},[_c('button',{staticClass:"btn",on:{"click":function($event){_vm.fileManage(item.row.storage_id)}}},[_vm._v("文件管理")]),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":function($event){_vm.deleteStorage(item.row.storage_id)}}},[_vm._v(_vm._s(_vm.$t('views.button.delete')))])])}}])}),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])])],1),_vm._v(" "),_c('el-pagination',{staticClass:"tab-page",attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"current-page":_vm.tableData.Pagination.page,"total":_vm.tableData.Pagination.total_count},on:{"update:currentPage":function($event){_vm.$set(_vm.tableData.Pagination, "page", $event)},"current-change":function($event){_vm.changePage('tableData')}}}),_vm._v(" "),_c('el-dialog',{staticClass:"small",attrs:{"title":"创建公共存储空间","visible":_vm.createStorageDialog},on:{"update:visible":function($event){_vm.createStorageDialog=$event}}},[_c('div',[_c('div',{staticClass:"create-storage"},[_c('span',[_vm._v("空间名称\n          "),_c('el-tooltip',{attrs:{"content":"bottom-start","placement":"bottom-start"}},[_c('i',{staticClass:"iconfont icon-Group"})])],1),_vm._v(" "),_c('el-input',{model:{value:(_vm.createStorage.storage_name),callback:function ($$v) {_vm.$set(_vm.createStorage, "storage_name", $$v)},expression:"createStorage.storage_name"}})],1),_vm._v(" "),_c('div',{staticClass:"create-storage"},[_c('span',[_vm._v("描述")]),_vm._v(" "),_c('el-input',{attrs:{"type":"textarea","rows":"4"},model:{value:(_vm.createStorage.storage_description),callback:function ($$v) {_vm.$set(_vm.createStorage, "storage_description", $$v)},expression:"createStorage.storage_description"}})],1)]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"size":"medium"},on:{"click":function($event){_vm.createStorageDialog = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium",on:{"click":_vm.saveStorage}},[_vm._v("保存")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var storageManagement_announcement = (esExports);
// CONCATENATED MODULE: ./src/views/storageManagement/announcement.vue
function injectStyle (ssrContext) {
  __webpack_require__("ikah")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b1c9468c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  announcement,
  storageManagement_announcement,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_storageManagement_announcement = __webpack_exports__["default"] = (Component.exports);


/***/ })

});