webpackJsonp([28],{

/***/ "V0R0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/researchForum/forumManagement.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var forumManagement = ({
  name: 'forumManagement',
  data: function data() {
    return {
      linTabData: '',
      linUrl: '',
      pageSize: 10,
      sel: [],
      forumList: [],
      tableData1: {
        // 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        url: '/forum-manage',
        loading: true,
        Pagination: {
          page: 1,
          total_count: 5
        },
        sel: {
          forum_title: '',
          forum_type: '',
          poster: ''
        }
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
        if (this[this.linTabData].sel.full_time !== undefined) {
          if (this[this.linTabData].sel.full_time && (this[this.linTabData].sel.full_time === '' || this[this.linTabData].sel.full_time === null)) {
            this[this.linTabData].sel.start_time = '';
            this[this.linTabData].sel.end_time = '';
          } else {
            this[this.linTabData].sel.start_time = this[this.linTabData].sel.full_time[0];
            this[this.linTabData].sel.end_time = this[this.linTabData].sel.full_time[1];
          }
        }
        lin = assign_default()({}, lin, this[this.linTabData].sel);
      }
      this.$axios.get(this[this.linTabData].url, { params: lin }).then(function (data) {
        // 根据后台接口更改
        var tableDate = data.data.data.forum_list_tabel;
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
      this.forumList = [];
      for (var i = 0; i < rows.length; i++) {
        this.forumList.push(rows[i].forum_id);
      }
    },
    deleteForum: function deleteForum(id) {
      var _this2 = this;

      var arr = [];
      if (id !== undefined) {
        arr = [].concat(toConsumableArray_default()(id));
      } else {
        arr = [].concat(toConsumableArray_default()(this.forumList));
      }
      this.$axios.get('/delete-forum', { params: { forum_id: arr } }).then(function (data) {
        _this2.$message({ type: 'success', message: '删除成功' });
      });
    }
  },
  created: function created() {
    var _this3 = this;

    this.$axios.get('/forum-manage/sel').then(function (data) {
      _this3.sel = [].concat(toConsumableArray_default()(data.data.data.forum_type));
    });
    // 每有一个表格就要写个初始化赋值
    this.getActiveTab('tableData1');
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d798f2c8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/researchForum/forumManagement.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-research-forum-management"},[_c('div',{staticClass:"tab-select"},[_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t("views.researchForum.theme")))]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":_vm.$t("views.researchForum.enter")},model:{value:(_vm.tableData1.sel.forum_title),callback:function ($$v) {_vm.$set(_vm.tableData1.sel, "forum_title", $$v)},expression:"tableData1.sel.forum_title"}})],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t("views.researchForum.type")))]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":_vm.$t("views.researchForum.chose")},model:{value:(_vm.tableData1.sel.forum_type),callback:function ($$v) {_vm.$set(_vm.tableData1.sel, "forum_type", $$v)},expression:"tableData1.sel.forum_type"}},_vm._l((_vm.sel),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t("views.researchForum.poster")))]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":_vm.$t("views.researchForum.enter")},model:{value:(_vm.tableData1.sel.poster),callback:function ($$v) {_vm.$set(_vm.tableData1.sel, "poster", $$v)},expression:"tableData1.sel.poster"}})],1),_vm._v(" "),_c('div',[_c('button',{on:{"click":function($event){_vm.clearSearch('tableData1')}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.reset")))]),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.doSearch('tableData1')}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.select")))])])]),_vm._v(" "),_c('div',{staticClass:"else-do"},[_c('el-button',{staticClass:"btn dark mid",on:{"click":_vm.deleteForum}},[_vm._v(_vm._s(_vm.$t("views.researchForum.batchDeletion")))]),_vm._v(" "),_c('el-button',{staticClass:"btn dark mid link"},[_c('router-link',{attrs:{"to":{name:'forumSend'}}},[_vm._v("\n                "+_vm._s(_vm.$t("views.researchForum.post"))+"\n            ")])],1)],1),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.tableData1.loading),expression:"tableData1.loading"}],staticClass:"tab-content",attrs:{"data":_vm.tableData1.msg,"border":""},on:{"selection-change":_vm.selectChange}},[_c('el-table-column',{attrs:{"type":"selection","width":"55"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.theme")},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('router-link',{staticClass:"link",attrs:{"to":{name:'forumDetails',query:{forumId:scope.row.forum_id}}}},[_vm._v(_vm._s(scope.row.forum_title))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"forum_type","label":_vm.$t("views.researchForum.postType"),"width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"poster","label":_vm.$t("views.researchForum.poster")}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.replyView"),"width":"100"},scopedSlots:_vm._u([{key:"default",fn:function(item){return [_vm._v("\n                "+_vm._s(item.row.forum_replay)+"/"+_vm._s(item.row.forum_visited)+"\n            ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.finalPost")},scopedSlots:_vm._u([{key:"default",fn:function(item){return [_vm._v("\n                "+_vm._s(item.row.last_editor_name)+"、"+_vm._s(item.row.last_editor_time)+"\n            ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.operating")},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('button',{staticClass:"btn",on:{"click":function($event){_vm.deleteForum([scope.row.forum_id])}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.delete")))])]}}])}),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])])],1),_vm._v(" "),_c('el-pagination',{staticClass:"tab-page",attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"current-page":_vm.tableData1.Pagination.page,"total":_vm.tableData1.Pagination.total_count},on:{"update:currentPage":function($event){_vm.$set(_vm.tableData1.Pagination, "page", $event)},"current-change":function($event){_vm.changePage('tableData1')}}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var researchForum_forumManagement = (esExports);
// CONCATENATED MODULE: ./src/views/researchForum/forumManagement.vue
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
  forumManagement,
  researchForum_forumManagement,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_researchForum_forumManagement = __webpack_exports__["default"] = (Component.exports);


/***/ })

});