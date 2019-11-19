webpackJsonp([58],{

/***/ "uTbl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/personalSpace/createModel.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var createModel = ({
  data: function data() {
    return {
      input: '',
      textarea: '',
      options: [{
        value: 1,
        label: 'caffe'
      }, {
        value: 2,
        label: 'tensorflow'
      }],
      opData: [{
        value: '1000',
        label: '1000'
      }, {
        value: '2000',
        label: '2000'
      }, {
        value: '3000',
        label: '3000'
      }],
      ruleForm: {
        name: '',
        value: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        mirror: '',
        pass: '',
        checkPass: '',
        mounting: '',
        cpu: '',
        gpu: '',
        memory: '',
        useModel: '',
        task: ''
      },
      modelRules: {
        name: [{ required: true, message: '请输入环境名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        engine: [{ required: true, message: '请选择引擎类型', trigger: 'change' }],
        version: [{ required: true, message: '请选择版本信息', trigger: 'change' }],
        cpu: [{ required: true, message: 'CPU不能为空', trigger: 'change' }],
        gpu: [{ required: true, message: 'GPU不能为空', trigger: 'change' }],
        memory: [{ required: true, message: '内存不能为空', trigger: 'change' }],
        useModel: [{ required: true, message: '请选择使用的模型', trigger: 'change' }],
        task: [{ required: true, message: '请输入作业参数', trigger: 'change' }],
        desc: [{ message: '请填写活动形式', trigger: 'blur' }]
      },
      value: 1,
      value1: '1000'
    };
  },
  created: function created() {},
  mounted: function mounted() {},

  methods: {
    changeType: function changeType() {},
    creatDevelop: function creatDevelop() {},

    // 提交
    submitForm: function submitForm(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this.$message({ message: '保存成功', type: 'success' });
        } else {
          _this.$message({ message: '带*号为必填项', type: 'error' });
          return false;
        }
      });
    },

    // 取消
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  components: {},
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-04d4a242","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/personalSpace/createModel.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-personal"},[_c('el-form',{ref:"ruleForm",staticClass:"views-icon-ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.modelRules,"label-width":"100px"}},[_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v(_vm._s(_vm.$t('views.modelPrediction.basicInf')))])]),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-task-input"},[_c('el-form-item',{attrs:{"label":"作业名称","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"只能输入2-50个字符、字母、数字","clearable":""},model:{value:(_vm.ruleForm.name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "name", $$v)},expression:"ruleForm.name"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"views-task-image"},[_c('el-form-item',{attrs:{"label":_vm.$t('views.development.remarks'),"prop":"desc"}},[_c('el-input',{attrs:{"type":"textarea","rows":6,"placeholder":"请输入内容"},model:{value:(_vm.ruleForm.desc),callback:function ($$v) {_vm.$set(_vm.ruleForm, "desc", $$v)},expression:"ruleForm.desc"}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v(_vm._s(_vm.$t('views.modelPrediction.parameterConfig')))])]),_vm._v(" "),_c('div',{staticClass:"views-develop-inf views-model-image"},[_c('div',{staticClass:"views-task-input"},[_c('el-form-item',{attrs:{"label":"接口类型"}},[_c('span',[_vm._v("GRPC")])])],1),_vm._v(" "),_c('div',{staticClass:"views-develop-resources"},[_c('el-form-item',{attrs:{"label":_vm.$t('views.trainingTask.engineType'),"prop":"engine"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.ruleForm.engine),callback:function ($$v) {_vm.$set(_vm.ruleForm, "engine", $$v)},expression:"ruleForm.engine"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('views.trainingTask.versionInf'),"prop":"version"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.ruleForm.version),callback:function ($$v) {_vm.$set(_vm.ruleForm, "version", $$v)},expression:"ruleForm.version"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1)],1),_vm._v(" "),_c('div',{staticClass:"views-develop-image"},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","placement":"bottom-start"}},[_c('div',{attrs:{"slot":"content"},slot:"content"},[_vm._v("计算节点的帮助信息计算节点的帮助信息帮助信"),_c('br'),_vm._v("计算节点的帮助信息计算节点的帮助信息帮助信")]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-Group views-icon-group"})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('views.modelPrediction.useModel'),"prop":"useModel"}},[_c('div',{staticClass:"views-develop-choice"},[_c('el-input',{attrs:{"readonly":true},model:{value:(_vm.ruleForm.useModel),callback:function ($$v) {_vm.$set(_vm.ruleForm, "useModel", $$v)},expression:"ruleForm.useModel"}}),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium",attrs:{"type":"primary"}},[_vm._v("选择")])],1)])],1),_vm._v(" "),_c('div',{staticClass:"views-develop-image"},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","placement":"bottom-start"}},[_c('div',{attrs:{"slot":"content"},slot:"content"},[_vm._v("计算节点的帮助信息计算节点的帮助信息帮助信"),_c('br'),_vm._v("计算节点的帮助信息计算节点的帮助信息帮助信")]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-Group views-icon-group"})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('views.modelPrediction.jobParameter'),"prop":"task"}},[_c('div',{staticClass:"views-develop-choice"},[_c('el-input',{attrs:{"disabled":true},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}}),_vm._v(" "),_c('b',{staticClass:"views-task-sign"},[_vm._v("=")]),_vm._v(" "),_c('el-input',{attrs:{"readonly":true},model:{value:(_vm.ruleForm.task),callback:function ($$v) {_vm.$set(_vm.ruleForm, "task", $$v)},expression:"ruleForm.task"}})],1)])],1),_vm._v(" "),_c('div',{staticClass:"views-develop-image"},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","placement":"bottom-start"}},[_c('div',{attrs:{"slot":"content"},slot:"content"},[_vm._v("计算节点的帮助信息计算节点的帮助信息帮助信"),_c('br'),_vm._v("计算节点的帮助信息计算节点的帮助信息帮助信")]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-Group views-icon-group"})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('views.modelPrediction.nodeRules')}},[_c('div',{staticClass:"views-task-right views-task-border"},[_c('div',{staticClass:"views-task-sitting views-task-sitting-mg"},[_c('span',{staticClass:"views-task-cpu"},[_vm._v("CPU")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"views-task-cpu"},[_vm._v("GPU")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"views-task-cpu"},[_vm._v(_vm._s(_vm.$t('views.projectContent.memory')))]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v("\n                            G\n                        ")],1)])])],1)]),_vm._v(" "),_c('div',{staticClass:"views-develop-btn"},[_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{staticClass:"view-btn-big",attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("运行")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var personalSpace_createModel = (esExports);
// CONCATENATED MODULE: ./src/views/personalSpace/createModel.vue
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
  createModel,
  personalSpace_createModel,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_personalSpace_createModel = __webpack_exports__["default"] = (Component.exports);


/***/ })

});