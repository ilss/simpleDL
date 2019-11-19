webpackJsonp([13],{

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

/***/ "mMuX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./src/views/projectSpace/projectLink.vue + 2 modules
var projectLink = __webpack_require__("i09R");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/projectSpace/projectContent.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var projectContent = ({
  data: function data() {
    return {
      indexLink: '1',
      empty: false,
      fileDialog: false,
      createDialog: false,
      loading: true,
      projectName: '',
      createName: '',
      textarea: '',
      projectStatus: '1',
      timeValue: '',
      readonly: false,
      project_id: '',
      num: 11,
      options: [{
        value: '1',
        label: '开发中'
      }, {
        value: '2',
        label: '已归档'
      }],
      archived: [],
      tableData: [],
      indexes: '',
      archived_project: []
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
      this.$get('/participat-projects/project-list', obj).then(function (res) {
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
      this.archived = val;
    },
    openFile: function openFile() {
      this.archived_project = [];
      if (this.archived.length === 0) {
        this.$message({
          showClose: true,
          message: '请选择需要归档的项目',
          type: 'warning'
        });
      } else {
        var that = this;
        this.archived.forEach(function (val, index) {
          var value = val.project_status.value;
          if (value === 1) {
            that.archived_project.push(value);
          }
        });
        if (this.archived_project.length === 0) {
          this.$message({
            showClose: true,
            message: '请选择需要归档的项目',
            type: 'warning'
          });
        } else {
          this.fileDialog = true;
        }
      }
    },

    // 打开项目归档对话框
    fileClick: function fileClick(id) {
      this.project_id = id;
      this.archived_project = [];
      this.archived_project.push(id);
      this.fileDialog = true;
    },

    // 确定归档
    fileDialogSingle: function fileDialogSingle() {
      var _this4 = this;

      var error = this.$t('views.projectContent.requestError');
      var obj = this.archived_project;
      this.$post('/project-space/archived-project', obj).then(function (res) {
        if (res.isOk === false) {
          _this4.$message({
            showClose: true,
            message: error,
            type: 'error'
          });
        } else {
          console.log(stringify_default()(res));
          var msg = res.msg;
          _this4.$message({
            showClose: true,
            message: msg,
            type: 'success'
          });
        }
      });
      this.fileDialog = false;
    },

    // 打开新建项目对话框
    createDialogTable: function createDialogTable() {
      this.createDialog = false;
    },
    openProject: function openProject() {
      this.createDialog = true;
    },

    // 关闭对话框
    handleClose: function handleClose(done) {
      done();
    },
    handleSizeChange: function handleSizeChange(val) {
      console.log(val);
    },
    projectCurrentChange: function projectCurrentChange(val) {
      console.log(val);
    },
    indexActive: function indexActive() {
      var activeIndex = '1';
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3632aca6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/projectSpace/projectContent.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('views-project-link',{attrs:{"index":_vm.indexLink}}),_vm._v(" "),(_vm.empty)?_c('div',{staticClass:"views-project-space"},[_c('div',{staticClass:"tab-select"},[_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t('views.projectContent.projectName')))]),_vm._v(" "),_c('el-input',{staticClass:"views-input-text",attrs:{"placeholder":'存储空间名称'},model:{value:(_vm.projectName),callback:function ($$v) {_vm.projectName=$$v},expression:"projectName"}})],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t('views.projectContent.projectStatus')))]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.projectStatus),callback:function ($$v) {_vm.projectStatus=$$v},expression:"projectStatus"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t('views.table.createTime')))]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","editable":false,"range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":_vm.$t('views.button.startDate'),"end-placeholder":_vm.$t('views.button.endDate')},model:{value:(_vm.timeValue),callback:function ($$v) {_vm.timeValue=$$v},expression:"timeValue"}})],1),_vm._v(" "),_c('div',[_c('button',{on:{"click":function($event){_vm.clearSearch('tableData')}}},[_vm._v(_vm._s(_vm.$t("views.button.reset")))]),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.doSearch('tableData')}}},[_vm._v(_vm._s(_vm.$t("views.button.search")))])])]),_vm._v(" "),_c('div',{staticClass:"views-table-project"},[_c('el-button',{staticClass:"views-button",attrs:{"type":"primary"},on:{"click":_vm.openProject}},[_vm._v(_vm._s(_vm.$t('views.projectContent.createdProject')))]),_vm._v(" "),_c('el-button',{staticClass:"views-button",attrs:{"type":"primary"},on:{"click":_vm.openFile}},[_vm._v(_vm._s(_vm.$t('views.projectContent.archivedItems')))])],1),_vm._v(" "),_c('div',{staticClass:"views-table-content"},[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"multipleTable",staticClass:"tab-content",staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"tooltip-effect":"dark","border":""},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"width":"55","type":"selection","header-align":"center","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.projectContent.serial'),"width":"55","type":"index","index":_vm.indexMethod,"header-align":"center","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.projectContent.projectName'),"width":"130","header-align":"center","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{on:{"click":_vm.indexActive}},[_c('router-link',{staticClass:"views-table-link",attrs:{"to":{name:'development',params:{id:scope.row.project_id}},"tag":"a"}},[_vm._v(_vm._s(scope.row.project_name))])],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.development.status'),"width":"130","header-align":"center","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{staticStyle:{"text-align":"left"}},[(scope.row.project_status.value==1)?_c('i',{staticClass:"iconfont icon-kaifa views-icon-kaifa"}):_vm._e(),_vm._v(" "),(scope.row.project_status.value==2)?_c('i',{staticClass:"iconfont icon-yiguidang views-icon-yiguidang"}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(scope.row.project_status.label))])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":_vm.$t('views.projectContent.createdTime'),"width":"120","header-align":"center","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"project_description","label":_vm.$t('views.projectContent.description'),"show-overflow-tooltip":"","header-align":"center","align":"center","width":"200"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.projectContent.documentation'),"width":"200","header-align":"center","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{staticClass:"views-project-file"},[_vm._v(_vm._s(scope.row.project_file))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.projectContent.operation'),"header-align":"center","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.project_status.value===1)?_c('div',[_c('router-link',{staticClass:"views-table-span views-table-margin",attrs:{"size":"mini","to":{name:'projectSetting',params:{idSet:scope.row.project_id}}}},[_vm._v(_vm._s(_vm.$t('views.projectContent.archival')))]),_vm._v(" "),_c('span',{staticClass:"views-table-span views-table-margin",attrs:{"size":"mini"},on:{"click":function($event){_vm.fileClick(scope.row.project_id)}}},[_vm._v(_vm._s(_vm.$t('views.projectContent.file')))])],1):_c('div',[_c('span',[_vm._v("—— ——")])])]}}])}),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])])],1),_vm._v(" "),_c('div',{staticClass:"views-page"},[_c('el-pagination',{attrs:{"page-size":10,"pager-count":_vm.num,"layout":"prev, pager, next","total":100},on:{"current-change":_vm.projectCurrentChange}})],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"提示","visible":_vm.fileDialog,"width":"30%","before-close":_vm.handleClose,"top":"30vh"},on:{"update:visible":function($event){_vm.fileDialog=$event}}},[_c('span',[_vm._v("是否将已选项目归档？")]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.fileDialog = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.fileDialogSingle}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"新建项目","visible":_vm.createDialog,"width":"30%","before-close":_vm.handleClose,"top":"30vh"},on:{"update:visible":function($event){_vm.createDialog=$event}}},[_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-task-input"},[_c('span',{staticClass:"views-project-setting"},[_vm._v("项目名称  ")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.createName),callback:function ($$v) {_vm.createName=$$v},expression:"createName"}})],1),_vm._v(" "),_c('div',{staticClass:"views-task-image"},[_c('span',{staticClass:"views-project-setting views-span"},[_vm._v("项目描述   ")]),_vm._v(" "),_c('el-input',{attrs:{"type":"textarea","rows":6,"placeholder":_vm.$t('views.projectContent.enterContent')},model:{value:(_vm.textarea),callback:function ($$v) {_vm.textarea=$$v},expression:"textarea"}})],1)]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.createDialog = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.createDialogTable}},[_vm._v("确 定")])],1)])],1):_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-img"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var projectSpace_projectContent = (esExports);
// CONCATENATED MODULE: ./src/views/projectSpace/projectContent.vue
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
  projectContent,
  projectSpace_projectContent,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_projectSpace_projectContent = __webpack_exports__["default"] = (Component.exports);


/***/ })

});