webpackJsonp([34],{

/***/ "aNnn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/projectSpace/partTrainingTask.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var partTrainingTask = ({
  data: function data() {
    return {
      linkIndex: '',
      trainingName: '',
      timeValue: '',
      taskStatus: '',
      engineType: '',
      trainingTask: [],
      num: 11,
      options: [{
        value: 1,
        label: '已停止'
      }, {
        value: 2,
        label: '运行中'
      }, {
        value: 3,
        label: '运行失败'
      }]
    };
  },
  created: function created() {
    this.getTraingTaskData();
  },
  mounted: function mounted() {
    this.linkIndex = 1;
  },

  methods: {
    handleSelectionChange: function handleSelectionChange(val) {},
    trainingIndex: function trainingIndex(index) {
      return index + 1;
    },
    getTraingTaskData: function getTraingTaskData() {
      var _this = this;

      var error = this.$t('views.projectContent.requestError');
      this.$get('project-space/training-task').then(function (res) {
        if (res.isOk === false) {
          _this.$message({
            showClose: true,
            message: error,
            type: 'error'
          });
        } else {
          // console.log(JSON.stringify(res))
          _this.trainingTask = res.data.training_task;
        }
      });
    },
    taskCurrentChange: function taskCurrentChange(val) {
      console.log(val);
    },
    creatTraining: function creatTraining() {
      this.$router.push({ name: 'partCreateTraningTask' });
    }
  },
  components: {},
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e8e1f4d6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/projectSpace/partTrainingTask.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"views-input-box"},[_c('div',{staticClass:"views-box"},[_c('span',{staticClass:"views-text-name"},[_vm._v(_vm._s(_vm.$t('views.trainingTask.trainingName'))+"：")]),_vm._v(" "),_c('el-input',{staticClass:"views-input-text",attrs:{"placeholder":_vm.$t('views.projectContent.enterContent')},model:{value:(_vm.trainingName),callback:function ($$v) {_vm.trainingName=$$v},expression:"trainingName"}}),_vm._v(" "),_c('span',{staticClass:"views-margin"},[_vm._v(_vm._s(_vm.$t('views.projectContent.createdTime'))+"：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","range-separator":"——","start-placeholder":_vm.$t('views.projectContent.startDate'),"end-placeholder":_vm.$t('views.projectContent.endDate')},model:{value:(_vm.timeValue),callback:function ($$v) {_vm.timeValue=$$v},expression:"timeValue"}}),_vm._v(" "),_c('span',{staticClass:"views-margin"},[_vm._v(_vm._s(_vm.$t('views.development.status'))+"：")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.taskStatus),callback:function ($$v) {_vm.taskStatus=$$v},expression:"taskStatus"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('div',{staticClass:"views-box"},[_c('span',{staticClass:"views-text-name"},[_vm._v(_vm._s(_vm.$t('views.trainingTask.engineType'))+"：")]),_vm._v(" "),_c('el-input',{staticClass:"views-input-text",attrs:{"placeholder":_vm.$t('views.projectContent.enterContent')},model:{value:(_vm.engineType),callback:function ($$v) {_vm.engineType=$$v},expression:"engineType"}}),_vm._v(" "),_c('el-button',{staticClass:"views-button views-margin-btn"},[_vm._v(_vm._s(_vm.$t('views.projectContent.reset')))]),_vm._v(" "),_c('el-button',{staticClass:"views-button"},[_vm._v(_vm._s(_vm.$t('views.projectContent.query')))])],1)]),_vm._v(" "),_c('div',{staticClass:"views-table-btn"},[_c('el-button',{staticClass:"views-button",attrs:{"type":"primary"},on:{"click":_vm.creatTraining}},[_vm._v(_vm._s(_vm.$t('views.trainingTask.createtask')))])],1),_vm._v(" "),_c('div',{staticClass:"views-table-content"},[_c('el-table',{ref:"multipleTable",staticClass:"tab-content",staticStyle:{"width":"100%"},attrs:{"data":_vm.trainingTask,"tooltip-effect":"dark","border":""},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"label":_vm.$t('views.projectContent.serial'),"width":"55","type":"index","index":_vm.trainingIndex,"header-align":"center","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.trainingTask.trainingNameID'),"width":"130","header-align":"center","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('router-link',{staticClass:"views-table-link",attrs:{"to":{name:'partTraningDetails',params:{partTaskId:scope.row.task_id}},"tag":"a"}},[_vm._v(_vm._s(scope.row.task_name))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.development.status'),"width":"120","header-align":"center","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{staticStyle:{"text-align":"left"}},[(scope.row.task_status.value==1)?_c('i',{staticClass:"iconfont icon-stop views-icon-stop"}):_vm._e(),_vm._v(" "),(scope.row.task_status.value==2)?_c('i',{staticClass:"iconfont icon-yunhangzhong views-icon-yunhangzhong"}):_vm._e(),_vm._v(" "),(scope.row.task_status.value==3)?_c('i',{staticClass:"iconfont icon-warning views-icon-warning"}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(scope.row.task_status.label))])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"engine_type","label":_vm.$t('views.trainingTask.engineType'),"width":"110","header-align":"center","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":_vm.$t('views.projectContent.createdTime'),"width":"180","header-align":"center","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"run_time","label":_vm.$t('views.trainingTask.runningTime'),"header-align":"center","align":"center","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"remarks","label":_vm.$t('views.development.remarks'),"show-overflow-tooltip":"","header-align":"center","align":"center","width":"200"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"startup_file","label":_vm.$t('views.trainingTask.startFile'),"show-overflow-tooltip":"","header-align":"center","align":"center","width":"120"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.projectContent.operation'),"header-align":"center","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.task_status.value===2)?_c('span',{staticClass:"views-table-span views-table-margin",attrs:{"size":"mini"}},[_vm._v(_vm._s(_vm.$t('views.development.mirrorImage')))]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"views-table-span views-table-margin",attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.devDelete(scope.$index, scope.row)}}},[_vm._v(_vm._s(_vm.$t('views.projectContent.delete')))])]}}])}),_vm._v(";\n        ")],1),_vm._v(" "),_c('div',{staticClass:"views-page"},[_c('el-pagination',{attrs:{"page-size":10,"pager-count":_vm.num,"layout":"prev, pager, next","total":100},on:{"current-change":_vm.taskCurrentChange}})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var projectSpace_partTrainingTask = (esExports);
// CONCATENATED MODULE: ./src/views/projectSpace/partTrainingTask.vue
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
  partTrainingTask,
  projectSpace_partTrainingTask,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_projectSpace_partTrainingTask = __webpack_exports__["default"] = (Component.exports);


/***/ })

});