webpackJsonp([76],{

/***/ "Xuru":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/clusterMonitoring/gpuDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var gpuDetail = ({
  name: 'gpuDetail',
  data: function data() {
    return {
      cname: 'charts',
      nodeId: '',
      gpuId: '',
      gpuTemp: {
        option: {}
      },
      gpuSe: {
        option: {}
      },
      powUsage: {
        option: {}
      },
      mem: {
        option: {}
      },
      clock: {
        option: {}
      },
      appClock: {
        option: {}
      }
    };
  },
  created: function created() {
    var _this = this;

    this.gpuId = this.$route.query.gpuId;
    this.nodeId = this.$route.query.nodeId;
    this.$axios.post('/node-gpu-cahrt', { node_id: this.nodeId, gpu_id: this.gpuId }).then(function (data) {
      _this.gpuTemp.option = {
        tooltip: {
          trigger: 'axis'
        },
        title: {
          text: 'GPU' + _this.gpuId + '_GPUTemp(C)',
          left: 20,
          textStyle: {
            fontSize: 14,
            fontWeight: 'normal'
          }
        },
        legend: {
          right: 45,
          borderRadius: 0,
          data: ['GPUTemp']
        },
        calculable: true,
        color: ['#3bd0ac', '#15c6e6'],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: data.data.data.gpu_temp.x_axis
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: 'GPUTemp',
          type: 'line',
          areaStyle: {
            color: '#8fe2ce',
            opacity: 0.7
          },
          smooth: true,
          z: 4,
          data: data.data.data.gpu_temp.value.gpu_temp
        }]
      };
      _this.gpuSe.option = {
        tooltip: {
          trigger: 'axis'
        },
        title: {
          text: 'GPU' + _this.gpuId + '_GPUSE(%)',
          left: 20,
          textStyle: {
            fontSize: 14,
            fontWeight: 'normal'
          }
        },
        legend: {
          right: 45,
          borderRadius: 0,
          data: ['GPUUtil', 'MemUsage']
        },
        calculable: true,
        color: ['#3bd0ac', '#15c6e6'],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: data.data.data.gpuse.x_axis
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: 'GPUUtil',
          type: 'line',
          areaStyle: {
            color: '#8fe2ce',
            opacity: 0.7
          },
          smooth: true,
          z: 4,
          data: data.data.data.gpuse.value.gpu_util
        }, {
          name: 'MemUsage',
          type: 'line',
          areaStyle: {
            color: '#27d9e9',
            opacity: 0.5
          },
          smooth: true,
          z: 3,
          data: data.data.data.gpuse.value.mem_usage
        }]
      };
      _this.powUsage.option = {
        tooltip: {
          trigger: 'axis'
        },
        title: {
          text: 'GPU' + _this.gpuId + '_PowUsage(W)',
          left: 20,
          textStyle: {
            fontSize: 14,
            fontWeight: 'normal'
          }
        },
        legend: {
          right: 45,
          borderRadius: 0,
          data: ['Power']
        },
        calculable: true,
        color: ['#3bd0ac', '#15c6e6'],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: data.data.data.pow_usage.x_axis
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: 'Power',
          type: 'line',
          areaStyle: {
            color: '#8fe2ce',
            opacity: 0.7
          },
          smooth: true,
          z: 4,
          data: data.data.data.pow_usage.value.power
        }]
      };
      _this.mem.option = {
        tooltip: {
          trigger: 'axis'
        },
        title: {
          text: 'GPU' + _this.gpuId + '_Mem(MB)',
          left: 20,
          textStyle: {
            fontSize: 14,
            fontWeight: 'normal'
          }
        },
        legend: {
          right: 45,
          borderRadius: 0,
          data: ['MemFree', 'MemUsed']
        },
        calculable: true,
        color: ['#3bd0ac', '#15c6e6'],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: data.data.data.mem.x_axis
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: 'MemFree',
          type: 'line',
          areaStyle: {
            color: '#8fe2ce',
            opacity: 0.7
          },
          smooth: true,
          z: 4,
          data: data.data.data.mem.value.mem_free
        }, {
          name: 'MemUsed',
          type: 'line',
          areaStyle: {
            color: '#27d9e9',
            opacity: 0.5
          },
          smooth: true,
          z: 3,
          data: data.data.data.mem.value.mem_used
        }]
      };
      _this.clock.option = {
        tooltip: {
          trigger: 'axis'
        },
        title: {
          text: 'GPU' + _this.gpuId + '_Clock(MHZ)',
          left: 20,
          textStyle: {
            fontSize: 14,
            fontWeight: 'normal'
          }
        },
        legend: {
          right: 45,
          borderRadius: 0,
          data: ['GPUMemClock', 'GPUSMClock']
        },
        calculable: true,
        color: ['#3bd0ac', '#15c6e6'],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: data.data.data.clock.x_axis
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: 'GPUMemClock',
          type: 'line',
          areaStyle: {
            color: '#8fe2ce',
            opacity: 0.7
          },
          smooth: true,
          z: 4,
          data: data.data.data.clock.value.gpu_mem_clock
        }, {
          name: 'GPUSMClock',
          type: 'line',
          areaStyle: {
            color: '#27d9e9',
            opacity: 0.5
          },
          smooth: true,
          z: 3,
          data: data.data.data.clock.value.gpu_sm_clock
        }]
      };
      _this.appClock.option = {
        tooltip: {
          trigger: 'axis'
        },
        title: {
          text: 'GPU' + _this.gpuId + '_APPClock(MHZ)',
          left: 20,
          textStyle: {
            fontSize: 14,
            fontWeight: 'normal'
          }
        },
        legend: {
          right: 45,
          borderRadius: 0,
          data: ['APPCURSMCLOCK', 'APPCURMenCLOCK']
        },
        calculable: true,
        color: ['#3bd0ac', '#15c6e6'],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: data.data.data.app_clock.x_axis
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: 'APPCURSMCLOCK',
          type: 'line',
          areaStyle: {
            color: '#8fe2ce',
            opacity: 0.7
          },
          smooth: true,
          z: 4,
          data: data.data.data.app_clock.value.appcur_sm_click
        }, {
          name: 'APPCURMenCLOCK',
          type: 'line',
          areaStyle: {
            color: '#27d9e9',
            opacity: 0.5
          },
          smooth: true,
          z: 3,
          data: data.data.data.app_clock.value.appcur_men_clock
        }]
      };
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5508198c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/clusterMonitoring/gpuDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-cluster-monitoring-node-control-detail-gpu"},[_c('div',{staticClass:"item"},[_c('sedu-echarts',{attrs:{"domId":"a","cname":_vm.cname,"option":_vm.gpuTemp.option}})],1),_vm._v(" "),_c('div',{staticClass:"item"},[_c('sedu-echarts',{attrs:{"domId":"b","cname":_vm.cname,"option":_vm.gpuSe.option}})],1),_vm._v(" "),_c('div',{staticClass:"item"},[_c('sedu-echarts',{attrs:{"domId":"c","cname":_vm.cname,"option":_vm.powUsage.option}})],1),_vm._v(" "),_c('div',{staticClass:"item"},[_c('sedu-echarts',{attrs:{"domId":"d","cname":_vm.cname,"option":_vm.mem.option}})],1),_vm._v(" "),_c('div',{staticClass:"item"},[_c('sedu-echarts',{attrs:{"domId":"e","cname":_vm.cname,"option":_vm.clock.option}})],1),_vm._v(" "),_c('div',{staticClass:"item"},[_c('sedu-echarts',{attrs:{"domId":"f","cname":_vm.cname,"option":_vm.appClock.option}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var clusterMonitoring_gpuDetail = (esExports);
// CONCATENATED MODULE: ./src/views/clusterMonitoring/gpuDetail.vue
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
  gpuDetail,
  clusterMonitoring_gpuDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_clusterMonitoring_gpuDetail = __webpack_exports__["default"] = (Component.exports);


/***/ })

});