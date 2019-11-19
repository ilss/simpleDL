webpackJsonp([38],{

/***/ "TpXM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/projectSpace/partDevelopment.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var partDevelopment = ({
  data: function data() {
    return {
      projectData: '',
      activeIndex: '1',
      activeIndex2: '1',
      developLink: [{ name: 'development', value: '开发环境', isActive: true }, { name: 'trainingTask', value: '训练任务', isActive: false }, { name: 'modelPrediction', value: '模型预测', isActive: false }]
    };
  },
  created: function created() {
    // 请求项目详情数据函数调用
    // this.$store.dispatch('getProjectDetails')
    var active = window.localStorage.getItem('activeIndex');
    this.activeIndex = active;
    this.getProjectDetails();
  },
  mounted: function mounted() {},

  methods: {
    // 请求项目详情数据函数
    getProjectDetails: function getProjectDetails() {
      var _this = this;

      this.$get('/project-space/project-details').then(function (res) {
        _this.projectData = res.data;
      });
    },
    handleSelect: function handleSelect(key, keyPath) {
      var activeIndex = key + '';
      window.localStorage.setItem('activeIndex', activeIndex);
    }
  },
  components: {},
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1361a201","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/projectSpace/partDevelopment.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('table',{staticClass:"views-project-details"},[_c('tr',[_c('td',[_vm._v(_vm._s(_vm.$t('views.projectContent.projectName')))]),_vm._v(" "),_c('td',{attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.projectData.project_name))])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v(_vm._s(_vm.$t('views.projectContent.projectStorage')))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.projectData.storage_id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.$t('views.projectContent.projectStorageKey')))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.projectData.storage_key))])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v(_vm._s(_vm.$t('views.projectContent.projectQuota')))]),_vm._v(" "),_c('td',[_c('span',{},[_vm._v("CPU："+_vm._s(_vm.projectData.project_cpu)+_vm._s(_vm.$t('views.projectContent.unit')))]),_vm._v(" "),_c('span',{staticClass:"views-table-margin"},[_vm._v(_vm._s(_vm.$t('views.projectContent.memory'))+"："+_vm._s(_vm.projectData.project_memory)+"(G)")]),_vm._v(" "),_c('span',{staticClass:"views-table-margin"},[_vm._v("GPU："+_vm._s(_vm.projectData.project_gpu)+_vm._s(_vm.$t('views.projectContent.unit')))])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.$t('views.projectContent.alreadyUsed')))]),_vm._v(" "),_c('td',[_c('span',[_vm._v("CPU："+_vm._s(_vm.projectData.use_cpu)+" "+_vm._s(_vm.$t('views.projectContent.unit')))]),_vm._v(" "),_c('span',{staticClass:"views-table-margin"},[_vm._v(_vm._s(_vm.$t('views.projectContent.memory'))+"："+_vm._s(_vm.projectData.use_memory)+"(G)")]),_vm._v(" "),_c('span',{staticClass:"views-table-margin"},[_vm._v("CPU："+_vm._s(_vm.projectData.use_gpu)+" "+_vm._s(_vm.$t('views.projectContent.unit'))+"\n                ")])])])]),_vm._v(" "),_c('div',{staticClass:"views-development"},[_c('el-menu',{staticClass:"el-menu-demo",attrs:{"default-active":_vm.activeIndex,"mode":"horizontal"},on:{"select":_vm.handleSelect}},[_c('el-menu-item',{attrs:{"index":"1"}},[_c('router-link',{attrs:{"to":{name:'partDevelopContent'},"tag":"a"}},[_vm._v("\n                    "+_vm._s(_vm.$t('views.development.development'))+"\n                ")])],1),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"2"}},[_c('router-link',{attrs:{"to":{name:'partTrainingTask'},"tag":"a"}},[_vm._v("\n                    "+_vm._s(_vm.$t('views.trainingTask.trainingTask'))+"\n                ")])],1),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"3"}},[_c('router-link',{attrs:{"to":{name:'partModelPrediction'},"tag":"a"}},[_vm._v("\n                    "+_vm._s(_vm.$t('views.modelPrediction.modelPrediction'))+"\n                ")])],1)],1)],1),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var projectSpace_partDevelopment = (esExports);
// CONCATENATED MODULE: ./src/views/projectSpace/partDevelopment.vue
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
  partDevelopment,
  projectSpace_partDevelopment,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_projectSpace_partDevelopment = __webpack_exports__["default"] = (Component.exports);


/***/ })

});