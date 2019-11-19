webpackJsonp([29],{

/***/ "9+WO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/researchForum/forumCenter.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var forumCenter = ({
  name: 'forumCenter',
  data: function data() {
    return {
      linTabData: '',
      linUrl: '',
      pageSize: 10,
      sel: [],
      tableData1: {
        // 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        url: '/forum-center-list',
        loading: true,
        Pagination: {
          page: 1,
          total_count: 5
        },
        sel: {
          forum_title: '',
          forum_type: 0
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
          if (this[this.linTabData].sel.full_time === '' || this[this.linTabData].sel.full_time === null) {
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
    changeType: function changeType(type) {
      this.tableData1.sel.forum_type = type;
      this.getActiveTab('tableData1');
    }
  },
  created: function created() {
    // 每有一个表格就要写个初始化赋值
    this.getActiveTab('tableData1');
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-131daa7a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/researchForum/forumCenter.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-research-forum-center"},[_c('div',{staticClass:"tab-select"},[_c('div',[_c('el-input',{attrs:{"placeholder":_vm.$t("views.researchForum.enter"),"clearable":""},model:{value:(_vm.tableData1.sel.forum_title),callback:function ($$v) {_vm.$set(_vm.tableData1.sel, "forum_title", $$v)},expression:"tableData1.sel.forum_title"}},[_c('el-button',{attrs:{"slot":"append","icon":"el-icon-search"},on:{"click":function($event){_vm.doSearch('tableData1')}},slot:"append"})],1)],1),_vm._v(" "),_c('div',[_c('button',[_c('router-link',{attrs:{"to":{name:'forumSend'}}},[_vm._v("\n                    "+_vm._s(_vm.$t("views.researchForum.post"))+"\n                ")])],1)])]),_vm._v(" "),_c('p',{staticClass:"sel"},[_c('button',{class:{active:_vm.tableData1.sel.forum_type===0},on:{"click":function($event){_vm.changeType(0)}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.all")))]),_vm._v(" "),_c('button',{class:{active:_vm.tableData1.sel.forum_type===1},on:{"click":function($event){_vm.changeType(1)}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.help")))]),_vm._v(" "),_c('button',{class:{active:_vm.tableData1.sel.forum_type===2},on:{"click":function($event){_vm.changeType(2)}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.share")))]),_vm._v(" "),_c('button',{class:{active:_vm.tableData1.sel.forum_type===3},on:{"click":function($event){_vm.changeType(3)}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.notice")))]),_vm._v(" "),_c('button',{class:{active:_vm.tableData1.sel.forum_type===4},on:{"click":function($event){_vm.changeType(4)}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.announcement")))])]),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.tableData1.loading),expression:"tableData1.loading"}],staticClass:"tab-content",attrs:{"data":_vm.tableData1.msg}},[_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.postTopic")},scopedSlots:_vm._u([{key:"default",fn:function(item){return [_c('router-link',{staticClass:"link",attrs:{"to":{name:'forumDetails',query:{forumId:item.row.forum_id}}}},[_c('i',{staticClass:"icon iconfont",class:item.row.forum_type===1?'icon-qiuzhu':item.row.forum_type===2?'icon-fenxiang':item.row.forum_type===3?'icon-tongzhi1':'icon-gonggao2'}),_vm._v("\n                    "+_vm._s(item.row.forum_title)+"\n                ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.authorReleaseTime"),"width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('p',{staticClass:"top"},[_vm._v(_vm._s(scope.row.poster))]),_vm._v(" "),_c('p',{staticClass:"bottom"},[_vm._v(_vm._s(scope.row.poster_time))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.replyClick"),"width":"120"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('p',{staticClass:"top"},[_vm._v(_vm._s(scope.row.reply_num))]),_vm._v(" "),_c('p',{staticClass:"bottom"},[_vm._v(_vm._s(scope.row.read_num))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.lastReply"),"width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('p',{staticClass:"top"},[_vm._v(_vm._s(scope.row.last_user))]),_vm._v(" "),_c('p',{staticClass:"bottom"},[_vm._v(_vm._s(scope.row.last_time))])]}}])}),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])])],1),_vm._v(" "),_c('el-pagination',{staticClass:"tab-page",attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"current-page":_vm.tableData1.Pagination.page,"total":_vm.tableData1.Pagination.total_count},on:{"update:currentPage":function($event){_vm.$set(_vm.tableData1.Pagination, "page", $event)},"current-change":function($event){_vm.changePage('tableData1')}}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var researchForum_forumCenter = (esExports);
// CONCATENATED MODULE: ./src/views/researchForum/forumCenter.vue
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
  forumCenter,
  researchForum_forumCenter,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_researchForum_forumCenter = __webpack_exports__["default"] = (Component.exports);


/***/ })

});