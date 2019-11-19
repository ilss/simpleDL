webpackJsonp([14],{

/***/ "WvI5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/userManagement/userManagementHome.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var userManagementHome = ({
  name: 'userManagementHome',
  data: function data() {
    return {
      linTabData: '',
      linUrl: '',
      pageSize: 10,
      user_role: [],
      rant_status: [],
      routeId: '',
      tableData: {
        // 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        url: '/users-list-table',
        loading: true,
        Pagination: {
          page: 1,
          total_count: 5
        },
        sel: {
          user_name: '',
          name: '',
          user_role: '',
          rant_status: ''
        }
      },
      userIdList: [],
      changePermissionPop: false,
      changePermissionPopMsg: {
        user_id: [],
        user_role: ''
      }
    };
  },

  methods: {
    getActiveTab: function getActiveTab(name) {
      // 获取当前展示的表格、搜索等信息
      this.linTabData = name;
      this.linUrl = this[name].url;
      this.initMsg();
    },
    clearSearch: function clearSearch(name) {
      // 清除搜索条件
      for (var key in this[name].sel) {
        this[name].sel[key] = '';
      }
      if (this[name].Pagination !== undefined) {
        this[name].Pagination.page = 1;
      }
      this.getActiveTab(name);
    },
    doSearch: function doSearch(name) {
      // 按条件搜索
      if (this[name].Pagination !== undefined) {
        this[name].Pagination.page = 1;
      }
      this.getActiveTab(name);
    },
    changePage: function changePage(name) {
      // 改变分页
      this.getActiveTab(name);
    },
    initMsg: function initMsg() {
      var _this = this;

      this[this.linTabData].loading = true;
      var lin = {};
      if (this[this.linTabData].Pagination !== undefined) {
        lin = assign_default()({}, this[this.linTabData].Pagination, {
          count: this.pageSize
        });
      }
      if (this[this.linTabData].sel !== undefined) {
        if (this[this.linTabData].sel.full_date && this[this.linTabData].sel.full_date.length === 2) {
          this[this.linTabData].sel.star_date = this[this.linTabData].sel.full_date[0];
          this[this.linTabData].sel.end_date = this[this.linTabData].sel.full_date[1];
        } else {
          this[this.linTabData].sel.star_date = '';
          this[this.linTabData].sel.end_date = '';
        }
        lin = assign_default()({}, lin, this[this.linTabData].sel);
      }
      this.$axios.get(this[this.linTabData].url, { params: lin }).then(function (data) {
        // 根据后台接口更改
        var tableDate = data.data.data.users_list;
        // 数据处理
        _this[_this.linTabData].msg = [].concat(toConsumableArray_default()(tableDate));
        // 重置数据总数
        if (_this[_this.linTabData].Pagination !== undefined) {
          _this[_this.linTabData].Pagination.total_count = data.data.data.total_count;
        }
        _this[_this.linTabData].loading = false;
      });
    },
    selectChange: function selectChange(rows) {
      this.userIdList = [];
      for (var i = 0; i < rows.length; i++) {
        this.userIdList.push(rows[i].user_id);
      }
    },
    authorizeUser: function authorizeUser(id) {
      if (isNaN(id)) {
        this.changePermissionPopMsg.user_id = [].concat(toConsumableArray_default()(this.userIdList));
      } else {
        this.changePermissionPopMsg.user_id = [id];
      }
      this.changePermissionPopMsg.user_role = '';
      this.changePermissionPop = true;
    },
    changePermissionPopDo: function changePermissionPopDo() {
      var _this2 = this;

      this.$axios.post('/give-rant-user', this.changePermissionPopMsg).then(function (data) {
        _this2.$message({ message: '授权成功', type: 'success' });
        _this2.changePermissionPop = false;
      });
    },
    disableUser: function disableUser(id, states) {
      var _this3 = this;

      this.$axios.post('/not-enabel-user', { user_id: id, rant_status: states }).then(function (data) {
        _this3.$message({ message: '操作成功', type: 'success' });
      });
    },
    initializePassword: function initializePassword(id) {
      var _this4 = this;

      this.$axios.post('/init-pwd-user', { user_id: id }).then(function (data) {
        _this4.$message({ message: '操作成功', type: 'success' });
      });
    },
    changeUser: function changeUser(id) {
      if (isNaN(id)) {
        this.routeId = '';
        this.$router.push({ name: 'addUser' });
      } else {
        this.routeId = id;
        this.$router.push({ name: 'addUser', query: { userId: id } });
      }
    },
    deleteUser: function deleteUser(id) {
      var _this5 = this;

      var arr = void 0;
      if (isNaN(id)) {
        arr = [].concat(toConsumableArray_default()(this.userIdList));
      } else {
        arr = [id];
      }
      this.$axios.post('/init-pwd-user', { user_id: arr }).then(function (data) {
        _this5.$message({ message: '删除成功', type: 'success' });
      });
    }
  },
  created: function created() {
    var _this6 = this;

    // 每有一个表格就要写个初始化赋值
    this.getActiveTab('tableData');
    // 获取搜索的数据
    this.$axios.get('/userManagement/sel').then(function (data) {
      _this6.user_role = [].concat(toConsumableArray_default()(data.data.data.user_role));
      _this6.rant_status = [].concat(toConsumableArray_default()(data.data.data.rant_status));
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (to.name === 'addUser') {
      if (this.routeId === '') {
        to.meta.title = 'views.nav.addUser';
      } else {
        to.meta.title = 'views.nav.editUser';
      }
    }
    next();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1d3abeb8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/userManagement/userManagementHome.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-user-management-home"},[_c('div',{staticClass:"tab-select"},[_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t("views.userManagement.username")))]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":_vm.$t("views.userManagement.enter")},model:{value:(_vm.tableData.sel.user_name),callback:function ($$v) {_vm.$set(_vm.tableData.sel, "user_name", $$v)},expression:"tableData.sel.user_name"}})],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t("views.userManagement.name")))]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":_vm.$t("views.userManagement.enter")},model:{value:(_vm.tableData.sel.name),callback:function ($$v) {_vm.$set(_vm.tableData.sel, "name", $$v)},expression:"tableData.sel.name"}})],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t("views.userManagement.character")))]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":_vm.$t("views.userManagement.chose")},model:{value:(_vm.tableData.sel.user_role),callback:function ($$v) {_vm.$set(_vm.tableData.sel, "user_role", $$v)},expression:"tableData.sel.user_role"}},_vm._l((_vm.user_role),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t("views.userManagement.status")))]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":_vm.$t("views.userManagement.chose")},model:{value:(_vm.tableData.sel.rant_status),callback:function ($$v) {_vm.$set(_vm.tableData.sel, "rant_status", $$v)},expression:"tableData.sel.rant_status"}},_vm._l((_vm.rant_status),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('div',[_c('button',{on:{"click":function($event){_vm.clearSearch('tableData')}}},[_vm._v(_vm._s(_vm.$t("views.userManagement.reset")))]),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.doSearch('tableData')}}},[_vm._v(_vm._s(_vm.$t("views.userManagement.select")))])])]),_vm._v(" "),_c('div',{staticClass:"controls-else"},[_c('el-button',{staticClass:"btn dark mid",on:{"click":_vm.changeUser}},[_vm._v(_vm._s(_vm.$t("views.userManagement.add")))]),_vm._v(" "),_c('el-button',{staticClass:"btn dark mid"},[_vm._v(_vm._s(_vm.$t("views.userManagement.batchAdd")))]),_vm._v(" "),_c('el-button',{staticClass:"btn dark mid",on:{"click":_vm.authorizeUser}},[_vm._v(_vm._s(_vm.$t("views.userManagement.batchAuthorization")))]),_vm._v(" "),_c('el-button',{staticClass:"btn dark mid",on:{"click":_vm.deleteUser}},[_vm._v(_vm._s(_vm.$t("views.userManagement.batchDeletion")))])],1),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.tableData.loading),expression:"tableData.loading"}],staticClass:"tab-content",attrs:{"data":_vm.tableData.msg,"border":""},on:{"selection-change":_vm.selectChange}},[_c('el-table-column',{attrs:{"type":"selection","width":"55","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.userManagement.username")},scopedSlots:_vm._u([{key:"default",fn:function(item){return [_c('router-link',{staticClass:"link",attrs:{"to":{name:'userDetails',query:{userId:item.row.user_id}}}},[_vm._v(_vm._s(item.row.user_name))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"rant_status.label","label":_vm.$t("views.userManagement.status"),"width":"80","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user_role.label","label":_vm.$t("views.userManagement.character"),"width":"85","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","width":"100","align":"center","label":_vm.$t("views.userManagement.name")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"email","label":_vm.$t("views.userManagement.email")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"phone_num","label":_vm.$t("views.userManagement.phone"),"align":"center","width":"120"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.userManagement.operating"),"align":"center","width":"280"},scopedSlots:_vm._u([{key:"default",fn:function(item){return _c('div',{staticClass:"options"},[_c('button',{staticClass:"btn",on:{"click":function($event){_vm.authorizeUser(item.row.user_id)}}},[_vm._v(_vm._s(_vm.$t("views.userManagement.authorization")))]),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":function($event){_vm.disableUser(item.row.user_id,item.row.rant_status.value)}}},[_vm._v(_vm._s(item.row.rant_status.value===true?_vm.$t("views.userManagement.disable"):_vm.$t("views.userManagement.enable")))]),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":function($event){_vm.initializePassword(item.row.user_id)}}},[_vm._v(_vm._s(_vm.$t("views.userManagement.initializePassword")))]),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":function($event){_vm.changeUser(item.row.user_id)}}},[_vm._v(_vm._s(_vm.$t("views.userManagement.modify")))]),_vm._v(" "),_c('button',{staticClass:"del",on:{"click":function($event){_vm.deleteUser(item.row.user_id)}}},[_vm._v(_vm._s(_vm.$t("views.userManagement.delete")))])])}}])}),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])])],1),_vm._v(" "),_c('el-pagination',{staticClass:"tab-page",attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"current-page":_vm.tableData.Pagination.page,"total":_vm.tableData.Pagination.total_count},on:{"update:currentPage":function($event){_vm.$set(_vm.tableData.Pagination, "page", $event)},"current-change":function($event){_vm.changePage('tableData')}}}),_vm._v(" "),_c('el-dialog',{staticClass:"changePermissionPop small",attrs:{"title":_vm.$t("views.userManagement.userManagementHome.userAuthorization"),"visible":_vm.changePermissionPop},on:{"update:visible":function($event){_vm.changePermissionPop=$event}}},[_c('div',{staticClass:"content"},[_c('p',[_vm._v(_vm._s(_vm.$t("views.userManagement.userManagementHome.p1"))+"：")]),_vm._v(" "),_c('ul',_vm._l((_vm.user_role),function(item){return _c('li',{key:item.value},[_c('el-radio',{attrs:{"label":item.value},model:{value:(_vm.changePermissionPopMsg.user_role),callback:function ($$v) {_vm.$set(_vm.changePermissionPopMsg, "user_role", $$v)},expression:"changePermissionPopMsg.user_role"}},[_vm._v(_vm._s(item.label))])],1)}))]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"cancel",on:{"click":function($event){_vm.changePermissionPop = false}}},[_vm._v(_vm._s(_vm.$t("views.userManagement.cancel")))]),_vm._v(" "),_c('el-button',{staticClass:"primary",attrs:{"type":"primary"},on:{"click":_vm.changePermissionPopDo}},[_vm._v(_vm._s(_vm.$t("views.userManagement.save")))])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var userManagement_userManagementHome = (esExports);
// CONCATENATED MODULE: ./src/views/userManagement/userManagementHome.vue
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
  userManagementHome,
  userManagement_userManagementHome,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_userManagement_userManagementHome = __webpack_exports__["default"] = (Component.exports);


/***/ })

});