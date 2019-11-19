webpackJsonp([7],{

/***/ "00t/":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "DFnG":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("00t/");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("223d7c40", content, true, {});

/***/ }),

/***/ "mDZD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/projectSpace/projectSetting.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var projectSetting = ({
  data: function data() {
    return {
      index: 0,
      input: 'dadasdas',
      textarea: '',
      setingDisabled: true,
      num: 11,
      loading: true,
      userTable: [],
      addMember: false,
      memberName: ''
    };
  },
  created: function created() {
    this.index = this.$route.params.idSet;
    // 项目设置函数调用
    this.setProjectData();
  },
  mounted: function mounted() {},

  methods: {
    // 进行项目设置
    setProjectData: function setProjectData() {
      var _this = this;

      var error = this.$t('views.projectContent.requestError');
      var obj = {
        project_name: 'Timothy',
        start_time: '2003-01-30',
        state: '开发中',
        end_time: '1985-43-30',
        current_page: 1
      };
      this.$get('/project-space/project-getting', obj).then(function (res) {
        if (res.isOk === false) {
          _this.$message({
            showClose: true,
            message: error,
            type: 'error'
          });
        } else {
          console.log(stringify_default()(res));
          _this.loading = false;
          _this.userTable = res.data.member_manage;
        }
      });
    },
    projectCurrentChange: function projectCurrentChange(val) {
      console.log(val);
    },
    handleSelectionChange: function handleSelectionChange(val) {
      // 选中的函数
      // console.log(val)
      this.selectSelection = val;
    },
    devDelete: function devDelete() {},
    handleClose: function handleClose(done) {
      done();
    },
    changeDialogMember: function changeDialogMember() {
      this.addMember = false;
    },

    // 打开弹出窗
    addClick: function addClick() {
      this.addMember = true;
    },

    // 确定按钮
    settingClick: function settingClick() {
      this.$router.go(-1);
    },

    // 取消按钮
    cancelBtn: function cancelBtn() {
      this.$router.go(-1);
    }
  },
  components: {},
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6eebedf0","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/projectSpace/projectSetting.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-personal"},[_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v(_vm._s(_vm.$t('views.modelPrediction.basicInf')))])]),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-develop-text"},[_c('div',{staticClass:"views-task-input"},[_c('span',{staticClass:"views-project-setting"},[_vm._v("存储空间ID  ")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":"","disabled":_vm.setingDisabled},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}})],1)]),_vm._v(" "),_c('div',{staticClass:"views-develop-text"},[_c('div',{staticClass:"views-task-input"},[_c('span',{staticClass:"views-project-setting"},[_vm._v("存储空间KEY  ")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":"","disabled":_vm.setingDisabled},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}})],1)])]),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-task-input"},[_c('span',{staticClass:"views-project-setting"},[_vm._v("项目名称  ")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}})],1),_vm._v(" "),_c('div',{staticClass:"views-task-image"},[_c('span',{staticClass:"views-project-setting views-span"},[_vm._v("项目描述   ")]),_vm._v(" "),_c('el-input',{attrs:{"type":"textarea","rows":6,"placeholder":_vm.$t('views.projectContent.enterContent')},model:{value:(_vm.textarea),callback:function ($$v) {_vm.textarea=$$v},expression:"textarea"}})],1)]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-develop-mount"},[_c('el-button',{staticClass:"view-btn-medium",attrs:{"type":"primary"},on:{"click":_vm.addClick}},[_vm._v("添加")])],1),_vm._v(" "),_c('div',{staticClass:"views-table-content"},[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"multipleTable",staticClass:"tab-content",staticStyle:{"width":"100%"},attrs:{"data":_vm.userTable,"tooltip-effect":"dark","border":""},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"prop":"user_name","label":"用户名","header-align":"center","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"add_time","label":"添加时间","show-overflow-tooltip":"","header-align":"center","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('views.projectContent.operation'),"header-align":"center","align":"center","width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{staticClass:"views-table-span views-table-margin del ",attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.devDelete(scope.$index, scope.row)}}},[_vm._v(_vm._s(_vm.$t('views.projectContent.delete')))])]}}])}),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])])],1),_vm._v(" "),_c('div',{staticClass:"views-page"},[_c('el-pagination',{attrs:{"page-size":10,"pager-count":_vm.num,"layout":"prev, pager, next","total":100},on:{"current-change":_vm.projectCurrentChange}})],1)],1),_vm._v(" "),_c('div',{staticClass:"views-develop-btn"},[_c('el-button',{staticClass:"cancel",on:{"click":_vm.cancelBtn}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{staticClass:"view-btn-big",attrs:{"type":"primary"},on:{"click":_vm.settingClick}},[_vm._v("确定")])],1)]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"添加项目成员","visible":_vm.addMember,"width":"30%","before-close":_vm.handleClose,"top":"30vh","custom-class":"views-dialog"},on:{"update:visible":function($event){_vm.addMember=$event}}},[_c('div',{staticClass:"views-dialog-develop"},[_c('span',{staticClass:"views-dialog-name"},[_vm._v("请输入用户名")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.memberName),callback:function ($$v) {_vm.memberName=$$v},expression:"memberName"}})],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"cancel",on:{"click":function($event){_vm.addMember = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{staticClass:"primary",attrs:{"type":"primary"},on:{"click":_vm.changeDialogMember}},[_vm._v("确 定")])],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("成员管理")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var projectSpace_projectSetting = (esExports);
// CONCATENATED MODULE: ./src/views/projectSpace/projectSetting.vue
function injectStyle (ssrContext) {
  __webpack_require__("DFnG")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6eebedf0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  projectSetting,
  projectSpace_projectSetting,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_projectSpace_projectSetting = __webpack_exports__["default"] = (Component.exports);


/***/ })

});