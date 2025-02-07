webpackJsonp([18],{

/***/ "QZKG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/echarts/index.js
var echarts = __webpack_require__("XLwt");
var echarts_default = /*#__PURE__*/__webpack_require__.n(echarts);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/systemMonitoring/systemMonitoringPage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var systemMonitoringPage = ({
  name: 'systemMonitoring',
  data: function data() {
    return {
      option1: {},
      option2: {},
      option3: {},
      option4: {},
      option5: {},
      option6: {},
      cpuNum: 0,
      cpuAllNum: 0,
      gpuNum: 0,
      gpuAllNum: 0,
      memoryNum: 0,
      memoryAllNum: 0,
      projectAllNum: 0,
      gauge_hart_arr: [],
      cpuClass: 'v-cpu',
      memoryClass: 'v-memory',
      gpuClass: 'v-gpu',
      bar_pro_sty: 'width:82vw;height:45vh;',
      pie_pro_sty: 'width:40vw;height:40vh;'
    };
  },

  methods: {
    chartInit: function chartInit(data) {
      if (!data) {
        return;
      }
      var perStr = this.$t('views.systemSource.usedPer');
      var proNumStr = this.$t('views.project.proNumStr');
      var pie1Title = this.$t('views.images.title');
      var pie2Title = this.$t('views.storages.title');
      var publicImage = this.$t('views.images.publicImage');
      var personalImage = this.$t('views.images.personalImage');
      var projectImage = this.$t('views.images.projectImage');
      var leftNumStr = this.$t('views.storages.leftNumStr');
      var usedNumStr = this.$t('views.storages.usedNumStr');
      this.option1 = this.gaugeChart(data.gauge[0].name, data.gauge[0].value, perStr);
      this.option2 = this.gaugeChart(data.gauge[1].name, data.gauge[1].value, perStr);
      this.option3 = this.gaugeChart(data.gauge[2].name, data.gauge[2].value, perStr);
      this.option4 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '6%',
          containLabel: true
        },
        dataZoom: [{
          type: 'inside',
          startValue: 0,
          endValue: 14
        }],
        xAxis: [{
          type: 'category',
          data: data.proCount.x,
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          name: proNumStr
        }],
        series: [{
          name: proNumStr,
          type: 'bar',
          barWidth: '60%',
          itemStyle: {
            color: new echarts_default.a.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#fe7a28' }, { offset: 0.5, color: '#fe9a2a' }, { offset: 1, color: '#ffbd29' }])
          },
          data: data.proCount.value
        }]
      };
      this.option5 = {
        title: {
          text: data.imagesCount.numAll,
          left: 'center',
          top: '44%',
          textStyle: {
            lineHeight: 100,
            fontSize: 18,
            color: '#111'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {d}%'
        },
        legendHoverLink: false,
        hoverAnimation: false,
        series: [{
          name: pie1Title,
          type: 'pie',
          radius: ['45%', '58%'],
          label: {
            normal: {
              formatter: '{b|{b} ：}{c} ',
              rich: {
                b: {
                  fontSize: 16,
                  lineHeight: 33
                  // c: {
                  //   fontSize: 16,
                  //   lineHeight: 33
                  // }
                } }
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [{ value: data.imagesCount.personalNum, name: publicImage }, { value: data.imagesCount.personalNum, name: personalImage }, { value: data.imagesCount.publiceNum, name: projectImage }]
        }],
        color: ['#f06966', '#83dfc8', '#604a61']
      };
      this.option6 = {
        title: {
          text: data.storageCount.usedStr,
          left: 'center',
          top: '36%',
          textStyle: {
            fontSize: 18,
            color: '#24bfd5'
          },
          subtext: data.storageCount.allNumStr,
          subtextStyle: {
            fontSize: 16,
            color: '#111'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {d}%'
        },
        legendHoverLink: false,
        hoverAnimation: false,
        series: [{
          name: pie2Title,
          type: 'pie',
          radius: ['45%', '58%'],
          label: {
            normal: {
              formatter: '{b|{b}：}{c} ',
              rich: {
                b: {
                  fontSize: 16,
                  lineHeight: 33
                }
              }
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [{ value: data.storageCount.usedNum, name: usedNumStr }, { value: data.storageCount.leftNum, name: leftNumStr }]
        }],
        color: ['#23bed4', '#a4a4a4']
      };
    },
    gaugeChart: function gaugeChart(name, value, perstr) {
      var option = {
        tooltip: { formatter: '{a} <br/>{b} : {c}%' },
        series: [{
          name: name,
          type: 'gauge',
          splitNumber: 10,
          radius: '96%',
          detail: { formatter: '{value}%' },
          title: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontSize: 16,
            color: 'auto'
          },
          axisLine: {
            // 坐标轴线
            lineStyle: {
              // 属性lineStyle控制线条样式
              color: [[0.2, '#009d7a'], [0.8, '#417ed1'], [1, '#f49900']],
              width: 20
            }
          },
          axisTick: {
            // 坐标轴小标记
            splitNumber: 5,
            length: 10, // 属性length控制线长
            lineStyle: {
              // 属性lineStyle控制线条样式
              color: '#fff'
            }
          },
          splitLine: {
            // 分隔线
            length: 20, // 属性length控制线长
            lineStyle: {
              // 属性lineStyle（详见lineStyle）控制线条样式
              color: '#fff'
            }
          },
          data: [{ value: value, name: perstr }]
        }]
      };
      return option;
    }
  },

  created: function created() {
    var _this = this;

    this.$post('/systeminfo', '').then(function (res) {
      var data = {};
      var cpuValue = parseInt(res.data.system_source.cpu.used / res.data.system_source.cpu.num_all * 100);
      var gpuValue = parseInt(res.data.system_source.gpu.used / res.data.system_source.gpu.num_all * 100);
      var memoryValue = parseInt(res.data.system_source.memory.used / res.data.system_source.memory.num_all * 100);
      // 系统资源监控
      _this.cpuNum = res.data.system_source.cpu.used;
      _this.cpuAllNum = res.data.system_source.cpu.num_all;
      _this.memoryNum = res.data.system_source.memory.used;
      _this.memoryAllNum = res.data.system_source.memory.num_all;
      _this.gpuNum = res.data.system_source.gpu.used;
      _this.gpuAllNum = res.data.system_source.gpu.num_all;
      _this.gauge_hart_arr[0] = { name: 'CPU', value: cpuValue };
      _this.gauge_hart_arr[1] = { name: _this.$t('views.systemSource.memory'), value: memoryValue };
      _this.gauge_hart_arr[2] = { name: 'GPU', value: gpuValue };
      data['gauge'] = _this.gauge_hart_arr;

      // 项目空间统计
      _this.projectAllNum = res.data.count_project.num_all;
      data['proCount'] = { x: res.data.count_project.cont_users.name, value: res.data.count_project.cont_users.used_num

        // 镜像统计
      };var str = _this.$t('views.images.numAllStr');
      var ge = _this.$t('views.images.ge');
      var imagesAllStr = str + '\n' + res.data.count_iso.num_all + ge;
      data['imagesCount'] = {
        numAll: imagesAllStr,
        personalNum: res.data.count_iso.personal_iso,
        projectNum: res.data.count_iso.project_iso,
        publiceNum: res.data.count_iso.public_iso

        // 存储空间统计
      };var usedPerstr = _this.$t('views.systemSource.usedPer');
      var nunAllStr = _this.$t('views.storages.nunAllStr');
      var usedPer = parseInt(res.data.count_disk.used_num / res.data.count_disk.num_all * 100);
      var storageTitle = usedPerstr + '\n' + usedPer + '%\n';
      var storageSubTitle = nunAllStr + '\n' + res.data.count_disk.num_all + ge;
      data['storageCount'] = {
        usedStr: storageTitle,
        allNumStr: storageSubTitle,
        leftNum: res.data.count_disk.left_num,
        usedNum: res.data.count_disk.used_num
      };
      _this.chartInit(data);
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6864b221","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/systemMonitoring/systemMonitoringPage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"systemMonitoringPage"},[_c('div',{staticClass:"v-line"},[_c('h6',[_vm._v(_vm._s(_vm.$t("views.systemSource.title")))]),_vm._v(" "),_c('el-row',[_c('el-col',{staticClass:"text-center",attrs:{"span":8}},[_c('div',{staticClass:"title-chart"},[_vm._v("CPU\n          "),_c('span',{staticClass:"real-value"},[_vm._v(_vm._s(_vm.cpuNum)+" Core")]),_vm._v(" /\n          "),_c('span',{staticClass:"total-value"},[_vm._v(_vm._s(_vm.cpuAllNum)+" Core")])]),_vm._v(" "),_c('sedu-echarts',{attrs:{"domId":"cpu","cname":_vm.cpuClass,"option":_vm.option1}})],1),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":8}},[_c('div',{staticClass:"title-chart"},[_vm._v(_vm._s(_vm.$t("views.systemSource.memory"))+"\n          "),_c('span',{staticClass:"real-value"},[_vm._v(_vm._s(_vm.memoryNum)+" G")]),_vm._v(" /\n          "),_c('span',{staticClass:"total-value"},[_vm._v(_vm._s(_vm.memoryAllNum)+" G")])]),_vm._v(" "),_c('sedu-echarts',{attrs:{"domId":"memory","cname":_vm.memoryClass,"option":_vm.option2}})],1),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":8}},[_c('div',{staticClass:"title-chart"},[_vm._v("GPU\n          "),_c('span',{staticClass:"real-value"},[_vm._v(_vm._s(_vm.gpuNum)+" G")]),_vm._v(" /\n          "),_c('span',{staticClass:"total-value"},[_vm._v(_vm._s(_vm.gpuAllNum)+" G")])]),_vm._v(" "),_c('sedu-echarts',{attrs:{"domId":"gpu","cname":_vm.memoryClass,"option":_vm.option3}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"v-line"},[_c('h6',[_vm._v(_vm._s(_vm.$t("views.project.title"))+"\n      "),_c('span',[_vm._v(_vm._s(_vm.projectAllNum))]),_vm._v(" "+_vm._s(_vm.$t("views.project.rightBrackets")))]),_vm._v(" "),_c('el-row',[_c('el-col',{staticClass:"text-center",attrs:{"span":24}},[_c('sedu-echarts',{attrs:{"domId":"pro-analyse","myStyle":_vm.bar_pro_sty,"option":_vm.option4}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"v-pie"},[_c('el-row',[_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_c('h6',[_vm._v(_vm._s(_vm.$t("views.images.title")))]),_vm._v(" "),_c('sedu-echarts',{attrs:{"domId":"iamges","myStyle":_vm.pie_pro_sty,"option":_vm.option5}})],1),_vm._v(" "),_c('div',{staticClass:"middle-line"}),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_c('h6',[_vm._v(_vm._s(_vm.$t("views.storages.title")))]),_vm._v(" "),_c('sedu-echarts',{attrs:{"domId":"storages","myStyle":_vm.pie_pro_sty,"option":_vm.option6}})],1)],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var systemMonitoring_systemMonitoringPage = (esExports);
// CONCATENATED MODULE: ./src/views/systemMonitoring/systemMonitoringPage.vue
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
  systemMonitoringPage,
  systemMonitoring_systemMonitoringPage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_systemMonitoring_systemMonitoringPage = __webpack_exports__["default"] = (Component.exports);


/***/ })

});