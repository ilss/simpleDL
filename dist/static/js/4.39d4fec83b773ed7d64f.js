webpackJsonp([4],{

/***/ "UzZG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/views/projectSpace/projectLink.vue + 2 modules
var projectLink = __webpack_require__("i09R");

// EXTERNAL MODULE: ./src/util/index.js
var util = __webpack_require__("ZoQJ");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/projectSpace/partProjectContent.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var partProjectContent = ({
  data: function data() {
    return {
      indexLink: '2',
      empty: false,
      partProject: [],
      dialogVisible: false,
      dialogSingle: false,
      loading: true,
      projectName: '',
      projectStatus: '1',
      timeValue: '',
      readonly: false,
      num: 11,
      options: [{
        value: '1',
        label: '开发中'
      }, {
        value: '2',
        label: '已归档'
      }],
      selectSelection: [],
      tableData: [],
      indexes: ''
    };
  },
  created: function created() {
    // console.log(this.$store.state.projectSpace.get)
    // 请求项目空间数据，函数调用
    this.getProjectSpaceData();
    // 请求项目状态数据，函数调用
    this.getProjectStatus();
  },
  mounted: function mounted() {},

  methods: {
    getProjectStatus: function getProjectStatus() {
      var _this = this;

      // 请求项目状态数据；
      var error = this.$t('views.projectContent.requestError');
      this.$get('/project-space/project-status').then(function (res) {
        if (res.isOk === false) {
          _this.$message({
            showClose: true,
            message: error,
            type: 'error'
          });
        } else {
          // console.log(JSON.stringify(res))
          // this.options = res.data.project_status
        }
      });
    },
    getProjectSpaceData: function getProjectSpaceData() {
      var _this2 = this;

      // 请求项目空间数据
      var error = this.$t('views.projectContent.requestError');
      var obj = {
        project_name: 'Timothy',
        start_time: '2003-01-30',
        state: '开发中',
        end_time: '1985-43-30',
        current_page: 1
      };
      this.$get('/project-space/project-list', obj).then(function (res) {
        if (res.isOk === false) {
          _this2.$message({
            showClose: true,
            message: error,
            type: 'error'
          });
        } else {
          _this2.loading = false;
          if (res.data.project_space.length === 0) {
            _this2.empty = false;
          } else {
            _this2.empty = true;
            // console.log(JSON.stringify(res))
            _this2.tableData = res.data.project_space;
          }
        }
      });
    },
    indexMethod: function indexMethod(index) {
      return index + 1;
    },
    rowClass: function rowClass(_ref) {
      var row = _ref.row,
          rowIndex = _ref.rowIndex;

      return 'table-header';
    },
    toggleSelection: function toggleSelection(rows) {
      var _this3 = this;

      if (rows) {
        rows.forEach(function (row) {
          _this3.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange: function handleSelectionChange(val) {
      // 选中的函数
      // console.log(val)
      this.selectSelection = val;
    },
    handleEdit: function handleEdit(index, row) {
      console.log(index, row);
    },
    spaceDelete: function spaceDelete(index, row) {
      console.log(row);
      if (row) {
        this.dialogSingle = true;
        this.indexes = index;
      } else {
        this.$message({
          showClose: true,
          message: '请选择需要选中的内容',
          type: 'warning'
        });
      }
    },
    openDialogTable: function openDialogTable() {
      // 打开删除对话框
      if (this.selectSelection.length === 0) {
        this.$message({
          showClose: true,
          message: '请选择需要选中的内容',
          type: 'warning'
        });
      } else {
        this.dialogVisible = true;
      }
    },
    deleteDialogTable: function deleteDialogTable() {
      // 删除多选函数
      var select = this.selectSelection;
      var table = this.tableData;
      // console.log(table.length)
      this.tableData = Object(util["e" /* uniqueObj */])(table, select);
      // console.log(JSON.stringify(this.tableData))
      this.dialogVisible = false;
    },
    deleteDialogSingle: function deleteDialogSingle() {
      // 删除单个行
      var i = this.indexes;
      this.tableData.splice(i, 1);
      this.dialogSingle = false;
    },
    handleClose: function handleClose(done) {
      this.dialogVisible = false;
      this.dialogSingle = false;
    },
    handleSizeChange: function handleSizeChange(val) {
      console.log(val);
    },
    projectCurrentChange: function projectCurrentChange(val) {
      console.log(val);
    },
    clickActive: function clickActive() {
      var activeIndex = 1 + '';
      window.localStorage.setItem('activeIndex', activeIndex);
    }
  },
  components: { ViewsProjectLink: projectLink["a" /* default */] },
  computed: {},
  watch: {
    timeValue: function timeValue(newVal, oldVal) {
      console.log(newVal);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2a86f67f","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/projectSpace/partProjectContent.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('views-project-link',{attrs:{"index":_vm.indexLink}}),_vm._v(" "),(_vm.empty)?_c('div',{staticClass:"views-project-space"},[_c('div',{staticClass:"tab-select"},[_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t('views.projectContent.projectName')))]),_vm._v(" "),_c('el-input',{staticClass:"views-input-text",attrs:{"placeholder":'存储空间名称'},model:{value:(_vm.projectName),callback:function ($$v) {_vm.projectName=$$v},expression:"projectName"}})],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t('views.projectContent.projectStatus')))]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.projectStatus),callback:function ($$v) {_vm.projectStatus=$$v},expression:"projectStatus"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t('views.table.createTime')))]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","editable":false,"range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":_vm.$t('views.button.startDate'),"end-placeholder":_vm.$t('views.button.endDate')},model:{value:(_vm.timeValue),callback:function ($$v) {_vm.timeValue=$$v},expression:"timeValue"}})],1),_vm._v(" "),_c('div',[_c('button',{on:{"click":function($event){_vm.clearSearch('tableData')}}},[_vm._v(_vm._s(_vm.$t("views.button.reset")))]),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.doSearch('tableData')}}},[_vm._v(_vm._s(_vm.$t("views.button.search")))])])]),_vm._v(" "),_c('div',{staticClass:"views-table-content"},[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"multipleTable",staticClass:"tab-content",staticStyle:{"width":"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)","data":_vm.tableData,"tooltip-effect":"dark","border":""},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"width":"55","type":"selection","header-align":"center","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.projectContent.serial'),"width":"55","type":"index","index":_vm.indexMethod,"header-align":"center","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.projectContent.projectName'),"width":"130","header-align":"center","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{on:{"click":_vm.clickActive}},[_c('router-link',{staticClass:"views-table-link",attrs:{"to":{name:'partDevelopContent',params:{partdevID:scope.row.project_id}},"tag":"a"}},[_vm._v(_vm._s(scope.row.project_name))])],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.development.status'),"width":"130","header-align":"center","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{staticStyle:{"text-align":"left"}},[(scope.row.project_status.value==1)?_c('i',{staticClass:"iconfont icon-kaifa views-icon-kaifa"}):_vm._e(),_vm._v(" "),(scope.row.project_status.value==2)?_c('i',{staticClass:"iconfont icon-yiguidang views-icon-yiguidang"}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(scope.row.project_status.label))])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":_vm.$t('views.projectContent.createdTime'),"width":"120","header-align":"center","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"project_description","label":_vm.$t('views.projectContent.description'),"show-overflow-tooltip":"","header-align":"center","align":"center","width":"200"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.projectContent.documentation'),"header-align":"center","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{staticClass:"views-project-file"},[_vm._v(_vm._s(scope.row.project_file))])]}}])}),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v("您查询的结果为空")])])])],1),_vm._v(" "),_c('div',{staticClass:"views-page"},[_c('el-pagination',{attrs:{"page-size":10,"pager-count":_vm.num,"layout":"prev, pager, next","total":100},on:{"current-change":_vm.projectCurrentChange}})],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"删除项目","visible":_vm.dialogVisible,"width":"30%","before-close":_vm.handleClose,"top":"30vh"},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('span',[_vm._v("确定删除所选中的项目")]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.deleteDialogTable}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"删除项目","visible":_vm.dialogSingle,"width":"30%","before-close":_vm.handleClose,"top":"30vh"},on:{"update:visible":function($event){_vm.dialogSingle=$event}}},[_c('span',[_vm._v("确定删除所选中的项目")]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogSingle = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.deleteDialogSingle}},[_vm._v("确 定")])],1)])],1):_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-img"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v("您暂时还未有参与到的项目")])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var projectSpace_partProjectContent = (esExports);
// CONCATENATED MODULE: ./src/views/projectSpace/partProjectContent.vue
function injectStyle (ssrContext) {
  __webpack_require__("V1/P")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2a86f67f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  partProjectContent,
  projectSpace_partProjectContent,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_projectSpace_partProjectContent = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "V1/P":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("o+lv");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6068abc1", content, true, {});

/***/ }),

/***/ "i09R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/projectSpace/projectLink.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var projectLink = ({
  data: function data() {
    return {
      activeIndex: '1'
    };
  },
  created: function created() {},
  mounted: function mounted() {},

  methods: {
    handleSelect: function handleSelect(key, keyPath) {
      var activeIndex = key + '';
      window.localStorage.setItem('activeIndex', activeIndex);
    }
  },
  props: ['index'],
  watch: {
    index: function name(newVal, oldVal) {
      this.clickLink(newVal);
    }
  },
  components: {},
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-019c8404","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/projectSpace/projectLink.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-development"},[_c('el-menu',{staticClass:"el-menu-demo",attrs:{"default-active":_vm.index,"mode":"horizontal"},on:{"select":_vm.handleSelect}},[_c('el-menu-item',{attrs:{"index":"1"}},[_c('router-link',{attrs:{"to":{name:'spaceContent'},"tag":"a"}},[_vm._v("\n                "+_vm._s(_vm.$t('views.projectContent.myProject'))+"\n            ")])],1),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"2"}},[_c('router-link',{attrs:{"to":{name:'partSpaceContent'},"tag":"a"}},[_vm._v("\n                "+_vm._s(_vm.$t('views.projectContent.partPorject'))+"\n            ")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var projectSpace_projectLink = (esExports);
// CONCATENATED MODULE: ./src/views/projectSpace/projectLink.vue
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
  projectLink,
  projectSpace_projectLink,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_projectSpace_projectLink = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "o+lv":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ })

});