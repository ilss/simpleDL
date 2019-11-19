webpackJsonp([17],{

/***/ "BrQ/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/userManagement/addUser.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var addUser = ({
  name: 'addUser',
  data: function data() {
    return {
      msg: {
        user_name: '',
        name: '',
        status: false,
        gender: '1',
        department: '',
        grade: '',
        classes: '',
        telephone: '',
        user_email: '',
        wexin: '',
        userinfo: '',
        password: '',
        passwordCopy: ''
      },
      initialize: false,
      url: ''
    };
  },

  methods: {
    changeModel: function changeModel(data) {
      if (data === true) {
        this.msg.password = '';
        this.msg.passwordCopy = '';
      }
    },
    reset: function reset() {
      this.initialize = false;
      for (var keys in this.msg) {
        if (keys === 'status') {
          this.msg[keys] = false;
        } else if (keys === 'gender') {
          this.msg[keys] = '1';
        } else {
          this.msg[keys] = '';
        }
      }
    },
    save: function save() {
      var _this = this;

      this.$axios.post(this.url, this.msg).then(function (data) {
        _this.$router.push({ name: 'userManagementHome' });
        _this.$message({ message: '添加成功', type: 'success' });
      });
    }
  },
  created: function created() {
    var _this2 = this;

    if (this.$route.query.userId === undefined) {
      this.url = '/add-user';
    } else {
      this.url = '/update-user';
      this.$axios.get('/userinfo-detail', { params: { user_id: this.$route.query.userId } }).then(function (data) {
        _this2.msg = assign_default()({}, _this2.msg, data.data.data);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4476f3e2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/userManagement/addUser.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-user-management-add-user"},[_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"form-item must"},[_c('span',{staticClass:"form-left"},[_vm._v(_vm._s(_vm.$t("views.userManagement.username")))]),_vm._v(" "),_c('div',{staticClass:"form-right"},[_c('el-input',{attrs:{"placeholder":_vm.$t("views.userManagement.enter")},model:{value:(_vm.msg.user_name),callback:function ($$v) {_vm.$set(_vm.msg, "user_name", $$v)},expression:"msg.user_name"}})],1)]),_vm._v(" "),_c('div',{staticClass:"form-item must"},[_c('span',{staticClass:"form-left"},[_vm._v(_vm._s(_vm.$t("views.userManagement.name")))]),_vm._v(" "),_c('div',{staticClass:"form-right"},[_c('el-input',{attrs:{"placeholder":_vm.$t("views.userManagement.enter")},model:{value:(_vm.msg.name),callback:function ($$v) {_vm.$set(_vm.msg, "name", $$v)},expression:"msg.name"}})],1)]),_vm._v(" "),_c('div',{staticClass:"form-item"},[_c('span',{staticClass:"form-left"},[_vm._v(_vm._s(_vm.$t("views.userManagement.status")))]),_vm._v(" "),_c('div',{staticClass:"form-right"},[_c('el-switch',{attrs:{"active-text":_vm.$t("views.userManagement.open"),"inactive-text":_vm.$t("views.userManagement.close")},model:{value:(_vm.msg.status),callback:function ($$v) {_vm.$set(_vm.msg, "status", $$v)},expression:"msg.status"}})],1)]),_vm._v(" "),_c('div',{staticClass:"form-item"},[_c('span',{staticClass:"form-left"},[_vm._v(_vm._s(_vm.$t("views.userManagement.gender")))]),_vm._v(" "),_c('div',{staticClass:"form-right"},[_c('el-radio',{attrs:{"label":"1"},model:{value:(_vm.msg.gender),callback:function ($$v) {_vm.$set(_vm.msg, "gender", $$v)},expression:"msg.gender"}},[_vm._v(_vm._s(_vm.$t("views.userManagement.man")))]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"},model:{value:(_vm.msg.gender),callback:function ($$v) {_vm.$set(_vm.msg, "gender", $$v)},expression:"msg.gender"}},[_vm._v(_vm._s(_vm.$t("views.userManagement.woman")))])],1)]),_vm._v(" "),_c('div',{staticClass:"form-item"},[_c('span',{staticClass:"form-left"},[_vm._v(_vm._s(_vm.$t("views.userManagement.department")))]),_vm._v(" "),_c('div',{staticClass:"form-right"},[_c('el-input',{attrs:{"placeholder":_vm.$t("views.userManagement.enter")},model:{value:(_vm.msg.department),callback:function ($$v) {_vm.$set(_vm.msg, "department", $$v)},expression:"msg.department"}})],1)]),_vm._v(" "),_c('div',{staticClass:"form-item"},[_c('span',{staticClass:"form-left"},[_vm._v(_vm._s(_vm.$t("views.userManagement.grade")))]),_vm._v(" "),_c('div',{staticClass:"form-right"},[_c('el-input',{attrs:{"placeholder":_vm.$t("views.userManagement.enter")},model:{value:(_vm.msg.grade),callback:function ($$v) {_vm.$set(_vm.msg, "grade", $$v)},expression:"msg.grade"}})],1)]),_vm._v(" "),_c('div',{staticClass:"form-item"},[_c('span',{staticClass:"form-left"},[_vm._v(_vm._s(_vm.$t("views.userManagement.class")))]),_vm._v(" "),_c('div',{staticClass:"form-right"},[_c('el-input',{attrs:{"placeholder":_vm.$t("views.userManagement.enter")},model:{value:(_vm.msg.classes),callback:function ($$v) {_vm.$set(_vm.msg, "classes", $$v)},expression:"msg.classes"}})],1)]),_vm._v(" "),_c('div',{staticClass:"form-item"},[_c('span',{staticClass:"form-left"},[_vm._v(_vm._s(_vm.$t("views.userManagement.phone")))]),_vm._v(" "),_c('div',{staticClass:"form-right"},[_c('el-input',{attrs:{"placeholder":_vm.$t("views.userManagement.enter")},model:{value:(_vm.msg.telephone),callback:function ($$v) {_vm.$set(_vm.msg, "telephone", $$v)},expression:"msg.telephone"}})],1)]),_vm._v(" "),_c('div',{staticClass:"form-item"},[_c('span',{staticClass:"form-left"},[_vm._v(_vm._s(_vm.$t("views.userManagement.email")))]),_vm._v(" "),_c('div',{staticClass:"form-right"},[_c('el-input',{attrs:{"placeholder":_vm.$t("views.userManagement.enter")},model:{value:(_vm.msg.user_email),callback:function ($$v) {_vm.$set(_vm.msg, "user_email", $$v)},expression:"msg.user_email"}})],1)]),_vm._v(" "),_c('div',{staticClass:"form-item"},[_c('span',{staticClass:"form-left"},[_vm._v(_vm._s(_vm.$t("views.userManagement.weChatNumber")))]),_vm._v(" "),_c('div',{staticClass:"form-right"},[_c('el-input',{attrs:{"placeholder":_vm.$t("views.userManagement.enter")},model:{value:(_vm.msg.wexin),callback:function ($$v) {_vm.$set(_vm.msg, "wexin", $$v)},expression:"msg.wexin"}})],1)]),_vm._v(" "),_c('div',{staticClass:"form-item row"},[_c('span',{staticClass:"form-left"},[_vm._v(_vm._s(_vm.$t("views.userManagement.personalProfile")))]),_vm._v(" "),_c('div',{staticClass:"form-right"},[_c('el-input',{attrs:{"type":"textarea","resize":"none","placeholder":_vm.$t("views.userManagement.enter")},model:{value:(_vm.msg.userinfo),callback:function ($$v) {_vm.$set(_vm.msg, "userinfo", $$v)},expression:"msg.userinfo"}})],1)]),_vm._v(" "),_c('div',{staticClass:"form-item row password"},[_c('span',{staticClass:"form-left"},[_vm._v(_vm._s(_vm.$t("views.userManagement.password")))]),_vm._v(" "),_c('div',{staticClass:"form-right"},[_c('el-input',{attrs:{"disabled":_vm.initialize,"placeholder":_vm.$t("views.userManagement.enter")},model:{value:(_vm.msg.password),callback:function ($$v) {_vm.$set(_vm.msg, "password", $$v)},expression:"msg.password"}}),_vm._v(" "),_c('el-checkbox',{on:{"change":_vm.changeModel},model:{value:(_vm.initialize),callback:function ($$v) {_vm.initialize=$$v},expression:"initialize"}},[_vm._v(_vm._s(_vm.$t("views.userManagement.addUser.p1")))])],1)]),_vm._v(" "),_c('div',{staticClass:"form-item"},[_c('span',{staticClass:"form-left"},[_vm._v(_vm._s(_vm.$t("views.userManagement.confirmPassword")))]),_vm._v(" "),_c('div',{staticClass:"form-right"},[_c('el-input',{attrs:{"disabled":_vm.initialize,"placeholder":_vm.$t("views.userManagement.enter")},model:{value:(_vm.msg.passwordCopy),callback:function ($$v) {_vm.$set(_vm.msg, "passwordCopy", $$v)},expression:"msg.passwordCopy"}})],1)]),_vm._v(" "),_c('div',{staticClass:"controls"},[_c('el-button',{staticClass:"btn",on:{"click":function($event){_vm.$router.back(-1)}}},[_vm._v(_vm._s(_vm.$t("views.userManagement.back")))]),_vm._v(" "),_c('el-button',{staticClass:"btn light",on:{"click":_vm.reset}},[_vm._v(_vm._s(_vm.$t("views.userManagement.reset")))]),_vm._v(" "),_c('el-button',{staticClass:"btn dark",on:{"click":_vm.save}},[_vm._v(_vm._s(_vm.$t("views.userManagement.save")))])],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var userManagement_addUser = (esExports);
// CONCATENATED MODULE: ./src/views/userManagement/addUser.vue
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
  addUser,
  userManagement_addUser,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_userManagement_addUser = __webpack_exports__["default"] = (Component.exports);


/***/ })

});