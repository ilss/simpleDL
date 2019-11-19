webpackJsonp([0],{

/***/ "72WN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/personalSpace/personalContent.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var personalContent = ({
  name: 'index',
  data: function data() {
    return {
      personalData: {}
    };
  },
  created: function created() {
    this.getPersonalDetails();
  },

  methods: {
    // 请求项目详情数据函数
    getPersonalDetails: function getPersonalDetails() {
      var _this = this;

      this.$get('/project-space/personal-details').then(function (res) {
        console.log(stringify_default()(res.data));
        _this.personalData = res.data;
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9cafbcbc","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/personalSpace/personalContent.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('table',{staticClass:"views-project-details"},[_c('tr',[_c('td',[_vm._v(_vm._s(_vm.$t('views.personalDevelop.personalSpace')))]),_vm._v(" "),_c('td',{attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.personalData.personal_name))])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v(_vm._s(_vm.$t('views.personalDevelop.personalStorage')))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.personalData.storage_id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.$t('views.personalDevelop.personalStorageKey')))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.personalData.storage_key))])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v(_vm._s(_vm.$t('views.personalDevelop.personalQuota')))]),_vm._v(" "),_c('td',{staticClass:"views-table-color"},[_c('span',[_vm._v("CPU："+_vm._s(_vm.personalData.personal_cpu)+_vm._s(_vm.$t('views.projectContent.unit')))]),_vm._v(" "),_c('span',{staticClass:"views-table-margin"},[_vm._v(_vm._s(_vm.$t('views.projectContent.memory'))+"："+_vm._s(_vm.personalData.personal_memory)+"(G)")]),_vm._v(" "),_c('span',{staticClass:"views-table-margin"},[_vm._v("GPU："+_vm._s(_vm.personalData.personal_gpu)+_vm._s(_vm.$t('views.projectContent.unit')))])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.$t('views.projectContent.alreadyUsed')))]),_vm._v(" "),_c('td',{staticClass:"views-table-color"},[_c('span',[_vm._v("CPU："+_vm._s(_vm.personalData.use_cpu)+" "+_vm._s(_vm.$t('views.projectContent.unit')))]),_vm._v(" "),_c('span',{staticClass:"views-table-margin"},[_vm._v(_vm._s(_vm.$t('views.projectContent.memory'))+"："+_vm._s(_vm.personalData.use_memory)+"(G)")]),_vm._v(" "),_c('span',{staticClass:"views-table-margin"},[_vm._v("CPU："+_vm._s(_vm.personalData.use_gpu)+" "+_vm._s(_vm.$t('views.projectContent.unit'))+"\n                ")])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var personalSpace_personalContent = (esExports);
// CONCATENATED MODULE: ./src/views/personalSpace/personalContent.vue
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
  personalContent,
  personalSpace_personalContent,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_personalSpace_personalContent = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "dclA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/imageManagement/imageDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var imageDetail = ({
  name: 'imageDetail',
  props: {
    detailData: {
      type: Object,
      required: true
    }
  },
  created: function created() {
    console.log(this.detailData);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d6950af0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/imageManagement/imageDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-user-management-user-details"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"row-first"},[_c('span',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.mirrorName"))+"：")]),_vm._v(" "),_c('div',{staticClass:"content"},[_vm._v(_vm._s(_vm.detailData.image_name))])]),_vm._v(" "),_c('div',{staticClass:"row-last"},[_c('span',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.mirrorId"))+"：")]),_vm._v(" "),_c('div',{staticClass:"content"},[_vm._v(_vm._s(_vm.detailData.image_id))])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"row-first"},[_c('span',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.status"))+"：")]),_vm._v(" "),_c('div',{staticClass:"content"},[_vm._v(_vm._s(_vm.detailData.image_status===1?'未生成':_vm.detailData.image_status===2?'可用':'停用'))])]),_vm._v(" "),_c('div',{staticClass:"row-last"},[_c('span',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.operatingSystem"))+"：")]),_vm._v(" "),_c('div',{staticClass:"content"},[_vm._v(_vm._s(_vm.detailData.operate_system))])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"row-first"},[_c('span',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.creationTime"))+"：")]),_vm._v(" "),_c('div',{staticClass:"content"},[_vm._v(_vm._s(_vm.detailData.build_time))])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"row-first else"},[_c('span',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.description"))+"：")]),_vm._v(" "),_c('div',{staticClass:"content"},[_vm._v(_vm._s(_vm.detailData.image_desc))])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var imageManagement_imageDetail = (esExports);
// CONCATENATED MODULE: ./src/views/imageManagement/imageDetail.vue
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
  imageDetail,
  imageManagement_imageDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_imageManagement_imageDetail = __webpack_exports__["a"] = (Component.exports);


/***/ })

});