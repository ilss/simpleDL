webpackJsonp([56],{

/***/ "32yv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./src/util/index.js
var util = __webpack_require__("ZoQJ");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/personalSpace/developDetails.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var developDetails = ({
  data: function data() {
    return {
      index: '',
      devDetails: '',
      devBasic: '',
      developName: '',
      editDisabled: true,
      remarksDialog: false,
      dialogDev: false,
      server: {},
      remarks: '',
      developarea: '',
      configInf: '',
      useProject: 'height:400px;',
      resourcesUseData: {},
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
      value: '1000'
    };
  },
  created: function created() {
    // 获取开发环境信息函数调用
    this.getDevelopmentDetails();
    this.projectUse();
    this.index = this.$route.params.idChild;
    console.log(this.$route.params);
    // 获取不同时间段函数调用
    this.getTimeSlot();
  },
  mounted: function mounted() {},

  methods: {
    // 获取开发环境信息函数
    getDevelopmentDetails: function getDevelopmentDetails() {
      var _this = this;

      // console.log(this.$route.params.id)
      var error = this.$t('views.projectContent.requestError');
      this.$get('/project-space/development-details', error).then(function (res) {
        if (res.isOk === false) {
          _this.$message({
            showClose: true,
            message: error,
            type: 'error'
          });
        } else {
          // 基本信息
          _this.devBasic = res.data.basic_inf;
          // 环境名称
          _this.developName = _this.devBasic.develop_name;
          // 备注信息
          _this.developarea = _this.devBasic.remarks;
          // 服务器地址
          _this.server = res.data.server_address;
          // 配置信息
          _this.configInf = res.data.config_inf;
          // 资源使用情况
          _this.resources = res.data.resources;
        }
      });
    },

    // 获取不同时间段
    getTimeSlot: function getTimeSlot() {
      var _this2 = this;

      var error = this.$t('views.projectContent.requestError');
      this.$get('/project-space/time_slot', error).then(function (res) {
        if (res.isOk === false) {
          _this2.$message({
            showClose: true,
            message: error,
            type: 'error'
          });
        } else {
          console.log(stringify_default()(res));
          // this.opData = res.time_slot
        }
      });
    },

    // 修改环境名称
    nameEdit: function nameEdit() {
      this.dialogDev = true;
    },
    changeTimes: function changeTimes() {},

    // 修改备注信息
    remarksEdit: function remarksEdit() {
      this.remarksDialog = true;
    },
    handleClose: function handleClose(done) {
      done();
    },

    // 修改环境名称确定按钮
    changeDialogSingle: function changeDialogSingle() {
      this.dialogDev = false;
    },

    // 修改备注信息确定按钮
    remarksDialogSingle: function remarksDialogSingle() {
      this.remarksDialog = false;
    },

    // 项目使用情况数据渲染
    projectUse: function projectUse() {
      var _this3 = this;

      setTimeout(function () {
        var color = ['#F17472', '#42E1BB', '#FEC633', '#54BECC'];
        var resources = _this3.resources;
        _this3.resourcesUseData = Object(util["b" /* echratsData */])(color, resources, '');
      }, 3000);
    }
  },
  components: {},
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-04b85d26","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/personalSpace/developDetails.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-personal"},[_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v(_vm._s(_vm.$t('views.modelPrediction.basicInf')))])]),_vm._v(" "),(_vm.devBasic !== '')?_c('table',{staticClass:"views-project-details views-tabel-details"},[_c('tr',[_c('td',{staticClass:"views-basic-color1"},[_vm._v("环境名称")]),_vm._v(" "),_c('td',{staticClass:"views-basic-name"},[_c('el-input',{attrs:{"placeholder":"","disabled":_vm.editDisabled},model:{value:(_vm.developName),callback:function ($$v) {_vm.developName=$$v},expression:"developName"}}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-edit views-icon-edit",on:{"click":_vm.nameEdit}})],1),_vm._v(" "),_c('td',{staticClass:"views-basic-color1"},[_vm._v("环境ID")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.devBasic.develop_id))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"views-basic-color2"},[_vm._v("状态")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3"},[_vm._v(_vm._s(_vm.devBasic.develop_status.label))]),_vm._v(" "),_c('td',{staticClass:"views-basic-color2"},[_vm._v("密码")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3"},[_vm._v(_vm._s(_vm.devBasic.passsword))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"views-basic-color1"},[_vm._v("创建时间")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.devBasic.create_time))]),_vm._v(" "),_c('td',{staticClass:"views-basic-color1"},[_vm._v("更新时间")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.devBasic.update_time))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"views-basic-color2"},[_vm._v("镜像分类")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3",attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.devBasic.image_class))])])]):_vm._e(),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('table',{staticClass:"views-project-details views-tabel-details"},[_c('tr',[_c('td',{staticClass:"views-basic-color1"},[_vm._v("notebook访问地址")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.server.nodebook_address))]),_vm._v(" "),_c('td',{staticClass:"views-basic-color1"},[_vm._v("远程登陆访问地址")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.server.nodebook_address))])])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"views-develop-remarks"},[_c('div',{staticClass:"views-develop-edit"},[_c('i',{staticClass:"iconfont icon-edit views-icon-edit",on:{"click":_vm.remarksEdit}})]),_vm._v(" "),_c('el-input',{attrs:{"type":"textarea","rows":8,"placeholder":"请输入内容","disabled":_vm.editDisabled},model:{value:(_vm.developarea),callback:function ($$v) {_vm.developarea=$$v},expression:"developarea"}})],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('table',{staticClass:"views-project-details views-tabel-details"},[_c('tr',[_c('td',{staticClass:"views-basic-color1"},[_vm._v("CPU")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.configInf.cpu)+"个")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color1"},[_vm._v("GPU")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.configInf.gpu)+"个")])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"views-basic-color2"},[_vm._v("内存")]),_vm._v(" "),_c('td',{staticClass:"views-basic-color3",attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.configInf.memory)+"个")])])]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('div',{staticClass:"views-charts-mt"},[_c('div',{staticClass:"views-chats-times"},[_c('el-select',{ref:"changeFocus",attrs:{"placeholder":"请选择"},on:{"change":_vm.changeTimes},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},_vm._l((_vm.opData),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('sedu-echarts',{attrs:{"domId":"developUse","option":_vm.resourcesUseData,"myStyle":_vm.useProject}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"修改环境名称","visible":_vm.dialogDev,"width":"30%","before-close":_vm.handleClose,"top":"30vh","custom-class":"views-dialog"},on:{"update:visible":function($event){_vm.dialogDev=$event}}},[_c('div',{staticClass:"views-dialog-develop"},[_c('span',{staticClass:"views-dialog-name"},[_vm._v("环境名称")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.developName),callback:function ($$v) {_vm.developName=$$v},expression:"developName"}})],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"cancel",on:{"click":function($event){_vm.dialogDev = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{staticClass:"primary",attrs:{"type":"primary"},on:{"click":_vm.changeDialogSingle}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"修改备注信息","visible":_vm.remarksDialog,"width":"30%","before-close":_vm.handleClose,"top":"30vh","custom-class":"views-dialog"},on:{"update:visible":function($event){_vm.remarksDialog=$event}}},[_c('div',{staticClass:"views-dialog-develop"},[_c('span',{staticClass:"views-dialog-remarks"},[_vm._v("备注信息")]),_vm._v(" "),_c('el-input',{attrs:{"type":"textarea","rows":8,"placeholder":"请输入内容"},model:{value:(_vm.developarea),callback:function ($$v) {_vm.developarea=$$v},expression:"developarea"}})],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"cancel",on:{"click":function($event){_vm.remarksDialog = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{staticClass:"primary",attrs:{"type":"primary"},on:{"click":_vm.remarksDialogSingle}},[_vm._v("确 定")])],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("服务器地址")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("备注信息")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("配置信息")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("资源使用情况")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var personalSpace_developDetails = (esExports);
// CONCATENATED MODULE: ./src/views/personalSpace/developDetails.vue
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
  developDetails,
  personalSpace_developDetails,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_personalSpace_developDetails = __webpack_exports__["default"] = (Component.exports);


/***/ })

});