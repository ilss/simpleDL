webpackJsonp([41],{

/***/ "z/gS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/projectSpace/partCreateTraningTask.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var partCreateTraningTask = ({
  data: function data() {
    return {
      input: '',
      textarea: '',
      radio: '1',
      value1: '1000',
      caffe: false,
      tensorflow: false,
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
      value: 1
    };
  },
  created: function created() {
    this.init();
  },
  mounted: function mounted() {},

  methods: {
    init: function init() {
      if (this.value === 1) {
        this.caffe = true;
      }
    },
    creatDevelop: function creatDevelop() {},
    changeType: function changeType(val) {
      if (val === 1) {
        this.caffe = true;
        this.tensorflow = false;
      } else if (val === 2) {
        this.caffe = false;
        this.tensorflow = true;
      }
    }
  },
  components: {},
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-08be17d7","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/projectSpace/partCreateTraningTask.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-personal"},[_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v(" "+_vm._s(_vm.$t('views.trainingTask.taskInformation')))])]),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-task-input"},[_c('span',{staticClass:"views-task-span-mg"},[_vm._v(_vm._s(_vm.$t('views.trainingTask.taskName')))]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}})],1),_vm._v(" "),_c('div',{staticClass:"views-task-image"},[_c('span',{staticClass:"views-task-span-mg views-span"},[_vm._v(_vm._s(_vm.$t('views.development.remarks')))]),_vm._v(" "),_c('el-input',{attrs:{"type":"textarea","rows":6,"placeholder":_vm.$t('views.projectContent.enterContent')},model:{value:(_vm.textarea),callback:function ($$v) {_vm.textarea=$$v},expression:"textarea"}})],1)]),_vm._v(" "),_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v(_vm._s(_vm.$t('views.modelPrediction.parameterConfig')))])]),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-task-input"},[_c('span',{staticClass:"views-task-span"},[_c('i',{staticClass:"views-task-icon"}),_vm._v(" "),_c('i',{staticClass:"views-task-ml"},[_vm._v(_vm._s(_vm.$t('views.modelPrediction.parameterSource')))])]),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium",attrs:{"type":"primary"},on:{"click":_vm.creatDevelop}},[_vm._v("\n                "+_vm._s(_vm.$t('views.trainingTask.manualParameter'))+"\n            ")]),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium",attrs:{"type":"primary"},on:{"click":_vm.creatDevelop}},[_vm._v("\n                "+_vm._s(_vm.$t('views.trainingTask.useParameter'))+"\n            ")])],1),_vm._v(" "),_c('div',{staticClass:"views-task-small"},[_c('span',{staticClass:"views-task-span"},[_c('i',{staticClass:"views-task-icon"},[_vm._v("*")]),_vm._v(" "),_c('i',{staticClass:"views-task-ml"},[_vm._v(_vm._s(_vm.$t('views.trainingTask.engineType')))])]),_vm._v(" "),_c('el-select',{ref:"changeFocus",attrs:{"placeholder":"请选择"},on:{"change":_vm.changeType},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"views-task-span"},[_c('i',{staticClass:"views-task-second"},[_vm._v("*")]),_vm._v(" "),_c('i',[_vm._v(_vm._s(_vm.$t('views.trainingTask.versionInf')))])]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"views-task-radio"},[_vm._v(_vm._s(_vm.$t('views.trainingTask.whetherVisualization'))+"：")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"1"},model:{value:(_vm.radio),callback:function ($$v) {_vm.radio=$$v},expression:"radio"}},[_vm._v(_vm._s(_vm.$t('views.trainingTask.yes')))]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"},model:{value:(_vm.radio),callback:function ($$v) {_vm.radio=$$v},expression:"radio"}},[_vm._v(_vm._s(_vm.$t('views.trainingTask.no')))])],1)]),_vm._v(" "),_c('div',{staticClass:"views-task-middle"},[_c('span',{staticClass:"views-task-span"},[_c('i',{staticClass:"views-task-icon"},[_vm._v("*")]),_vm._v(" "),_c('i',[_vm._v(_vm._s(_vm.$t('views.trainingTask.codeDirectory')))]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-Group views-icon-group"})]),_vm._v(" "),_c('div',{staticClass:"views-task-div"},[_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}}),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium views-btn-choice views-btn-choice-en",attrs:{"type":"primary"},on:{"click":_vm.creatDevelop}},[_vm._v(_vm._s(_vm.$t('views.modelPrediction. choice')))])],1)]),_vm._v(" "),_c('div',{staticClass:"views-task-middle"},[_c('span',{staticClass:"views-task-span"},[_c('i',{staticClass:"views-task-icon"},[_vm._v("*")]),_vm._v(" "),_c('i',[_vm._v(_vm._s(_vm.$t('views.trainingTask.startupFile')))]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-Group views-icon-group"})]),_vm._v(" "),_c('div',{staticClass:"views-task-div"},[_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}}),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium views-btn-choice views-btn-choice-en",attrs:{"type":"primary"},on:{"click":_vm.creatDevelop}},[_vm._v(_vm._s(_vm.$t('views.modelPrediction. choice')))])],1)]),_vm._v(" "),_c('div',{staticClass:"views-task-middle"},[_c('span',{staticClass:"views-task-span"},[_c('i',{staticClass:"views-task-icon"},[_vm._v("*")]),_vm._v(" "),_c('i',[_vm._v(_vm._s(_vm.$t('views.trainingTask.trainingData')))]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-Group views-icon-group"})]),_vm._v(" "),_c('div',{staticClass:"views-task-div"},[_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}}),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium views-btn-choice views-btn-choice-en",attrs:{"type":"primary"},on:{"click":_vm.creatDevelop}},[_vm._v(_vm._s(_vm.$t('views.modelPrediction. choice')))])],1)]),_vm._v(" "),_c('div',{staticClass:"views-task-middle"},[_c('span',{staticClass:"views-task-span"},[_c('i',{staticClass:"views-task-icon"},[_vm._v("*")]),_vm._v(" "),_c('i',[_vm._v(_vm._s(_vm.$t('views.trainingTask.trainingLog')))]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-Group views-icon-group"})]),_vm._v(" "),_c('div',{staticClass:"views-task-div"},[_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}}),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium views-btn-choice views-btn-choice-en",attrs:{"type":"primary"},on:{"click":_vm.creatDevelop}},[_vm._v(_vm._s(_vm.$t('views.modelPrediction. choice')))])],1)]),_vm._v(" "),_c('div',{staticClass:"views-task-middle"},[_c('span',{staticClass:"views-task-span views-task-left"},[_c('i',{staticClass:"views-task-icon"},[_vm._v("*")]),_vm._v(" "),_c('i',[_vm._v(_vm._s(_vm.$t('views.trainingTask.operatParameters')))]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-Group views-icon-group"})]),_vm._v(" "),_c('div',{staticClass:"views-task-right"},_vm._l((4),function(index,item){return _c('div',{key:index,staticClass:"views-task-params"},[_c('el-input',{attrs:{"placeholder":item},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}}),_vm._v(" "),_c('b',{staticClass:"views-task-sign"},[_vm._v("=")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":item},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}}),_vm._v(" "),_c('span',{staticClass:"views-btn-reduce  views-btn-choice"},[_vm._v("—")])],1)}))]),_vm._v(" "),_c('div',{staticClass:"views-task-run"},[_c('span',{staticClass:"views-task-span views-task-left"}),_vm._v(" "),_c('div',{staticClass:"views-task-right"},[_c('div',{staticStyle:{"width":"95%"}},[_c('el-button',{staticClass:"view-btn-medium views-btn-choice",attrs:{"type":"primary"},on:{"click":_vm.creatDevelop}},[_vm._v(_vm._s(_vm.$t('views.trainingTask.increaseParameters')))])],1)])]),_vm._v(" "),_c('div',{staticClass:"views-task-type"},[_c('span',{staticClass:"views-task-span views-task-left"},[_c('i',{staticClass:"views-task-icon"}),_vm._v(" "),_c('i',{staticClass:"views-task-ml"},[_vm._v(_vm._s(_vm.$t('views.trainingTask.nodeConfig')))])]),_vm._v(" "),_c('div',{staticClass:"views-task-right views-task-border"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.caffe),expression:"caffe"}],staticClass:"views-task-sitting views-task-sitting-mg"},[_c('span',{staticClass:"views-task-cpu"},[_vm._v("CPU")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"views-task-cpu"},[_vm._v("GPU")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"views-task-cpu"},[_vm._v(_vm._s(_vm.$t('views.projectContent.memory')))]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v("\n                G\n            ")],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.tensorflow),expression:"tensorflow"}],staticClass:"views-task-tensorflow"},[_c('div',{staticClass:"views-task-node"},[_c('span',{staticClass:"views-task-node-span"},[_vm._v(_vm._s(_vm.$t('views.trainingTask.psNode')))]),_vm._v(" "),_c('div',{staticClass:"views-task-sitting views-task-select"},[_c('span',{staticClass:"views-task-cpu"},[_vm._v(_vm._s(_vm.$t('views.projectContent.unit')))]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"views-task-cpu"},[_vm._v("CPU")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"views-task-cpu"},[_vm._v("GPU")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"views-task-cpu"},[_vm._v(_vm._s(_vm.$t('views.projectContent.memory')))]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v("\n                        G\n                    ")],1)]),_vm._v(" "),_c('div',{staticClass:"views-task-node views-task-bottom"},[_c('span',{staticClass:"views-task-node-span"},[_vm._v(_vm._s(_vm.$t('views.trainingTask.workerNode')))]),_vm._v(" "),_c('div',{staticClass:"views-task-sitting views-task-select"},[_c('span',{staticClass:"views-task-cpu"},[_vm._v(_vm._s(_vm.$t('views.projectContent.unit')))]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"views-task-cpu"},[_vm._v("CPU")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"views-task-cpu"},[_vm._v("GPU")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"views-task-cpu"},[_vm._v(_vm._s(_vm.$t('views.projectContent.memory')))]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v("\n                        G\n                    ")],1)])])])]),_vm._v(" "),_c('div',{staticClass:"views-develop-btn"},[_c('el-button',[_vm._v("取消")]),_vm._v(" "),_c('el-button',{staticClass:"view-btn-big",attrs:{"type":"primary"}},[_vm._v("运行")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var projectSpace_partCreateTraningTask = (esExports);
// CONCATENATED MODULE: ./src/views/projectSpace/partCreateTraningTask.vue
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
  partCreateTraningTask,
  projectSpace_partCreateTraningTask,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_projectSpace_partCreateTraningTask = __webpack_exports__["default"] = (Component.exports);


/***/ })

});