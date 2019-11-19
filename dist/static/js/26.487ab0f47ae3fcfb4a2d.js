webpackJsonp([26],{

/***/ "u3Zw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/researchForum/myForum.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var myForum = ({
  name: 'myForum',
  data: function data() {
    return {
      activeName: 'first', // 当前激活页
      linSelData: '',
      linTabData: '',
      linLoad: '',
      linUrl: '',
      sel: [],
      tableData1: [],
      tableData2: [],
      tabSel1: {
        forum_title: '',
        forum_type: 0
      },
      tabSel2: {
        forum_title: '',
        forum_type: 0
      },
      loading1: true,
      loading2: true,
      page: 1,
      total_count: 1,
      pageSize: 10
    };
  },

  methods: {
    getActiveTabs: function getActiveTabs() {
      // 获取当前展示的表格、搜索等信息
      switch (this.activeName) {// 对应tabs的name
        case 'first':
          this.linSelData = 'tabSel1';
          this.linTabData = 'tableData1';
          this.linLoad = 'loading1';
          this.linUrl = '/forum-myself';
          break;
        case 'second':
          this.linSelData = 'tabSel2';
          this.linTabData = 'tableData2';
          this.linLoad = 'loading2';
          this.linUrl = '/participate-forums';
          break;
      }
      this.initMsgTabs();
    },
    clearSearchTabs: function clearSearchTabs() {
      // 清除搜索条件、分页切换
      var str = void 0;
      switch (this.activeName) {// 对应tabs的name
        case 'first':
          str = 'tabSel1';
          break;
        case 'second':
          str = 'tabSel2';
          break;
      }
      for (var key in this[str]) {
        if (key === 'forum_type') {
          this[str][key] = 0;
        } else {
          this[str][key] = '';
        }
      }
      this.page = 1;
      this.getActiveTabs();
    },
    doSearchTabs: function doSearchTabs() {
      // 按条件搜索
      this.page = 1;
      this.getActiveTabs();
    },
    changePageTabs: function changePageTabs() {
      // 改变分页
      this.getActiveTabs();
    },
    initMsgTabs: function initMsgTabs() {
      var _this = this;

      this[this.linLoad] = true;
      var lin = assign_default()({}, {
        page: this.page,
        count: this.pageSize
      });
      if (this[this.linSelData] !== undefined) {
        if (this[this.linSelData].full_time !== undefined) {
          if (this[this.linSelData].full_time === '' || this[this.linSelData].full_time === null) {
            this[this.linSelData].start_time = '';
            this[this.linSelData].end_time = '';
          } else {
            this[this.linSelData].start_time = this[this.linSelData].full_time[0];
            this[this.linSelData].end_time = this[this.linSelData].full_time[1];
          }
        }
        lin = assign_default()({}, lin, this[this.linSelData]);
      }
      this.$axios.get(this.linUrl, { params: lin }).then(function (data) {
        // 根据后台接口更改
        var tableDate = data.data.data.my_forum_list;
        // 数据处理
        _this[_this.linTabData] = [].concat(toConsumableArray_default()(tableDate));
        // 重置数据总数
        _this.total_count = data.data.data.total_count;
        _this[_this.linLoad] = false;
      });
    },
    changeType: function changeType(data, type) {
      this[data].forum_type = type;
      this.getActiveTabs();
    }
  },
  created: function created() {
    this.getActiveTabs();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-24fb5d81","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/researchForum/myForum.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-research-forum-my"},[_c('el-tabs',{on:{"tab-click":_vm.clearSearchTabs},model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},[_c('el-tab-pane',{attrs:{"label":_vm.$t("views.researchForum.myPosts"),"name":"first"}},[_c('div',{staticClass:"tab-select"},[_c('div',[_c('el-input',{attrs:{"placeholder":_vm.$t("views.researchForum.enter"),"clearable":""},model:{value:(_vm.tabSel1.forum_title),callback:function ($$v) {_vm.$set(_vm.tabSel1, "forum_title", $$v)},expression:"tabSel1.forum_title"}},[_c('el-button',{attrs:{"slot":"append","icon":"el-icon-search"},on:{"click":function($event){_vm.doSearch('tableData1')}},slot:"append"})],1)],1),_vm._v(" "),_c('div',[_c('button',[_c('router-link',{attrs:{"to":{name:'forumSend'}}},[_vm._v("\n                            "+_vm._s(_vm.$t("views.researchForum.post"))+"\n                        ")])],1)])]),_vm._v(" "),_c('p',{staticClass:"sel"},[_c('button',{class:{active:_vm.tabSel1.forum_type===0},on:{"click":function($event){_vm.changeType('tabSel1',0)}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.all")))]),_vm._v(" "),_c('button',{class:{active:_vm.tabSel1.forum_type===1},on:{"click":function($event){_vm.changeType('tabSel1',1)}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.help")))]),_vm._v(" "),_c('button',{class:{active:_vm.tabSel1.forum_type===2},on:{"click":function($event){_vm.changeType('tabSel1',2)}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.share")))]),_vm._v(" "),_c('button',{class:{active:_vm.tabSel1.forum_type===3},on:{"click":function($event){_vm.changeType('tabSel1',3)}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.notice")))]),_vm._v(" "),_c('button',{class:{active:_vm.tabSel1.forum_type===4},on:{"click":function($event){_vm.changeType('tabSel1',4)}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.announcement")))])]),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading1),expression:"loading1"}],staticClass:"tab-content",attrs:{"data":_vm.tableData1}},[_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.postTopic")},scopedSlots:_vm._u([{key:"default",fn:function(item){return [_c('router-link',{staticClass:"link",attrs:{"to":{name:'forumDetails',query:{forumId:item.row.forum_id}}}},[_c('i',{staticClass:"icon iconfont",class:item.row.forum_type===1?'icon-qiuzhu':item.row.forum_type===2?'icon-fenxiang':item.row.forum_type===3?'icon-tongzhi1':'icon-gonggao2'}),_vm._v("\n                            "+_vm._s(item.row.forum_title)+"\n                        ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.authorReleaseTime"),"width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('p',{staticClass:"top"},[_vm._v(_vm._s(scope.row.poster))]),_vm._v(" "),_c('p',{staticClass:"bottom"},[_vm._v(_vm._s(scope.row.poster_time))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.replyClick"),"width":"120"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('p',{staticClass:"top"},[_vm._v(_vm._s(scope.row.reply_num))]),_vm._v(" "),_c('p',{staticClass:"bottom"},[_vm._v(_vm._s(scope.row.read_num))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.lastReply"),"width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('p',{staticClass:"top"},[_vm._v(_vm._s(scope.row.last_user))]),_vm._v(" "),_c('p',{staticClass:"bottom"},[_vm._v(_vm._s(scope.row.last_time))])]}}])}),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])])],1)],1),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":_vm.$t("views.researchForum.iParticipated"),"name":"second","lazy":true}},[_c('div',{staticClass:"tab-select"},[_c('div',[_c('el-input',{attrs:{"placeholder":_vm.$t("views.researchForum.enter"),"clearable":""},model:{value:(_vm.tabSel2.forum_title),callback:function ($$v) {_vm.$set(_vm.tabSel2, "forum_title", $$v)},expression:"tabSel2.forum_title"}},[_c('el-button',{attrs:{"slot":"append","icon":"el-icon-search"},on:{"click":function($event){_vm.doSearch('tableData1')}},slot:"append"})],1)],1),_vm._v(" "),_c('div',[_c('button',[_c('router-link',{attrs:{"to":{name:'forumSend'}}},[_vm._v("\n                            "+_vm._s(_vm.$t("views.researchForum.post"))+"\n                        ")])],1)])]),_vm._v(" "),_c('p',{staticClass:"sel"},[_c('button',{class:{active:_vm.tabSel2.forum_type===0},on:{"click":function($event){_vm.changeType('tabSel2',0)}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.all")))]),_vm._v(" "),_c('button',{class:{active:_vm.tabSel2.forum_type===1},on:{"click":function($event){_vm.changeType('tabSel2',1)}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.help")))]),_vm._v(" "),_c('button',{class:{active:_vm.tabSel2.forum_type===2},on:{"click":function($event){_vm.changeType('tabSel2',2)}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.share")))]),_vm._v(" "),_c('button',{class:{active:_vm.tabSel2.forum_type===3},on:{"click":function($event){_vm.changeType('tabSel2',3)}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.notice")))]),_vm._v(" "),_c('button',{class:{active:_vm.tabSel2.forum_type===4},on:{"click":function($event){_vm.changeType('tabSel2',4)}}},[_vm._v(_vm._s(_vm.$t("views.researchForum.announcement")))])]),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading2),expression:"loading2"}],staticClass:"tab-content",attrs:{"data":_vm.tableData2}},[_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.postTopic")},scopedSlots:_vm._u([{key:"default",fn:function(item){return [_c('router-link',{staticClass:"link",attrs:{"to":{name:'forumDetails',query:{forumId:item.row.forum_id}}}},[_c('i',{staticClass:"icon iconfont",class:item.row.forum_type===1?'icon-qiuzhu':item.row.forum_type===2?'icon-fenxiang':item.row.forum_type===3?'icon-tongzhi1':'icon-gonggao2'}),_vm._v("\n                            "+_vm._s(item.row.forum_title)+"\n                        ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.authorReleaseTime"),"width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('p',{staticClass:"top"},[_vm._v(_vm._s(scope.row.poster))]),_vm._v(" "),_c('p',{staticClass:"bottom"},[_vm._v(_vm._s(scope.row.poster_time))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.replyClick"),"width":"120"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('p',{staticClass:"top"},[_vm._v(_vm._s(scope.row.reply_num))]),_vm._v(" "),_c('p',{staticClass:"bottom"},[_vm._v(_vm._s(scope.row.read_num))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.researchForum.lastReply"),"width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('p',{staticClass:"top"},[_vm._v(_vm._s(scope.row.last_user))]),_vm._v(" "),_c('p',{staticClass:"bottom"},[_vm._v(_vm._s(scope.row.last_time))])]}}])}),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])])],1)],1)],1),_vm._v(" "),_c('el-pagination',{staticClass:"tab-page",attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"current-page":_vm.page,"total":_vm.total_count},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.changePageTabs}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var researchForum_myForum = (esExports);
// CONCATENATED MODULE: ./src/views/researchForum/myForum.vue
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
  myForum,
  researchForum_myForum,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_researchForum_myForum = __webpack_exports__["default"] = (Component.exports);


/***/ })

});