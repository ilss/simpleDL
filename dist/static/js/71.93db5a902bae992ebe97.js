webpackJsonp([71],{

/***/ "rg0j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/clusterMonitoring/nodeControlDetail.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var nodeControlDetail = ({
  name: 'nodeControlDetail',
  data: function data() {
    return {
      cname: 'charts',
      tableData1: { // 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        loading: true
      },
      tableData2: { // 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        loading: true
      },
      base_info: {},
      cpu: {
        option: {},
        loading: true,
        data: ''
      },
      memory: {
        option: {},
        loading: true,
        data: ''
      },
      pods: {
        option: {},
        loading: true,
        data: ''
      },
      gpu: {
        gpu_number: {},
        gpu_ave: {},
        eme_ave: {},
        gpu_detail: {
          statistics: {},
          list: []
        }
      },
      show: false
    };
  },
  created: function created() {
    var _this = this;

    this.$axios.post('/node-details', { node_id: this.$route.query.nodeId }).then(function (data) {
      _this.base_info = extends_default()({}, data.data.data.base_info);
      _this.tableData1.msg = [].concat(toConsumableArray_default()(data.data.data.present));
      _this.tableData1.loading = false;
      _this.tableData2.msg = [].concat(toConsumableArray_default()(data.data.data.docker_list));
      _this.tableData2.loading = false;
      _this.gpu = extends_default()({}, data.data.data.gpu);
      _this.cpu.data = data.data.data.resource_used.cpu.all_num;
      _this.cpu.loading = false;
      _this.cpu.option = {
        tooltip: {
          show: true,
          formatter: '{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 100,
          y: 7,
          itemGap: 3,
          data: [_this.$t('views.clusterMonitoring.limitValue'), _this.$t('views.clusterMonitoring.requestValue')]
        },
        series: [{
          type: 'pie',
          clockWise: false,
          radius: ['70%', '90%'],
          label: {
            show: false
          },
          data: [{
            value: data.data.data.resource_used.cpu.limit_value,
            name: _this.$t('views.clusterMonitoring.limitValue'),
            itemStyle: {
              color: '#417dd0'
            }
          }, {
            value: data.data.data.resource_used.cpu.all_num - data.data.data.resource_used.cpu.limit_value,
            tooltip: { show: false },
            itemStyle: {
              color: 'rgba(0,0,0,0)'
            }
          }]
        }, {
          type: 'pie',
          clockWise: false,
          radius: ['50%', '70%'],
          label: {
            show: false
          },
          data: [{
            value: data.data.data.resource_used.cpu.request_value,
            name: _this.$t('views.clusterMonitoring.requestValue'),
            itemStyle: {
              color: '#2ad7ae'
            }
          }, {
            value: data.data.data.resource_used.cpu.all_num - data.data.data.resource_used.cpu.request_value,
            tooltip: { show: false },
            itemStyle: {
              color: 'rgba(0,0,0,0)'
            }
          }]
        }]
      };
      _this.memory.data = data.data.data.resource_used.memory.all_num;
      _this.memory.loading = false;
      _this.memory.option = {
        tooltip: {
          show: true,
          formatter: '{b} : {c}MB ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 100,
          y: 7,
          itemGap: 3,
          data: [_this.$t('views.clusterMonitoring.limitValue'), _this.$t('views.clusterMonitoring.requestValue')]
        },
        series: [{
          type: 'pie',
          clockWise: false,
          radius: ['70%', '90%'],
          label: {
            show: false
          },
          data: [{
            value: data.data.data.resource_used.memory.limit_value,
            name: _this.$t('views.clusterMonitoring.limitValue'),
            itemStyle: {
              color: '#417dd0'
            }
          }, {
            value: data.data.data.resource_used.memory.all_num * 1024 - data.data.data.resource_used.memory.limit_value,
            tooltip: { show: false },
            itemStyle: {
              color: 'rgba(0,0,0,0)'
            }
          }]
        }, {
          type: 'pie',
          clockWise: false,
          radius: ['50%', '70%'],
          label: {
            show: false
          },
          data: [{
            value: data.data.data.resource_used.memory.request_value,
            name: _this.$t('views.clusterMonitoring.requestValue'),
            itemStyle: {
              color: '#2ad7ae'
            }
          }, {
            value: data.data.data.resource_used.memory.all_num * 1024 - data.data.data.resource_used.memory.request_value,
            tooltip: { show: false },
            itemStyle: {
              color: 'rgba(0,0,0,0)'
            }
          }]
        }]
      };
      _this.pods.data = data.data.data.resource_used.pods.all_num;
      _this.pods.loading = false;
      _this.pods.option = {
        tooltip: {
          show: true,
          formatter: '{b} : {c} ({d}%)'
        },
        color: ['#f7a923', '#f2e0c2'],
        series: [{
          type: 'pie',
          radius: ['70%', '90%'],
          label: {
            show: false
          },
          data: [{
            name: _this.$t('views.clusterMonitoring.assigned'),
            value: data.data.data.resource_used.pods.allocated
          }, {
            tooltip: { show: false },
            value: data.data.data.resource_used.pods.all_num - data.data.data.resource_used.pods.allocated
          }]
        }]
      };
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4e8d3903","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/clusterMonitoring/nodeControlDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-cluster-monitoring-node-control-detail"},[_c('ul',[_c('li',[_c('div',[_c('div',[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.hostName")))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.base_info.node_name))])]),_vm._v(" "),_c('div',[_c('div',[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.creationTime")))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.base_info.create_time))])])]),_vm._v(" "),_c('li',[_c('div',[_c('div',[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.ip")))]),_vm._v(" "),_c('div',[_vm._v("\n                    "+_vm._s(_vm.base_info.node_address)+"\n                ")])]),_vm._v(" "),_c('div',[_c('div',[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.updateTime")))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.base_info.update_time))])])]),_vm._v(" "),_c('li',[_c('div',[_c('div',[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.kernelVersion")))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.base_info.core_version))])]),_vm._v(" "),_c('div',[_c('div',[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.operatingSystem")))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.base_info.node_system))])])]),_vm._v(" "),_c('li',[_c('div',[_c('div',[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.dockerVersion")))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.base_info.cidr_run_version))])]),_vm._v(" "),_c('div',[_c('div',[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.status")))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.base_info.status))])])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('p',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.allocatedResources")))]),_vm._v(" "),_c('div',{staticClass:"chart-content"},[_c('div',{staticClass:"chart-item"},[_c('sedu-echarts',{attrs:{"domId":"a","cname":_vm.cname,"option":_vm.cpu.option}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.cpu.loading),expression:"!cpu.loading"}],staticClass:"msg"},[_c('p',[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.totalAmount")))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.cpu.data))])]),_vm._v(" "),_c('p',[_vm._v("CPU allocation(cores)")])],1),_vm._v(" "),_c('div',{staticClass:"chart-item"},[_c('sedu-echarts',{attrs:{"domId":"b","cname":_vm.cname,"option":_vm.memory.option}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.memory.loading),expression:"!memory.loading"}],staticClass:"msg"},[_c('p',[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.totalAmount")))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.memory.data)+"GB")])]),_vm._v(" "),_c('p',[_vm._v("Memory allocation(bytes)")])],1),_vm._v(" "),_c('div',{staticClass:"chart-item"},[_c('sedu-echarts',{attrs:{"domId":"c","cname":_vm.cname,"option":_vm.pods.option}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.pods.loading),expression:"!pods.loading"}],staticClass:"msg"},[_c('p',[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.totalAmount")))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.pods.data))])]),_vm._v(" "),_c('p',[_vm._v("Pods allocation")])],1)])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('p',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.statusQuo")))]),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.tableData1.loading),expression:"tableData1.loading"}],staticClass:"tab-content",attrs:{"data":_vm.tableData1.msg,"border":""}},[_c('el-table-column',{attrs:{"prop":"type","label":_vm.$t("views.clusterMonitoring.type")}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.clusterMonitoring.status")},scopedSlots:_vm._u([{key:"default",fn:function(item){return [_vm._v("\n                    "+_vm._s(item.row.status===1?'True':'False')+"\n                ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"heartbeat","label":_vm.$t("views.clusterMonitoring.recentHeartbeat")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"last_modify","label":_vm.$t("views.clusterMonitoring.recentChanges")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"reason","label":_vm.$t("views.clusterMonitoring.reason")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"messages","label":_vm.$t("views.clusterMonitoring.message")}}),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])])],1)],1),_vm._v(" "),_c('div',{staticClass:"item else"},[_c('p',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.nodeControlDetail.p1")))]),_vm._v(" "),_c('div',{staticClass:"gpu-content"},[_c('div',{staticClass:"gpu-top"},[_c('div',{staticClass:"gpu-top-item"},[_c('div',{staticClass:"top"},[_c('span',{staticClass:"name"},[_vm._v("GPU NUMBER："+_vm._s(_vm.gpu.gpu_number.use))]),_vm._v(" "),_c('div',{staticClass:"legend"},[_c('div',{staticClass:"legend-item"},[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.use")))]),_vm._v(" "),_c('div',{staticClass:"legend-item"},[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.free")))])])]),_vm._v(" "),_c('div',{staticClass:"center"},[_c('p',{style:({width:((_vm.gpu.gpu_number.use/_vm.gpu.gpu_number.all*100) + "%")})})]),_vm._v(" "),_c('div',{staticClass:"bottom"},[_c('span',[_vm._v("TeslaP100-SXM2-16GB:"+_vm._s(_vm.gpu.gpu_number.use))])])]),_vm._v(" "),_c('div',{staticClass:"gpu-top-item"},[_c('div',{staticClass:"top"},[_c('span',{staticClass:"name"},[_vm._v("GPU AVE UTILIZATION")]),_vm._v(" "),_c('div',{staticClass:"legend"},[_c('div',{staticClass:"legend-item"},[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.use")))]),_vm._v(" "),_c('div',{staticClass:"legend-item"},[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.free")))])])]),_vm._v(" "),_c('div',{staticClass:"center"},[_c('p',{style:({width:((_vm.gpu.gpu_ave.use/_vm.gpu.gpu_ave.all*100) + "%")})})]),_vm._v(" "),_c('div',{staticClass:"bottom"},[_c('span',[_vm._v("MAX:"+_vm._s(_vm.gpu.gpu_ave.max)+"%")]),_vm._v(" "),_c('span',[_vm._v("MIN:"+_vm._s(_vm.gpu.gpu_ave.min)+"%")]),_vm._v(" "),_c('span',[_vm._v("USE:"+_vm._s(_vm.gpu.gpu_ave.use))])])]),_vm._v(" "),_c('div',{staticClass:"gpu-top-item"},[_c('div',{staticClass:"top"},[_c('span',{staticClass:"name"},[_vm._v("MEM AVE UTILIZATION")]),_vm._v(" "),_c('div',{staticClass:"legend"},[_c('div',{staticClass:"legend-item"},[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.use")))]),_vm._v(" "),_c('div',{staticClass:"legend-item"},[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.free")))])])]),_vm._v(" "),_c('div',{staticClass:"center"},[_c('p',{style:({width:((_vm.gpu.eme_ave.use/_vm.gpu.eme_ave.all*100) + "%")})})]),_vm._v(" "),_c('div',{staticClass:"bottom"},[_c('span',[_vm._v("MAX:"+_vm._s(_vm.gpu.eme_ave.max)+"%")]),_vm._v(" "),_c('span',[_vm._v("MIN:"+_vm._s(_vm.gpu.eme_ave.min)+"%")]),_vm._v(" "),_c('span',[_vm._v("USE:"+_vm._s(_vm.gpu.eme_ave.use))])])])]),_vm._v(" "),_c('div',{staticClass:"gpu-bottom"},[_c('div',{staticClass:"legend"},[_c('div',{staticClass:"legend-item"},[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.fullLoad"))+"："+_vm._s(_vm.gpu.gpu_detail.statistics.full))]),_vm._v(" "),_c('div',{staticClass:"legend-item"},[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.section"))+"："+_vm._s(_vm.gpu.gpu_detail.statistics.some))]),_vm._v(" "),_c('div',{staticClass:"legend-item"},[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.free"))+"："+_vm._s(_vm.gpu.gpu_detail.statistics.free))]),_vm._v(" "),_c('div',{staticClass:"legend-item"},[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.unknown"))+"："+_vm._s(_vm.gpu.gpu_detail.statistics.unknow))])]),_vm._v(" "),_c('div',{staticClass:"watch"},_vm._l((_vm.gpu.gpu_detail.list),function(item,index){return _c('div',{key:index,staticClass:"watch-item",class:item.gpu_use===0?'free':item.gpu_use>=80?'full':'some'},[_c('router-link',{attrs:{"to":{name:'gpuDetail', query:{nodeId:_vm.$route.query.nodeId,gpuId:item.gpu_id}}}},[_c('p',{staticClass:"address"},[_vm._v("LOCALHOST")]),_vm._v(" "),_c('p',[_vm._v("ID:GPU_"+_vm._s(item.gpu_id))]),_vm._v(" "),_c('p',[_vm._v("GPU:"+_vm._s(item.gpu_use)+"%")]),_vm._v(" "),_c('p',[_vm._v("MEM:"+_vm._s(item.gpu_mem)+"%")])])],1)}))])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('p',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t("views.clusterMonitoring.containerGroup")))]),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.tableData2.loading),expression:"tableData2.loading"}],staticClass:"tab-content",attrs:{"data":_vm.tableData2.msg,"border":""}},[_c('el-table-column',{attrs:{"prop":"name","label":_vm.$t("views.clusterMonitoring.name")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"node_name","label":_vm.$t("views.clusterMonitoring.node")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":_vm.$t("views.clusterMonitoring.status")},scopedSlots:_vm._u([{key:"default",fn:function(item){return [_vm._v("\n                    "+_vm._s(item.row.status===1?'Running':'Stop')+"\n                ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"restart","label":_vm.$t("views.clusterMonitoring.numberOfRestarts")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":_vm.$t("views.clusterMonitoring.created")}}),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])])],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var clusterMonitoring_nodeControlDetail = (esExports);
// CONCATENATED MODULE: ./src/views/clusterMonitoring/nodeControlDetail.vue
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
  nodeControlDetail,
  clusterMonitoring_nodeControlDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_clusterMonitoring_nodeControlDetail = __webpack_exports__["default"] = (Component.exports);


/***/ })

});