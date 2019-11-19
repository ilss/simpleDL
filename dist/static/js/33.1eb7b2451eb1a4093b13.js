webpackJsonp([33],{

/***/ "UwLz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/util/index.js
var util = __webpack_require__("ZoQJ");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/projectSpace/partTraningDetails.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var partTraningDetails = ({
  data: function data() {
    return {
      index: '',
      dialogTask: false,
      remarksDialog: false,
      taskName: '',
      taskBasic: '',
      taskarea: '',
      editDisabled: true,
      num: 11,
      trainingDetails: [],
      opData: [{
        value: '1000',
        label: '过去一周'
      }, {
        value: '2000',
        label: '过去一天'
      }, {
        value: '3000',
        label: '过去一小时'
      }],
      value: 'adsasda',
      journal: '',
      useProject: 'height:400px;',
      taskResourcesData: [],
      resources: ''
    };
  },
  created: function created() {
    this.index = this.$route.params.idTask;
    console.log(this.$route.params);
    // 获取训练任务数据函数调用
    this.getDevelopmentDetails();
    // 获取资源信息数据 函数调用
    this.getResouseData();
  },
  mounted: function mounted() {},

  methods: {
    // 获取训练任务详情
    getDevelopmentDetails: function getDevelopmentDetails() {
      var _this = this;

      // console.log(this.$route.params.id)
      var error = this.$t('views.projectContent.requestError');
      this.$get('/project-space/task-details', error).then(function (res) {
        if (res.isOk === false) {
          _this.$message({
            showClose: true,
            message: error,
            type: 'error'
          });
        } else {
          // console.log(JSON.stringify(res.data))
          // 基本信息
          _this.taskBasic = res.data.basic_inf;
          // 环境名称
          _this.taskName = _this.taskBasic.task_name;
          // 备注信息
          _this.taskarea = res.data.remarks;
          // 训练日志
          _this.journal = res.data.training_journal;
          // 资源数据监控
          _this.trainingDetails = res.data.resources_monitor;
        }
      });
    },

    // 获取资源信息数据
    getResouseData: function getResouseData() {
      var _this2 = this;

      var error = this.$t('views.projectContent.requestError');
      this.$get('/project-space/task-resources', error).then(function (res) {
        if (res.isOk === false) {
          _this2.$message({
            showClose: true,
            message: error,
            type: 'error'
          });
        } else {
          // 资源使用情况
          _this2.resources = res.data.resources;
          // console.log(JSON.stringify(this.resources))
          _this2.taskRsourcesUse(res.data.resources);
        }
      });
    },

    // 确定修改任务名称按钮
    changeDialogSingle: function changeDialogSingle() {
      this.dialogTask = false;
    },

    // 确定修改备注内容
    remarksDialogSingle: function remarksDialogSingle() {
      this.remarksDialog = false;
    },
    handleClose: function handleClose(done) {
      done();
    },

    // 打开修改任务名称的弹出框
    taskEdit: function taskEdit() {
      this.dialogTask = true;
    },

    // 打开修改备注的弹出框
    remarksEdit: function remarksEdit() {
      this.remarksDialog = true;
    },

    // 分页
    taskCurrentChange: function taskCurrentChange(val) {
      console.log(val);
    },
    handleSelectionChange: function handleSelectionChange(val) {},
    trainingIndex: function trainingIndex(index) {
      return index + 1;
    },
    changeLog: function changeLog() {},

    // 项目使用情况数据渲染
    taskRsourcesUse: function taskRsourcesUse(resources) {
      var _this3 = this;

      setTimeout(function () {
        var color = ['#F17472', '#42E1BB', '#FEC633', '#54BECC'];
        // console.log(JSON.stringify(resources))
        console.log(resources);

        for (var i = 0; i < resources.length; i++) {
          var echartsData = {};
          // 图标数据
          echartsData.echarts = Object(util["b" /* echratsData */])(color, resources[i]);
          // 节点资源信息ID
          echartsData.resources_id = resources[i].resources_id;
          // 节点名称
          echartsData.node_name = resources[i].node_name;
          // 节点类型
          echartsData.node_type = resources[i].node_type;
          // 默认时间段
          echartsData.value = resources[i].value;
          _this3.taskResourcesData.push(echartsData);
        }
        console.log(_this3.taskResourcesData);
      }, 3000);
    },
    changeTimes: function changeTimes($event, item) {
      console.log($event);
      console.log(item);
    }
  },
  components: {},
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-45dfdef4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/projectSpace/partTraningDetails.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-personal"},[_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v(_vm._s(_vm.$t('views.modelPrediction.basicInf')))])]),_vm._v(" "),(_vm.taskBasic !== '')?_c('table',{staticClass:"views-project-details views-tabel-details"},[_c('tr',[_c('td',{staticClass:"views-basic-color1"},[_vm._v("任务名称")]),_vm._v(" "),_c('td',{staticClass:"views-basic-name"},[_c('el-input',{attrs:{"placeholder":"","disabled":_vm.editDisabled},model:{value:(_vm.taskName),callback:function ($$v) {_vm.taskName=$$v},expression:"taskName"}}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-edit views-icon-edit",on:{"click":_vm.taskEdit}})],1),_vm._v(" "),_c('td',{staticClass:"views-basic-color1"},[_vm._v("作业状态")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.taskBasic.task_status.label))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"views-basic-color2"},[_vm._v("引擎类型")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3"},[_vm._v(_vm._s(_vm.taskBasic.engine_type))]),_vm._v(" "),_c('td',{staticClass:"views-basic-color2"},[_vm._v("ID")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3"},[_vm._v(_vm._s(_vm.taskBasic.task_id))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"views-basic-color1"},[_vm._v("创建时间")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.taskBasic.create_time))]),_vm._v(" "),_c('td',{staticClass:"views-basic-color1"},[_vm._v("运行时长")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.taskBasic.run_time))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"views-basic-color2"},[_vm._v("运行参数")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3"},[_vm._v(_vm._s(_vm.taskBasic.run_params))]),_vm._v(" "),_c('td',{staticClass:"views-basic-color2"},[_vm._v("代码目录")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3"},[_vm._v(_vm._s(_vm.taskBasic.code_list))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"views-basic-color1"},[_vm._v("计算节点个数")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.taskBasic.node_num))]),_vm._v(" "),_c('td',{staticClass:"views-basic-color1"},[_vm._v("启动文件")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.taskBasic.startup_file))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"views-basic-color2"},[_vm._v("计算节点规格")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3"},[_vm._v(_vm._s(_vm.taskBasic.node_spec))]),_vm._v(" "),_c('td',{staticClass:"views-basic-color2"},[_vm._v("训练数据集")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3"},[_vm._v(_vm._s(_vm.taskBasic.training_data))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"views-basic-color1"},[_vm._v("可视化链接")]),_vm._v(" "),_c('td',{staticClass:"views-table-link",attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.taskBasic.visual_link))])])]):_vm._e(),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"views-develop-remarks"},[_c('div',{staticClass:"views-develop-edit"},[_c('i',{staticClass:"iconfont icon-edit views-icon-edit",on:{"click":_vm.remarksEdit}})]),_vm._v(" "),_c('el-input',{attrs:{"type":"textarea","rows":8,"placeholder":"请输入内容","disabled":_vm.editDisabled},model:{value:(_vm.taskarea),callback:function ($$v) {_vm.taskarea=$$v},expression:"taskarea"}})],1),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"views-task-news"},[_c('div',{staticClass:"views-task-select"},[_c('el-select',{ref:"changeFocus",attrs:{"placeholder":"请选择"},on:{"change":_vm.changeLog},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium",attrs:{"type":"primary"}},[_vm._v("最新日志")])],1)]),_vm._v(" "),_c('p',{staticClass:"views-task-text"},[_vm._v("在运行日志内使用鼠标上下滚动获取更多的日志")]),_vm._v(" "),_c('div',{staticClass:"views-task-log"},[_c('el-scrollbar',{staticStyle:{"height":"100%"}},[_c('div',{staticClass:"veiws-text-log"},[_vm._v("\n                "+_vm._s(_vm.journal)+"\n            ")])])],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"views-table-content"},[_c('el-table',{ref:"multipleTable",staticClass:"tab-content",staticStyle:{"width":"100%"},attrs:{"data":_vm.trainingDetails,"tooltip-effect":"dark","border":""},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"prop":"node_name","label":"节点名称","width":"110","header-align":"center","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"node_type","label":"节点类型","width":"100","header-align":"center","align":"center","show-overflow-tooltip":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"cpu_use","label":"CPU使用率","header-align":"center","align":"center","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"memory_use","label":"内存使用","show-overflow-tooltip":"","header-align":"center","align":"center","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"GPU使用率","header-align":"center","align":"left","show-overflow-tooltip":""},scopedSlots:_vm._u([{key:"default",fn:function(scope){return _vm._l((scope.row.gpu_use),function(item,key){return _c('span',{key:key,staticClass:"views-table-details views-table-margin",attrs:{"size":"mini"}},[_vm._v("\n                        "+_vm._s(key)+" : "+_vm._s(item)+"\n                    ")])})}}])}),_vm._v(";\n            "),_c('el-table-column',{attrs:{"label":"显存使用","header-align":"center","align":"left","show-overflow-tooltip":""},scopedSlots:_vm._u([{key:"default",fn:function(scope){return _vm._l((scope.row.video_memory),function(item,key){return _c('span',{key:key,staticClass:"views-table-details views-table-margin",attrs:{"size":"mini"}},[_vm._v("\n                        "+_vm._s(key)+" : "+_vm._s(item)+"\n                    ")])})}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"登录信息","header-align":"center","align":"left","show-overflow-tooltip":""},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{staticClass:"views-table-details views-table-margin",attrs:{"size":"mini"}},[_vm._v("\n                        SSH登录地址 : "+_vm._s(scope.row.login_inf.ssh_address)+"\n                    ")]),_vm._v(" "),_c('span',{staticClass:"views-table-details views-table-margin",attrs:{"size":"mini"}},[_vm._v("\n                        SSH端口 : "+_vm._s(scope.row.login_inf.ssh_port)+"\n                    ")]),_vm._v(" "),_c('span',{staticClass:"views-table-details views-table-margin",attrs:{"size":"mini"}},[_vm._v("\n                        密码 : "+_vm._s(scope.row.login_inf.password)+"\n                    ")])]}}])})],1),_vm._v(" "),_c('div',{staticClass:"views-charts-box"},_vm._l((_vm.taskResourcesData),function(item,index){return _c('div',{key:index,staticClass:"views-charts-mt views-charts-task"},[_c('div',{staticClass:"views-node-name"},[_c('span',[_vm._v("节点名称："+_vm._s(item.node_name))]),_vm._v(" "),_c('span',[_vm._v("（节点类型："+_vm._s(item.node_type)+"）")])]),_vm._v(" "),_c('div',{staticClass:"views-chats-times"},[_c('el-select',{attrs:{"placeholder":"请选择","name":String(index)},on:{"change":function($event){_vm.changeTimes($event,item)}},model:{value:(item.value),callback:function ($$v) {_vm.$set(item, "value", $$v)},expression:"item.value"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('sedu-echarts',{attrs:{"domId":'taskUse'+index,"option":item.echarts,"myStyle":_vm.useProject}})],1)}))],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"修改任务名称","visible":_vm.dialogTask,"width":"30%","before-close":_vm.handleClose,"top":"30vh","custom-class":"views-dialog"},on:{"update:visible":function($event){_vm.dialogTask=$event}}},[_c('div',{staticClass:"views-dialog-develop"},[_c('span',{staticClass:"views-dialog-name"},[_vm._v("任务名称")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.taskName),callback:function ($$v) {_vm.taskName=$$v},expression:"taskName"}})],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"cancel",on:{"click":function($event){_vm.dialogDev = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{staticClass:"primary",attrs:{"type":"primary"},on:{"click":_vm.changeDialogSingle}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"修改备注信息","visible":_vm.remarksDialog,"width":"30%","before-close":_vm.handleClose,"top":"30vh","custom-class":"views-dialog"},on:{"update:visible":function($event){_vm.remarksDialog=$event}}},[_c('div',{staticClass:"views-dialog-develop"},[_c('span',{staticClass:"views-dialog-remarks"},[_vm._v("备注信息")]),_vm._v(" "),_c('el-input',{attrs:{"type":"textarea","rows":8,"placeholder":"请输入内容"},model:{value:(_vm.taskarea),callback:function ($$v) {_vm.taskarea=$$v},expression:"taskarea"}})],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"cancel",on:{"click":function($event){_vm.remarksDialog = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{staticClass:"primary",attrs:{"type":"primary"},on:{"click":_vm.remarksDialogSingle}},[_vm._v("确 定")])],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("备注信息")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("训练日志")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("资源监控")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var projectSpace_partTraningDetails = (esExports);
// CONCATENATED MODULE: ./src/views/projectSpace/partTraningDetails.vue
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
  partTraningDetails,
  projectSpace_partTraningDetails,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_projectSpace_partTraningDetails = __webpack_exports__["default"] = (Component.exports);


/***/ })

});