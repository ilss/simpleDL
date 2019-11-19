webpackJsonp([55],{

/***/ "XeOp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/views/personalSpace/personalContent.vue + 2 modules
var personalContent = __webpack_require__("72WN");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/personalSpace/development.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var development = ({
  data: function data() {
    return {
      developmentName: '',
      readonly: false,
      devStatus: '',
      devValue: '',
      linkIndex: '',
      timeValue: '',
      num: 11,
      options: [{
        value: 1,
        label: '已关闭'
      }, {
        value: 2,
        label: '运行中'
      }, {
        value: 3,
        label: '已删除'
      }],
      devData: [],
      dialogDev: false,
      indexes: ''
    };
  },
  created: function created() {
    this.getDevelopmentData();
    // this.$store.dispatch('getDevelopment')
  },
  mounted: function mounted() {
    this.linkIndex = 0;
  },

  watch: {},
  methods: {
    getDevelopmentData: function getDevelopmentData() {
      var _this = this;

      // console.log(this.$route.params.id)
      var error = this.$t('views.projectContent.requestError');
      this.$get('/project-space/development-list', error).then(function (res) {
        if (res.isOk === false) {
          _this.$message({
            showClose: true,
            message: error,
            type: 'error'
          });
        } else {
          // console.log(JSON.stringify(res))
          _this.devData = res.data.project_develop;
        }
      });
    },
    handleSelectionChange: function handleSelectionChange(val) {},
    devIndex: function devIndex(index) {
      return index + 1;
    },
    devDelete: function devDelete(index, row) {
      // 打开删除弹出框
      console.log(row);
      if (row) {
        this.dialogDev = true;
        this.indexes = index;
      } else {
        this.$message({
          showClose: true,
          message: '请选择需要选中的内容',
          type: 'warning'
        });
      }
    },
    deleteDialogSingle: function deleteDialogSingle() {
      // 删除单个行
      var i = this.indexes;
      this.devData.splice(i, 1);
      this.dialogDev = false;
    },
    handleClose: function handleClose(done) {
      this.dialogDev = false;
    },
    creatDevelop: function creatDevelop() {
      this.$router.push({ name: 'perCreateDevelop' });
    },
    devCurrentChange: function devCurrentChange(val) {
      console.log(val);
    }
  },
  components: { ViewsPersonalContent: personalContent["a" /* default */] },
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6223b2e2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/personalSpace/development.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('views-personal-content'),_vm._v(" "),_c('div',{staticClass:"views-project-space"},[_c('div',{staticClass:"views-input-box"},[_c('div',{staticClass:"views-box"},[_c('span',{staticClass:"views-text-name"},[_vm._v(_vm._s(_vm.$t('views.development.developmentName'))+"：")]),_vm._v(" "),_c('el-input',{staticClass:"views-input-text",attrs:{"placeholder":_vm.$t('views.projectContent.enterContent')},model:{value:(_vm.developmentName),callback:function ($$v) {_vm.developmentName=$$v},expression:"developmentName"}}),_vm._v(" "),_c('span',{staticClass:"views-margin"},[_vm._v(_vm._s(_vm.$t('views.projectContent.createdTime'))+"：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","range-separator":"——","start-placeholder":_vm.$t('views.projectContent.startDate'),"end-placeholder":_vm.$t('views.projectContent.endDate')},model:{value:(_vm.timeValue),callback:function ($$v) {_vm.timeValue=$$v},expression:"timeValue"}}),_vm._v(" "),_c('span',{staticClass:"views-margin"},[_vm._v(_vm._s(_vm.$t('views.development.status'))+"：")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.devStatus),callback:function ($$v) {_vm.devStatus=$$v},expression:"devStatus"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('div',{staticClass:"views-box"},[_c('span',{staticClass:"views-text-name"},[_vm._v(_vm._s(_vm.$t('views.development.mirror'))+"：")]),_vm._v(" "),_c('el-input',{staticClass:"views-input-text",attrs:{"placeholder":_vm.$t('views.projectContent.enterContent')},model:{value:(_vm.developmentName),callback:function ($$v) {_vm.developmentName=$$v},expression:"developmentName"}}),_vm._v(" "),_c('el-button',{staticClass:"views-btn-query views-margin-btn"},[_vm._v(_vm._s(_vm.$t('views.projectContent.reset')))]),_vm._v(" "),_c('el-button',{staticClass:"views-btn-query"},[_vm._v(_vm._s(_vm.$t('views.projectContent.query')))])],1)]),_vm._v(" "),_c('div',{staticClass:"views-table-btn"},[_c('el-button',{staticClass:"view-btn-medium",attrs:{"type":"primary"},on:{"click":_vm.creatDevelop}},[_vm._v(_vm._s(_vm.$t('views.development.createdDev')))])],1),_vm._v(" "),_c('div',{staticClass:"views-table-content"},[_c('el-table',{ref:"multipleTable",staticClass:"tab-content",staticStyle:{"width":"100%"},attrs:{"data":_vm.devData,"tooltip-effect":"dark","border":""},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"label":_vm.$t('views.projectContent.serial'),"width":"55","type":"index","index":_vm.devIndex,"header-align":"center","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.development.developmentNameID'),"width":"180","header-align":"center","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('router-link',{staticClass:"views-table-link",attrs:{"to":{name:'perDevelopDetails',params:{perDevelopId:scope.row.develop_id}},"tag":"a"}},[_vm._v(_vm._s(scope.row.develop_name))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.development.status'),"width":"120","header-align":"center","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{staticStyle:{"text-align":"left"}},[(scope.row.develop_status.value==1)?_c('i',{staticClass:"iconfont icon-yiguanbi views-icon-yiguanbi"}):_vm._e(),_vm._v(" "),(scope.row.develop_status.value==2)?_c('i',{staticClass:"iconfont icon-yunhangzhong views-icon-yunhangzhong"}):_vm._e(),_vm._v(" "),(scope.row.develop_status.value==3)?_c('i',{staticClass:"iconfont icon-shanchu views-icon-shanchu"}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(scope.row.develop_status.label))])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"image_name","label":_vm.$t('views.development.mirror'),"width":"110","header-align":"center","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":_vm.$t('views.projectContent.createdTime'),"width":"180","header-align":"center","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"cpu_card","label":_vm.$t('views.development.card'),"header-align":"center","align":"center","width":"80"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"remarks","label":_vm.$t('views.development.remarks'),"show-overflow-tooltip":"","header-align":"center","align":"center","width":"200"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.projectContent.operation'),"header-align":"center","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.develop_status.value===2)?_c('span',{staticClass:"views-table-span views-table-margin",attrs:{"size":"mini"}},[_vm._v(_vm._s(_vm.$t('views.development.mirrorImage')))]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"views-table-span views-table-margin",attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.devDelete(scope.$index, scope.row)}}},[_vm._v(_vm._s(_vm.$t('views.projectContent.delete')))])]}}])}),_vm._v(";\n            ")],1),_vm._v(" "),_c('div',{staticClass:"views-page"},[_c('el-pagination',{attrs:{"page-size":10,"pager-count":_vm.num,"layout":"prev, pager, next","total":100},on:{"current-change":_vm.devCurrentChange}})],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"删除项目","visible":_vm.dialogDev,"width":"30%","before-close":_vm.handleClose,"top":"30vh"},on:{"update:visible":function($event){_vm.dialogDev=$event}}},[_c('span',[_vm._v("确定删除所选中的项目")]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogDev = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.deleteDialogSingle}},[_vm._v("确 定")])],1)])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var personalSpace_development = (esExports);
// CONCATENATED MODULE: ./src/views/personalSpace/development.vue
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
  development,
  personalSpace_development,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_personalSpace_development = __webpack_exports__["default"] = (Component.exports);


/***/ })

});