webpackJsonp([42],{

/***/ "3ggp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/projectSpace/partCreatDevelop.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var partCreatDevelop = ({
  data: function data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      input: '',
      textarea: ''
    };
  },
  created: function created() {},
  mounted: function mounted() {},

  methods: {},
  components: {},
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-aecd1236","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/projectSpace/partCreatDevelop.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-personal"},[_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v(_vm._s(_vm.$t('views.development.developingInformation'))+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-develop-text"},[_c('div',{staticClass:"views-develop-select"},[_c('span',[_vm._v("镜像分类  ")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('div',{staticClass:"views-develop-input"},[_c('span',[_vm._v("环境名称  ")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":"只能输入2-50个字符、字母、数字"},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}})],1),_vm._v(" "),_c('div',{staticClass:"views-develop-image"},[_c('span',[_vm._v("选择镜像  ")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}}),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium",attrs:{"type":"primary"}},[_vm._v("选择")])],1)]),_vm._v(" "),_c('div',{staticClass:"views-develop-text"},[_c('div',{staticClass:"views-develop-image"},[_c('span',{staticClass:"views-span"},[_vm._v(_vm._s(_vm.$t('views.development.remarks'))+"  ")]),_vm._v(" "),_c('el-input',{attrs:{"type":"textarea","rows":6,"placeholder":"请输入内容"},model:{value:(_vm.textarea),callback:function ($$v) {_vm.textarea=$$v},expression:"textarea"}})],1)])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-develop-text"},[_c('div',{staticClass:"views-develop-input"},[_c('span',[_vm._v("环境名称  ")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":"只能输入2-50个字符、字母、数字"},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}})],1)]),_vm._v(" "),_c('div',{staticClass:"views-develop-text"},[_c('div',{staticClass:"views-develop-input"},[_c('span',[_vm._v("环境名称  ")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":"只能输入2-50个字符、字母、数字"},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}})],1)])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_vm._l((3),function(index,item){return _c('div',{key:index,staticClass:"views-develop-mount"},[_c('el-input',{attrs:{"placeholder":item},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}}),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium",attrs:{"type":"primary"}},[_vm._v("浏览")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}}),_vm._v(" "),_c('span',{staticClass:"views-btn-reduce"},[_vm._v("—")]),_vm._v(" "),_c('span',[_vm._v("该挂载地址权限为读写")])],1)}),_vm._v(" "),_c('div',{staticClass:"views-develop-mount"},[_c('el-button',{staticClass:"view-btn-medium",attrs:{"type":"primary"}},[_vm._v("添加挂载地址")]),_vm._v(" "),_c('span',{staticClass:"views-mount-span"},[_vm._v("*最多可添加四个挂载地址")])],1)],2),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-develop-resources"},[_c('span',[_vm._v("CPU  ")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',[_vm._v("GPU  ")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',[_vm._v("内存  ")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1)]),_vm._v(" "),_c('div',{staticClass:"views-develop-btn"},[_c('el-button',[_vm._v("取消")]),_vm._v(" "),_c('el-button',{staticClass:"view-btn-big",attrs:{"type":"primary"}},[_vm._v("确定")])],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("密码信息")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("存储挂载信息")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("资源信息")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var projectSpace_partCreatDevelop = (esExports);
// CONCATENATED MODULE: ./src/views/projectSpace/partCreatDevelop.vue
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
  partCreatDevelop,
  projectSpace_partCreatDevelop,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_projectSpace_partCreatDevelop = __webpack_exports__["default"] = (Component.exports);


/***/ })

});