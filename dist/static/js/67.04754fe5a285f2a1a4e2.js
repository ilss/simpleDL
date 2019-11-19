webpackJsonp([67],{

/***/ "MUvH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/home/projectHome.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var projectHome = ({
  data: function data() {
    return {
      option1: {},
      optionData: '',
      projectUseData: {},
      useProject: 'width: 30vw;height:200px;'
    };
  },
  created: function created() {
    // 获取项目管理端首页的数据函数调用
    this.getPorjectHome();
    // 项目使用情况数据渲染函数调用
    this.projectUse();
  },
  mounted: function mounted() {},

  methods: {
    // 获取项目管理端首页的数据
    getPorjectHome: function getPorjectHome() {
      var _this = this;

      var error = this.$t('views.projectContent.requestError');
      this.$get('project-management/index').then(function (res) {
        if (res.isOk === false) {
          _this.$message({
            showClose: true,
            message: error,
            type: 'error'
          });
        } else {
          _this.optionData = res.data;
        }
      });
    },

    // 项目使用情况数据渲染
    projectUse: function projectUse() {
      var _this2 = this;

      setTimeout(function () {
        var color = ['#23bed4', '#a4a4a4'];
        var title = '可建项目\n总数100\n';
        var data = [{
          value: 141,
          name: '已使用\r\n容量'
        }, {
          value: 189,
          name: '剩余\r\n容量'
        }];
        _this2.projectUseData = echratsData(title, data, color);
      }, 3000);
    }
  },
  components: {},
  computed: {}
});
function echratsData(title, data, color) {
  var showData = {
    title: {
      text: title,
      left: 'center',
      top: '45%',
      textStyle: {
        fontSize: 14,
        color: '#333'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      top: '30',
      data: ['剩余容量', '已使用容量']
    },
    series: [{
      name: '项目使用情况',
      type: 'pie',
      radius: ['70%', '90%'],
      avoidLabelOverlap: false,
      legendHoverLink: false,
      hoverAnimation: false,
      label: {
        normal: {
          formatter: '{b|{b}：}{c} ',
          rich: {
            b: {
              fontSize: 14,
              lineHeight: 20
            }
          }
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '16',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: true
        }
      },
      data: data
    }],
    color: color
  };
  return showData;
}
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-31bd7e16","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/home/projectHome.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-project"},[_c('ul',{staticClass:"views-project-ul"},[_c('li',[_c('div',{staticClass:"views-charts"},[_c('div',{staticClass:"views-charts-title"},[_vm._v("项目使用情况（单位：个）")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('sedu-echarts',{attrs:{"domId":"projectUse","option":_vm.projectUseData,"myStyle":_vm.useProject}})],1)]),_vm._v(" "),_c('li',[_c('div',{staticClass:"views-charts"},[_c('div',{staticClass:"views-charts-title"},[_vm._v("项目使用情况（单位：个）")]),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('sedu-echarts',{attrs:{"domId":"projectUse1","option":_vm.projectUseData,"myStyle":_vm.useProject}})],1)]),_vm._v(" "),_c('li',[_c('div',{staticClass:"views-charts"},[_c('div',{staticClass:"views-charts-title"},[_vm._v("项目使用情况（单位：个）")]),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_c('sedu-echarts',{attrs:{"domId":"projectUse2","option":_vm.projectUseData,"myStyle":_vm.useProject}})],1)]),_vm._v(" "),_c('li',[_c('div',{staticClass:"views-charts"},[_c('div',{staticClass:"views-charts-title"},[_vm._v("项目使用情况（单位：个）")]),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_c('sedu-echarts',{attrs:{"domId":"projectUse3","option":_vm.projectUseData,"myStyle":_vm.useProject}})],1)]),_vm._v(" "),_c('li',[_c('div',{staticClass:"views-charts"},[_c('div',{staticClass:"views-charts-title"},[_vm._v("项目使用情况（单位：个）")]),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9),_vm._v(" "),_c('sedu-echarts',{attrs:{"domId":"projectUse4","option":_vm.projectUseData,"myStyle":_vm.useProject}})],1)]),_vm._v(" "),_c('li',[_c('div',{staticClass:"views-charts"},[_c('div',{staticClass:"views-charts-title"},[_vm._v("项目使用情况（单位：个）")]),_vm._v(" "),_vm._m(10),_vm._v(" "),_vm._m(11),_vm._v(" "),_c('sedu-echarts',{attrs:{"domId":"projectUse5","option":_vm.projectUseData,"myStyle":_vm.useProject}})],1)]),_vm._v(" "),_c('li',[_c('div',{staticClass:"views-charts"},[_c('div',{staticClass:"views-charts-title"},[_vm._v("项目使用情况（单位：个）")]),_vm._v(" "),_vm._m(12),_vm._v(" "),_vm._m(13),_vm._v(" "),_c('sedu-echarts',{attrs:{"domId":"projectUse6","option":_vm.projectUseData,"myStyle":_vm.useProject}})],1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-charts-legend views-chrats-margin"},[_c('span',{staticClass:"views-charts-color  views-light-blue"}),_vm._v(" "),_c('span',[_vm._v("当前已创建项目情况")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-charts-legend"},[_c('span',{staticClass:"views-charts-color views-light-gray"}),_vm._v(" "),_c('span',[_vm._v("剩余可创建项目情况")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-charts-legend views-chrats-margin"},[_c('span',{staticClass:"views-charts-color  views-light-blue"}),_vm._v(" "),_c('span',[_vm._v("当前已创建项目情况")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-charts-legend"},[_c('span',{staticClass:"views-charts-color views-light-gray"}),_vm._v(" "),_c('span',[_vm._v("剩余可创建项目情况")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-charts-legend views-chrats-margin"},[_c('span',{staticClass:"views-charts-color  views-light-blue"}),_vm._v(" "),_c('span',[_vm._v("当前已创建项目情况")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-charts-legend"},[_c('span',{staticClass:"views-charts-color views-light-gray"}),_vm._v(" "),_c('span',[_vm._v("剩余可创建项目情况")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-charts-legend views-chrats-margin"},[_c('span',{staticClass:"views-charts-color  views-light-blue"}),_vm._v(" "),_c('span',[_vm._v("当前已创建项目情况")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-charts-legend"},[_c('span',{staticClass:"views-charts-color views-light-gray"}),_vm._v(" "),_c('span',[_vm._v("剩余可创建项目情况")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-charts-legend views-chrats-margin"},[_c('span',{staticClass:"views-charts-color  views-light-blue"}),_vm._v(" "),_c('span',[_vm._v("当前已创建项目情况")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-charts-legend"},[_c('span',{staticClass:"views-charts-color views-light-gray"}),_vm._v(" "),_c('span',[_vm._v("剩余可创建项目情况")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-charts-legend views-chrats-margin"},[_c('span',{staticClass:"views-charts-color  views-light-blue"}),_vm._v(" "),_c('span',[_vm._v("当前已创建项目情况")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-charts-legend"},[_c('span',{staticClass:"views-charts-color views-light-gray"}),_vm._v(" "),_c('span',[_vm._v("剩余可创建项目情况")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-charts-legend views-chrats-margin"},[_c('span',{staticClass:"views-charts-color  views-light-blue"}),_vm._v(" "),_c('span',[_vm._v("当前已创建项目情况")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-charts-legend"},[_c('span',{staticClass:"views-charts-color views-light-gray"}),_vm._v(" "),_c('span',[_vm._v("剩余可创建项目情况")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var home_projectHome = (esExports);
// CONCATENATED MODULE: ./src/views/home/projectHome.vue
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
  projectHome,
  home_projectHome,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_home_projectHome = __webpack_exports__["default"] = (Component.exports);


/***/ })

});