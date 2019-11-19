webpackJsonp([6],{

/***/ "UepV":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "ggZ6":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("UepV");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("699b1734", content, true, {});

/***/ }),

/***/ "mk71":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/projectSpace/partCreateModelJob.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var partCreateModelJob = ({
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
      value: 1,
      value1: '1000'
    };
  },
  created: function created() {},
  mounted: function mounted() {},

  methods: {
    changeType: function changeType() {},
    creatDevelop: function creatDevelop() {}
  },
  components: {},
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a3b51a04","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/projectSpace/partCreateModelJob.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-personal"},[_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v(_vm._s(_vm.$t('views.modelPrediction.basicInf')))])]),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-task-input"},[_c('span',{staticClass:"views-task-span-mg"},[_vm._v(" "+_vm._s(_vm.$t('views.modelPrediction.jobName')))]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}})],1),_vm._v(" "),_c('div',{staticClass:"views-task-image"},[_c('span',{staticClass:"views-task-span-mg views-span"},[_vm._v(_vm._s(_vm.$t('views.development.remarks')))]),_vm._v(" "),_c('el-input',{attrs:{"type":"textarea","rows":6,"placeholder":_vm.$t('views.projectContent.enterContent')},model:{value:(_vm.textarea),callback:function ($$v) {_vm.textarea=$$v},expression:"textarea"}})],1)]),_vm._v(" "),_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v(_vm._s(_vm.$t('views.modelPrediction.parameterConfig')))])]),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-task-input"},[_c('span',{staticClass:"views-task-span"},[_c('i',{staticClass:"views-task-icon"}),_vm._v(" "),_c('i',{staticClass:"views-task-ml"},[_vm._v(_vm._s(_vm.$t('views.modelPrediction.parameterSource')))])]),_vm._v(" "),_c('span',[_vm._v("GRPC")])])]),_vm._v(" "),_c('div',{staticClass:"views-task-small"},[_c('span',{staticClass:"views-task-span"},[_c('i',{staticClass:"views-task-icon"},[_vm._v("*")]),_vm._v(" "),_c('i',{staticClass:"views-task-ml"},[_vm._v(_vm._s(_vm.$t('views.trainingTask.engineType')))])]),_vm._v(" "),_c('el-select',{ref:"changeFocus",attrs:{"placeholder":"请选择"},on:{"change":_vm.changeType},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"views-task-span"},[_c('i',{staticClass:"views-task-second"},[_vm._v("*")]),_vm._v(" "),_c('i',[_vm._v(_vm._s(_vm.$t('views.trainingTask.versionInf')))])]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('div',{staticClass:"views-task-middle"},[_c('span',{staticClass:"views-task-span"},[_c('i',{staticClass:"views-task-icon"},[_vm._v("*")]),_vm._v(" "),_c('i',[_vm._v(_vm._s(_vm.$t('views.modelPrediction.useModel')))]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-Group views-icon-group"})]),_vm._v(" "),_c('div',{staticClass:"views-task-div"},[_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}}),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium views-btn-choice",attrs:{"type":"primary"},on:{"click":_vm.creatDevelop}},[_vm._v("\n                "+_vm._s(_vm.$t('views.modelPrediction.choice'))+"\n            ")])],1)]),_vm._v(" "),_c('div',{staticClass:"views-task-middle"},[_c('span',{staticClass:"views-task-span views-task-left"},[_c('i',{staticClass:"views-task-icon"},[_vm._v("*")]),_vm._v(" "),_c('i',[_vm._v(_vm._s(_vm.$t('views.modelPrediction.jobParameter')))]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-Group views-icon-group"})]),_vm._v(" "),_c('div',{staticClass:"views-task-right"},[_c('div',{staticClass:"views-model-params"},[_c('el-input',{model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}}),_vm._v(" "),_c('b',{staticClass:"views-task-sign"},[_vm._v("=")]),_vm._v(" "),_c('el-input',{model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}})],1)])]),_vm._v(" "),_c('div',{staticClass:"views-task-type"},[_c('span',{staticClass:"views-task-span views-task-left"},[_c('i',{staticClass:"views-task-icon"},[_vm._v("*")]),_vm._v(" "),_c('i',[_vm._v(_vm._s(_vm.$t('views.modelPrediction.nodeRules')))]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-Group views-icon-group"})]),_vm._v(" "),_c('div',{staticClass:"views-task-right views-task-border"},[_c('div',{staticClass:"views-task-sitting views-task-sitting-mg"},[_c('span',{staticClass:"views-task-cpu"},[_vm._v("CPU")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"views-task-cpu"},[_vm._v("GPU")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"views-task-cpu"},[_vm._v(_vm._s(_vm.$t('views.projectContent.memory')))]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v("\n                G\n            ")],1)])]),_vm._v(" "),_c('div',{staticClass:"views-develop-btn"},[_c('el-button',[_vm._v(_vm._s(_vm.$t('views.trainingTask.cancel')))]),_vm._v(" "),_c('el-button',{staticClass:"view-btn-big",attrs:{"type":"primary"}},[_vm._v(_vm._s(_vm.$t('views.trainingTask.run')))])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var projectSpace_partCreateModelJob = (esExports);
// CONCATENATED MODULE: ./src/views/projectSpace/partCreateModelJob.vue
function injectStyle (ssrContext) {
  __webpack_require__("ggZ6")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a3b51a04"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  partCreateModelJob,
  projectSpace_partCreateModelJob,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_projectSpace_partCreateModelJob = __webpack_exports__["default"] = (Component.exports);


/***/ })

});