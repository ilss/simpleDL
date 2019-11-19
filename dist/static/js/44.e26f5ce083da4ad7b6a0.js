webpackJsonp([44],{

/***/ "ZT7O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/projectSpace/modelDetails.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var modelDetails = ({
  data: function data() {
    return {
      index: '',
      editDisabled: true,
      dialogModel: false,
      remarksDialog: false,
      modelBasic: '',
      modelarea: '',
      modelName: '',
      journal: '',
      opData: [{
        value: '1000',
        label: '过去一周'
      }, {
        value: '2000',
        label: '过去一天'
      }, {
        value: '3000',
        label: '过去一小时'
      }],
      value: ''
    };
  },
  created: function created() {
    this.index = this.$route.params.idModel;
    console.log(this.$route.params);
    // 获取模型预测详情函数调用
    this.getModelDetails();
  },
  mounted: function mounted() {},

  methods: {
    // 获取模型预测详情
    getModelDetails: function getModelDetails() {
      var _this = this;

      // console.log(this.$route.params.id)
      var error = this.$t('views.projectContent.requestError');
      this.$get('/personal-space/model-details', error).then(function (res) {
        if (res.isOk === false) {
          _this.$message({
            showClose: true,
            message: error,
            type: 'error'
          });
        } else {
          console.log(stringify_default()(res.data));
          // 基本信息
          _this.modelBasic = res.data.basic_inf;
          // 环境名称
          _this.modelName = _this.modelBasic.model_name;
          // 备注信息
          _this.modelarea = res.data.remarks;
          // 训练日志
          _this.journal = res.data.forecast_log;
          // 资源数据监控
          // this.trainingDetails = res.data.resources_monitor
        }
      });
    },

    // 打开修改作业名称编辑框
    modelEdit: function modelEdit() {
      this.dialogModel = true;
    },
    handleClose: function handleClose(done) {
      done();
    },
    changeDialogSingle: function changeDialogSingle() {
      this.dialogModel = false;
    },

    // 打开修改备注的弹出框
    remarksEdit: function remarksEdit() {
      this.remarksDialog = true;
    },
    remarksDialogSingle: function remarksDialogSingle() {
      this.remarksDialog = false;
    },
    changeLogModel: function changeLogModel() {}
  },
  components: {},
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1862c717","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/projectSpace/modelDetails.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-personal"},[_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v(_vm._s(_vm.$t('views.modelPrediction.basicInf')))])]),_vm._v(" "),(_vm.modelBasic !== '')?_c('table',{staticClass:"views-project-details views-tabel-details"},[_c('tr',[_c('td',{staticClass:"views-basic-color1"},[_vm._v("任务名称")]),_vm._v(" "),_c('td',{staticClass:"views-basic-name"},[_c('el-input',{attrs:{"placeholder":"","disabled":_vm.editDisabled},model:{value:(_vm.modelName),callback:function ($$v) {_vm.modelName=$$v},expression:"modelName"}}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-edit views-icon-edit",on:{"click":_vm.modelEdit}})],1),_vm._v(" "),_c('td',{staticClass:"views-basic-color1"},[_vm._v("作业状态")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.modelBasic.model_status.label))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"views-basic-color2"},[_vm._v("引擎类型")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3"},[_vm._v(_vm._s(_vm.modelBasic.engine_type))]),_vm._v(" "),_c('td',{staticClass:"views-basic-color2"},[_vm._v("ID")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3"},[_vm._v(_vm._s(_vm.modelBasic.model_id))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"views-basic-color1"},[_vm._v("创建时间")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.modelBasic.create_time))]),_vm._v(" "),_c('td',{staticClass:"views-basic-color1"},[_vm._v("运行时长")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.modelBasic.run_time))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"views-basic-color2"},[_vm._v("计算节点规格")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3"},[_vm._v(_vm._s(_vm.modelBasic.node_spec))]),_vm._v(" "),_c('td',{staticClass:"views-basic-color2"},[_vm._v("使用模型")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3"},[_vm._v(_vm._s(_vm.modelBasic.model_use))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"views-basic-color1"},[_vm._v("接口类型")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.modelBasic.interface_type))]),_vm._v(" "),_c('td',{staticClass:"views-basic-color1"},[_vm._v("计算节点个数")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.modelBasic.node_num))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"views-basic-color2"},[_vm._v("作业参数")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3"},[_vm._v(_vm._s(_vm.modelBasic.model_params))]),_vm._v(" "),_c('td',{staticClass:"views-basic-color2"},[_vm._v("服务地址")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3"},[_vm._v(_vm._s(_vm.modelBasic.server_address))])])]):_vm._e(),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"views-develop-remarks"},[_c('div',{staticClass:"views-develop-edit"},[_c('i',{staticClass:"iconfont icon-edit views-icon-edit",on:{"click":_vm.remarksEdit}})]),_vm._v(" "),_c('el-input',{attrs:{"type":"textarea","rows":8,"placeholder":"请输入内容","disabled":_vm.editDisabled},model:{value:(_vm.modelarea),callback:function ($$v) {_vm.modelarea=$$v},expression:"modelarea"}})],1),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"views-task-news"},[_c('div',{staticClass:"views-task-select"},[_c('el-select',{ref:"changeFocus",attrs:{"placeholder":"请选择"},on:{"change":_vm.changeLogModel},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium",attrs:{"type":"primary"}},[_vm._v("最新日志")])],1)]),_vm._v(" "),_c('p',{staticClass:"views-task-text"},[_vm._v("在运行日志内使用鼠标上下滚动获取更多的日志")]),_vm._v(" "),_c('div',{staticClass:"views-task-log"},[_c('el-scrollbar',{staticStyle:{"height":"100%"}},[_c('div',{staticClass:"veiws-text-log"},[_vm._v("\n                "+_vm._s(_vm.journal)+"\n            ")])])],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('el-dialog',{attrs:{"title":"修改作业名称","visible":_vm.dialogModel,"width":"30%","before-close":_vm.handleClose,"top":"30vh","custom-class":"views-dialog"},on:{"update:visible":function($event){_vm.dialogModel=$event}}},[_c('div',{staticClass:"views-dialog-develop"},[_c('span',{staticClass:"views-dialog-name"},[_vm._v("作业名称")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.modelName),callback:function ($$v) {_vm.modelName=$$v},expression:"modelName"}})],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"cancel",on:{"click":function($event){_vm.dialogModel = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{staticClass:"primary",attrs:{"type":"primary"},on:{"click":_vm.changeDialogSingle}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"修改备注信息","visible":_vm.remarksDialog,"width":"30%","before-close":_vm.handleClose,"top":"30vh","custom-class":"views-dialog"},on:{"update:visible":function($event){_vm.remarksDialog=$event}}},[_c('div',{staticClass:"views-dialog-develop"},[_c('span',{staticClass:"views-dialog-remarks"},[_vm._v("备注信息")]),_vm._v(" "),_c('el-input',{attrs:{"type":"textarea","rows":8,"placeholder":"请输入内容"},model:{value:(_vm.modelarea),callback:function ($$v) {_vm.modelarea=$$v},expression:"modelarea"}})],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"cancel",on:{"click":function($event){_vm.remarksDialog = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{staticClass:"primary",attrs:{"type":"primary"},on:{"click":_vm.remarksDialogSingle}},[_vm._v("确 定")])],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("备注信息")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("训练日志")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"views-task-text views-model-load"},[_vm._v("预测作业创建成功后，可下载、适配、运行样例代码发起预测请求，样例代码下载及使用说明点击\n        "),_c('a',{attrs:{"href":"#"}},[_vm._v("这里")]),_vm._v("下载")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var projectSpace_modelDetails = (esExports);
// CONCATENATED MODULE: ./src/views/projectSpace/modelDetails.vue
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
  modelDetails,
  projectSpace_modelDetails,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_projectSpace_modelDetails = __webpack_exports__["default"] = (Component.exports);


/***/ })

});