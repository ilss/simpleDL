webpackJsonp([82],{

/***/ "1E/H":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1cVB":
/***/ (function(module, exports) {

/*
 * @Author: Liang Liang
 * @Date: 2018-07-12 11:25:12
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-24 14:03:01
 * @Description: 
 */


/***/ }),

/***/ "1kvZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3K5a":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (8:2)\nYou may need an appropriate loader to handle this file type.\n|  * @Description:项目空间的样式表\n|  */\n| a {\n|   text-decoration: none;\n| }");

/***/ }),

/***/ "3MMF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/login_footer.d3607a6.png";

/***/ }),

/***/ "3XVr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/headbg.64760ac.jpg";

/***/ }),

/***/ "60lo":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (22:0)\nYou may need an appropriate loader to handle this file type.\n|  * @Description: \n|  */\n| .components-path-breadcrumb {\n|   width: 100%;\n|   overflow: hidden;");

/***/ }),

/***/ "6xsA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "7Rsl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "7b8m":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (12:0)\nYou may need an appropriate loader to handle this file type.\n|  * @LastEditTime: 2018-07-23 17:27:05\r\n|  */\r\n| @import '../../public';\r\n| .el-menu.else {\r\n|   &.el-menu--horizontal {\r");

/***/ }),

/***/ "7mO3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8TT5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9fhh":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (20:0)\nYou may need an appropriate loader to handle this file type.\n|  */\n| /*fade*/\n| .fade-enter-active,\n| .fade-leave-active {\n|   transition: opacity 0.28s;");

/***/ }),

/***/ "BTZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo.2eeb375.png";

/***/ }),

/***/ "Bb3u":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (8:0)\nYou may need an appropriate loader to handle this file type.\n|  * @Description: \r\n|  */\r\n| @import 'zh';\r\n| ");

/***/ }),

/***/ "BlFa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "D4cb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-path-breadcrumb/src/lib/pathBreadcrumb.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var pathBreadcrumb = ({
  data: function data() {
    return {
      myPath: null,
      historyEvent: null,
      pathData: null
      // sessionKey: 'seduFileManagementPathData'
    };
  },

  props: {
    // 自定义行内样式
    myStyle: {
      type: String,
      default: ''
    },
    // 自定义class
    cname: {
      type: String,
      default: 'components-path-breadcrumb'
    },
    // 匹配文件夹的key
    matchKeyName: {
      type: String,
      default: 'key'
    },
    // 点击面包屑链接 的回调函数
    callBack: {
      type: Function,
      required: true
    },
    // 支持自定义文字，方便国际化
    backLabel: {
      type: String,
      default: "返回上一级"
    },
    // 支持自定义文字，方便国际化
    allFileLabel: {
      type: String,
      default: "全部文件"
    }
  },
  created: function created() {
    this.myPath = true;
    this.pathData = [];
    // if (this.historyEvent === null) {
    //   this.historyEvent = window.addEventListener('popstate', (event) => {
    //     console.log(String(window.history.state.title))
    //     if (String(window.history.state.title).includes('fileManagement')) {
    //       console.log(324234234234234)
    //       this.goBack()
    //     }
    //   })
    // }
  },
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {
    // window.removeEventListener('popstate', () => console.log('清除了监听'))
    this.myPath = null;
    this.historyEvent = null;
    this.pathData = null;
  },

  watch: {},
  methods: {
    // 存入点击的路径对象
    addPath: function addPath(targetPath) {
      this.pathData.push(targetPath);
      if (this.pathData.length === 1) {
        this.pathData[0]['name'] = this.allFileLabel;
      }
    },
    gotoPath: function gotoPath(path) {
      var _this = this;

      var _index = this.pathData.findIndex(function (value, index) {
        if (value[_this.matchKeyName] === path[_this.matchKeyName]) {
          return String(index);
        }
      });
      var len = this.pathData.length;
      Number(_index);
      this.pathData.splice(_index === 0 ? 1 : _index + 1, len);
      this.selectPath(path);
    },
    selectPath: function selectPath(path) {
      this.callBack(path);
    },
    goBack: function goBack() {
      var path = this.pathData.pop();
      this.selectPath(path);
    },
    updatePathData: function updatePathData(targetPath) {}
    // const state = {
    //   title: 'fileManagement',
    //   url: ''
    // }
    // window.history.pushState(state, 'title')

    // this.saveData(this.pathData)

    // saveSessionData (data) {
    //   sessionStorage.setItem(this.sessionKey, JSON.stringify(data))
    // },
    // getSessionData: () => sessionStorage.getItem(this.sessionKey)

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-012df9f8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-path-breadcrumb/src/lib/pathBreadcrumb.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{class:_vm.cname,style:(_vm.myStyle)},[(_vm.pathData.length>1)?_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":function($event){_vm.goBack()}}},[_vm._v(_vm._s(_vm.backLabel))]):_vm._e(),_vm._v(" "),(_vm.pathData.length>1)?_c('small',[_vm._v("|")]):_vm._e(),_vm._v(" "),_vm._l((_vm.pathData),function(item,index){return _c('span',{key:index},[(index===0 && index!==_vm.pathData.length-1)?_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":function($event){_vm.gotoPath(item)}}},[_vm._v(_vm._s(_vm.allFileLabel))]):(index === 0 && index===_vm.pathData.length-1)?_c('i',[_vm._v(_vm._s(_vm.allFileLabel))]):(index>0 && index!==_vm.pathData.length-1)?_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":function($event){_vm.gotoPath(item)}}},[_vm._v(_vm._s(item.name))]):(index>0 && index===_vm.pathData.length-1)?_c('i',[_vm._v(_vm._s(item.name))]):_vm._e(),_vm._v(" "),(_vm.pathData.length>1 &&　index　!==_vm.pathData.length-1)?_c('small',{staticClass:"el-icon-arrow-right"}):_vm._e()])})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var lib_pathBreadcrumb = (esExports);
// CONCATENATED MODULE: ./node_modules/vue-path-breadcrumb/src/lib/pathBreadcrumb.vue
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
  pathBreadcrumb,
  lib_pathBreadcrumb,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_lib_pathBreadcrumb = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "FnmX":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (8:0)\nYou may need an appropriate loader to handle this file type.\n|  * @Description: \r\n|  */\r\n| @PATH_ROOT: '';\r\n| @PATH_COMPONENTS: 'components/';\r\n| \r");

/***/ }),

/***/ "FpcI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "G7Ff":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type.\n| @import '../public.less';\r\n| @elHeaderHeight: 60px;\r\n| .views-main-el-header {\r");

/***/ }),

/***/ "Gh7c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/empty.f2ecf06.png";

/***/ }),

/***/ "I1cu":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (15:0)\nYou may need an appropriate loader to handle this file type.\n|  * @Description: \n|  */\n| .components-path-breadcrumb {\n|   width: 100%;\n|   overflow: hidden;");

/***/ }),

/***/ "IZmZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Ihk+":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (9:2)\nYou may need an appropriate loader to handle this file type.\n|  */\r\n| \r\n| a {\r\n|   text-decoration: none;\r\n| }\r");

/***/ }),

/***/ "JD/K":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blue/components/nav/en.less": "zRGT",
	"./blue/components/nav/zh.less": "gjOl",
	"./blue/components/pathBreadcrumb/en.less": "FpcI",
	"./blue/components/pathBreadcrumb/zh.less": "b2Aw",
	"./blue/index.less": "PmuR",
	"./blue/public.less": "gImD",
	"./blue/views/caseCenter.less": "7Rsl",
	"./blue/views/clusterMonitoring.less": "sNCs",
	"./blue/views/help/downloadData_zh.less": "IZmZ",
	"./blue/views/imageManagement.less": "7mO3",
	"./blue/views/login.less": "wG2q",
	"./blue/views/main.less": "1E/H",
	"./blue/views/projectHome/projectHome_en.less": "UXwr",
	"./blue/views/projectHome/projectHome_zh.less": "8TT5",
	"./blue/views/projectSpace/projectSpace_en.less": "6xsA",
	"./blue/views/projectSpace/projectSpace_zh.less": "yDTQ",
	"./blue/views/researchForum.less": "iSqu",
	"./blue/views/storageManagement/storageManagement.less": "sofI",
	"./blue/views/systemManagement.less": "oUjE",
	"./blue/views/systemMonitoring.less": "flxO",
	"./blue/views/userManagement.less": "BlFa",
	"./green/components/nav/en.less": "pHgD",
	"./green/components/nav/zh.less": "7b8m",
	"./green/components/pathBreadcrumb/en.less": "Bb3u",
	"./green/components/pathBreadcrumb/zh.less": "pHsv",
	"./green/index.less": "Q2Jr",
	"./green/public.less": "FnmX",
	"./green/views/login.less": "sWN4",
	"./green/views/main.less": "G7Ff",
	"./green/views/projectSpace/projectSpace_en.less": "dOVE",
	"./green/views/projectSpace/projectSpace_zh.less": "Ihk+",
	"./green/views/systemManagement.less": "zC4j"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "JD/K";

/***/ }),

/***/ "JMUW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__("fZjL");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-echarts-sedu/src/lib/seduEcharts.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var seduEcharts = ({
  data: function data() {
    return {
      myEcharts: null
    };
  },

  props: {
    myStyle: {
      type: String,
      default: 'width:20vw;height:20vw;'
    },
    cname: {
      type: String,
      default: ''
    },
    option: {
      type: Object,
      required: true
    },
    domId: {
      type: String,
      required: true
    }
  },
  mounted: function mounted() {
    var myEcharts = this.$echarts.init(document.querySelector('#' + this.domId));
    this.myEcharts = myEcharts;
    this.checkAndSetOption();
    var vue = this;
    window.addEventListener("resize", vue.change);
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.myEcharts) {
      return;
    }
    var vue = this;
    window.removeEventListener('resize', vue.change);
    this.myEcharts.dispose();
    this.myEcharts = null;
  },

  watch: {
    option: function option(_option) {
      this.checkAndSetOption();
    }
  },
  methods: {
    change: function change() {
      this.myEcharts.resize(); //Echarts重绘方法
    },
    checkAndSetOption: function checkAndSetOption() {
      var option = this.option; //配置等于父组件传过来的数据
      if (keys_default()(option).length > 0) {
        this.myEcharts.setOption(option); //渲染出来
        this.myEcharts.hideLoading(); //隐藏加载动画
      } else {
        //加载动画
        this.myEcharts.showLoading({
          maskColor: 'rgba(255, 255, 255, 0)'
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0d0450e6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-echarts-sedu/src/lib/seduEcharts.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.cname,style:(_vm.myStyle),attrs:{"id":_vm.domId}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var lib_seduEcharts = (esExports);
// CONCATENATED MODULE: ./node_modules/vue-echarts-sedu/src/lib/seduEcharts.vue
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
  seduEcharts,
  lib_seduEcharts,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_lib_seduEcharts = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var filters_namespaceObject = {};
__webpack_require__.d(filters_namespaceObject, "parseTime", function() { return util["d" /* parseTime */]; });
__webpack_require__.d(filters_namespaceObject, "formatTime", function() { return util["c" /* formatTime */]; });
__webpack_require__.d(filters_namespaceObject, "timeAgo", function() { return timeAgo; });
__webpack_require__.d(filters_namespaceObject, "numberFormatter", function() { return numberFormatter; });
__webpack_require__.d(filters_namespaceObject, "toThousandslsFilter", function() { return toThousandslsFilter; });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__("fZjL");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'App',
  data: function data() {
    return {};
  },
  created: function created() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-26bc4b6d","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:this.$i18n.locale,attrs:{"id":"app"}},[_c('transition',{attrs:{"name":"fade-transform","mode":"out-in"}},[_c('router-view')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
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
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/nav/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var nav = ({
  data: function data() {
    return {
      opens: ['1'],
      normalClass: 'icon iconfont',
      mode: 1
    };
  },

  props: {
    navInformation: {
      type: Array,
      required: true
    },
    cname: {
      type: String,
      default: 'components-nav'
    },
    myStyle: {
      type: String,
      default: ''
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  created: function created() {
    // 初始化索引
    for (var i = 0; i < this.navInformation.length; i++) {
      this.navInformation[i].index = '' + (i + 1);
      if (this.navInformation[i].children !== undefined && this.navInformation[i].children.length > 0) {
        for (var y = 0; y < this.navInformation[i].children.length; y++) {
          this.navInformation[i].children[y].index = i + 1 + '-' + (y + 1);
        }
      }
    }
    // 初始化打开项
    this.opens = [sessionStorage.getItem('navActiveParentIndex')];
    // 恢复当前激活的菜单
    if (sessionStorage.getItem('navActiveChildIndex') === '') {
      this.navInformation.filter(function (item) {
        return item.index === sessionStorage.getItem('navActiveParentIndex');
      })[0].active = true;
    } else {
      this.navInformation.filter(function (item) {
        return item.index === sessionStorage.getItem('navActiveParentIndex');
      })[0].children.filter(function (item) {
        return item.index === sessionStorage.getItem('navActiveChildIndex');
      })[0].active = true;
    }
  },

  methods: {
    saveOpen: function saveOpen(indexInside, indexOutside) {
      this.changeNavActive(indexOutside[0], indexOutside[1]);
    },
    changeNavActive: function changeNavActive(parent, child) {
      // 更新导航的激活点亮项
      // 清除之前激活的菜单
      if (sessionStorage.getItem('navActiveChildIndex') === '') {
        this.navInformation.filter(function (item) {
          return item.index === sessionStorage.getItem('navActiveParentIndex');
        })[0].active = false;
      } else {
        this.navInformation.filter(function (item) {
          return item.index === sessionStorage.getItem('navActiveParentIndex');
        })[0].children.filter(function (item) {
          return item.index === sessionStorage.getItem('navActiveChildIndex');
        })[0].active = false;
      }
      // 存储当前激活的菜单
      sessionStorage.setItem('navActiveParentIndex', parent);
      sessionStorage.setItem('navActiveChildIndex', child !== undefined ? child : '');
      // 点亮当前激活的菜单
      var obj = void 0;
      if (child === undefined) {
        obj = this.navInformation.filter(function (item) {
          return item.index === parent;
        })[0];
      } else {
        obj = this.navInformation.filter(function (item) {
          return item.index === parent;
        })[0].children.filter(function (item) {
          return item.index === child;
        })[0];
      }
      obj.active = true;
      // 存储当前激活项的name，方便为非正常跳转做对比
      sessionStorage.setItem('navActiveName', obj.linkName);
    }
  },
  watch: {
    $route: function $route() {
      var it = this;
      if (this.$route.meta.markName !== undefined && this.$route.meta.markName !== '') {
        // 找到当前name对应的两个index
        var parent = void 0;
        var child = void 0;
        parent = this.navInformation.filter(function (item) {
          return item.linkName === it.$route.meta.markName;
        });
        if (parent.length > 0) {
          // 第一层已经找到标记nav
          this.changeNavActive(parent[0].index);
        } else {
          // 标记nav在第二层
          parent = this.navInformation.filter(function (item) {
            var isTrue = false;
            var arr = [];
            if (item.children.length > 0) {
              arr = item.children.filter(function (one) {
                return one.linkName === it.$route.meta.markName;
              });
              if (arr.length > 0) {
                isTrue = true;
              }
            }
            return isTrue;
          });
          child = parent[0].children.filter(function (item) {
            return item.linkName === it.$route.meta.markName;
          });
          this.changeNavActive(parent[0].index, child[0].index);
        }
        this.opens = [sessionStorage.getItem('navActiveParentIndex')];
      } else {
        if (this.$route.name !== sessionStorage.getItem('navActiveName')) {
          // 找到当前name对应的两个index
          var _parent = void 0;
          var _child = void 0;
          _parent = this.navInformation.filter(function (item) {
            return item.linkName === it.$route.name;
          });
          if (_parent.length > 0) {
            this.changeNavActive(_parent[0].index);
          } else {
            _parent = this.navInformation.filter(function (item) {
              var isTrue = false;
              if (item.children.length > 0) {
                var arr = item.children.filter(function (one) {
                  return one.linkName === it.$route.name;
                });
                if (arr.length > 0) {
                  isTrue = true;
                }
              }
              return isTrue;
            });
            _child = _parent[0].children.filter(function (item) {
              return item.linkName === it.$route.name;
            });
            this.changeNavActive(_parent[0].index, _child[0].index);
          }
          this.opens = [sessionStorage.getItem('navActiveParentIndex')];
        } else {
          // 用户点击
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3371c502","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/nav/index.vue
var nav_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-menu',{ref:"tab",class:_vm.cname,style:(_vm.myStyle),attrs:{"unique-opened":_vm.accordion===true? true:false,"default-openeds":_vm.opens,"mode":_vm.horizontal===true? 'horizontal':'vertical'},on:{"select":_vm.saveOpen}},_vm._l((_vm.navInformation),function(item){return (item.children!==undefined && item.children.length>0)?_c('el-submenu',{key:item.index,attrs:{"index":item.index}},[_c('template',{slot:"title"},[_c('router-link',{class:item.active===true?'replace_active':'',attrs:{"to":{name:item.linkName}}},[_c('i',{staticClass:"icon iconfont",class:item.iconName}),_vm._v("\n        "+_vm._s(_vm.$t(item.name))+"\n      ")])],1),_vm._v(" "),_c('el-menu-item-group',_vm._l((item.children),function(one){return _c('el-menu-item',{key:one.index,attrs:{"index":one.index}},[_c('router-link',{class:one.active===true?'replace_active':'',attrs:{"to":{name:one.linkName}}},[_c('i',{staticClass:"icon iconfont",class:one.iconName}),_vm._v("\n          "+_vm._s(_vm.$t(one.name))+"\n        ")])],1)}))],2):_c('el-menu-item-group',{key:item.index,staticClass:"else",attrs:{"index":item.index}},[_c('el-menu-item',{attrs:{"index":item.index}},[_c('router-link',{class:item.active===true?'replace_active':'',attrs:{"to":{name:item.linkName}}},[_c('i',{staticClass:"icon iconfont",class:item.iconName}),_vm._v("\n        "+_vm._s(_vm.$t(item.name))+"\n      ")])],1)],1)}))}
var nav_staticRenderFns = []
var nav_esExports = { render: nav_render, staticRenderFns: nav_staticRenderFns }
/* harmony default export */ var components_nav = (nav_esExports);
// CONCATENATED MODULE: ./src/components/nav/index.vue
var nav_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var nav___vue_template_functional__ = false
/* styles */
var nav___vue_styles__ = null
/* scopeId */
var nav___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var nav___vue_module_identifier__ = null
var nav_Component = nav_normalizeComponent(
  nav,
  components_nav,
  nav___vue_template_functional__,
  nav___vue_styles__,
  nav___vue_scopeId__,
  nav___vue_module_identifier__
)

/* harmony default export */ var src_components_nav = (nav_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/main/main.vue



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var main = ({
  data: function data() {
    var _this = this;

    var colorValidator = function colorValidator(rule, value, callback) {
      if (!value) {
        return callback(new Error(_this.langConfig.validate.required[_this.lang]));
      } else if (!/^#[\dabcdef]{6}$/i.test(value)) {
        return callback(new Error(_this.langConfig.validate.format[_this.lang]));
      } else {
        callback();
      }
    };
    return {
      value1: '',
      value3: true,
      colors: {
        primary: '#1f4665'
      },
      rules: {
        primary: [{
          validator: colorValidator,
          trigger: 'blur'
        }]
      },
      originalStyle: '',
      styleFiles: [],
      navInformation: [],
      option1: {},
      navigate: [],
      showNav: false
    };
  },

  components: { seduNavBar: src_components_nav },
  created: function created() {
    // 载入皮肤样式
    this.colors.primary = this.STORE_THEME_COLOR;
    var cssNode = document.getElementById('element-ui-login');
    if (cssNode !== null) {
      cssNode.parentNode.removeChild(cssNode);
    }

    this.getIndexStyle();
    this.mixinGetLess('', 'index');
    this.navInformation = this.$store.getters.checkNavInformation;
    this.navigate = this.$store.getters.checkBreadCrumbs;
    var vue = this;
    //  noimg 全局处理
    document.addEventListener('error', function (e) {
      var elem = e.target;
      if (elem.tagName.toLowerCase() === 'img') {
        elem.src = vue.mixinGetImage('views/global/', 'noimg.gif');
        elem.width = 120;
        elem.height = 90;
      }
    }, true);
  },


  methods: {
    changeNavigate: function changeNavigate(type) {
      this.showNav = type;
    },
    getFile: function getFile(url) {
      var isBlob = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return new promise_default.a(function (resolve, reject) {
        var client = new XMLHttpRequest();
        var urlArr = client.responseURL.split('/');
        client.responseType = isBlob ? 'blob' : '';
        client.onreadystatechange = function () {
          if (client.readyState !== 4) {
            return;
          }
          if (client.status === 200) {
            resolve({
              data: client.response,
              url: urlArr[urlArr.length - 1]
            });
          } else {
            reject(new Error(client.statusText));
          }
        };
        client.open('GET', url);
        client.send();
      });
    },
    writeNewStyle: function writeNewStyle() {
      var _this2 = this;

      var cssText = this.originalStyle;
      keys_default()(this.colors).forEach(function (key) {
        cssText = cssText.replace(new RegExp('(:|\\s+)' + key, 'g'), '$1' + _this2.colors[key]);
      });
      document.querySelector('#element-ui-theme').innerText = cssText;
    },
    getStyleTemplate: function getStyleTemplate(data) {
      var colorMap = {
        '#3a8ee6': 'shade-1',
        '#409eff': 'primary',
        '#53a8ff': 'light-1',
        '#66b1ff': 'light-2',
        '#79bbff': 'light-3',
        '#8cc5ff': 'light-4',
        '#a0cfff': 'light-5',
        '#b3d8ff': 'light-6',
        '#c6e2ff': 'light-7',
        '#d9ecff': 'light-8',
        '#ecf5ff': 'light-9'
      };
      keys_default()(colorMap).forEach(function (key) {
        var value = colorMap[key];
        data = data.replace(new RegExp(key, 'ig'), value);
      });
      return data;
    },
    getIndexStyle: function getIndexStyle() {
      var _this3 = this;

      this.getFile('/static/css/element.css').then(function (_ref) {
        var data = _ref.data;

        _this3.originalStyle = _this3.getStyleTemplate(data);
        _this3.writeNewStyle();
      });
    },
    loginOut: function loginOut() {
      sessionStorage.clear();
      this.$router.push({ name: 'login' });
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this4 = this;

    // console.log('导航change')
    var navMsg = this.$router.options.routes.filter(function (item) {
      return item.name === 'main'; // 根据当前项目最外层name容器修改
    })[0].children;
    if (to.meta.changeMark !== undefined && to.meta.changeMark !== '') {
      // 改变指定页面的markName
      if (to.meta.changeMark.toString() === to.meta.changeMark) {
        // 字符串
        var parent = void 0;
        var child = void 0;
        parent = navMsg.filter(function (item) {
          return item.name === to.meta.changeMark;
        });
        if (parent.length > 0) {
          parent[0].meta.markName = to.name;
        } else {
          parent = navMsg.filter(function (item) {
            var isTrue = false;
            if (item.children !== undefined && item.children.length > 0) {
              var arr = item.children.filter(function (one) {
                return one.name === to.meta.changeMark;
              });
              if (arr.length > 0) {
                isTrue = true;
              }
            }
            return isTrue;
          });
          child = parent[0].children.filter(function (item) {
            return item.name === to.meta.changeMark;
          });
          child[0].meta.markName = to.name;
        }
      } else {
        var _loop = function _loop(i) {
          var parent = void 0;
          var child = void 0;
          parent = navMsg.filter(function (item) {
            return item.name === to.meta.changeMark[i];
          });
          if (parent.length > 0) {
            parent[0].meta.markName = to.name;
          } else {
            parent = navMsg.filter(function (item) {
              var isTrue = false;
              if (item.children !== undefined && item.children.length > 0) {
                var arr = item.children.filter(function (one) {
                  return one.name === to.meta.changeMark[i];
                });
                if (arr.length > 0) {
                  isTrue = true;
                }
              }
              return isTrue;
            });
            child = parent[0].children.filter(function (item) {
              return item.name === to.meta.changeMark[i];
            });
            child[0].meta.markName = to.name;
          }
        };

        // 数组
        for (var i = 0; i < to.meta.changeMark.length; i++) {
          _loop(i);
        }
      }
    }
    if (to.meta.markName !== undefined && to.meta.markName !== '') {
      // 在nav上隐藏的页面
      // console.log('我是隐藏的')
      if (to.meta.parents !== undefined && to.meta.parents !== '') {
        (function () {
          // 前一个页面是隐藏页面
          // console.log('前一个页面是隐藏的')
          var arr = [];
          var parent = void 0;
          var child = void 0;
          parent = navMsg.filter(function (item) {
            return item.name === to.meta.markName;
          });
          if (parent.length > 0) {
            arr = [{ name: parent[0].meta.title, linkName: parent[0].name }];
          } else {
            parent = navMsg.filter(function (item) {
              var isTrue = false;
              if (item.children !== undefined && item.children.length > 0) {
                var _arr = item.children.filter(function (one) {
                  return one.name === to.meta.markName;
                });
                if (_arr.length > 0) {
                  isTrue = true;
                }
              }
              return isTrue;
            });
            child = parent[0].children.filter(function (item) {
              return item.name === to.meta.markName;
            });
            arr = [{ name: parent[0].meta.title, linkName: parent[0].name }, { name: child[0].meta.title, linkName: child[0].name }];
          }

          var _loop2 = function _loop2(i) {
            parent[0].children.filter(function (item) {
              if (item.name === to.meta.parents[i]) {
                arr.push({ name: item.meta.title, linkName: item.name });
              }
              return false;
            });
          };

          for (var i = 0; i < to.meta.parents.length; i++) {
            _loop2(i);
          }
          arr.push({ name: to.meta.title, linkName: to.name });
          _this4.navigate = [].concat(toConsumableArray_default()(arr));
        })();
      } else {
        // console.log('前一个页面不是隐藏的')
        var _parent = void 0;
        var _child = void 0;
        _parent = navMsg.filter(function (item) {
          return item.name === to.meta.markName;
        });
        if (_parent.length > 0) {
          this.navigate = [{ name: _parent[0].meta.title, linkName: _parent[0].name }];
        } else {
          _parent = navMsg.filter(function (item) {
            var isTrue = false;
            if (item.children !== undefined && item.children.length > 0) {
              var arr = item.children.filter(function (one) {
                return one.name === to.meta.markName;
              });
              if (arr.length > 0) {
                isTrue = true;
              }
            }
            return isTrue;
          });
          _child = _parent[0].children.filter(function (item) {
            return item.name === to.meta.markName;
          });
          this.navigate = [{ name: _parent[0].meta.title, linkName: _parent[0].name }, { name: _child[0].meta.title, linkName: _child[0].name }];
        }
        if (to.meta.replaceIndex !== true) {
          this.navigate.push({ name: to.meta.title, linkName: to.name });
        }
      }
    } else {
      // 显示的页面
      // console.log('我是显示的')
      var _parent2 = void 0;
      var _child2 = void 0;
      _parent2 = this.navInformation.filter(function (item) {
        return item.linkName === to.name;
      });
      if (_parent2.length > 0) {
        this.navigate = [{ name: _parent2[0].name, linkName: _parent2[0].linkName }];
      } else {
        _parent2 = this.navInformation.filter(function (item) {
          var isTrue = false;
          if (item.children.length > 0) {
            var arr = item.children.filter(function (one) {
              return one.linkName === to.name;
            });
            if (arr.length > 0) {
              isTrue = true;
            }
          }
          return isTrue;
        });
        _child2 = _parent2[0].children.filter(function (item) {
          return item.linkName === to.name;
        });
        this.navigate = [{ name: _parent2[0].name, linkName: _parent2[0].linkName }, { name: _child2[0].name, linkName: _child2[0].linkName }];
      }
    }
    this.$store.commit('upDateBreadCrumbs', this.navigate);
    next();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-65d31d38","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/main/main.vue
var main_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-container',[_c('el-header',{staticClass:"views-main-el-header"},[_c('div',{staticClass:"logo"},[_c('img',{attrs:{"src":_vm.mixinGetImage('views/global/', 'login_logo.png'),"alt":""}}),_vm._v(_vm._s(_vm.$t('views.main.title'))+"\n    ")]),_vm._v(" "),_c('span',[_vm._v("深度学习平台")]),_vm._v(" "),_c('div',{staticStyle:{"margin-right":"10px"}},[_c('sedu-language-switch',{attrs:{"cname":"views-main-el-header-el-dropdown","my18n":this.$i18n}}),_vm._v(" "),_c('a',{staticStyle:{"float":"right","color":"#fff","cursor":"pointer","text-decoration":"underline","margin-top":"23px","margin-right":"10px"},on:{"click":_vm.loginOut}},[_vm._v("退出登录")])],1)]),_vm._v(" "),_c('el-container',[_c('el-scrollbar',{staticClass:"views-main-el-aside-navbar"},[_c('sedu-nav-bar',{staticClass:"else",attrs:{"cname":"navbar","navInformation":_vm.navInformation}})],1),_vm._v(" "),_c('el-scrollbar',{staticClass:"views-main-container"},[_c('el-main',[_c('p',{staticClass:"views-main-navigate"},[_vm._v("\n          "+_vm._s(_vm.$t('views.navigate.title'))+"：\n          "),_vm._l((_vm.navigate),function(item,index){return (index<_vm.navigate.length-1)?_c('span',{key:index},[_c('router-link',{attrs:{"to":{name:item.linkName}}},[_vm._v(_vm._s(_vm.$t(item.name))+"  >")])],1):_c('span',[_vm._v(_vm._s(_vm.$t(item.name)))])}),_vm._v(" "),(_vm.showNav)?_c('button',{staticClass:"views-main-goBack",on:{"click":_vm.mixinGoBack}},[_c('i',{staticClass:"icon iconfont icon-fanhui"}),_vm._v("\n            "+_vm._s(_vm.$t('views.navigate.back'))+"\n          ")]):_vm._e()],2),_vm._v(" "),_c('keep-alive',[(_vm.$route.meta.keepAlive===true)?_c('router-view',{on:{"showNavigate":_vm.changeNavigate}}):_vm._e()],1),_vm._v(" "),(_vm.$route.meta.keepAlive!==true)?_c('router-view',{on:{"showNavigate":_vm.changeNavigate}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"public-footer"},[_c('a',{attrs:{"href":"www.baidu.com"}},[_vm._v("关于")]),_vm._v("\n          |\n          "),_c('a',{attrs:{"href":"https://www.baidu.com","target":"_blank"}},[_vm._v("西普教育")]),_vm._v("\n          |\n          "),_c('a',{attrs:{"href":"https://www.baidu.com","target":"_blank"}},[_vm._v("实验吧")])])],1)],1)],1)],1)}
var main_staticRenderFns = []
var main_esExports = { render: main_render, staticRenderFns: main_staticRenderFns }
/* harmony default export */ var main_main = (main_esExports);
// CONCATENATED MODULE: ./src/views/main/main.vue
var main_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var main___vue_template_functional__ = false
/* styles */
var main___vue_styles__ = null
/* scopeId */
var main___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var main___vue_module_identifier__ = null
var main_Component = main_normalizeComponent(
  main,
  main_main,
  main___vue_template_functional__,
  main___vue_styles__,
  main___vue_scopeId__,
  main___vue_module_identifier__
)

/* harmony default export */ var views_main_main = (main_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/login/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var views_login = ({
  name: 'index',
  data: function data() {
    return {
      loading: false,
      username: '',
      password: '',
      err_username: '',
      err_pwassword: '',
      showLogin: true,
      login_bool: false,
      capsLock: false
    };
  },

  watch: {
    username: function username() {
      this.validUser('username');
    },
    password: function password() {
      this.validUser('password');
    }
  },
  created: function created() {
    var cssNode = document.getElementById('element-ui-theme');
    var loginCss = document.createElement('link');
    loginCss.href = '/static/css/element.css';
    loginCss.id = 'element-ui-login';
    loginCss.rel = 'stylesheet';
    cssNode.parentNode.appendChild(loginCss);
    this.mixinGetLess('views/', 'login');
  },

  methods: {
    validUser: function validUser(type) {
      var regUsername = void 0;
      if (type === 'username') {
        regUsername = /^[a-zA-Z0-9_-]{3,16}$/;
        if (!regUsername.test(this.username)) {
          this.err_username = this.$t('views.login.tip_msg.not_null_name');
          this.login_bool = false;
        } else {
          this.err_username = '';
          this.login_bool = true;
        }
      }
      if (type === 'password') {
        regUsername = /^\S{3,16}$/;
        if (!regUsername.test(this.password)) {
          this.err_pwassword = this.$t('views.login.tip_msg.not_null_pwd');
          this.login_bool = false;
        } else {
          this.err_pwassword = '';
          this.login_bool = true;
        }
      }
    },
    login: function login() {
      var _this = this;

      var it = this;
      // 验证是否通过前端验证
      this.validUser('username');
      this.validUser('password');
      // 向后台验证
      // 向后台请求当前用户的信息-个人资料，权限等
      if (this.login_bool) {
        this.toggleLoading();
        var params = {
          username: this.username,
          password: this.password
        };
        this.$post('//192.168.200.7:83/v1/user/signin', params).then(function (res) {
          if (res.code === 200) {
            // 登陆成功
            var permissionTemplate = { // 权限对照表
              systemMonitoring: '1',
              systemMonitoringPage: '1-1',
              systemManagement: '2',
              systemAlarm: '2-1',
              systemLog: '2-2',
              systemSetting: '2-3',
              userManagement: '3',
              userManagementHome: '3-1',
              userDetails: '3-2',
              addUser: '3-3',
              clusterMonitoring: '4',
              nodeControl: '4-1',
              nodeControlDetail: '4-1-1',
              gpuDetail: '4-1-1-1',
              namespaces: '4-2',
              namespacesDetail: '4-2-1',
              home: '5',
              projectHome: '5-1',
              projectSpace: '6',
              personalSpace: '7',
              personalDevelop: '7-1',
              perCreateDevelop: '7-1-1',
              perDevelopDetails: '7-1-2',
              personalTraining: '7-2',
              perCreateTask: '7-2-1',
              perTraningDetails: '7-2-2',
              personalModel: '7-3',
              perCreateModel: '7-3-1',
              perModelDetails: '7-3-2',
              storageManagement: '8',
              announcement: '8-1',
              projectManagement: '8-2',
              personalManagement: '8-3',
              storageDetail: '8-4',
              fileManagement: '8-5',
              imageManagement: '9',
              publicImage: '9-1',
              objectImage: '9-2',
              personalImage: '9-3',
              editImage: '9-4',
              caseCenter: '10',
              caseCenterList: '10-1',
              caseDetail: '10-2',
              createCase: '10-3',
              keyManagement: '11',
              keyManagementHome: '11-1',
              researchForum: '12',
              forumManagement: '12-1',
              forumCenter: '12-2',
              myForum: '12-3',
              forumSend: '12-4',
              forumDetails: '12-5',
              help: '13',
              downloadData: '13-1'
            };
            var closePermission = false; // 是否关闭权限,只要不传true，都是开启
            var userCharacter = ''; // 用户角色，admin--管理员;projectManager--项目管理员;projectParticipant--项目参与者
            var permissionList = [];
            var publicPermissionList = ['8', '8-1', '8-4', '8-5', '9', '9-1', '9-4', '10', '10-1', '10-2', '10-3', '11', '11-1', '12', '12-2', '12-3', '12-4', '12-5', '13', '13-1'];
            if (res.data.role === 2) {
              // admin
              permissionList = ['1', '1-1', '2', '2-1', '2-2', '2-3', '3', '3-1', '3-2', '3-3', '4', '4-1', '4-1-1', '4-1-1-1', '4-2', '4-2-1', '12-1']; // 权限列表
              userCharacter = 'admin';
            } else if (res.data.role === 3) {
              // projectManager
              permissionList = ['5', '5-1', '6', '7', '7-1', '7-1-1', '7-1-2', '7-2', '7-2-1', '7-2-2', '7-3', '7-3-1', '7-3-2', '8-2', '8-3', '9-2', '9-3']; // 权限列表
              userCharacter = 'projectManager';
            } else if (res.data.role === 4) {
              // projectParticipant
              permissionList = ['5', '5-1', '6', '7', '7-1', '7-1-1', '7-1-2', '7-2', '7-2-1', '7-2-2', '7-3', '7-3-1', '7-3-2', '8-2', '8-3', '9-2', '9-3']; // 权限列表
              userCharacter = 'projectParticipant';
            } else {}
            permissionList = [].concat(toConsumableArray_default()(permissionList), publicPermissionList);
            // 初始化nav内容
            permissionList.push('');
            permissionList.unshift('');
            permissionList = permissionList.join(',');
            var navInformation = [];
            var routeMsg = _this.$router.options.routes.filter(function (item) {
              return item.name === 'main'; // 根据当前项目最外层name容器修改
            })[0].children;
            // 权限角色过滤
            if (closePermission === true) {
              navInformation = routeMsg.filter(function (item) {
                return item.meta.show !== false;
              }).map(function (item) {
                var arr = [];
                if (item.children !== undefined && item.children.length > 0) {
                  arr = item.children.filter(function (item) {
                    return item.meta.show !== false;
                  }).map(function (one) {
                    return {
                      linkName: one.name,
                      path: '/' + item.path + '/' + one.path,
                      iconName: one.meta.icon,
                      active: false,
                      name: one.meta.title
                    };
                  });
                }
                return {
                  linkName: item.name,
                  path: '/' + item.path,
                  name: item.meta.title,
                  iconName: item.meta.icon,
                  active: false,
                  children: arr
                };
              });
            } else {
              navInformation = routeMsg.filter(function (item) {
                return item.meta.show !== false && permissionList.indexOf(',' + permissionTemplate[item.name] + ',') !== -1;
              }).map(function (item) {
                var arr = [];
                if (item.children !== undefined && item.children.length > 0) {
                  arr = item.children.filter(function (item) {
                    return item.meta.show !== false && permissionList.indexOf(',' + permissionTemplate[item.name] + ',') !== -1;
                  }).map(function (one) {
                    return {
                      linkName: one.name,
                      path: '/' + item.path + '/' + one.path,
                      iconName: one.meta.icon,
                      active: false,
                      name: one.meta.title
                    };
                  });
                }
                return {
                  linkName: item.name,
                  path: '/' + item.path,
                  name: item.meta.title,
                  iconName: item.meta.icon,
                  active: false,
                  children: arr
                };
              });
            }
            var breadCrumbs = []; // 面包屑导航
            breadCrumbs.push({ name: navInformation[0].name, linkName: navInformation[0].linkName });
            if (navInformation[0].children.length > 0) {
              breadCrumbs.push({ name: navInformation[0].children[0].name, linkName: navInformation[0].children[0].linkName });
            }
            // 填充数据
            it.$store.commit('upDatePermissionList', permissionList);
            it.$store.commit('upDatePermissionTemplate', permissionTemplate);
            it.$store.commit('upDateNavInformation', navInformation);
            it.$store.commit('upDateUserCharacter', userCharacter);
            it.$store.commit('upDateClosePermission', closePermission);
            it.$store.commit('upDateBreadCrumbs', breadCrumbs);
            sessionStorage.setItem('access_token', res.data.access_token);
            sessionStorage.setItem('isLogin', 'true');
            sessionStorage.setItem('navActiveParentIndex', '1');
            sessionStorage.setItem('navActiveChildIndex', navInformation[0].children.length > 0 ? '1-1' : '');
            it.$router.push({ name: 'main' });
          } else {
            // 登陆失败
            it.$message.error(res.message);
            it.toggleLoading();
          }
        });
      }
    },
    toggleLoading: function toggleLoading() {
      this.loading = !this.loading;
    },
    checkCaps: function checkCaps(e) {
      var keyCode = e.keyCode;
      var isShift = e.shiftKey;
      //  小写97-122，大写65-90
      if (keyCode >= 65 && keyCode <= 90 && !isShift || keyCode >= 97 && keyCode <= 122 && isShift) {
        this.capsLock = true;
      } else {
        this.capsLock = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-49865786","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/login/index.vue
var login_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login-page"},[_c('iframe',{attrs:{"src":"../static/loginBg/index.html","id":"webglpage"}}),_vm._v(" "),_c('transition',{attrs:{"name":"form-fade","mode":"in-out"}},[_c('div',{staticClass:"manage-tip animated",class:_vm.loading?'fadeOut':'fadeIn'},[_c('img',{staticClass:"logo",attrs:{"src":_vm.mixinGetImage(
           'views/global/',
           'login_logo.png')}}),_vm._v(" "),_c('h1',[_vm._v(_vm._s(_vm.$t('views.login.title')))]),_vm._v(" "),_c('div',{staticClass:"login-input"},[_c('p',{staticClass:"input input-uname"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.username),expression:"username"}],class:_vm.err_username !==''? 'error animated shake':'',attrs:{"type":"text","placeholder":_vm.$t('views.login.user_name')},domProps:{"value":(_vm.username)},on:{"input":function($event){if($event.target.composing){ return; }_vm.username=$event.target.value}}})]),_vm._v(" "),_c('p',{staticClass:"tip"},[_vm._v(" "+_vm._s(_vm.err_username)+" ")]),_vm._v(" "),_c('p',{staticClass:"input input-pwd"},[_c('el-tooltip',{attrs:{"content":"大写锁定已开启","manual":true,"placement":"right","effect":"light"},model:{value:(_vm.capsLock),callback:function ($$v) {_vm.capsLock=$$v},expression:"capsLock"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"input-pwd",class:_vm.err_pwassword !==''? 'error animated shake':'',attrs:{"type":"password","placeholder":_vm.$t('views.login.password')},domProps:{"value":(_vm.password)},on:{"keypress":function($event){_vm.checkCaps($event)},"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})])],1),_vm._v(" "),_c('p',{staticClass:"tip"},[_vm._v(" "+_vm._s(_vm.err_pwassword)+" ")]),_vm._v(" "),_c('a',{staticClass:"submit-btn",on:{"click":_vm.login}},[_vm._v(_vm._s(_vm.$t('views.login.login_btn')))])])])]),_vm._v(" "),(_vm.loading)?_c('div',{staticClass:"loading animated fadeIn"},[_vm._m(0),_vm._v(" "),_c('span',[_vm._v("\n      "+_vm._s(_vm.$t('views.login.loading'))+"\n    ")])]):_vm._e(),_vm._v(" "),_c('p',{staticClass:"footer animated",class:_vm.loading?'fadeOut':'fadeIn'},[_vm._v("\n    "+_vm._s(_vm.$t('views.login.copyright'))+"\n  ")])],1)}
var login_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loader"},[_c('div',{staticClass:"loader-inner"},[_c('div',{staticClass:"loader-line-wrap"},[_c('div',{staticClass:"loader-line"})]),_vm._v(" "),_c('div',{staticClass:"loader-line-wrap"},[_c('div',{staticClass:"loader-line"})]),_vm._v(" "),_c('div',{staticClass:"loader-line-wrap"},[_c('div',{staticClass:"loader-line"})]),_vm._v(" "),_c('div',{staticClass:"loader-line-wrap"},[_c('div',{staticClass:"loader-line"})]),_vm._v(" "),_c('div',{staticClass:"loader-line-wrap"},[_c('div',{staticClass:"loader-line"})])])])}]
var login_esExports = { render: login_render, staticRenderFns: login_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_views_login = (login_esExports);
// CONCATENATED MODULE: ./src/views/login/index.vue
var login_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var login___vue_template_functional__ = false
/* styles */
var login___vue_styles__ = null
/* scopeId */
var login___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var login___vue_module_identifier__ = null
var login_Component = login_normalizeComponent(
  views_login,
  selectortype_template_index_0_src_views_login,
  login___vue_template_functional__,
  login___vue_styles__,
  login___vue_scopeId__,
  login___vue_module_identifier__
)

/* harmony default export */ var src_views_login = (login_Component.exports);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-29df7858","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/error/index.vue
var error_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var error_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"100vw","height":"100vh","overflow":"hidden"}},[_c('iframe',{staticStyle:{"width":"100vw","height":"100vh"},attrs:{"src":"../static/404/index.html","frameborder":"0"}})])}]
var error_esExports = { render: error_render, staticRenderFns: error_staticRenderFns }
/* harmony default export */ var error = (error_esExports);
// CONCATENATED MODULE: ./src/views/error/index.vue
var error_normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var error___vue_template_functional__ = false
/* styles */
var error___vue_styles__ = null
/* scopeId */
var error___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var error___vue_module_identifier__ = null
var error_Component = error_normalizeComponent(
  __vue_script__,
  error,
  error___vue_template_functional__,
  error___vue_styles__,
  error___vue_scopeId__,
  error___vue_module_identifier__
)

/* harmony default export */ var views_error = (error_Component.exports);

// CONCATENATED MODULE: ./src/router/systemMonitoring.js
/*
 * @Author: aFei
 * @Date: 2018-07-10 16:05:24
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-15 16:44:36
 */
/* harmony default export */ var systemMonitoring = ({
  name: 'systemMonitoring',
  path: 'systemMonitoring',
  redirect: { name: 'systemMonitoringPage' },
  component: function component(page) {
    return __webpack_require__.e/* require */(19).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("/zHP")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    title: 'views.nav.systemMonitoring',
    icon: 'icon-monitor'
  },
  children: [{
    name: 'systemMonitoringPage',
    path: '/',
    component: function component(page) {
      return __webpack_require__.e/* require */(18).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("QZKG")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.systemMonitoring',
      markName: 'systemMonitoring',
      show: false,
      replaceIndex: true
    }
  }]
});
// CONCATENATED MODULE: ./src/router/systemManagement.js
/*
 * @Author: aFei
 * @Date: 2018-07-10 16:09:44
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-09 16:29:19
 */
/* harmony default export */ var systemManagement = ({
  name: 'systemManagement',
  path: 'systemManagement',
  component: function component(page) {
    return __webpack_require__.e/* require */(22).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("wuZG")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  redirect: { name: 'systemAlarm' },
  meta: {
    title: 'views.nav.systemManagement',
    icon: 'icon-xitong'
  },
  children: [{
    name: 'systemAlarm',
    path: 'systemAlarm',
    component: function component(page) {
      return __webpack_require__.e/* require */(21).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("683F")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.systemAlarm'
    }
  }, {
    name: 'systemLog',
    path: 'systemLog',
    component: function component(page) {
      return __webpack_require__.e/* require */(20).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("6hsl")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.systemLog'
    }
  }, {
    name: 'systemSetting',
    path: 'systemSetting',
    component: function component(page) {
      return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("QCcE")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.systemSetting'
    }
  }]
});
// CONCATENATED MODULE: ./src/router/userManagement.js
/*
 * @Author: aFei
 * @Date: 2018-07-10 16:11:44
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-07 10:25:37
 */
/* harmony default export */ var userManagement = ({
  name: 'userManagement',
  path: 'userManagement',
  redirect: { name: 'userManagementHome' },
  component: function component(page) {
    return __webpack_require__.e/* require */(16).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Cxe8")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    title: 'views.nav.userManagement',
    icon: 'icon-ren'
  },
  children: [{
    name: 'userManagementHome',
    path: '',
    component: function component(page) {
      return __webpack_require__.e/* require */(14).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("WvI5")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.userManagement',
      markName: 'userManagement',
      show: false,
      replaceIndex: true
    }
  }, {
    name: 'userDetails',
    path: 'userDetails',
    component: function component(page) {
      return __webpack_require__.e/* require */(15).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("FYWr")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.userDetails',
      markName: 'userManagement',
      show: false
    }
  }, {
    name: 'addUser',
    path: 'editUser',
    component: function component(page) {
      return __webpack_require__.e/* require */(17).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("BrQ/")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.addUser',
      markName: 'userManagement',
      show: false
    }
  }]
});
// CONCATENATED MODULE: ./src/router/clusterMonitoring.js
/*
 * @Author: aFei
 * @Date: 2018-07-10 16:14:05
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-07 10:26:23
 */
/* harmony default export */ var clusterMonitoring = ({
  name: 'clusterMonitoring',
  path: 'clusterMonitoring',
  component: function component(page) {
    return __webpack_require__.e/* require */(75).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("UOKF")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  redirect: { name: 'nodeControl' },
  meta: {
    title: 'views.nav.clusterMonitoring',
    icon: 'icon-colonyIO'
  },
  children: [{
    name: 'nodeControl',
    path: 'nodeControl',
    component: function component(page) {
      return __webpack_require__.e/* require */(72).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("sBR9")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.nodeControl'
    }
  }, {
    name: 'nodeControlDetail',
    path: 'nodeControl/nodeControlDetail',
    component: function component(page) {
      return __webpack_require__.e/* require */(71).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("rg0j")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.nodeControlDetail',
      show: false,
      markName: 'nodeControl'
    }
  }, {
    name: 'gpuDetail',
    path: 'nodeControl/nodeControlDetail/gpuDetail',
    component: function component(page) {
      return __webpack_require__.e/* require */(76).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Xuru")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.gpuDetail',
      parents: ['nodeControlDetail'],
      show: false,
      markName: 'nodeControl'
    }
  }, {
    name: 'namespaces',
    path: 'namespaces',
    component: function component(page) {
      return __webpack_require__.e/* require */(74).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("DsS7")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.namespaces'
    }
  }, {
    name: 'namespacesDetail',
    path: 'namespaces/namespacesDetail',
    component: function component(page) {
      return __webpack_require__.e/* require */(73).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("V203")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.namespacesDetail',
      show: false,
      markName: 'namespaces'
    }
  }]
});
// CONCATENATED MODULE: ./src/router/home.js
/*
 * @Author: aFei
 * @Date: 2018-07-10 16:25:58
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-15 17:14:47
 */
/* harmony default export */ var home = ({
  name: 'home',
  path: 'home',
  redirect: { name: 'projectHome' },
  component: function component(page) {
    return __webpack_require__.e/* require */(68).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("KR8f")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    title: 'views.nav.home',
    icon: 'icon-shouye'
  },
  children: [{
    name: 'projectHome',
    path: '/',
    component: function component(page) {
      return __webpack_require__.e/* require */(67).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("MUvH")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      show: false,
      replaceIndex: true,
      markName: 'home'
    }
  }]
});
// CONCATENATED MODULE: ./src/router/projectSpace.js
/*
 * @Author: aFei
 * @Date: 2018-07-10 16:27:07
 * @LastEditors: 任雷雷
 * @LastEditTime: 2018-07-16 14:27:37
 */
// import my from '@/views/projectSpace/projectContent'
/* harmony default export */ var projectSpace = ({
  name: 'projectSpace', // ..项目空间
  path: 'projectSpace',
  component: function component(page) {
    return __webpack_require__.e/* require */(45).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("B6Sh")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  redirect: { name: 'spaceContent' },
  meta: {
    title: 'views.nav.projectSpace',
    icon: 'icon-xitong'
  },
  children: [{
    // 我的项目
    name: 'spaceContent',
    path: 'spaceContent',
    redirect: { name: 'mySpaceContent' },
    component: function component(page) {
      return __webpack_require__.e/* require */(32).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("roAJ")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.myProject',
      icon: '',
      show: false,
      markName: 'projectSpace'
    },
    children: [{
      // 我的项目内容
      name: 'mySpaceContent',
      path: 'mySpaceContent',
      component: function component(page) {
        return __webpack_require__.e/* require */(13).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("mMuX")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.myProject',
        icon: '',
        show: false,
        markName: 'projectSpace'
      }
    }, {
      // 我的项目-项目设置
      name: 'projectSetting',
      path: 'projectSetting/:idSet',
      component: function component(page) {
        return __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("mDZD")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.projectSetting',
        icon: '',
        show: false,
        markName: 'projectSpace',
        parents: ['spaceContent']
      }
    }, { // 开发环境界面
      path: 'development/:id',
      component: function component(page) {
        return __webpack_require__.e/* require */(46).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("gnFO")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.development',
        icon: '',
        show: false,
        markName: 'projectSpace',
        parents: ['spaceContent']
      },
      children: [{ // 开发环境界面
        name: 'development',
        path: '',
        component: function component(page) {
          return __webpack_require__.e/* require */(48).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("YHRH")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
          title: 'views.nav.development',
          icon: '',
          show: false,
          markName: 'projectSpace',
          parents: ['spaceContent']
        }
      }, {
        // 训练任务
        name: 'trainingTask',
        path: 'trainingTask',
        component: function component(page) {
          return __webpack_require__.e/* require */(31).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("KZrc")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
          title: 'views.nav.trainingTask',
          icon: '',
          show: false,
          markName: 'projectSpace',
          parents: ['spaceContent']
        }
      }, {
        // 模型预测
        name: 'modelPrediction',
        path: 'modelPrediction',
        component: function component(page) {
          return __webpack_require__.e/* require */(43).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("mpxy")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
          title: 'views.nav.modelPrediction',
          icon: '',
          show: false,
          markName: 'projectSpace',
          parents: ['spaceContent']
        }
      }]
    },
    // 创建开发环境
    {
      name: 'creatDevelop',
      path: 'creatDevelop',
      component: function component(page) {
        return __webpack_require__.e/* require */(49).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("ucCz")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.createDevelop',
        icon: '',
        show: false,
        markName: 'projectSpace',
        parents: ['development', 'spaceContent']
      }
    }, {
      // 开发环境详情
      name: 'developDetails',
      path: 'developDetails/:idChild',
      component: function component(page) {
        return __webpack_require__.e/* require */(47).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("q7jr")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.detailsEnvironment',
        icon: '',
        show: false,
        markName: 'projectSpace',
        parents: ['spaceContent']
      }
    }, {
      // 训练任务详情
      name: 'traningDetails',
      path: 'traningDetails/:idTask',
      component: function component(page) {
        return __webpack_require__.e/* require */(30).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("eoZR")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.trainingDetails',
        icon: '',
        show: false,
        markName: 'projectSpace',
        parents: ['spaceContent']
      }
    }, {
      // 创建训练任务
      name: 'createTraningTask',
      path: 'createTraningTask',
      component: function component(page) {
        return __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("AyF5")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.createTask',
        icon: '',
        show: false,
        markName: 'projectSpace',
        parents: ['spaceContent']
      }
    }, {
      // 模型预测详情
      name: 'modelDetails',
      path: 'modelDetails/:idModel',
      component: function component(page) {
        return __webpack_require__.e/* require */(44).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("ZT7O")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.predictionDetails',
        icon: '',
        show: false,
        markName: 'projectSpace',
        parents: ['spaceContent']
      }
    }, {
      // 创建模型预测作业
      name: 'createModelJob',
      path: 'createModelJob',
      component: function component(page) {
        return __webpack_require__.e/* require */(10).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("jzsC")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.creatingModel',
        icon: '',
        show: false,
        markName: 'projectSpace',
        parents: ['spaceContent']
      }
    }]
  }, {
    // 我参与的项目
    name: 'partSpaceContent',
    path: 'partSpaceContent',
    redirect: { name: 'partProjectSpace' },
    component: function component(page) {
      return __webpack_require__.e/* require */(35).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("rkWX")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.partProjects',
      icon: '',
      show: false,
      markName: 'projectSpace'
    },
    children: [{
      // 我参与的项目空间的内容
      name: 'partProjectSpace',
      path: 'partProjectSpace',
      component: function component(page) {
        return __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("UzZG")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.partProjects',
        icon: '',
        show: false,
        markName: 'projectSpace'
      }
    }, { // 我参与开发 开发环境界面
      path: 'partDevelopContent/:partdevID',
      component: function component(page) {
        return __webpack_require__.e/* require */(38).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("TpXM")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.development',
        icon: '',
        show: false,
        markName: 'projectSpace',
        parents: ['partSpaceContent']
      },
      children: [{ // 我参与开发 开发环境界面
        name: 'partDevelopContent',
        path: '',
        component: function component(page) {
          return __webpack_require__.e/* require */(40).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("z79h")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
          title: 'views.nav.development',
          icon: '',
          show: false,
          markName: 'projectSpace',
          parents: ['partSpaceContent']
        }
      }, {
        // 我参与开发 训练任务
        name: 'partTrainingTask',
        path: 'partTrainingTask',
        component: function component(page) {
          return __webpack_require__.e/* require */(34).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("aNnn")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
          title: 'views.nav.trainingTask',
          icon: '',
          show: false,
          markName: 'projectSpace',
          parents: ['partSpaceContent']
        }
      }, {
        // 我参与开发 模型预测
        name: 'partModelPrediction',
        path: 'partModelPrediction',
        component: function component(page) {
          return __webpack_require__.e/* require */(36).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Kfxm")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
          title: 'views.nav.modelPrediction',
          icon: '',
          show: false,
          markName: 'projectSpace',
          parents: ['partSpaceContent']
        }
      }]
    }, {
      // 我参与开发 创建开发环境
      name: 'partCreatDevelop',
      path: 'partCreatDevelop',
      component: function component(page) {
        return __webpack_require__.e/* require */(42).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("3ggp")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.createDevelop',
        icon: '',
        show: false,
        markName: 'projectSpace',
        parents: ['partSpaceContent']
      }
    }, {
      // 我参与开发  开发环境详情
      name: 'partDevelopDetails',
      path: 'partDevelopDetails/:partChildId',
      component: function component(page) {
        return __webpack_require__.e/* require */(39).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("yR4D")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.detailsEnvironment',
        icon: '',
        show: false,
        markName: 'projectSpace',
        parents: ['partSpaceContent']
      }
    }, {
      // 我参与开发  训练任务详情
      name: 'partTraningDetails',
      path: 'partTraningDetails/:partTaskId',
      component: function component(page) {
        return __webpack_require__.e/* require */(33).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("UwLz")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.trainingDetails',
        icon: '',
        show: false,
        markName: 'projectSpace',
        parents: ['partSpaceContent']
      }
    }, {
      // 我参与开发  创建训练任务
      name: 'partCreateTraningTask',
      path: 'partCreateTraningTask',
      component: function component(page) {
        return __webpack_require__.e/* require */(41).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("z/gS")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.createTask',
        icon: '',
        show: false,
        markName: 'projectSpace',
        parents: ['partSpaceContent']
      }
    }, {
      // 我参与开发  模型预测详情
      name: 'partModelDetails',
      path: 'partModelDetails/:partModelId',
      component: function component(page) {
        return __webpack_require__.e/* require */(37).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("lF/t")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.predictionDetails',
        icon: '',
        show: false,
        markName: 'projectSpace',
        parents: ['partSpaceContent']
      }
    }, {
      // 我参与开发  创建模型预测作业
      name: 'partCreateModelJob',
      path: 'partCreateModelJob',
      component: function component(page) {
        return __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("mk71")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
      },
      meta: {
        title: 'views.nav.creatingModel',
        icon: '',
        show: false,
        markName: 'projectSpace',
        parents: ['partSpaceContent']
      }
    }]
  }]
});
// CONCATENATED MODULE: ./src/router/personalSpace.js
/*
 * @Author: aFei
 * @Date: 2018-07-10 16:31:27
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-15 17:25:49
 */
/* harmony default export */ var personalSpace = ({
  name: 'personalSpace',
  path: 'personalSpace',
  component: function component(page) {
    return __webpack_require__.e/* require */(54).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("isRA")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  redirect: { name: 'personalDevelop' },
  meta: {
    title: 'views.nav.personalSpace',
    icon: 'icon-ren'
  },
  // 个人空间-开发环境
  children: [{
    // 个人空间-开发环境内容
    name: 'personalDevelop',
    path: 'personalDevelop',
    component: function component(page) {
      return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(55)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("XeOp")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.development'
    }
  }, {
    // 个人空间创-创建开发环境
    name: 'perCreateDevelop',
    path: 'personalDevelop/perCreateDevelop',
    component: function component(page) {
      return __webpack_require__.e/* require */(59).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("7LsO")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.createDevelop',
      markName: 'personalDevelop',
      show: false
    }
  }, {
    // 个人空间-开发环境详情
    name: 'perDevelopDetails',
    path: 'personalDevelop/perDevelopDetails/:perDevelopId',
    component: function component(page) {
      return __webpack_require__.e/* require */(56).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("32yv")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.detailsEnvironment',
      icon: '',
      markName: 'personalDevelop',
      show: false
    }
  }, {
    // 个人空间-训练任务
    name: 'personalTraining',
    path: 'personalTraining',
    component: function component(page) {
      return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(51)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("lhJT")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.trainingTask'
    }
  }, {
    // 个人空间创-创建训练任务
    name: 'perCreateTask',
    path: 'personalTraining/perCreateTask',
    component: function component(page) {
      return __webpack_require__.e/* require */(57).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("H7XF")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.createTask',
      markName: 'personalTraining',
      show: false
    }
  }, {
    // 个人空间创-训练任务详情
    name: 'perTraningDetails',
    path: 'personalTraining/perTraningDetails/:perTaskId',
    component: function component(page) {
      return __webpack_require__.e/* require */(50).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("tjIF")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.trainingDetails',
      markName: 'personalTraining',
      show: false
    }
  }, {
    // 个人空间-模型预测
    name: 'personalModel',
    path: 'personalModel',
    component: function component(page) {
      return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(52)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("uRv5")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.modelPrediction'
    }
  }, {
    // 个人空间-创建模型预测
    name: 'perCreateModel',
    path: 'personalModel/perCreateModel',
    component: function component(page) {
      return __webpack_require__.e/* require */(58).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("uTbl")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.creatingModel',
      markName: 'personalModel',
      show: false
    }
  }, {
    // 个人空间-模型预测详情
    name: 'perModelDetails',
    path: 'personalModel/perModelDetails/:perModelId',
    component: function component(page) {
      return __webpack_require__.e/* require */(53).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("n/rF")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.predictionDetails',
      markName: 'personalModel',
      show: false
    }
  }]
});
// CONCATENATED MODULE: ./src/router/storageManagement.js
/*
 * @Author: aFei
 * @Date: 2018-07-10 16:16:50
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-15 16:09:21
 */
/* harmony default export */ var storageManagement = ({
  name: 'storageManagement',
  path: 'storageManagement',
  component: function component(page) {
    return __webpack_require__.e/* require */(24).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("RSF6")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  redirect: function redirect(to) {
    var navInformation = JSON.parse(sessionStorage.getItem('navInformation'));
    navInformation = navInformation.filter(function (item) {
      return item.linkName === to.name;
    })[0];
    return navInformation.children[0].path;
  },
  meta: {
    title: 'views.nav.storageManagement',
    icon: 'icon-cunchuchi'
  },
  children: [{
    name: 'announcement',
    path: 'announcement',
    component: function component(page) {
      return __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("wlFC")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.announcement'
    }
  }, {
    name: 'cluster',
    path: 'cluster',
    component: function component(page) {
      return __webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("SO3l")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.cluster'
    }
  }, {
    name: 'storageDetail',
    path: 'storageDetail',
    props: true,
    component: function component(page) {
      return __webpack_require__.e/* require */(12).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("KAlT")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.storageDetail',
      markName: 'announcement',
      show: false
    }
  }, {
    name: 'fileManagement',
    path: 'fileManagement',
    props: true,
    component: function component(page) {
      return __webpack_require__.e/* require */(25).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("9I3m")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.fileManagement',
      markName: 'announcement',
      show: false
    }
  }, {
    name: 'projectManagement',
    path: 'projectManagement',
    props: true,
    component: function component(page) {
      return __webpack_require__.e/* require */(11).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("j3MC")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.projectManagement'
    }
  }, {
    name: 'personalManagement',
    path: 'personalManagement',
    props: true,
    component: function component(page) {
      return __webpack_require__.e/* require */(23).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("UeOp")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.personalManagement'
    }
  }]
});
// CONCATENATED MODULE: ./src/router/imageManagement.js
/*
 * @Author: aFei
 * @Date: 2018-07-10 16:19:31
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-03 16:16:21
 */
/* harmony default export */ var imageManagement = ({
  name: 'imageManagement',
  path: 'imageManagement',
  component: function component(page) {
    return __webpack_require__.e/* require */(66).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("WKnO")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  redirect: { name: 'publicImage' },
  meta: {
    title: 'views.nav.imageManagement',
    icon: 'icon-xuniji'
  },
  children: [{
    name: 'publicImage',
    path: 'publicImage',
    component: function component(page) {
      return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(62)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("rOlG")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.publicImage',
      changeMark: 'editImage'
    }
  }, {
    name: 'objectImage',
    path: 'objectImage',
    component: function component(page) {
      return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(64)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("vKWT")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.objectImage',
      changeMark: 'editImage'
    }
  }, {
    name: 'personalImage',
    path: 'personalImage',
    component: function component(page) {
      return Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(63)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("tQcI")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.personalImage',
      changeMark: 'editImage'
    }
  }, {
    name: 'editImage',
    path: 'editImage',
    component: function component(page) {
      return __webpack_require__.e/* require */(65).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("vIVt")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.editImage',
      markName: 'publicImage',
      show: false
    }
  }]
});
// CONCATENATED MODULE: ./src/router/caseCenter.js
/*
 * @Author: aFei
 * @Date: 2018-07-10 16:20:35
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-15 17:00:11
 */
/* harmony default export */ var caseCenter = ({
  name: 'caseCenter',
  path: 'caseCenter',
  redirect: {
    name: 'caseCenterList'
  },
  component: function component(page) {
    return __webpack_require__.e/* require */(77).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("SyFv")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    title: 'views.nav.caseCenter',
    icon: 'icon-anli'
  },
  children: [{
    name: 'caseCenterList',
    path: '/',
    component: function component(page) {
      return __webpack_require__.e/* require */(80).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("ILRq")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.caseCenter',
      markName: 'caseCenter',
      show: false,
      replaceIndex: true
    }
  }, {
    name: 'caseDetail',
    path: 'caseDetail',
    component: function component(page) {
      return __webpack_require__.e/* require */(79).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("vxZN")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.caseDetail',
      markName: 'caseCenter',
      show: false
    }
  }, {
    name: 'createCase',
    path: 'editCase',
    component: function component(page) {
      return __webpack_require__.e/* require */(78).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("68dW")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.createCase',
      markName: 'caseCenter',
      show: false
    }
  }]
});
// CONCATENATED MODULE: ./src/router/keyManagement.js
/*
 * @Author: aFei
 * @Date: 2018-07-10 16:23:50
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-13 10:49:14
 */
/* harmony default export */ var keyManagement = ({
  name: 'keyManagement',
  path: 'keyManagement',
  redirect: {
    name: 'keyManagementHome'
  },
  component: function component(page) {
    return __webpack_require__.e/* require */(61).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Rfif")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    title: 'views.nav.keyManagement',
    icon: 'icon-yuechi'
  },
  children: [{
    name: 'keyManagementHome',
    path: '/',
    component: function component(page) {
      return __webpack_require__.e/* require */(60).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("yj6B")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      markName: 'keyManagement',
      show: false,
      replaceIndex: true
    }
  }]
});
// CONCATENATED MODULE: ./src/router/researchForum.js
/*
 * @Author: aFei
 * @Date: 2018-07-10 16:22:54
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-07 10:27:12
 */
/* harmony default export */ var researchForum = ({
  name: 'researchForum',
  path: 'researchForum',
  component: function component(page) {
    return __webpack_require__.e/* require */(27).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("mRAZ")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  redirect: function redirect(to) {
    var navInformation = JSON.parse(sessionStorage.getItem('navInformation'));
    navInformation = navInformation.filter(function (item) {
      return item.linkName === to.name;
    })[0];
    return navInformation.children[0].path;
  },
  meta: {
    title: 'views.nav.researchForum',
    icon: 'icon-luntan'
  },
  children: [{
    name: 'forumManagement',
    path: 'forumManagement',
    component: function component(page) {
      return __webpack_require__.e/* require */(28).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("V0R0")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.forumManagement',
      changeMark: ['forumSend', 'forumDetails']
    }
  }, {
    name: 'forumCenter',
    path: 'forumCenter',
    component: function component(page) {
      return __webpack_require__.e/* require */(29).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("9+WO")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.forumCenter',
      changeMark: ['forumSend', 'forumDetails']
    }
  }, {
    name: 'myForum',
    path: 'myForum',
    component: function component(page) {
      return __webpack_require__.e/* require */(26).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("u3Zw")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.myForum',
      changeMark: ['forumSend', 'forumDetails']
    }
  }, {
    name: 'forumSend',
    path: 'forumSend',
    component: function component(page) {
      return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Oke+")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.forumSend',
      show: false,
      markName: 'forumManagement'
    }
  }, {
    name: 'forumDetails',
    path: 'forumDetails',
    component: function component(page) {
      return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("vfs7")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.forumDetails',
      show: false,
      markName: 'forumManagement'
    }
  }]
});
// CONCATENATED MODULE: ./src/router/help.js
/*
 * @Author: xiYou
 * @Date: 2018-08-07 16:17:19
 * @Last Modified by: xiYou
 * @Last Modified time: 2018-08-08 11:58:02
 */

/* harmony default export */ var help = ({
  name: 'help',
  path: 'help',
  component: function component(page) {
    return __webpack_require__.e/* require */(69).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("yNDj")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  // 重定向到第一个子路由，即开发环境当中
  redirect: { name: 'downloadData' },
  meta: {
    title: 'views.nav.help',
    icon: 'icon-Group'
  },
  children: [{
    name: 'downloadData',
    path: 'downloadData',
    component: function component(page) {
      return __webpack_require__.e/* require */(70).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("afeU")]; ((page).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
      title: 'views.nav.downloadData'
    }
  }]
});
// CONCATENATED MODULE: ./src/router/index.js
/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:13:20
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-06 17:13:20
 * @Description:
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-15 16:31:53
 */



















vue_esm["default"].use(vue_router_esm["a" /* default */]);
/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  linkActiveClass: 'active-link',
  mode: 'history',
  routes: [{
    path: '/login',
    name: 'login',
    component: src_views_login
  }, {
    path: '/',
    name: 'main',
    component: views_main_main,
    redirect: function redirect(to) {
      if (JSON.parse(sessionStorage.getItem('isLogin')) === true) {
        var navInformation = JSON.parse(sessionStorage.getItem('navInformation'));
        return navInformation[0].children.length > 0 ? navInformation[0].children[0].path : navInformation[0].path;
      } else {
        return '/login';
      }
    },
    children: [systemMonitoring, systemManagement, userManagement, clusterMonitoring, home, projectSpace, personalSpace, storageManagement, imageManagement, caseCenter, keyManagement, researchForum, help]
  }, {
    path: '/error',
    name: 'error',
    component: views_error
  }, {
    path: '*',
    redirect: '/error'
  }]
}));
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
var vue_i18n_esm = __webpack_require__("TXmL");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/locale/lang/en.js
var en = __webpack_require__("wUZ8");
var en_default = /*#__PURE__*/__webpack_require__.n(en);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/locale/lang/zh-CN.js
var zh_CN = __webpack_require__("Vi3T");
var zh_CN_default = /*#__PURE__*/__webpack_require__.n(zh_CN);

// CONCATENATED MODULE: ./src/lang/en/views/main.js
/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:46
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-06 17:04:46
 * @Description:
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-15 09:45:45
 */
/* harmony default export */ var views_main = ({
  main: {
    title: 'VUE DEMO'
  },
  navigate: {
    title: 'My position',
    back: 'Go Back'
  },
  nav: {
    systemMonitoring: 'systemMonitoring',
    systemManagement: 'systemManagement',
    systemAlarm: 'systemAlarm',
    systemLog: 'systemLog',
    systemSetting: 'systemSettiing',
    userManagement: 'userManagement',
    userDetails: 'userDetails',
    addUser: 'addUser',
    editUser: 'editUser',
    clusterMonitoring: 'clusterMonitoring',
    nodeControl: 'nodeControl',
    nodeControlDetail: 'nodeControlDetail',
    gpuDetail: 'gpuDetail',
    namespaces: 'namespaces',
    namespacesDetail: 'namespacesDetail',
    storageManagement: 'storageManagement',
    announcement: 'announcement',
    cluster: 'cluster',
    imageManagement: 'imageManagement',
    publicImage: 'publicImage',
    objectImage: 'objectImage',
    personalImage: 'personalImage',
    addImage: 'addImage',
    editImage: 'editImage',
    caseCenter: 'caseCenter',
    researchForum: 'researchForum',
    forumManagement: 'forumManagement',
    forumCenter: 'forumCenter',
    myForum: 'myForum',
    forumSend: 'forumSend',
    forumDetails: 'forumDetails',
    keyManagement: 'keyManagement',
    help: 'help',
    home: 'home',
    myProject: 'my project',
    partProjects: 'participating projects',
    detailsEnvironment: 'environmental details',
    projectSpace: 'project space',
    personalSpace: 'personal space',
    fileManagement: '',
    development: 'development environment',
    createDevelop: 'create development',
    createTask: 'create training task',
    modelPrediction: 'model prediction',
    trainingTask: 'training task',
    creatingModel: 'creating model prediction',
    trainingDetails: 'details of the training task',
    predictionDetails: 'model prediction details',
    projectHome: 'project home',
    processSteps: 'Work Flow Description',
    downloadData: 'Download Information',
    projectManagement: 'project storage management',
    personalManagement: 'personal storage management',
    projectSetting: 'project setting'
  }
});
// CONCATENATED MODULE: ./src/lang/en/views/storageManagement.js
/*
 * @Author: Liang Liang
 * @Date: 2018-07-11 11:13:31
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-16 11:19:57
 * @Description:
 */
/* harmony default export */ var views_storageManagement = ({
  storageManagement: {
    fileManagement: {
      title: 'File Management',
      tableFileList: {
        thName: 'Name',
        thAction: 'Actions',
        thSize: 'Size',
        thDate: 'Last-Modified',
        thEncipher: 'Encipher state',
        btnEdit: 'Download',
        btnRemove: 'Remove',
        tagEncrypted: 'Encrypted',
        tagUnencrypted: 'unencrypted',
        thRecover: 'Recover state'
      },
      seduPathBreadcrumb: {
        backLabel: 'Back',
        allFileLabel: 'All Files'
      }
    }
  }
});
// CONCATENATED MODULE: ./src/lang/en/views/systemManagement.js
/*
 * @Author: aFei
 * @Date: 2018-07-19 17:40:27
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-10 14:12:26
 */
/* harmony default export */ var views_systemManagement = ({
  systemManagement: {
    nodeName: 'nodeName',
    warnType: 'warnType',
    warnStates: 'warnStates',
    warnContent: 'warnContent',
    warnDate: 'warnDate',
    select: 'select',
    reset: 'reset',
    beginTime: 'beginTime',
    endTime: 'endTime',
    chose: 'please chose',
    recentOneWeek: 'recentOneWeek',
    recentOneMonth: 'recentOneMonth',
    recentThreeMonth: 'recentThreeMonth',
    serialNumber: 'serialNumber',
    optionType: 'optionType',
    optionContent: 'optionContent',
    ip: 'IP',
    optionData: 'optionData',
    userName: 'userName',
    printReport: 'printReport',
    enter: 'please enter',
    diskManagementSettings: 'diskManagementSettings',
    systemLogSettings: 'systemLogSettings',
    systemConfigurationSettings: 'systemConfigurationSettings',
    diskCleaning: 'diskCleaning',
    diskCleaningRecord: 'diskCleaningRecord',
    type: 'type',
    diskUsage: 'diskUsage',
    status: 'status',
    alarmTime: 'alarmTime',
    operating: 'operating',
    alarmContent: 'alarmContent',
    cleaningTime: 'cleaningTime',
    freeSpace: 'freeSpace',
    cleanDiskRange: 'cleanDiskRange',
    OperationSource: 'OperationSource',
    projectName: 'projectName',
    user: 'user',
    creationTime: 'creationTime',
    projectDescription: 'projectDescription',
    setResourceQuota: 'setResourceQuota',
    projectQuotaAdjustment: 'projectQuotaAdjustment',
    basicSettings: 'basicSettings',
    mirrorParameterSetting: 'mirrorParameterSetting',
    personalSpaceResourceQuota: 'personalSpaceResourceQuota',
    storageSpaceParameterSetting: 'storageSpaceParameterSetting',
    language: 'language',
    RAM: 'RAM',
    RAM2: 'RAM(G)',
    count: 'count',
    clean: 'clean',
    cancel: 'cancel',
    start: 'start',
    quotaName: 'quotaName',
    modify: 'modify',
    save: 'save',
    systemAlarm: {},
    systemLog: {},
    systemSetting: {
      p1: 'Single node disk usage reaches 80%, automatically cleared in the system',
      p2: 'previously updated operation virtual machine and operation video.',
      p3: 'The system automatically saves near',
      p4: 'System log.',
      p5: 'Number of entries per page',
      p6: 'Number of items a teacher can create',
      p7: 'Project image quantity limit',
      p8: 'Number of personal images',
      p9: 'Project storage space limit',
      p10: 'Total capacity limit',
      p11: 'Personal storage space limit',
      p12: 'previous system alarms and system logs'
    }
  }
});
// CONCATENATED MODULE: ./src/lang/en/views/login.js
/* harmony default export */ var en_views_login = ({
  login: {
    title: 'Deep Learn (DL)',
    user_name: 'username',
    password: 'password',
    login_btn: 'Login',
    loading: '登录中请稍候',
    copyright: '版权 | 北京西普阳光教育科技股份有限公司版权所有 ©2018',
    tip_msg: {
      not_null_name: '用户名应为3-16位 数字/字母/下划线 ',
      not_null_pwd: '密码长度应为3-16位'
    }
  }
});
// CONCATENATED MODULE: ./src/lang/en/views/public.js
/* harmony default export */ var views_public = ({
  button: {
    reset: 'Reset',
    search: 'Search',
    delete: 'Delete',
    update: 'Update',
    startDate: 'Start Date',
    endDate: 'End Date',
    selectPlease: 'Please Select',
    batchDelete: 'Batch Delete',
    back: 'Back'
  },
  table: {
    createTime: 'Create Time',
    operate: 'Operate',
    states: 'States',
    noData: 'No Data'
  },
  notification: {
    removed: 'successfully deleted',
    succeed: 'This operation succeeds.'
  }
});
// CONCATENATED MODULE: ./src/lang/en/utli/index.js
/* harmony default export */ var utli = ({
  http: {
    requestError: 'request error'
  }
});
// CONCATENATED MODULE: ./src/lang/en/views/projectSpace.js
/*
 * @Author:任雷雷
 * @Date: 2018-07-12 10:04:31
 * @LastEditors: 任雷雷
 * @LastEditTime: 2018-07-12 10:31:59
 * @Description:项目空间的英文包
 */
/* harmony default export */ var views_projectSpace = ({
  projectContent: {
    myProject: 'my project',
    partPorject: 'participating projects',
    projectName: 'project name',
    createdTime: 'create time',
    startDate: 'start date',
    endDate: 'end date',
    enterContent: 'please enter the content',
    projectStatus: 'project status',
    reset: 'reset',
    query: 'query',
    selectDate: 'selection date',
    createdProject: 'new project',
    archivedItems: 'archived items',
    deleteProject: 'delete item',
    projectList: 'project list',
    requestError: 'request error !',
    serial: 'S/N',
    file: 'file',
    archival: 'setting',
    delete: 'delete',
    operation: 'operation',
    documentation: 'project documentation',
    description: 'project description',
    projectStorage: 'project storage space ID',
    projectStorageKey: 'project storage space KEY',
    projectQuota: 'project quota',
    alreadyUsed: 'quota already used',
    memory: 'memory',
    unit: 'number'
  },
  development: {
    developmentName: 'developing environment name',
    developingInformation: 'developing environmental information',
    status: 'status',
    mirror: 'mirror name',
    createdDev: 'created development',
    developmentNameID: 'developing environment name/ID',
    card: 'GUP crad',
    remarks: 'remarks',
    details: 'details',
    mirrorImage: 'mirror image',
    development: 'development environment'
  },
  trainingTask: {
    trainingTask: 'training task',
    trainingName: 'training task name',
    engineType: 'engine type',
    createtask: 'create a training task',
    trainingNameID: 'training task name/ID',
    runningTime: 'running time',
    startFile: 'start-up file',
    taskName: 'task name',
    codeDirectory: 'code directory',
    startupFile: 'start up file',
    trainingData: 'training data set',
    trainingLog: 'training log directory',
    operatParameters: 'operating parameters',
    increaseParameters: 'increase the running parameters',
    nodeConfig: 'node config',
    run: 'run',
    cancel: 'cancel',
    taskInformation: 'training task information',
    versionInf: 'version information',
    manualParameter: 'manual parameter configuration',
    useParameter: 'use the last training parameter',
    whetherVisualization: 'whether visualization',
    yes: 'yes',
    no: 'no',
    psNode: 'PS node',
    workerNode: 'worker node'
  },
  modelPrediction: {
    modelPrediction: 'model prediction',
    modelJobName: 'model job name',
    modelJobNameID: 'model job name/ID',
    useModel: 'use model',
    serverAddress: 'server address',
    createModel: 'creating model prediction operations',
    parameterSource: 'parameter source',
    jobParameter: 'job parameter',
    nodeRules: 'computing node rules',
    basicInf: 'basic information',
    parameterConfig: 'parameter configuration',
    jobName: 'job name',
    choice: 'choice'
  }
});
// CONCATENATED MODULE: ./src/lang/en/views/projectHome.js
/*
 * @Author:任雷雷
 * @Date: 2018-07-30 10:04:31
 * @LastEditors: 任雷雷
 * @LastEditTime: 2018-07-30 10:31:59
 * @Description:项目管理者首页的英文包
 */
/* harmony default export */ var projectHome = ({
  projectHome: {}
});
// CONCATENATED MODULE: ./src/lang/en/views/systemMonitoring.js
/*
 * @Author: 少侠
 * @Date: 2018-08-01 10:36:00
 * @LastEditors: 少侠
 * @LastEditTime: 2018-08-01 14:22:20
 * @Description: 系统监控
 */

/* harmony default export */ var views_systemMonitoring = ({
  systemSource: {
    title: 'System Resource Monitoring:',
    memory: 'Memory',
    usedPer: 'Usage Rate'
  },
  project: {
    title: 'Project Space Statistics: ( Total Number of Projects:',
    rightBrackets: ' )',
    proNumStr: 'Number of Projects'
  },
  images: {
    title: 'Images Statistics: ',
    publicImage: 'Public Image',
    personalImage: 'Personal Image',
    projectImage: 'Project Image',
    numAllStr: 'Number of Image',
    ge: ''
  },
  storages: {
    title: 'Storage Space Statistics: ',
    nunAllStr: 'Number of Storage Space',
    leftNumStr: 'Left Space',
    usedNumStr: 'Used Space'
  }
});
// CONCATENATED MODULE: ./src/lang/en/views/userManagement.js
/*
 * @Author: aFei
 * @Date: 2018-08-10 10:17:25
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-10 13:56:31
 */
/* harmony default export */ var views_userManagement = ({
  userManagement: {
    reset: 'reset',
    select: 'select',
    chose: 'please chose',
    enter: 'please enter',
    username: 'username',
    status: 'status',
    character: 'character',
    name: 'name',
    email: 'email',
    phone: 'phone',
    operating: 'operating',
    add: 'add',
    batchAdd: 'batchAdd',
    batchAuthorization: 'batchAuthorization',
    batchDeletion: 'batchDeletion',
    authorization: 'authorization',
    disable: 'disable',
    enable: 'enable',
    initializePassword: 'initializePassword',
    modify: 'modify',
    delete: 'delete',
    cancel: 'cancel',
    save: 'save',
    gender: 'gender',
    department: 'department',
    grade: 'grade',
    class: 'class',
    weChatNumber: 'weChatNumber',
    personalProfile: 'personalProfile',
    back: 'back',
    open: 'open',
    close: 'close',
    man: 'man',
    woman: 'woman',
    password: 'password',
    confirmPassword: 'confirmPassword',
    userManagementHome: {
      userAuthorization: 'userAuthorization',
      p1: 'Please select the type of authorization'
    },
    userDetails: {},
    addUser: {
      p1: 'Use the initial password (student number +1q2w)'
    }
  }
});
// CONCATENATED MODULE: ./src/lang/en/views/clusterMonitoring.js
/*
 * @Author: aFei
 * @Date: 2018-08-10 14:19:46
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-13 11:43:48
 */
/* harmony default export */ var views_clusterMonitoring = ({
  clusterMonitoring: {
    select: 'select',
    reset: 'reset',
    beginTime: 'beginTime',
    endTime: 'endTime',
    chose: 'please chose',
    enter: 'please enter',
    recentOneWeek: 'recentOneWeek',
    recentOneMonth: 'recentOneMonth',
    recentThreeMonth: 'recentThreeMonth',
    name: 'name',
    creationTime: 'creationTime',
    spaceType: 'spaceType',
    user: 'user',
    status: 'status',
    serialNumber: 'serialNumber',
    namespaceName: 'namespaceName',
    project: 'project',
    label: 'label',
    workloadStatus: 'workloadStatus',
    replicaSet: 'replicaSet',
    deploy: 'deploy',
    task: 'task',
    service: 'service',
    containerGroup: 'containerGroup',
    created: 'created',
    mirror: 'mirror',
    clusterIP: 'clusterIP',
    externalEndpoint: 'externalEndpoint',
    internalEndpoint: 'internalEndpoint',
    restarted: 'restarted',
    node: 'node',
    nodeName: 'nodeName',
    ip: 'IP',
    hostName: 'hostName',
    updateTime: 'updateTime',
    kernelVersion: 'kernelVersion',
    operatingSystem: 'operatingSystem',
    dockerVersion: 'dockerVersion',
    allocatedResources: 'allocatedResources',
    limitValue: 'limitValue',
    requestValue: 'requestValue',
    totalAmount: 'totalAmount',
    statusQuo: 'statusQuo',
    type: 'type',
    recentHeartbeat: 'recentHeartbeat',
    recentChanges: 'recentChanges',
    reason: 'reason',
    message: 'message',
    use: 'use',
    free: 'free',
    fullLoad: 'fullLoad',
    section: 'section',
    unknown: 'unknown',
    numberOfRestarts: 'numberOfRestarts',
    assigned: 'assigned',
    nodeControl: {},
    nodeControlDetail: {
      p1: 'GPU Usage'
    },
    gpuDetail: {},
    namespaces: {},
    namespacesDetail: {}
  }
});
// CONCATENATED MODULE: ./src/lang/en/views/casecenter.js
/* harmony default export */ var casecenter = ({
  caseCenterPage: {
    caseName: 'Case Name',
    caseType: 'Case Type',
    caseDesc: 'Case Description',
    createBtnL: 'Create Case'
  }
});
// CONCATENATED MODULE: ./src/lang/en/views/researchForum.js
/*
 * @Author: aFei
 * @Date: 2018-08-13 14:13:50
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-13 17:12:50
 */
/* harmony default export */ var views_researchForum = ({
  researchForum: {
    select: 'select',
    reset: 'reset',
    chose: 'please chose',
    enter: 'please enter',
    delete: 'delete',
    type: 'type',
    batchDeletion: 'batchDeletion',
    post: 'post',
    theme: 'theme',
    postType: 'postType',
    poster: 'poster',
    replyView: 'reply/view',
    finalPost: 'finalPost',
    operating: 'operating',
    all: 'all',
    help: 'help',
    share: 'share',
    notice: 'notice',
    announcement: 'announcement',
    postTopic: 'postTopic',
    authorReleaseTime: 'author/releaseTime',
    replyClick: 'reply/click',
    lastReply: 'lastReply',
    myPosts: 'myPosts',
    iParticipated: 'IJoinedPosts',
    reply: 'reply',
    author: 'author',
    issuingTime: 'issuingTime',
    click: 'click',
    replies: 'replies',
    postingTime: 'postingTime',
    postReply: 'postReply',
    cancel: 'cancel',
    release: 'release',
    empty: 'empty',
    publish: 'publish',
    forumManagement: {},
    forumCenter: {},
    myForum: {},
    forumSend: {},
    forumDetails: {}
  }
});
// CONCATENATED MODULE: ./src/lang/en/views/personalSpace.js
/*
 * @Author:任雷雷
 * @Date: 2018-08-02 10:04:31
 * @LastEditors: 任雷雷
 * @LastEditTime: 2018-08-02 10:31:59
 * @Description:个人空间的英文包
 */
/* harmony default export */ var views_personalSpace = ({
  personalDevelop: {
    personalSpace: 'personal space name',
    personalStorage: 'personal storage space ID',
    personalStorageKey: 'personal storage space KEY',
    personalQuota: 'personal quota'
  },
  personalTask: {},
  personalModel: {}
});
// CONCATENATED MODULE: ./src/lang/en/views/help.js
/*
 * @Author: xiYou
 * @Date: 2018-08-07 16:19:46
 * @Last Modified by: xiYou
 * @Last Modified time: 2018-08-13 10:41:32
 */

/* harmony default export */ var views_help = ({
  enter: 'Please enter a file name',
  help: {
    steps: {
      step1: 'Enter Project space',
      step2: 'New Project',
      step3: 'Project Settings',
      step4: 'Creating a development environment',
      step5: 'Create a training task',
      step6: 'Create a visual job',
      step7: 'Create model predictions',
      step8: 'Project Complete Archive'
    },
    download: {
      btnSelect: 'Select',
      abstracts: 'Abstracts',
      btnDownload: 'Download Information'
    }
  }
});
// CONCATENATED MODULE: ./src/lang/en/views/keyManagement.js
/*
 * @Author: xiYou
 * @Date: 2018-08-08 16:49:54
 * @Last Modified by: xiYou
 * @Last Modified time: 2018-08-08 18:04:42
 */
/* harmony default export */ var views_keyManagement = ({
  keyManagement: {
    keys_name: 'keys name',
    add_kay: 'add key',
    index: 'index'
  }
});
// CONCATENATED MODULE: ./src/lang/en/views/imageManagement.js
/*
 * @Author: aFei
 * @Date: 2018-08-13 17:41:57
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-14 11:44:11
 */
/* harmony default export */ var views_imageManagement = ({
  imageManagement: {
    select: 'select',
    reset: 'reset',
    beginTime: 'beginTime',
    endTime: 'endTime',
    chose: 'please chose',
    enter: 'please enter',
    recentOneWeek: 'recentOneWeek',
    recentOneMonth: 'recentOneMonth',
    recentThreeMonth: 'recentThreeMonth',
    mirrorName: 'mirrorName',
    status: 'status',
    creationTime: 'creationTime',
    mirrorClassification: 'mirrorClassification',
    mirrorDescription: 'mirrorDescription',
    createMirror: 'createMirror',
    deleteMirror: 'deleteMirror',
    operating: 'operating',
    modify: 'modify',
    delete: 'delete',
    close: 'close',
    mirrorDetails: 'mirrorDetails',
    projectSpace: 'projectSpace',
    share: 'share',
    cancel: 'cancel',
    sure: 'sure',
    publicMirror: 'publicMirror',
    projectMirror: 'projectMirror',
    projectName: 'projectName',
    projectDescription: 'projectDescription',
    save: 'save',
    mirrorId: 'mirrorId',
    operatingSystem: 'operatingSystem',
    description: 'description',
    operatingSystemType: 'operatingSystemType',
    uploadMirror: 'uploadMirror',
    publicImage: {},
    objectImage: {},
    personalImage: {
      p1: 'Choose a shared location',
      p2: 'Share this image to',
      p3: 'Choose a shared project space'
    },
    newImage: {}
  }
});
// CONCATENATED MODULE: ./src/lang/en/index.js

/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:42
 * @LastEditors: 少侠
 * @LastEditTime: 2018-08-01 10:49:23
 * @Description:
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-13 14:15:18
 */

















/* harmony default export */ var lang_en = ({
  views: extends_default()({}, views_main, views_public, views_storageManagement, views_systemManagement, en_views_login, views_projectSpace, projectHome, views_userManagement, views_systemMonitoring, views_clusterMonitoring, casecenter, views_personalSpace, views_researchForum, views_help, views_keyManagement, views_imageManagement),
  utli: extends_default()({}, utli),
  components: {}
});
// CONCATENATED MODULE: ./src/lang/zh/views/main.js
/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:39
 * @LastEditors: 少侠
 * @LastEditTime: 2018-08-08 14:29:26
 * @Description:
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-15 09:45:50
 */
/* harmony default export */ var zh_views_main = ({
  main: {
    title: 'SimpleDL'
  },
  navigate: {
    title: '我的位置',
    back: '返回'
  },
  nav: {
    systemMonitoring: '系统监控',
    systemManagement: '系统管理',
    systemAlarm: '系统告警',
    systemLog: '系统日志',
    systemSetting: '系统设置',
    userManagement: '用户管理',
    userDetails: '用户详情',
    addUser: '添加用户',
    editUser: '修改用户',
    clusterMonitoring: '集群监控',
    nodeControl: '节点控制',
    nodeControlDetail: '节点详情',
    gpuDetail: 'GPU详情',
    namespaces: '命名空间',
    namespacesDetail: '命名空间详情',
    storageManagement: '存储管理',
    announcement: '公共存储空间',
    storageDetail: '存储空间详情',
    cluster: '存储集群',
    imageManagement: '镜像管理',
    publicImage: '公共镜像管理',
    objectImage: '项目镜像管理',
    personalImage: '个人镜像管理',
    addImage: '添加镜像',
    editImage: '修改镜像',
    caseCenter: '案例中心',
    caseCenterList: '案例列表',
    caseDetail: '案例详情',
    createCase: '创建案例',
    updateCase: '修改案例',
    researchForum: '科技论坛',
    forumManagement: '论坛管理',
    forumCenter: '论坛中心',
    myForum: '我的论坛',
    forumSend: '发帖',
    forumDetails: '帖子详情',
    keyManagement: '密钥管理',
    help: '帮助',
    home: '首页',
    projectSpace: '项目空间',
    myProject: '我的项目',
    partProjects: '参与的项目',
    personalSpace: '个人空间',
    development: '开发环境',
    createDevelop: '创建开发环境',
    detailsEnvironment: '开发环境详情',
    createTask: '创建训练任务',
    trainingDetails: '训练任务详情',
    modelPrediction: '模型预测',
    creatingModel: '创建模型预测',
    predictionDetails: '模型预测详情',
    trainingTask: '训练任务',
    fileManagement: '',
    projectHome: '项目管理者首页',
    processSteps: '工作流程说明',
    downloadData: '资料下载',
    projectManagement: '项目存储空间',
    personalManagement: '个人存储空间',
    projectSetting: '项目设置'
  }
});
// CONCATENATED MODULE: ./src/lang/zh/views/storageManagement.js
/*
 * @Author: Liang Liang
 * @Date: 2018-07-11 11:13:31
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-16 11:19:49
 * @Description:
 */
/* harmony default export */ var zh_views_storageManagement = ({
  storageManagement: {
    fileManagement: {
      title: '文件管理',
      tableFileList: {
        thName: '名称',
        thAction: '操作',
        thSize: '大小',
        thDate: '最后修改时间',
        thEncipher: '加密状态',
        btnEdit: '下载',
        btnRemove: '删除',
        tagEncrypted: '已加密',
        tagUnencrypted: '未加密',
        thRecover: '恢复状态'
      },
      seduPathBreadcrumb: {
        backLabel: '返回上一级',
        allFileLabel: '全部文件'
      }
    }
  }
});
// CONCATENATED MODULE: ./src/lang/zh/views/systemManagement.js
/*
 * @Author: aFei
 * @Date: 2018-07-19 17:40:11
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-10 14:12:34
 */
/* harmony default export */ var zh_views_systemManagement = ({
  systemManagement: {
    nodeName: '节点名称',
    warnType: '告警类型',
    warnStates: '告警状态',
    warnContent: '告警内容',
    warnDate: '告警时间',
    select: '查询',
    reset: '重置',
    beginTime: '开始时间',
    endTime: '结束时间',
    chose: '请选择',
    recentOneWeek: '最近一周',
    recentOneMonth: '最近一个月',
    recentThreeMonth: '最近三个月',
    serialNumber: '序号',
    optionType: '操作类型',
    optionContent: '操作行为',
    ip: '访问地址',
    optionData: '操作时间',
    userName: '用户名称',
    printReport: '打印报告',
    enter: '请输入',
    diskManagementSettings: '磁盘管理设置',
    systemLogSettings: '系统日志设置',
    systemConfigurationSettings: '系统配置设置',
    diskCleaning: '磁盘清理',
    diskCleaningRecord: '磁盘清理记录',
    type: '类型',
    diskUsage: '磁盘使用率',
    status: '状态',
    alarmTime: '告警时间',
    operating: '操作',
    alarmContent: '告警内容',
    cleaningTime: '清理时间',
    freeSpace: '释放空间大小',
    cleanDiskRange: '清理磁盘范围',
    OperationSource: '操作来源',
    projectName: '项目名称',
    user: '所属用户',
    creationTime: '创建时间',
    projectDescription: '项目描述',
    setResourceQuota: '设置资源配额',
    projectQuotaAdjustment: '项目配额调整',
    basicSettings: '基础设置',
    mirrorParameterSetting: '镜像参数设置',
    personalSpaceResourceQuota: '个人空间资源配额',
    storageSpaceParameterSetting: '存储空间参数设置',
    language: '语言',
    RAM: '内存',
    RAM2: '内存（G）',
    count: '数量',
    clean: '清理',
    cancel: '取消',
    start: '开始',
    quotaName: '配额名称',
    modify: '修改',
    save: '保存',
    systemAlarm: {},
    systemLog: {},
    systemSetting: {
      p1: '单个节点磁盘使用量达到80%，自动清除系统中',
      p2: '以前更新的操作虚机及操作视频。',
      p3: '系统自动保存近',
      p4: '内的系统日志。',
      p5: '每页显示条目数',
      p6: '教师能够创建的项目数',
      p7: '项目镜像数量限制',
      p8: '个人镜像数量限制',
      p9: '项目的存储空间额度限制',
      p10: '总容量限制',
      p11: '个人的存储空间额度限制',
      p12: '以前的系统告警和系统日志'
    }
  }
});
// CONCATENATED MODULE: ./src/lang/zh/views/login.js
/* harmony default export */ var zh_views_login = ({
  login: {
    title: '欢迎登录"深度学习平台"',
    user_name: '请输入账号',
    password: '请输入密码',
    copyright: '版权 | 北京西普阳光教育科技股份有限公司版权所有 ©2018',
    loading: '登录中请稍候',
    login_btn: '登 录',
    tip_msg: {
      not_null_name: '用户名应为3-16位 数字/字母/下划线 ',
      not_null_pwd: '密码长度应为3-16位'
    }
  }
});
// CONCATENATED MODULE: ./src/lang/zh/utli/index.js
/* harmony default export */ var zh_utli = ({
  http: {
    requestError: '请求出错'
  }
});
// CONCATENATED MODULE: ./src/lang/zh/views/projectSpace.js
/*
 * @Author:任雷雷
 * @Date: 2018-07-12 10:04:31
 * @LastEditors: 任雷雷
 * @LastEditTime: 2018-07-12 10:31:59
 * @Description:项目空间的汉化包
 */
/* harmony default export */ var zh_views_projectSpace = ({
  projectContent: {
    myProject: '我的项目',
    partPorject: '我参与的项目',
    startDate: '开始日期',
    endDate: '结束日期',
    enterContent: '请输入内容',
    projectName: '项目名称',
    createdTime: '创建时间',
    projectStatus: '项目状态',
    reset: '重置',
    query: '查询',
    selectDate: '选择日期',
    createdProject: '新建项目',
    archivedItems: '归档项目',
    deleteProject: '删除项目',
    projectList: '项目列表',
    requestError: '请求数据失败！',
    serial: '序号',
    file: '归档',
    archival: '归档设置',
    delete: '删除',
    operation: '操作',
    documentation: '项目文档',
    description: '项目描述',
    projectStorage: '项目存储空间ID',
    projectStorageKey: '项目存储空间KEY',
    projectQuota: '项目配额',
    alreadyUsed: '已用配额',
    memory: '内存',
    unit: '个'
  },
  development: {
    developmentName: '开发环境名称',
    developingInformation: '开发环境信息',
    status: '状态',
    mirror: '镜像名称',
    createdDev: '创建开发环境',
    developmentNameID: '开发环境名称/ID',
    card: 'GUP 卡',
    remarks: '备注',
    details: '详情',
    mirrorImage: '生成镜像',
    development: '开发环境'
  },
  trainingTask: {
    trainingTask: '训练任务',
    trainingName: '训练任务名称',
    engineType: '引擎类型',
    createtask: '创建训练任务',
    trainingNameID: '训练任务名称/ID',
    runningTime: '运行时长',
    startFile: '启动文件名称',
    taskName: '任务名称',
    codeDirectory: '代码目录',
    startupFile: '启动文件',
    trainingData: '训练数据集',
    trainingLog: '训练日志目录',
    operatParameters: '运行参数',
    increaseParameters: '增加运行参数',
    nodeConfig: '节点配置',
    run: '运行',
    cancel: '取消',
    taskInformation: '训练任务信息',
    versionInf: '版本信息',
    manualParameter: '手动参数配置',
    useParameter: '使用上次训练参数',
    whetherVisualization: '是否开启可视化',
    yes: '是',
    no: '否',
    psNode: 'PS节点',
    workerNode: 'worker节点'
  },
  modelPrediction: {
    modelPrediction: '模型预测',
    modelJobName: '模型作业名称',
    modelJobNameID: '模型作业名称/ID',
    useModel: '使用模型',
    serverAddress: '服务器地址',
    createModel: '创建模型预测作业',
    parameterSource: '参数来源',
    jobParameter: '作业参数',
    nodeRules: '计算节点规则',
    basicInf: '基本信息',
    parameterConfig: '参数配置',
    jobName: '作业每次',
    choice: '选择'
  }
});
// CONCATENATED MODULE: ./src/lang/zh/views/projectHome.js
/*
 * @Author:任雷雷
 * @Date: 2018-07-12 10:04:31
 * @LastEditors: 任雷雷
 * @LastEditTime: 2018-07-12 10:31:59
 * @Description:项目管理者的汉化包
 */
/* harmony default export */ var views_projectHome = ({
  projectHome: {}
});
// CONCATENATED MODULE: ./src/lang/zh/views/systemMonitoring.js
/*
 * @Author: 少侠
 * @Date: 2018-08-01 10:36:00
 * @LastEditors: 少侠
 * @LastEditTime: 2018-08-01 14:22:21
 * @Description: 系统监控
 */

/* harmony default export */ var zh_views_systemMonitoring = ({
  systemSource: {
    title: '系统资源监控：',
    memory: '内存',
    usedPer: '使用率'
  },
  project: {
    title: '项目空间情况统计：( 总项目数量：',
    rightBrackets: '个）',
    proNumStr: '项目数量'
  },
  images: {
    title: '总体镜像情况统计：',
    publicImage: '公共镜像',
    personalImage: '个人镜像',
    projectImage: '项目镜像',
    numAllStr: '镜像总数',
    ge: '个'
  },
  storages: {
    title: '存储空间情况统计：',
    nunAllStr: '存储空间总数',
    leftNumStr: '剩余容量',
    usedNumStr: '已使用容量'
  }
});
// CONCATENATED MODULE: ./src/lang/zh/views/userManagement.js
/*
 * @Author: aFei
 * @Date: 2018-08-10 10:17:25
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-10 13:56:41
 */
/* harmony default export */ var zh_views_userManagement = ({
  userManagement: {
    reset: '重置',
    select: '查询',
    chose: '请选择',
    enter: '请输入',
    username: '用户名',
    status: '状态',
    character: '授权角色',
    name: '姓名',
    email: '邮箱',
    phone: '联系电话',
    operating: '操作',
    add: '添加',
    batchAdd: '批量添加',
    batchAuthorization: '批量授权',
    batchDeletion: '批量删除',
    authorization: '授权',
    disable: '禁用',
    enable: '启用',
    initializePassword: '初始化密码',
    modify: '修改',
    delete: '删除',
    cancel: '取消',
    save: '保存',
    gender: '性别',
    department: '院系',
    grade: '年级',
    class: '班级',
    weChatNumber: '微信号',
    personalProfile: '个人简介',
    back: '返回',
    open: '开启',
    close: '关闭',
    man: '男',
    woman: '女',
    password: '密码',
    confirmPassword: '确认密码',
    userManagementHome: {
      userAuthorization: '用户授权',
      p1: '请选择授权类型'
    },
    userDetails: {},
    addUser: {
      p1: '使用初始密码（学号+1q2w）'
    }
  }
});
// CONCATENATED MODULE: ./src/lang/zh/views/clusterMonitoring.js
/*
 * @Author: aFei
 * @Date: 2018-08-10 14:19:46
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-13 11:43:55
 */
/* harmony default export */ var zh_views_clusterMonitoring = ({
  clusterMonitoring: {
    select: '查询',
    reset: '重置',
    beginTime: '开始时间',
    endTime: '结束时间',
    chose: '请选择',
    enter: '请输入',
    recentOneWeek: '最近一周',
    recentOneMonth: '最近一个月',
    recentThreeMonth: '最近三个月',
    name: '名称',
    creationTime: '创建时间',
    spaceType: '空间类型',
    user: '所属用户',
    status: '状态',
    serialNumber: '序号',
    namespaceName: '命名空间名称',
    project: '所属项目',
    label: '标签',
    workloadStatus: '工作负载状态',
    replicaSet: '副本集',
    deploy: '部署',
    task: '任务',
    service: '服务',
    containerGroup: '容器组',
    created: '已创建',
    mirror: '镜像',
    clusterIP: '集群IP',
    externalEndpoint: '外部端点',
    internalEndpoint: '内部端点',
    restarted: '已重启',
    node: '节点',
    nodeName: '节点名称',
    ip: 'IP地址',
    hostName: '主机名称',
    updateTime: '更新时间',
    kernelVersion: '内核版本',
    operatingSystem: '操作系统',
    dockerVersion: 'docker版本',
    allocatedResources: '已分配资源',
    limitValue: '限制值',
    requestValue: '请求值',
    totalAmount: '总量',
    statusQuo: '现状',
    type: '类型',
    recentHeartbeat: '最近心跳',
    recentChanges: '最近更改',
    reason: '原因',
    message: '消息',
    use: '使用',
    free: '空闲',
    fullLoad: '满载',
    section: '部分',
    unknown: '未知',
    numberOfRestarts: '重启次数',
    assigned: '已分配',
    nodeControl: {},
    nodeControlDetail: {
      p1: 'GPU使用情况'
    },
    gpuDetail: {},
    namespaces: {},
    namespacesDetail: {}
  }
});
// CONCATENATED MODULE: ./src/lang/zh/views/casecenter.js
/* harmony default export */ var views_casecenter = ({
  caseCenterPage: {
    caseName: '案例名称',
    caseType: '案例分类',
    caseDesc: '案例描述',
    createBtnL: '创建案例'
  }
});
// CONCATENATED MODULE: ./src/lang/zh/views/researchForum.js
/*
 * @Author: aFei
 * @Date: 2018-08-13 14:13:50
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-13 17:12:56
 */
/* harmony default export */ var zh_views_researchForum = ({
  researchForum: {
    select: '查询',
    reset: '重置',
    chose: '请选择',
    enter: '请输入',
    delete: '删除',
    type: '类型',
    batchDeletion: '批量删除',
    post: '发帖',
    theme: '主题',
    postType: '贴子类型',
    poster: '发帖人',
    replyView: '回复/查看',
    finalPost: '最后发表',
    operating: '操作',
    all: '全部',
    help: '求助',
    share: '分享',
    notice: '通知',
    announcement: '公告',
    postTopic: '贴子主题',
    authorReleaseTime: '作者/发布时间',
    replyClick: '回复/点击',
    lastReply: '最后回复',
    myPosts: '我的贴子',
    iParticipated: '我参与的贴子',
    reply: '回复',
    author: '作者',
    issuingTime: '发表时间',
    click: '点击',
    replies: '回帖人',
    postingTime: '发帖时间',
    postReply: '贴子回复',
    cancel: '取消',
    release: '发布',
    empty: '清空',
    publish: '发表',
    forumManagement: {},
    forumCenter: {},
    myForum: {},
    forumSend: {},
    forumDetails: {}
  }
});
// CONCATENATED MODULE: ./src/lang/zh/views/public.js
/* harmony default export */ var zh_views_public = ({
  button: {
    reset: '重置',
    search: '查询',
    delete: '删除',
    update: '修改',
    selectPlease: '请选择',
    startDate: '开始时间',
    endDate: '结束时间',
    batchDelete: '批量删除',
    back: '返回'
  },
  table: {
    createTime: '创建时间',
    operate: '操作',
    states: '状态',
    noData: '暂无数据'
  },
  notification: {
    removed: '删除成功',
    succeed: '操作成功'
  }
});
// CONCATENATED MODULE: ./src/lang/zh/views/personalSpace.js
/*
 * @Author:任雷雷
 * @Date: 2018-07-30 10:04:31
 * @LastEditors: 任雷雷
 * @LastEditTime: 2018-07-30 10:31:59
 * @Description:个人空间的英文包
 */
/* harmony default export */ var zh_views_personalSpace = ({
  personalDevelop: {
    personalSpace: '个人空间名称',
    personalStorage: '个人存储空间ID',
    personalStorageKey: '个人存储空间KEY',
    personalQuota: '个人配额'
  },
  personalTask: {},
  personalModel: {}
});
// CONCATENATED MODULE: ./src/lang/zh/views/help.js
/*
 * @Author: xiYou
 * @Date: 2018-08-07 16:19:21
 * @Last Modified by: xiYou
 * @Last Modified time: 2018-08-13 10:40:13
 */

/* harmony default export */ var zh_views_help = ({
  help: {
    enter: '请输入文件名称',
    steps: {
      step1: '进入项目空间',
      step2: '新建项目',
      step3: '项目设置',
      step4: '创建开发环境',
      step5: '创建训练任务',
      step6: '创建可视化作业',
      step7: '创建模型预测',
      step8: '项目完成归档'
    },
    download: {
      btnSelect: '查询',
      abstracts: '摘要',
      btnDownload: '资料下载'
    }
  }
});
// CONCATENATED MODULE: ./src/lang/zh/views/keyManagement.js
/*
 * @Author: xiYou
 * @Date: 2018-08-08 16:46:12
 * @Last Modified by: xiYou
 * @Last Modified time: 2018-08-08 18:04:15
 */

/* harmony default export */ var zh_views_keyManagement = ({
  keyManagement: {
    keys_name: '密钥名称',
    add_kay: '添加密钥',
    index: '序号'
  }
});
// CONCATENATED MODULE: ./src/lang/zh/views/imageManagement.js
/*
 * @Author: aFei
 * @Date: 2018-08-13 17:42:09
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-14 11:43:54
 */
/* harmony default export */ var zh_views_imageManagement = ({
  imageManagement: {
    select: '查询',
    reset: '重置',
    beginTime: '开始时间',
    endTime: '结束时间',
    chose: '请选择',
    enter: '请输入',
    recentOneWeek: '最近一周',
    recentOneMonth: '最近一个月',
    recentThreeMonth: '最近三个月',
    mirrorName: '镜像名称',
    status: '状态',
    creationTime: '创建时间',
    mirrorClassification: '镜像分类',
    mirrorDescription: '镜像描述',
    createMirror: '创建镜像',
    deleteMirror: '删除镜像',
    operating: '操作',
    modify: '修改',
    delete: '删除',
    close: '关闭',
    mirrorDetails: '镜像详情',
    projectSpace: '所属项目空间',
    share: '共享',
    cancel: '取消',
    sure: '确定',
    publicMirror: '公共镜像',
    projectMirror: '项目镜像',
    projectName: '项目名称',
    projectDescription: '项目描述',
    save: '保存',
    mirrorId: '镜像ID',
    operatingSystem: '操作系统',
    description: '描述',
    operatingSystemType: '操作系统类型',
    uploadMirror: '上传镜像',
    publicImage: {},
    objectImage: {},
    personalImage: {
      p1: '选择共享位置',
      p2: '将此镜像共享到',
      p3: '选择共享项目空间'
    },
    newImage: {}
  }
});
// CONCATENATED MODULE: ./src/lang/zh/index.js

/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:09
 * @LastEditors: 少侠
 * @LastEditTime: 2018-08-01 10:41:40
 * @Description:
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-13 14:15:10
 */

















/* harmony default export */ var zh = ({
  // 路由
  views: extends_default()({}, zh_views_main, zh_views_public, zh_views_storageManagement, zh_views_projectSpace, zh_views_systemManagement, zh_views_login, views_projectHome, zh_views_userManagement, zh_views_systemMonitoring, zh_views_clusterMonitoring, views_casecenter, zh_views_personalSpace, zh_views_researchForum, zh_views_help, zh_views_keyManagement, zh_views_imageManagement),
  utli: extends_default()({}, zh_utli),
  components: {}
});
// CONCATENATED MODULE: ./src/lang/index.js

/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:34
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-11 11:43:56
 * @Description:
 */


 // element-ui lang
 // element-ui lang
// import ElementDeLocale from 'element-ui/lib/locale/lang/de' // element-ui lang


// import DeLocale from './de/'

vue_esm["default"].use(vue_i18n_esm["a" /* default */]);

var lang_i18n = new vue_i18n_esm["a" /* default */]({
  locale: 'zh', // set locale
  messages: {
    zh: extends_default()({
      type: 'zh',
      label: '简体中文'
    }, zh, zh_CN_default.a),
    en: extends_default()({
      type: 'en',
      label: 'English'
    }, lang_en, en_default.a)
    // de: {
    //   type: 'de',
    //   label: 'German',
    //   ...DeLocale,
    //   ...ElementDeLocale
    // }
  }
});

/* harmony default export */ var lang = (lang_i18n);
// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__("zL8q");
var element_ui_common_default = /*#__PURE__*/__webpack_require__.n(element_ui_common);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./src/vuex/states.js
/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:24
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-24 18:12:54
 * @Description:  一些全局状态
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-03 15:09:45
 */
var states_state = {
  skins: [{ template: 'blue', color: '#f48400' }, { template: 'green', color: '#42b983' }, { template: 'red', color: '#d44747' }],
  closePermission: '',
  permissionList: '',
  permissionTemplate: [],
  navInformation: [],
  userCharacter: '',
  breadCrumbs: []
};

/* harmony default export */ var states = (states_state);
// CONCATENATED MODULE: ./src/vuex/getters.js
/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:49
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-24 18:17:51
 * @Description:
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-03 15:09:21
 */

var getters = {
  templates: function templates() {
    return "blue";
  },
  language: function language() {
    return lang.locale;
  },
  themeColor: function themeColor(state) {
    var color = null;
    state.skins.map(function (key) {
      if ("blue".includes(key.template)) {
        color = key.color;
      }
    });
    return color;
  },
  checkPermissionList: function checkPermissionList(state) {
    if (state.permissionList === '') {
      state.permissionList = sessionStorage.getItem('permissionList');
    }
    return state.permissionList;
  },
  checkPermissionTemplate: function checkPermissionTemplate(state) {
    if (state.permissionTemplate.length === 0) {
      state.permissionTemplate = JSON.parse(sessionStorage.getItem('permissionTemplate'));
    }
    return state.permissionTemplate;
  },
  checkUserCharacter: function checkUserCharacter(state) {
    if (state.userCharacter === '') {
      state.userCharacter = sessionStorage.getItem('userCharacter');
    }
    return state.userCharacter;
  },
  checkClosePermission: function checkClosePermission(state) {
    if (state.closePermission === '') {
      var right = JSON.parse(sessionStorage.getItem('closePermission'));
      if (right === true) {
        state.closePermission = true;
      } else {
        state.closePermission = false;
      }
    }
    return state.closePermission;
  },
  checkNavInformation: function checkNavInformation(state) {
    if (state.navInformation.length === 0) {
      state.navInformation = JSON.parse(sessionStorage.getItem('navInformation'));
    }
    return state.navInformation;
  },
  checkBreadCrumbs: function checkBreadCrumbs(state) {
    if (state.breadCrumbs.length === 0) {
      state.breadCrumbs = JSON.parse(sessionStorage.getItem('breadCrumbs'));
    }
    return state.breadCrumbs;
  }
};
/* harmony default export */ var vuex_getters = (getters);
// CONCATENATED MODULE: ./src/vuex/actions.js
/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:13:42
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-06 17:13:42
 * @Description:
 */
/* harmony default export */ var actions = ({});
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./src/vuex/mutations.js

/*
 * @Author: aFei
 * @Date: 2018-07-10 17:31:55
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-03 15:09:37
 */
/* harmony default export */ var mutations = ({
  upDatePermissionList: function upDatePermissionList(state, data) {
    state.permissionList = data;
    sessionStorage.setItem('permissionList', data);
  },
  upDatePermissionTemplate: function upDatePermissionTemplate(state, data) {
    state.permissionTemplate = data;
    sessionStorage.setItem('permissionTemplate', stringify_default()(data));
  },
  upDateUserCharacter: function upDateUserCharacter(state, data) {
    state.userCharacter = data;
    sessionStorage.setItem('userCharacter', data);
  },
  upDateClosePermission: function upDateClosePermission(state, data) {
    state.closePermission = data;
    sessionStorage.setItem('closePermission', data);
  },
  upDateNavInformation: function upDateNavInformation(state, data) {
    state.navInformation = data;
    sessionStorage.setItem('navInformation', stringify_default()(data));
  },
  upDateBreadCrumbs: function upDateBreadCrumbs(state, data) {
    state.breadCrumbs = data;
    sessionStorage.setItem('breadCrumbs', stringify_default()(data));
  }
});
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("mtWM");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__("mw3O");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/util/http.js

/*
 @Author: 任雷雷 *
 @Date: 2018 - 07 - 10 16: 27: 12 *
 @LastEditors:任雷雷 *
 @LastEditTime: 2018 - 07 - 10 16: 27: 12 *
 @Description: 主入口
*/



// import router from '../router/index'

// axios 配置
axios_default.a.defaults.timeout = 5000;
// axios.defaults.baseURL = 'http://basic.com' // 内网
axios_default.a.defaults.baseURL = "http://rap2api.taobao.org/app/mock/21549"; // 内网
// 请求拦截器，请求前
axios_default.a.interceptors.request.use(function (config) {
  // 在请求发送之前获取cookie,并且加上定时器以及全局动画
  var token = sessionStorage.getItem('access_token');
  console.log(token);
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json'
    // 如果cookie存在就把token存再header当中
  };if (token) {
    config.headers.authorization = token;
    // 否则就重新进行登录
  } else {
      // router.replace({
      //   path: 'login'
      // })
      // return false
    }
  return config;
}, function (err) {
  // 发送请求失败
  console.log(err); // for debug
  promise_default.a.reject(err);
});
// 应答拦截器,请求后
axios_default.a.interceptors.response.use(function (response) {
  return response;
}, function (err) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误';
        break;

      case 401:
        err.message = '未授权，请登录';
        // router.replace({
        //   path: 'login'
        // })
        // return false
        break;

      case 403:
        err.message = '拒绝访问';
        break;

      case 404:
        err.message = '\u8BF7\u6C42\u5730\u5740\u51FA\u9519: ' + err.response.config.url;
        break;

      case 408:
        err.message = '请求超时';
        break;

      case 500:
        err.message = '服务器内部错误';
        break;

      case 501:
        err.message = '服务未实现';
        break;

      case 502:
        err.message = '网关错误';
        break;

      case 503:
        err.message = '服务不可用';
        break;

      case 504:
        err.message = '网关超时';
        break;

      case 505:
        err.message = 'HTTP版本不受支持';
        break;
      default:
        err.message = 'error';
    }
  }
  return promise_default.a.reject(err);
});
/**
 * get 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */

function get(url) {
  for (var _len = arguments.length, key = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    key[_key - 1] = arguments[_key];
  }

  var eject = testing(key);
  return new promise_default.a(function (resolve, reject) {
    axios_default.a.get(url, { params: eject.data }).then(function (response) {
      resolve(response.data);
    }, function (err) {
      Object(element_ui_common["Message"])({
        showClose: true,
        message: eject.error || err.message,
        type: 'error',
        duration: 5 * 1000
      });
    });
  });
}
/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */

function post(url) {
  for (var _len2 = arguments.length, key = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    key[_key2 - 1] = arguments[_key2];
  }

  var eject = testing(key);
  return new promise_default.a(function (resolve, reject) {
    axios_default.a.post(url, lib_default.a.stringify(eject.data)).then(function (response) {
      resolve(response.data);
    }, function (err) {
      Object(element_ui_common["Message"])({
        showClose: true,
        message: eject.error || err.message,
        type: 'error',
        duration: 5 * 1000
      });
    });
  });
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
function patch(url) {
  for (var _len3 = arguments.length, key = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    key[_key3 - 1] = arguments[_key3];
  }

  var eject = testing(key);
  return new promise_default.a(function (resolve, reject) {
    axios_default.a.patch(url, eject.data).then(function (response) {
      resolve(response.data);
    }, function (err) {
      Object(element_ui_common["Message"])({
        showClose: true,
        message: eject.error || err.message,
        type: 'error',
        duration: 5 * 1000
      });
    });
  });
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
function put(url) {
  for (var _len4 = arguments.length, key = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    key[_key4 - 1] = arguments[_key4];
  }

  var eject = testing(key);
  return new promise_default.a(function (resolve, reject) {
    axios_default.a.put(url, eject.data).then(function (response) {
      resolve(response.data);
    }, function (err) {
      Object(element_ui_common["Message"])({
        message: eject.error || err.message,
        type: 'error',
        duration: 5 * 1000
      });
    });
  });
}

/**
 * delete 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
function cut(url) {
  for (var _len5 = arguments.length, key = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    key[_key5 - 1] = arguments[_key5];
  }

  var eject = testing(key);
  return new promise_default.a(function (resolve, reject) {
    axios_default.a.delete(url, eject.data).then(function (response) {
      resolve(response.data);
    }, function (err) {
      Object(element_ui_common["Message"])({
        message: eject.error || err.message,
        type: 'error',
        duration: 5 * 1000
      });
    });
  });
}
// 检测参数以及数据类型函数
function testing(arr) {
  var len = arr.length;
  var eject = {};
  switch (len) {
    case 0:
      eject.data = {};
      eject.error = '';
      break;
    case 1:
      if (isObject(arr[0])) {
        eject.data = arr[0];
        eject.error = '';
      } else {
        eject.data = {};
        eject.error = arr[0];
      }
      break;
    case 2:
      eject.data = arr[0];
      eject.error = arr[1];
      break;
    default:
      break;
  }
  return eject;
}
// 判断是否是对象的函数
function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}
// CONCATENATED MODULE: ./src/vuex/module/projectSpace.js


var projectSpace_projectSpace = {
  state: {
    get: 0
  },
  mutations: {
    projectDetails: function projectDetails(state, res) {
      console.log(stringify_default()(res));
    },
    developmentData: function developmentData(state, res) {
      console.log(stringify_default()(res));
    }
  },
  actions: {
    getProjectDetails: function getProjectDetails(context) {
      get('/project-space/project-details').then(function (res) {
        context.commit('projectDetails', res);
      });
    },
    getDevelopment: function getDevelopment(context) {
      get('/project-space/development').then(function (res) {
        context.commit('developmentData', res);
      });
    }
  },
  getters: {}
};
/* harmony default export */ var module_projectSpace = (projectSpace_projectSpace);
// CONCATENATED MODULE: ./src/vuex/modules.js

var modules_module = {
  projectSpace: module_projectSpace
};
/* harmony default export */ var modules = (modules_module);
// CONCATENATED MODULE: ./src/vuex/store.js
/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:13:48
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-07 08:54:19
 * @Description:
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-07-10 17:32:06
 */








vue_esm["default"].use(vuex_esm["a" /* default */]);
var store = new vuex_esm["a" /* default */].Store({
  state: states,
  getters: vuex_getters,
  actions: actions,
  mutations: mutations,
  modules: modules
});
/* harmony default export */ var vuex_store = (store);
// CONCATENATED MODULE: ./src/util/mixin.js

/*
 * @Author: Liang Liang
 * @Date: 2018-07-07 08:24:26
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-24 17:58:56
 * @Description: 使用频率非常高的全局函数
 */

/* harmony default export */ var mixin = ({
  computed: extends_default()({}, Object(vuex_esm["b" /* mapGetters */])({
    // 添加到全局计算属性中
    STORE_THEME_COLOR: 'themeColor',
    STORE_THEME_LANG: 'language',
    STORE_TEMPLATES: 'templates'
  })),
  methods: {
    mixinGoBack: function mixinGoBack() {
      this.$router.go(-1);
    },
    mixinGetLess: function mixinGetLess() {
      var filepath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var filename = arguments[1];

      return __webpack_require__("JD/K")("./" + this.STORE_TEMPLATES + '/' + filepath + filename + '.less');
    },
    mixinGetImage: function mixinGetImage() {
      var filepath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'noimg.gif';

      return __webpack_require__("VI1W")("./" + this.STORE_TEMPLATES + '/' + filepath + filename);
    }
  }
});
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/define-property.js
var define_property = __webpack_require__("C4MV");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("pFYg");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__("Zx67");
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// CONCATENATED MODULE: ./src/components/breakpointUpload/src/utils.js



var oproto = Object.prototype;
var aproto = Array.prototype;
var serialize = oproto.toString;

var isFunction = function isFunction(fn) {
  return serialize.call(fn) === '[object Function]';
};

var isArray = Array.isArray || /* istanbul ignore next */function (ary) {
  return serialize.call(ary) === '[object Array]';
};

var utils_isPlainObject = function isPlainObject(obj) {
  return serialize.call(obj) === '[object Object]' && get_prototype_of_default()(obj) === oproto;
};

var utils_i = 0;
var utils = {
  uid: function uid() {
    return ++utils_i;
  },
  noop: function noop() {},
  bind: function bind(fn, context) {
    return function () {
      return fn.apply(context, arguments);
    };
  },
  preventEvent: function preventEvent(evt) {
    evt.preventDefault();
  },
  stop: function stop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  },
  nextTick: function nextTick(fn, context) {
    setTimeout(utils.bind(fn, context), 0);
  },
  toArray: function toArray(ary, start, end) {
    if (start === undefined) start = 0;
    if (end === undefined) end = ary.length;
    return aproto.slice.call(ary, start, end);
  },

  isPlainObject: utils_isPlainObject,
  isFunction: isFunction,
  isArray: isArray,
  isObject: function isObject(obj) {
    return Object(obj) === obj;
  },
  isString: function isString(s) {
    return typeof s === 'string';
  },
  isUndefined: function isUndefined(a) {
    return typeof a === 'undefined';
  },
  isDefined: function isDefined(a) {
    return typeof a !== 'undefined';
  },

  each: function each(ary, func, context) {
    if (utils.isDefined(ary.length)) {
      for (var i = 0, len = ary.length; i < len; i++) {
        if (func.call(context, ary[i], i, ary) === false) {
          break;
        }
      }
    } else {
      for (var k in ary) {
        if (func.call(context, ary[k], k, ary) === false) {
          break;
        }
      }
    }
  },

  /**
   * If option is a function, evaluate it with given params
   * @param {*} data
   * @param {...} args arguments of a callback
   * @returns {*}
   */
  evalOpts: function evalOpts(data, args) {
    if (utils.isFunction(data)) {
      // `arguments` is an object, not array, in FF, so:
      args = utils.toArray(arguments);
      data = data.apply(null, args.slice(1));
    }
    return data;
  },

  extend: function extend() {
    var options;
    var name;
    var src;
    var copy;
    var copyIsArray;
    var clone;
    var target = arguments[0] || {};
    var i = 1;
    var length = arguments.length;
    var force = false;

    // 如果第一个参数为布尔,判定是否深拷贝
    if (typeof target === 'boolean') {
      force = target;
      target = arguments[1] || {};
      i++;
    }

    // 确保接受方为一个复杂的数据类型
    if ((typeof target === 'undefined' ? 'undefined' : typeof_default()(target)) !== 'object' && !isFunction(target)) {
      target = {};
    }

    // 如果只有一个参数，那么新成员添加于 extend 所在的对象上
    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // 只处理非空参数
      if ((options = arguments[i]) != null) {
        for (name in options) {
          src = target[name];
          copy = options[name];

          // 防止环引用
          if (target === copy) {
            continue;
          }
          if (force && copy && (utils_isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              clone = src && utils_isPlainObject(src) ? src : {};
            }
            target[name] = utils.extend(force, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  },

  formatSize: function formatSize(size) {
    if (size < 1024) {
      return size.toFixed(0) + ' bytes';
    } else if (size < 1024 * 1024) {
      return (size / 1024.0).toFixed(0) + ' KB';
    } else if (size < 1024 * 1024 * 1024) {
      return (size / 1024.0 / 1024.0).toFixed(1) + ' MB';
    } else {
      return (size / 1024.0 / 1024.0 / 1024.0).toFixed(1) + ' GB';
    }
  },

  defineNonEnumerable: function defineNonEnumerable(target, key, value) {
    define_property_default()(target, key, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  }
};

/* harmony default export */ var src_utils = (utils);
// CONCATENATED MODULE: ./src/components/breakpointUpload/src/event.js

var each = src_utils.each;

var event_event = {

  _eventData: null,

  on: function on(name, func) {
    if (!this._eventData) this._eventData = {};
    if (!this._eventData[name]) this._eventData[name] = [];
    var listened = false;
    each(this._eventData[name], function (fuc) {
      if (fuc === func) {
        listened = true;
        return false;
      }
    });
    if (!listened) {
      this._eventData[name].push(func);
    }
  },

  off: function off(name, func) {
    if (!this._eventData) this._eventData = {};
    if (!this._eventData[name] || !this._eventData[name].length) return;
    if (func) {
      each(this._eventData[name], function (fuc, i) {
        if (fuc === func) {
          this._eventData[name].splice(i, 1);
          return false;
        }
      }, this);
    } else {
      this._eventData[name] = [];
    }
  },

  trigger: function trigger(name) {
    if (!this._eventData) this._eventData = {};
    if (!this._eventData[name]) return true;
    var args = this._eventData[name].slice.call(arguments, 1);
    var preventDefault = false;
    each(this._eventData[name], function (fuc) {
      preventDefault = fuc.apply(this, args) === false || preventDefault;
    }, this);
    return !preventDefault;
  }
};

/* harmony default export */ var src_event = (event_event);
// CONCATENATED MODULE: ./src/components/breakpointUpload/src/chunk.js


function Chunk(uploader, file, offset) {
  src_utils.defineNonEnumerable(this, 'uploader', uploader);
  src_utils.defineNonEnumerable(this, 'file', file);
  src_utils.defineNonEnumerable(this, 'bytes', null);
  this.offset = offset;
  this.tested = false;
  this.retries = 0;
  this.pendingRetry = false;
  this.preprocessState = 0;
  this.readState = 0;
  this.loaded = 0;
  this.total = 0;
  this.chunkSize = this.uploader.opts.chunkSize;
  this.startByte = this.offset * this.chunkSize;
  this.endByte = this.computeEndByte();
  this.xhr = null;
}

var chunk_STATUS = Chunk.STATUS = {
  PENDING: 'pending',
  UPLOADING: 'uploading',
  READING: 'reading',
  SUCCESS: 'success',
  ERROR: 'error',
  COMPLETE: 'complete',
  PROGRESS: 'progress',
  RETRY: 'retry'
};

src_utils.extend(Chunk.prototype, {

  _event: function _event(evt, args) {
    args = src_utils.toArray(arguments);
    args.unshift(this);
    this.file._chunkEvent.apply(this.file, args);
  },

  computeEndByte: function computeEndByte() {
    var endByte = Math.min(this.file.size, (this.offset + 1) * this.chunkSize);
    if (this.file.size - endByte < this.chunkSize && !this.uploader.opts.forceChunkSize) {
      // The last chunk will be bigger than the chunk size,
      // but less than 2 * this.chunkSize
      endByte = this.file.size;
    }
    return endByte;
  },

  getParams: function getParams() {
    return {
      chunkNumber: this.offset + 1,
      chunkSize: this.uploader.opts.chunkSize,
      currentChunkSize: this.endByte - this.startByte,
      totalSize: this.file.size,
      identifier: this.file.uniqueIdentifier,
      filename: this.file.name,
      relativePath: this.file.relativePath,
      totalChunks: this.file.chunks.length
    };
  },

  getTarget: function getTarget(target, params) {
    if (target.indexOf('?') < 0) {
      target += '?';
    } else {
      target += '&';
    }
    return target + params.join('&');
  },

  test: function test() {
    this.xhr = new XMLHttpRequest();
    this.xhr.addEventListener('load', testHandler, false);
    this.xhr.addEventListener('error', testHandler, false);
    var testMethod = src_utils.evalOpts(this.uploader.opts.testMethod, this.file, this);
    var data = this.prepareXhrRequest(testMethod, true);
    this.xhr.send(data);

    var $ = this;

    function testHandler(event) {
      var status = $.status(true);
      if (status === chunk_STATUS.ERROR) {
        $._event(status, $.message());
        $.uploader.uploadNextChunk();
      } else if (status === chunk_STATUS.SUCCESS) {
        $._event(status, $.message());
        $.tested = true;
      } else if (!$.file.paused) {
        // Error might be caused by file pause method
        // Chunks does not exist on the server side
        $.tested = true;
        $.send();
      }
    }
  },

  preprocessFinished: function preprocessFinished() {
    // Compute the endByte after the preprocess function to allow an
    // implementer of preprocess to set the fileObj size
    this.endByte = this.computeEndByte();
    this.preprocessState = 2;
    this.send();
  },

  readFinished: function readFinished(bytes) {
    this.readState = 2;
    this.bytes = bytes;
    this.send();
  },

  send: function send() {
    var preprocess = this.uploader.opts.preprocess;
    var read = this.uploader.opts.readFileFn;
    if (src_utils.isFunction(preprocess)) {
      switch (this.preprocessState) {
        case 0:
          this.preprocessState = 1;
          preprocess(this);
          return;
        case 1:
          return;
      }
    }
    switch (this.readState) {
      case 0:
        this.readState = 1;
        read(this.file, this.file.fileType, this.startByte, this.endByte, this);
        return;
      case 1:
        return;
    }
    if (this.uploader.opts.testChunks && !this.tested) {
      this.test();
      return;
    }

    this.loaded = 0;
    this.total = 0;
    this.pendingRetry = false;

    // Set up request and listen for event
    this.xhr = new XMLHttpRequest();
    this.xhr.upload.addEventListener('progress', progressHandler, false);
    this.xhr.addEventListener('load', doneHandler, false);
    this.xhr.addEventListener('error', doneHandler, false);

    var uploadMethod = src_utils.evalOpts(this.uploader.opts.uploadMethod, this.file, this);
    var data = this.prepareXhrRequest(uploadMethod, false, this.uploader.opts.method, this.bytes);
    this.xhr.send(data);

    var $ = this;

    function progressHandler(event) {
      if (event.lengthComputable) {
        $.loaded = event.loaded;
        $.total = event.total;
      }
      $._event(chunk_STATUS.PROGRESS, event);
    }

    function doneHandler(event) {
      var msg = $.message();
      $.processingResponse = true;
      $.uploader.opts.processResponse(msg, function (err, res) {
        $.processingResponse = false;
        if (!$.xhr) {
          return;
        }
        $.processedState = {
          err: err,
          res: res
        };
        var status = $.status();
        if (status === chunk_STATUS.SUCCESS || status === chunk_STATUS.ERROR) {
          delete $.data;
          $._event(status, res);
          status === chunk_STATUS.ERROR && $.uploader.uploadNextChunk();
        } else {
          $._event(chunk_STATUS.RETRY, res);
          $.pendingRetry = true;
          $.abort();
          $.retries++;
          var retryInterval = $.uploader.opts.chunkRetryInterval;
          if (retryInterval !== null) {
            setTimeout(function () {
              $.send();
            }, retryInterval);
          } else {
            $.send();
          }
        }
      });
    }
  },

  abort: function abort() {
    var xhr = this.xhr;
    this.xhr = null;
    this.processingResponse = false;
    this.processedState = null;
    if (xhr) {
      xhr.abort();
    }
  },

  status: function status(isTest) {
    if (this.readState === 1) {
      return chunk_STATUS.READING;
    } else if (this.pendingRetry || this.preprocessState === 1) {
      // if pending retry then that's effectively the same as actively uploading,
      // there might just be a slight delay before the retry starts
      return chunk_STATUS.UPLOADING;
    } else if (!this.xhr) {
      return chunk_STATUS.PENDING;
    } else if (this.xhr.readyState < 4 || this.processingResponse) {
      // Status is really 'OPENED', 'HEADERS_RECEIVED'
      // or 'LOADING' - meaning that stuff is happening
      return chunk_STATUS.UPLOADING;
    } else {
      var _status;
      if (this.uploader.opts.successStatuses.indexOf(this.xhr.status) > -1) {
        // HTTP 200, perfect
        // HTTP 202 Accepted - The request has been accepted for processing, but the processing has not been completed.
        _status = chunk_STATUS.SUCCESS;
      } else if (this.uploader.opts.permanentErrors.indexOf(this.xhr.status) > -1 || !isTest && this.retries >= this.uploader.opts.maxChunkRetries) {
        // HTTP 415/500/501, permanent error
        _status = chunk_STATUS.ERROR;
      } else {
        // this should never happen, but we'll reset and queue a retry
        // a likely case for this would be 503 service unavailable
        this.abort();
        _status = chunk_STATUS.PENDING;
      }
      var processedState = this.processedState;
      if (processedState && processedState.err) {
        _status = chunk_STATUS.ERROR;
      }
      return _status;
    }
  },

  message: function message() {
    return this.xhr ? this.xhr.responseText : '';
  },

  progress: function progress() {
    if (this.pendingRetry) {
      return 0;
    }
    var s = this.status();
    if (s === chunk_STATUS.SUCCESS || s === chunk_STATUS.ERROR) {
      return 1;
    } else if (s === chunk_STATUS.PENDING) {
      return 0;
    } else {
      return this.total > 0 ? this.loaded / this.total : 0;
    }
  },

  sizeUploaded: function sizeUploaded() {
    var size = this.endByte - this.startByte;
    // can't return only chunk.loaded value, because it is bigger than chunk size
    if (this.status() !== chunk_STATUS.SUCCESS) {
      size = this.progress() * size;
    }
    return size;
  },

  prepareXhrRequest: function prepareXhrRequest(method, isTest, paramsMethod, blob) {
    // Add data from the query options
    var query = src_utils.evalOpts(this.uploader.opts.query, this.file, this, isTest);
    query = src_utils.extend(this.getParams(), query);

    var target = src_utils.evalOpts(this.uploader.opts.target, this.file, this, isTest);
    var data = null;
    if (method === 'GET' || paramsMethod === 'octet') {
      // Add data from the query options
      var params = [];
      src_utils.each(query, function (v, k) {
        params.push([encodeURIComponent(k), encodeURIComponent(v)].join('='));
      });
      target = this.getTarget(target, params);
      data = blob || null;
    } else {
      // Add data from the query options
      data = new FormData();
      src_utils.each(query, function (v, k) {
        data.append(k, v);
      });
      data.append(this.uploader.opts.fileParameterName, blob, this.file.name);
    }

    this.xhr.open(method, target, true);
    this.xhr.withCredentials = this.uploader.opts.withCredentials;

    // Add data from header options
    src_utils.each(src_utils.evalOpts(this.uploader.opts.headers, this.file, this, isTest), function (v, k) {
      this.xhr.setRequestHeader(k, v);
    }, this);

    return data;
  }

});

/* harmony default export */ var src_chunk = (Chunk);
// CONCATENATED MODULE: ./src/components/breakpointUpload/src/file.js



function File(uploader, file, parent) {
  src_utils.defineNonEnumerable(this, 'uploader', uploader);
  this.isRoot = this.isFolder = uploader === this;
  src_utils.defineNonEnumerable(this, 'parent', parent || null);
  src_utils.defineNonEnumerable(this, 'files', []);
  src_utils.defineNonEnumerable(this, 'fileList', []);
  src_utils.defineNonEnumerable(this, 'chunks', []);
  src_utils.defineNonEnumerable(this, '_errorFiles', []);
  src_utils.defineNonEnumerable(this, 'file', null);
  this.id = src_utils.uid();

  if (this.isRoot || !file) {
    this.file = null;
  } else {
    if (src_utils.isString(file)) {
      // folder
      this.isFolder = true;
      this.file = null;
      this.path = file;
      if (this.parent.path) {
        file = file.substr(this.parent.path.length);
      }
      this.name = file.charAt(file.length - 1) === '/' ? file.substr(0, file.length - 1) : file;
    } else {
      this.file = file;
      this.fileType = this.file.type;
      this.name = file.fileName || file.name;
      this.size = file.size;
      this.relativePath = file.relativePath || file.webkitRelativePath || this.name;
      this._parseFile();
    }
  }

  this.paused = uploader.opts.initialPaused;
  this.error = false;
  this.allError = false;
  this.aborted = false;
  this.averageSpeed = 0;
  this.currentSpeed = 0;
  this._lastProgressCallback = Date.now();
  this._prevUploadedSize = 0;
  this._prevProgress = 0;

  this.bootstrap();
}

src_utils.extend(File.prototype, {

  _parseFile: function _parseFile() {
    var ppaths = parsePaths(this.relativePath);
    if (ppaths.length) {
      var filePaths = this.uploader.filePaths;
      src_utils.each(ppaths, function (path, i) {
        var folderFile = filePaths[path];
        if (!folderFile) {
          folderFile = new File(this.uploader, path, this.parent);
          filePaths[path] = folderFile;
          this._updateParentFileList(folderFile);
        }
        this.parent = folderFile;
        folderFile.files.push(this);
        if (!ppaths[i + 1]) {
          folderFile.fileList.push(this);
        }
      }, this);
    } else {
      this._updateParentFileList();
    }
  },

  _updateParentFileList: function _updateParentFileList(file) {
    if (!file) {
      file = this;
    }
    var p = this.parent;
    if (p) {
      p.fileList.push(file);
    }
  },

  _eachAccess: function _eachAccess(eachFn, fileFn) {
    if (this.isFolder) {
      src_utils.each(this.files, function (f, i) {
        return eachFn.call(this, f, i);
      }, this);
      return;
    }
    fileFn.call(this, this);
  },

  bootstrap: function bootstrap() {
    if (this.isFolder) return;
    var opts = this.uploader.opts;
    if (src_utils.isFunction(opts.initFileFn)) {
      opts.initFileFn.call(this, this);
    }

    this.abort(true);
    this._resetError();
    // Rebuild stack of chunks from file
    this._prevProgress = 0;
    var round = opts.forceChunkSize ? Math.ceil : Math.floor;
    var chunks = Math.max(round(this.size / opts.chunkSize), 1);
    for (var offset = 0; offset < chunks; offset++) {
      this.chunks.push(new src_chunk(this.uploader, this, offset));
    }
  },

  _measureSpeed: function _measureSpeed(hard) {
    var averageSpeeds = 0;
    var currentSpeeds = 0;
    var num = 0;
    this._eachAccess(function (file) {
      if (!file.paused && !file.error) {
        num += 1;
        averageSpeeds += file.averageSpeed || 0;
        currentSpeeds += file.currentSpeed || 0;
      }
    }, function () {
      var timeSpan = Date.now() - this._lastProgressCallback;
      if (!timeSpan) {
        return;
      }
      var smoothingFactor = this.uploader.opts.speedSmoothingFactor;
      var uploaded = this.sizeUploaded();
      // Prevent negative upload speed after file upload resume
      this.currentSpeed = Math.max((uploaded - this._prevUploadedSize) / timeSpan * 1000, 0);
      this.averageSpeed = smoothingFactor * this.currentSpeed + (1 - smoothingFactor) * this.averageSpeed;
      this._prevUploadedSize = uploaded;
    });
    if (this.isFolder) {
      if (num) {
        this.currentSpeed = currentSpeeds / num;
        this.averageSpeed = averageSpeeds / num;
      } else {
        this.currentSpeed = 0;
        this.averageSpeed = 0;
      }
    }
    if (this.parent && (hard || this.parent._checkProgress())) {
      this.parent._measureSpeed();
    }
  },

  _checkProgress: function _checkProgress() {
    return Date.now() - this._lastProgressCallback >= this.uploader.opts.progressCallbacksInterval;
  },

  _chunkEvent: function _chunkEvent(chunk, evt, message) {
    var uploader = this.uploader;
    var STATUS = src_chunk.STATUS;
    var that = this;
    var rootFile = this.getRoot();
    var triggerProgress = function triggerProgress(hard) {
      that._measureSpeed(hard);
      uploader._trigger('fileProgress', rootFile, that, chunk);
      that._lastProgressCallback = Date.now();
    };
    switch (evt) {
      case STATUS.PROGRESS:
        if (this._checkProgress()) {
          triggerProgress();
        }
        break;
      case STATUS.ERROR:
        this._error();
        this.abort(true);
        uploader._trigger('fileError', rootFile, this, message, chunk);
        break;
      case STATUS.SUCCESS:
        this._updateUploadedChunks(message, chunk);
        if (this.error) {
          return;
        }
        clearTimeout(this._progeressId);
        this._progeressId = 0;
        var timeDiff = Date.now() - this._lastProgressCallback;
        if (timeDiff < uploader.opts.progressCallbacksInterval) {
          this._progeressId = setTimeout(triggerProgress, uploader.opts.progressCallbacksInterval - timeDiff);
        }
        if (this.isComplete()) {
          clearTimeout(this._progeressId);
          triggerProgress(true);
          this.currentSpeed = 0;
          this.averageSpeed = 0;
          uploader._trigger('fileSuccess', rootFile, this, message, chunk);
          if (rootFile.isComplete()) {
            uploader._trigger('fileComplete', rootFile, this);
          }
        } else if (!this._progeressId) {
          triggerProgress();
        }
        break;
      case STATUS.RETRY:
        uploader._trigger('fileRetry', rootFile, this, chunk);
        break;
    }
  },

  _updateUploadedChunks: function _updateUploadedChunks(message, chunk) {
    var checkChunkUploaded = this.uploader.opts.checkChunkUploadedByResponse;
    if (checkChunkUploaded) {
      src_utils.each(this.chunks, function (_chunk) {
        if (!_chunk.tested && checkChunkUploaded.call(this, _chunk, message)) {
          _chunk.xhr = chunk.xhr;
        }
        _chunk.tested = true;
      }, this);
      if (!this._firstResponse) {
        this._firstResponse = true;
        this.uploader.upload(true);
      } else {
        this.uploader.uploadNextChunk();
      }
    } else {
      this.uploader.uploadNextChunk();
    }
  },

  _error: function _error() {
    this.error = this.allError = true;
    var parent = this.parent;
    while (parent && parent !== this.uploader) {
      parent._errorFiles.push(this);
      parent.error = true;
      if (parent._errorFiles.length === parent.files.length) {
        parent.allError = true;
      }
      parent = parent.parent;
    }
  },

  _resetError: function _resetError() {
    this.error = this.allError = false;
    var parent = this.parent;
    var index = -1;
    while (parent && parent !== this.uploader) {
      index = parent._errorFiles.indexOf(this);
      parent._errorFiles.splice(index, 1);
      parent.allError = false;
      if (!parent._errorFiles.length) {
        parent.error = false;
      }
      parent = parent.parent;
    }
  },

  isComplete: function isComplete() {
    var outstanding = false;
    this._eachAccess(function (file) {
      if (!file.isComplete()) {
        outstanding = true;
        return false;
      }
    }, function () {
      var STATUS = src_chunk.STATUS;
      src_utils.each(this.chunks, function (chunk) {
        var status = chunk.status();
        if (status === STATUS.PENDING || status === STATUS.UPLOADING || status === STATUS.READING || chunk.preprocessState === 1 || chunk.readState === 1) {
          outstanding = true;
          return false;
        }
      });
    });
    return !outstanding;
  },

  isUploading: function isUploading() {
    var uploading = false;
    this._eachAccess(function (file) {
      if (file.isUploading()) {
        uploading = true;
        return false;
      }
    }, function () {
      var uploadingStatus = src_chunk.STATUS.UPLOADING;
      src_utils.each(this.chunks, function (chunk) {
        if (chunk.status() === uploadingStatus) {
          uploading = true;
          return false;
        }
      });
    });
    return uploading;
  },

  resume: function resume() {
    this._eachAccess(function (f) {
      f.resume();
    }, function () {
      this.paused = false;
      this.aborted = false;
      this.uploader.upload();
    });
    this.paused = false;
    this.aborted = false;
  },

  pause: function pause() {
    this._eachAccess(function (f) {
      f.pause();
    }, function () {
      this.paused = true;
      this.abort();
    });
    this.paused = true;
  },

  cancel: function cancel() {
    this.uploader.removeFile(this);
  },

  retry: function retry(file) {
    var fileRetry = function fileRetry(file) {
      if (file.error) {
        file.bootstrap();
      }
    };
    if (file) {
      file.bootstrap();
    } else {
      this._eachAccess(fileRetry, function () {
        this.bootstrap();
      });
    }
    this.uploader.upload();
  },

  abort: function abort(reset) {
    if (this.aborted) {
      return;
    }
    this.currentSpeed = 0;
    this.averageSpeed = 0;
    this.aborted = !reset;
    var chunks = this.chunks;
    if (reset) {
      this.chunks = [];
    }
    var uploadingStatus = src_chunk.STATUS.UPLOADING;
    src_utils.each(chunks, function (c) {
      if (c.status() === uploadingStatus) {
        c.abort();
        this.uploader.uploadNextChunk();
      }
    }, this);
  },

  progress: function progress() {
    var totalDone = 0;
    var totalSize = 0;
    var ret = 0;
    this._eachAccess(function (file, index) {
      totalDone += file.progress() * file.size;
      totalSize += file.size;
      if (index === this.files.length - 1) {
        ret = totalSize > 0 ? totalDone / totalSize : this.isComplete() ? 1 : 0;
      }
    }, function () {
      if (this.error) {
        ret = 1;
        return;
      }
      if (this.chunks.length === 1) {
        this._prevProgress = Math.max(this._prevProgress, this.chunks[0].progress());
        ret = this._prevProgress;
        return;
      }
      // Sum up progress across everything
      var bytesLoaded = 0;
      src_utils.each(this.chunks, function (c) {
        // get chunk progress relative to entire file
        bytesLoaded += c.progress() * (c.endByte - c.startByte);
      });
      var percent = bytesLoaded / this.size;
      // We don't want to lose percentages when an upload is paused
      this._prevProgress = Math.max(this._prevProgress, percent > 0.9999 ? 1 : percent);
      ret = this._prevProgress;
    });
    return ret;
  },

  getSize: function getSize() {
    var size = 0;
    this._eachAccess(function (file) {
      size += file.size;
    }, function () {
      size += this.size;
    });
    return size;
  },

  getFormatSize: function getFormatSize() {
    var size = this.getSize();
    return src_utils.formatSize(size);
  },

  getRoot: function getRoot() {
    if (this.isRoot) {
      return this;
    }
    var parent = this.parent;
    while (parent) {
      if (parent.parent === this.uploader) {
        // find it
        return parent;
      }
      parent = parent.parent;
    }
    return this;
  },

  sizeUploaded: function sizeUploaded() {
    var size = 0;
    this._eachAccess(function (file) {
      size += file.sizeUploaded();
    }, function () {
      src_utils.each(this.chunks, function (chunk) {
        size += chunk.sizeUploaded();
      });
    });
    return size;
  },

  timeRemaining: function timeRemaining() {
    var ret = 0;
    var sizeDelta = 0;
    var averageSpeed = 0;
    this._eachAccess(function (file, i) {
      if (!file.paused && !file.error) {
        sizeDelta += file.size - file.sizeUploaded();
        averageSpeed += file.averageSpeed;
      }
      if (i === this.files.length - 1) {
        ret = calRet(sizeDelta, averageSpeed);
      }
    }, function () {
      if (this.paused || this.error) {
        ret = 0;
        return;
      }
      var delta = this.size - this.sizeUploaded();
      ret = calRet(delta, this.averageSpeed);
    });
    return ret;
    function calRet(delta, averageSpeed) {
      if (delta && !averageSpeed) {
        return Number.POSITIVE_INFINITY;
      }
      if (!delta && !averageSpeed) {
        return 0;
      }
      return Math.floor(delta / averageSpeed);
    }
  },

  removeFile: function removeFile(file) {
    if (file.isFolder) {
      while (file.files.length) {
        var f = file.files[file.files.length - 1];
        this._removeFile(f);
      }
    }
    this._removeFile(file);
  },

  _delFilePath: function _delFilePath(file) {
    if (file.path && this.filePaths) {
      delete this.filePaths[file.path];
    }
    src_utils.each(file.fileList, function (file) {
      this._delFilePath(file);
    }, this);
  },

  _removeFile: function _removeFile(file) {
    if (!file.isFolder) {
      src_utils.each(this.files, function (f, i) {
        if (f === file) {
          this.files.splice(i, 1);
          return false;
        }
      }, this);
      file.abort();
      var parent = file.parent;
      var newParent;
      while (parent && parent !== this) {
        newParent = parent.parent;
        parent._removeFile(file);
        parent = newParent;
      }
    }
    file.parent === this && src_utils.each(this.fileList, function (f, i) {
      if (f === file) {
        this.fileList.splice(i, 1);
        return false;
      }
    }, this);
    if (!this.isRoot && this.isFolder && !this.files.length) {
      this.parent._removeFile(this);
      this.uploader._delFilePath(this);
    }
    file.parent = null;
  },

  getType: function getType() {
    if (this.isFolder) {
      return 'folder';
    }
    return this.file.type && this.file.type.split('/')[1];
  },

  getExtension: function getExtension() {
    if (this.isFolder) {
      return '';
    }
    return this.name.substr((~-this.name.lastIndexOf('.') >>> 0) + 2).toLowerCase();
  }

});

/* harmony default export */ var src_file = (File);

function parsePaths(path) {
  var ret = [];
  var paths = path.split('/');
  var len = paths.length;
  var i = 1;
  paths.splice(len - 1, 1);
  len--;
  if (paths.length) {
    while (i <= len) {
      ret.push(paths.slice(0, i++).join('/') + '/');
    }
  }
  return ret;
}
// CONCATENATED MODULE: ./src/components/breakpointUpload/src/uploader.js





var version = '__VERSION__';

var isServer = typeof window === 'undefined';

// ie10+
var ie10plus = isServer ? false : window.navigator.msPointerEnabled;
var support = function () {
  if (isServer) {
    return false;
  }
  var sliceName = 'slice';
  var _support = src_utils.isDefined(window.File) && src_utils.isDefined(window.Blob) && src_utils.isDefined(window.FileList);
  var bproto = null;
  if (_support) {
    bproto = window.Blob.prototype;
    src_utils.each(['slice', 'webkitSlice', 'mozSlice'], function (n) {
      if (bproto[n]) {
        sliceName = n;
        return false;
      }
    });
    _support = !!bproto[sliceName];
  }
  if (_support) Uploader.sliceName = sliceName;
  bproto = null;
  return _support;
}();

var supportDirectory = function () {
  if (isServer) {
    return false;
  }
  var input = window.document.createElement('input');
  input.type = 'file';
  var sd = 'webkitdirectory' in input || 'directory' in input;
  input = null;
  return sd;
}();

function Uploader(opts) {
  this.support = support;
  /* istanbul ignore if */
  if (!this.support) {
    return;
  }
  this.supportDirectory = supportDirectory;
  src_utils.defineNonEnumerable(this, 'filePaths', {});
  this.opts = src_utils.extend({}, Uploader.defaults, opts || {});

  src_file.call(this, this);
}

/**
 * Default read function using the webAPI
 *
 * @function webAPIFileRead(fileObj, fileType, startByte, endByte, chunk)
 *
 */
var webAPIFileRead = function webAPIFileRead(fileObj, fileType, startByte, endByte, chunk) {
  chunk.readFinished(fileObj.file[Uploader.sliceName](startByte, endByte, fileType));
};

Uploader.version = version;

Uploader.defaults = {
  chunkSize: 1024 * 1024,
  forceChunkSize: false,
  simultaneousUploads: 3,
  singleFile: false,
  fileParameterName: 'file',
  progressCallbacksInterval: 500,
  speedSmoothingFactor: 0.1,
  query: {},
  headers: {},
  withCredentials: false,
  preprocess: null,
  method: 'multipart',
  testMethod: 'GET',
  uploadMethod: 'POST',
  prioritizeFirstAndLastChunk: false,
  allowDuplicateUploads: false,
  target: '/',
  testChunks: true,
  generateUniqueIdentifier: null,
  maxChunkRetries: 0,
  chunkRetryInterval: null,
  permanentErrors: [404, 415, 500, 501],
  successStatuses: [200, 201, 202],
  onDropStopPropagation: false,
  initFileFn: null,
  readFileFn: webAPIFileRead,
  checkChunkUploadedByResponse: null,
  initialPaused: false,
  processResponse: function processResponse(response, cb) {
    cb(null, response);
  }
};

Uploader.utils = src_utils;
Uploader.event = src_event;
Uploader.File = src_file;
Uploader.Chunk = src_chunk;

// inherit file
Uploader.prototype = src_utils.extend({}, src_file.prototype);
// inherit event
src_utils.extend(Uploader.prototype, src_event);
src_utils.extend(Uploader.prototype, {

  constructor: Uploader,

  _trigger: function _trigger(name) {
    var args = src_utils.toArray(arguments);
    var preventDefault = !this.trigger.apply(this, arguments);
    if (name !== 'catchAll') {
      args.unshift('catchAll');
      preventDefault = !this.trigger.apply(this, args) || preventDefault;
    }
    return !preventDefault;
  },

  _triggerAsync: function _triggerAsync() {
    var args = arguments;
    src_utils.nextTick(function () {
      this._trigger.apply(this, args);
    }, this);
  },

  addFiles: function addFiles(files, evt) {
    var _files = [];
    var oldFileListLen = this.fileList.length;
    src_utils.each(files, function (file) {
      // Uploading empty file IE10/IE11 hangs indefinitely
      // Directories have size `0` and name `.`
      // Ignore already added files if opts.allowDuplicateUploads is set to false
      if ((!ie10plus || ie10plus) && file.size > 0 && !(file.size % 4096 === 0 && (file.name === '.' || file.fileName === '.'))) {
        var uniqueIdentifier = this.generateUniqueIdentifier(file);
        if (this.opts.allowDuplicateUploads || !this.getFromUniqueIdentifier(uniqueIdentifier)) {
          var _file = new src_file(this, file, this);
          _file.uniqueIdentifier = uniqueIdentifier;
          if (this._trigger('fileAdded', _file, evt)) {
            _files.push(_file);
          } else {
            src_file.prototype.removeFile.call(this, _file);
          }
        }
      }
    }, this);
    // get new fileList
    var newFileList = this.fileList.slice(oldFileListLen);
    if (this._trigger('filesAdded', _files, newFileList, evt)) {
      src_utils.each(_files, function (file) {
        if (this.opts.singleFile && this.files.length > 0) {
          this.removeFile(this.files[0]);
        }
        this.files.push(file);
      }, this);
      this._trigger('filesSubmitted', _files, newFileList, evt);
    } else {
      src_utils.each(newFileList, function (file) {
        src_file.prototype.removeFile.call(this, file);
      }, this);
    }
  },

  addFile: function addFile(file, evt) {
    this.addFiles([file], evt);
  },

  cancel: function cancel() {
    for (var i = this.fileList.length - 1; i >= 0; i--) {
      this.fileList[i].cancel();
    }
  },

  removeFile: function removeFile(file) {
    src_file.prototype.removeFile.call(this, file);
    this._trigger('fileRemoved', file);
  },

  generateUniqueIdentifier: function generateUniqueIdentifier(file) {
    var custom = this.opts.generateUniqueIdentifier;
    if (src_utils.isFunction(custom)) {
      return custom(file);
    }
    /* istanbul ignore next */
    // Some confusion in different versions of Firefox
    var relativePath = file.relativePath || file.webkitRelativePath || file.fileName || file.name;
    /* istanbul ignore next */
    return file.size + '-' + relativePath.replace(/[^0-9a-zA-Z_-]/img, '');
  },

  getFromUniqueIdentifier: function getFromUniqueIdentifier(uniqueIdentifier) {
    var ret = false;
    src_utils.each(this.files, function (file) {
      if (file.uniqueIdentifier === uniqueIdentifier) {
        ret = file;
        return false;
      }
    });
    return ret;
  },

  uploadNextChunk: function uploadNextChunk(preventEvents) {
    var found = false;
    var pendingStatus = src_chunk.STATUS.PENDING;
    var checkChunkUploaded = this.uploader.opts.checkChunkUploadedByResponse;
    if (this.opts.prioritizeFirstAndLastChunk) {
      src_utils.each(this.files, function (file) {
        if (file.paused) {
          return;
        }
        if (checkChunkUploaded && !file._firstResponse && file.isUploading()) {
          // waiting for current file's first chunk response
          return;
        }
        if (file.chunks.length && file.chunks[0].status() === pendingStatus) {
          file.chunks[0].send();
          found = true;
          return false;
        }
        if (file.chunks.length > 1 && file.chunks[file.chunks.length - 1].status() === pendingStatus) {
          file.chunks[file.chunks.length - 1].send();
          found = true;
          return false;
        }
      });
      if (found) {
        return found;
      }
    }

    // Now, simply look for the next, best thing to upload
    src_utils.each(this.files, function (file) {
      if (!file.paused) {
        if (checkChunkUploaded && !file._firstResponse && file.isUploading()) {
          // waiting for current file's first chunk response
          return;
        }
        src_utils.each(file.chunks, function (chunk) {
          if (chunk.status() === pendingStatus) {
            chunk.send();
            found = true;
            return false;
          }
        });
      }
      if (found) {
        return false;
      }
    });
    if (found) {
      return true;
    }

    // The are no more outstanding chunks to upload, check is everything is done
    var outstanding = false;
    src_utils.each(this.files, function (file) {
      if (!file.isComplete()) {
        outstanding = true;
        return false;
      }
    });
    if (!outstanding && !preventEvents) {
      // All chunks have been uploaded, complete
      this._triggerAsync('complete');
    }
    return outstanding;
  },

  upload: function upload(preventEvents) {
    // Make sure we don't start too many uploads at once
    var ret = this._shouldUploadNext();
    if (ret === false) {
      return;
    }!preventEvents && this._trigger('uploadStart');
    var started = false;
    for (var num = 1; num <= this.opts.simultaneousUploads - ret; num++) {
      started = this.uploadNextChunk(!preventEvents) || started;
      if (!started && preventEvents) {
        // completed
        break;
      }
    }
    if (!started && !preventEvents) {
      this._triggerAsync('complete');
    }
  },

  /**
   * should upload next chunk
   * @function
   * @returns {Boolean|Number}
   */
  _shouldUploadNext: function _shouldUploadNext() {
    var num = 0;
    var should = true;
    var simultaneousUploads = this.opts.simultaneousUploads;
    var uploadingStatus = src_chunk.STATUS.UPLOADING;
    src_utils.each(this.files, function (file) {
      src_utils.each(file.chunks, function (chunk) {
        if (chunk.status() === uploadingStatus) {
          num++;
          if (num >= simultaneousUploads) {
            should = false;
            return false;
          }
        }
      });
      return should;
    });
    // if should is true then return uploading chunks's length
    return should && num;
  },

  /**
   * Assign a browse action to one or more DOM nodes.
   * @function
   * @param {Element|Array.<Element>} domNodes
   * @param {boolean} isDirectory Pass in true to allow directories to
   * @param {boolean} singleFile prevent multi file upload
   * @param {Object} attributes set custom attributes:
   *  http://www.w3.org/TR/html-markup/input.file.html#input.file-attributes
   *  eg: accept: 'image/*'
   * be selected (Chrome only).
   */
  assignBrowse: function assignBrowse(domNodes, isDirectory, singleFile, attributes) {
    if (typeof domNodes.length === 'undefined') {
      domNodes = [domNodes];
    }

    src_utils.each(domNodes, function (domNode) {
      var input;
      if (domNode.tagName === 'INPUT' && domNode.type === 'file') {
        input = domNode;
      } else {
        input = document.createElement('input');
        input.setAttribute('type', 'file');
        // display:none - not working in opera 12
        src_utils.extend(input.style, {
          visibility: 'hidden',
          position: 'absolute',
          width: '1px',
          height: '1px'
        });
        // for opera 12 browser, input must be assigned to a document
        domNode.appendChild(input);
        // https://developer.mozilla.org/en/using_files_from_web_applications)
        // event listener is executed two times
        // first one - original mouse click event
        // second - input.click(), input is inside domNode
        domNode.addEventListener('click', function () {
          input.click();
        }, false);
      }
      if (!this.opts.singleFile && !singleFile) {
        input.setAttribute('multiple', 'multiple');
      }
      if (isDirectory) {
        input.setAttribute('webkitdirectory', 'webkitdirectory');
      }
      attributes && src_utils.each(attributes, function (value, key) {
        input.setAttribute(key, value);
      });
      // When new files are added, simply append them to the overall list
      var that = this;
      input.addEventListener('change', function (e) {
        if (e.target.value) {
          that.addFiles(e.target.files, e);
          e.target.value = '';
        }
      }, false);
    }, this);
  },

  onDrop: function onDrop(evt) {
    if (this.opts.onDropStopPropagation) {
      evt.stopPropagation();
    }
    evt.preventDefault();
    this._parseDataTransfer(evt.dataTransfer, evt);
  },

  _parseDataTransfer: function _parseDataTransfer(dataTransfer, evt) {
    if (dataTransfer.items && dataTransfer.items[0] && dataTransfer.items[0].webkitGetAsEntry) {
      this.webkitReadDataTransfer(dataTransfer, evt);
    } else {
      this.addFiles(dataTransfer.files, evt);
    }
  },

  webkitReadDataTransfer: function webkitReadDataTransfer(dataTransfer, evt) {
    var self = this;
    var queue = dataTransfer.items.length;
    var files = [];
    src_utils.each(dataTransfer.items, function (item) {
      var entry = item.webkitGetAsEntry();
      if (!entry) {
        decrement();
        return;
      }
      if (entry.isFile) {
        // due to a bug in Chrome's File System API impl - #149735
        fileReadSuccess(item.getAsFile(), entry.fullPath);
      } else {
        readDirectory(entry.createReader());
      }
    });

    function readDirectory(reader) {
      reader.readEntries(function (entries) {
        if (entries.length) {
          queue += entries.length;
          src_utils.each(entries, function (entry) {
            if (entry.isFile) {
              var fullPath = entry.fullPath;
              entry.file(function (file) {
                fileReadSuccess(file, fullPath);
              }, readError);
            } else if (entry.isDirectory) {
              readDirectory(entry.createReader());
            }
          });
          readDirectory(reader);
        } else {
          decrement();
        }
      }, readError);
    }

    function fileReadSuccess(file, fullPath) {
      // relative path should not start with "/"
      file.relativePath = fullPath.substring(1);
      files.push(file);
      decrement();
    }

    function readError(fileError) {
      throw fileError;
    }

    function decrement() {
      if (--queue === 0) {
        self.addFiles(files, evt);
      }
    }
  },

  _assignHelper: function _assignHelper(domNodes, handles, remove) {
    if (typeof domNodes.length === 'undefined') {
      domNodes = [domNodes];
    }
    var evtMethod = remove ? 'removeEventListener' : 'addEventListener';
    src_utils.each(domNodes, function (domNode) {
      src_utils.each(handles, function (handler, name) {
        domNode[evtMethod](name, handler, false);
      }, this);
    }, this);
  },

  /**
   * Assign one or more DOM nodes as a drop target.
   * @function
   * @param {Element|Array.<Element>} domNodes
   */
  assignDrop: function assignDrop(domNodes) {
    this._onDrop = src_utils.bind(this.onDrop, this);
    this._assignHelper(domNodes, {
      dragover: src_utils.preventEvent,
      dragenter: src_utils.preventEvent,
      drop: this._onDrop
    });
  },

  /**
   * Un-assign drop event from DOM nodes
   * @function
   * @param domNodes
   */
  unAssignDrop: function unAssignDrop(domNodes) {
    this._assignHelper(domNodes, {
      dragover: src_utils.preventEvent,
      dragenter: src_utils.preventEvent,
      drop: this._onDrop
    }, true);
    this._onDrop = null;
  }
});

/* harmony default export */ var src_uploader = (Uploader);
// CONCATENATED MODULE: ./src/components/breakpointUpload/lang.js
var lang_lang = {
  en: {
    name: 'File Name',
    progress: 'Upload Progress',
    stateStr: 'Status',
    uploading: 'Uploading...',
    paused: 'Paused',
    unUpload: 'Waiting',
    uploadFinish: 'Upload Completed',
    uploadFail: 'Upload Failed',
    aUpload: 'Upload',
    aPause: 'Pause',
    aContinue: 'Continue',
    aRetry: 'Retry',
    aDelete: 'Delete',
    msg: {
      tip: 'Please click or drag to select the file',
      formatErr: {
        tip: 'File Format Error!',
        errCode: -1
      }
    }
  },
  zh: {
    name: '文件',
    progress: '上传进度',
    stateStr: '状态',
    uploading: '上传中...',
    paused: '已暂停',
    unUpload: '待上传',
    uploadFinish: '上传完成',
    uploadFail: '上传失败',
    aUpload: '上传',
    aPause: '暂停',
    aContinue: '继续',
    aRetry: '重试',
    aDelete: '删除',
    msg: {
      tip: '请点击或者拖拽选择文件',
      formatErr: {
        tip: '文件格式错误！',
        errCode: -1
      }
    }
  }
};

/* harmony default export */ var breakpointUpload_lang = (lang_lang);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/breakpointUpload/VUploader.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var VUploader = ({
  name: 'BreakpointUpload',
  props: {
    language: {
      type: String,
      default: 'zh'
    },
    params: Object,
    myStyle: {
      type: String,
      default: ''
    },
    cname: {
      type: String,
      default: 'breakpoint-upload'
    },
    domId: {
      type: String,
      default: 'components-upload'
    }
  },
  data: function data() {
    return {
      progress: 0,
      uploader: '',
      defaultParams: {
        target: '//192.168.201.17:3000/upload',
        singleFile: true,
        typeArr: [],
        chunkSize: 1 * 1024 * 1024
      },
      content: '',
      filesArr: [],
      uploadState: 0 // 0 未开始 1 上传中 2 已暂停 3上传成功 4 上传失败
    };
  },

  computed: {
    progressFn: function progressFn() {
      return this.progress;
    }
  },
  beforeMount: function beforeMount() {
    console.log(this.language);
    if (this.content === '') {
      this.content = breakpointUpload_lang[this.language];
    }
  },
  mounted: function mounted() {
    var $this = this;
    this.defaultParams = extends_default()({}, this.defaultParams, this.params);
    this.defaultParams.singleFile = true;
    console.log(this.defaultParams);
    if (this.uploader === '') {
      if (breakpointUpload_lang[this.language]) {
        this.content = breakpointUpload_lang[this.language];
      }
      this.uploader = new src_uploader(this.defaultParams);
    }
    this.uploader.assignBrowse(this.$refs.uploadBrowseButton);
    this.uploader.assignDrop(this.$refs.uploadBrowseButton);
    // 添加文件事件监听
    this.uploader.on('fileAdded', function (file, event) {
      var type = file.getExtension().toLowerCase();
      $this.uploadState = 0;
      $this.progress = 0;
      if ($this.validType($this.defaultParams.typeArr, type)) {
        if ($this.defaultParams.singleFile) {
          $this.$set($this.filesArr, 0, file);
        } else {
          $this.filesArr.push(file);
        }
      } else {
        $this.callback($this.content.msg.formatErr);
      }
    });
    // 某个文件上传失败了
    this.uploader.on('fileError', function (rootFile, file, message) {
      $this.uploadState = 4;
      $this.progress = 0;
      $this.callback(message);
    });

    this.uploader.on('fileSuccess', function (rootFile, file, message) {
      $this.uploadState = 3;
      $this.callback(message);
    });
    // 上传进度
    this.uploader.on('fileProgress', function (rootFile, file) {
      // Handle progress for both the file and the overall upload
      $this.progress = Math.floor(rootFile.progress() * 100);
      console.log(src_uploader.utils.formatSize(rootFile.averageSpeed));
      console.log(rootFile.timeRemaining());
    });
  },


  methods: {
    validType: function validType(arr, type) {
      if (arr.length > 0) {
        return arr.indexOf(type) !== -1;
      } else {
        return true;
      }
    },
    callback: function callback(data) {
      this.$emit('resultUploader', data);
    },
    upload: function upload(item) {
      this.uploadState = 1;
      this.uploader.upload();
    },
    deleteFile: function deleteFile(item) {
      item.cancel();
      if (item.progress() > 0) {
        this.$emit('deleteFiles', item);
      }
      this.uploadState = 0;
      this.filesArr = [];
    },
    pauseUpload: function pauseUpload(item) {
      this.uploadState = 2;
      item.pause();
    },
    resume: function resume(item) {
      this.uploadState = 1;
      item.resume();
    },
    retry: function retry(item) {
      this.uploadState = 1;
      item.retry();
    }
  },
  watch: {
    language: {
      handler: function handler(options, oldOptions) {
        if (options) {
          this.content = breakpointUpload_lang[this.language];
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f490846c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/breakpointUpload/VUploader.vue
var VUploader_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.cname,style:(_vm.myStyle),attrs:{"id":_vm.domId}},[(_vm.filesArr.length>0)?_c('div',_vm._l((_vm.filesArr),function(item){return _c('div',{key:item.name},[_c('p',[_vm._v(_vm._s(_vm.content.name)+"："+_vm._s(item.name))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.content.progress)+"：\n        "),_c('div',{staticClass:"v-progress"},[_c('el-progress',{attrs:{"stroke-width":18,"text-inside":true,"percentage":_vm.progressFn}})],1)]),_vm._v(" "),(_vm.uploadState==0)?_c('p',[_vm._v(_vm._s(_vm.content.stateStr)+"："+_vm._s(_vm.content.unUpload))]):_vm._e(),_vm._v(" "),(_vm.uploadState==1)?_c('p',[_vm._v(_vm._s(_vm.content.stateStr)+"："+_vm._s(_vm.content.uploading))]):_vm._e(),_vm._v(" "),(_vm.uploadState==2)?_c('p',[_vm._v(_vm._s(_vm.content.stateStr)+"："+_vm._s(_vm.content.paused))]):_vm._e(),_vm._v(" "),(_vm.uploadState==3)?_c('p',[_vm._v(_vm._s(_vm.content.stateStr)+"："+_vm._s(_vm.content.uploadFinish))]):_vm._e(),_vm._v(" "),(_vm.uploadState==4)?_c('p',[_vm._v(_vm._s(_vm.content.stateStr)+"："+_vm._s(_vm.content.uploadFail))]):_vm._e(),_vm._v(" "),_c('p',[(_vm.uploadState==0)?_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":function($event){_vm.upload()}}},[_vm._v(_vm._s(_vm.content.aUpload))]):_vm._e(),_vm._v(" "),(_vm.uploadState==1)?_c('el-button',{attrs:{"type":"warning","size":"small"},on:{"click":function($event){_vm.pauseUpload(item)}}},[_vm._v(_vm._s(_vm.content.aPause))]):_vm._e(),_vm._v(" "),(_vm.uploadState==2)?_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":function($event){_vm.resume(item)}}},[_vm._v(_vm._s(_vm.content.aContinue))]):_vm._e(),_vm._v(" "),(_vm.uploadState==4)?_c('el-button',{attrs:{"type":"success","size":"small"},on:{"click":function($event){_vm.retry(item)}}},[_vm._v(_vm._s(_vm.content.aRetry))]):_vm._e(),_vm._v(" "),(_vm.uploadState!=1)?_c('el-button',{attrs:{"type":"danger","size":"small"},on:{"click":function($event){_vm.deleteFile(item)}}},[_vm._v(_vm._s(_vm.content.aDelete))]):_vm._e()],1)])})):_vm._e(),_vm._v(" "),_c('div',{ref:"uploadDropTarget",class:{ hide: _vm.filesArr.length!=0 }},[_c('span',[_vm._v(_vm._s(_vm.content.msg.tip))]),_vm._v(" "),_c('input',{ref:"uploadBrowseButton",staticClass:"file-hide",attrs:{"type":"file"}})])])}
var VUploader_staticRenderFns = []
var VUploader_esExports = { render: VUploader_render, staticRenderFns: VUploader_staticRenderFns }
/* harmony default export */ var breakpointUpload_VUploader = (VUploader_esExports);
// CONCATENATED MODULE: ./src/components/breakpointUpload/VUploader.vue
function injectStyle (ssrContext) {
  __webpack_require__("1kvZ")
}
var VUploader_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var VUploader___vue_template_functional__ = false
/* styles */
var VUploader___vue_styles__ = injectStyle
/* scopeId */
var VUploader___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var VUploader___vue_module_identifier__ = null
var VUploader_Component = VUploader_normalizeComponent(
  VUploader,
  breakpointUpload_VUploader,
  VUploader___vue_template_functional__,
  VUploader___vue_styles__,
  VUploader___vue_scopeId__,
  VUploader___vue_module_identifier__
)

/* harmony default export */ var components_breakpointUpload_VUploader = (VUploader_Component.exports);

// CONCATENATED MODULE: ./src/components/breakpointUpload/index.js


components_breakpointUpload_VUploader.install = function (Vue) {
  Vue.component(components_breakpointUpload_VUploader.name, components_breakpointUpload_VUploader);

  // Vue.prototype.$uploadplugin = {};// 添加实例方法
};

/* harmony default export */ var breakpointUpload = (components_breakpointUpload_VUploader);
// EXTERNAL MODULE: ./node_modules/vue-language-switch/src/lib/index.js
var src_lib = __webpack_require__("T0f0");

// EXTERNAL MODULE: ./node_modules/vue-echarts-sedu/src/lib/index.js
var vue_echarts_sedu_src_lib = __webpack_require__("mXGN");

// EXTERNAL MODULE: ./node_modules/vue-path-breadcrumb/src/lib/index.js
var vue_path_breadcrumb_src_lib = __webpack_require__("ROPQ");

// EXTERNAL MODULE: ./src/util/index.js
var util = __webpack_require__("ZoQJ");

// CONCATENATED MODULE: ./src/util/filters.js
// set function parseTime,formatTime to filter


function pluralize(time, label) {
  if (time === 1) {
    return time + label;
  }
  return time + label + 's';
}

function timeAgo(time) {
  var between = Date.now() / 1000 - Number(time);
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute');
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour');
  } else {
    return pluralize(~~(between / 86400), ' day');
  }
}

/* 数字 格式化 */
function numberFormatter(num, digits) {
  var si = [{ value: 1e18, symbol: 'E' }, { value: 1e15, symbol: 'P' }, { value: 1e12, symbol: 'T' }, { value: 1e9, symbol: 'G' }, { value: 1e6, symbol: 'M' }, { value: 1e3, symbol: 'k' }];
  for (var i = 0; i < si.length; i++) {
    if (Number(num) >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol;
    }
  }
  return num.toString();
}

function toThousandslsFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, function (m) {
    return m.replace(/(?=(?!\b)(\d{3})+$)/g, ',');
  });
}
// CONCATENATED MODULE: ./src/main.js

/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:04:31
 * @LastEditors: 少侠
 * @LastEditTime: 2018-08-01 17:07:22
 * @Description:
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2018-08-06 13:42:29
 */







 // 引入axios方法，在组件当中使用







vue_esm["default"].config.productionTip = false; // 设置为 false 以阻止 vue 在启动时生成生产提示
vue_esm["default"].use(element_ui_common_default.a, {
  i18n: function i18n(key, value) {
    return lang.t(key, value);
  }
});
vue_esm["default"].use(src_lib["a" /* default */]);
vue_esm["default"].use(breakpointUpload);
vue_esm["default"].use(vue_echarts_sedu_src_lib["a" /* default */]);
vue_esm["default"].use(vue_path_breadcrumb_src_lib["a" /* default */]);
vue_esm["default"].mixin(mixin);
// 这时候如果在其它的组件中，是无法使用 axios 命令的。但如果将 axios 改写为 Vue 的原型属性，就能解决这个问题
vue_esm["default"].prototype.$axios = axios_default.a;
vue_esm["default"].prototype.$post = post; // 发送函数
vue_esm["default"].prototype.$get = get; // 获取
vue_esm["default"].prototype.$patch = patch; // 更新局部资源
vue_esm["default"].prototype.$put = put; // 完整更新
vue_esm["default"].prototype.$cut = cut; // 删除
vue_esm["default"].prototype.$18n = lang;
vue_esm["default"].prototype.numberFormatter = numberFormatter; // 删除

// 把util下的方法注册到全局
keys_default()(filters_namespaceObject).forEach(function (key) {
  vue_esm["default"].filter(key, filters_namespaceObject[key]);
});
var ignoreList = ['login', 'error'].join(','); // 不需要登陆
// 路由过滤
router.beforeEach(function (to, from, next) {
  var permissionList = sessionStorage.getItem('permissionList');
  var permissionTemplate = JSON.parse(sessionStorage.getItem('permissionTemplate'));
  var closePermission = JSON.parse(sessionStorage.getItem('closePermission'));
  // 临时数据
  var cookieTrue = false;
  var apiTrue = false;
  if (ignoreList.indexOf(to.name) !== -1) {
    // 进入的是任何人都可以进入的页面
    next();
  } else {
    next();
    if (JSON.parse(sessionStorage.getItem('isLogin')) === true) {
      // 已登陆
      if (closePermission === true) {
        next();
      } else {
        if (permissionList.indexOf(',' + permissionTemplate[to.name] + ',') !== -1) {
          next();
        } else {
          next({ name: 'main' });
        }
      }
    } else {
      // 未登录
      if (cookieTrue === true) {
        // cookie验证
        sessionStorage.setItem('isLogin', 'true');
        // 此处可以设置第一次时自动登陆
        next({ name: 'main' });
      } else {
        if (apiTrue === true) {
          // 向后台请求验证是否登陆
          sessionStorage.setItem('isLogin', 'true');
          // 此处可以设置第一次时自动登陆
          next({ name: 'main' });
        } else {
          next({ name: 'login' });
        }
      }
    }
  }
});
/* eslint-disable no-new */
new vue_esm["default"]({
  el: '#app',
  router: router,
  store: vuex_store,
  i18n: lang,
  components: {
    App: src_App
  },
  template: '<App/>'
});

/***/ }),

/***/ "PmuR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Pz/h":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (9:0)\nYou may need an appropriate loader to handle this file type.\n|  */\n| /*fade*/\n| .fade-enter-active,\n| .fade-leave-active {\n|   transition: opacity 0.28s;");

/***/ }),

/***/ "Q2Jr":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (8:0)\nYou may need an appropriate loader to handle this file type.\n|  * @Description: \r\n|  */\r\n| @import 'public.less';\r\n| @import '@{PATH_ROOT}views/main';\r\n| @import '@{PATH_ROOT}views/systemManagement';\r");

/***/ }),

/***/ "R+xM":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (9:0)\nYou may need an appropriate loader to handle this file type.\n|  */\n| /*fade*/\n| .fade-enter-active,\n| .fade-leave-active {\n|   transition: opacity 0.28s;");

/***/ }),

/***/ "R01/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__("lbHh");
var js_cookie_default = /*#__PURE__*/__webpack_require__.n(js_cookie);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-language-switch/src/lib/languageSwitch.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var languageSwitch = ({
  data: function data() {
    return {
      option: {
        cookies: {
          key: 'language',
          expires: 365
        }
      }
    };
  },

  props: {
    cname: {
      type: String,
      default: ''
    },
    myStyle: {
      type: String,
      default: ''
    },
    // i18n对象
    my18n: {
      type: Object,
      required: true
    },
    // cookies 存取的key
    cookies: {
      type: String,
      default: null
    },
    // cookies 时效
    expires: {
      type: Number,
      default: null
    }
  },
  created: function created() {
    if (!this.my18n) {
      console.warn('need to use vue-i18n');
      return false;
    }

    if (this.cookies) {
      var cookies = {
        key: this.cookies
      };
      this.option.cookies = extends_default()({}, this.option.cookies, cookies);
    }

    if (this.expires) {
      var _cookies = {
        expires: this.expires
      };
      this.option.cookies = extends_default()({}, this.option.cookies, _cookies);
    }

    var lang = this._getSavedLanguage();
    if (lang) {
      this.my18n.locale = lang;
    }
  },

  methods: {
    _getSavedLanguage: function _getSavedLanguage() {
      return js_cookie_default.a.get(this.option.cookies.key);
    },
    _setSavedLanguage: function _setSavedLanguage() {
      js_cookie_default.a.set(this.option.cookies.key, this.my18n.locale, {
        expires: this.option.cookies.expires
      });
    },
    _initLanguage: function _initLanguage(lang) {
      this.my18n.locale = lang;
    },
    _handleSetLanguage: function _handleSetLanguage(lang) {
      this._initLanguage(lang);
      this._setSavedLanguage();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-471c9f80","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-language-switch/src/lib/languageSwitch.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dropdown',{class:_vm.cname,style:(_vm.myStyle),on:{"command":_vm._handleSetLanguage}},[_c('span',{staticClass:"el-dropdown-link"},[_vm._v("\n    "+_vm._s(_vm.my18n.messages[_vm.my18n.locale].label)+"\n    "),_c('i',{staticClass:"el-icon-arrow-down el-icon--right"})]),_vm._v(" "),_c('el-dropdown-menu',{attrs:{"slot":"dropdown"},slot:"dropdown"},_vm._l((_vm.my18n.messages),function(item,index){return _c('el-dropdown-item',{key:index,staticStyle:{"display":"block"},attrs:{"command":item.type,"disabled":_vm.my18n.locale===item.type}},[_vm._v(_vm._s(item.label))])}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var lib_languageSwitch = (esExports);
// CONCATENATED MODULE: ./node_modules/vue-language-switch/src/lib/languageSwitch.vue
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
  languageSwitch,
  lib_languageSwitch,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_lib_languageSwitch = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "R4oV":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "U933":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/login_logo.e4d5898.png";

/***/ }),

/***/ "UL6G":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "UXwr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VI1W":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blue/components/nav/en.less": "zRGT",
	"./blue/components/nav/zh.less": "gjOl",
	"./blue/components/pathBreadcrumb/en.less": "FpcI",
	"./blue/components/pathBreadcrumb/zh.less": "b2Aw",
	"./blue/index.less": "PmuR",
	"./blue/noimg.gif": "ldOp",
	"./blue/public.less": "gImD",
	"./blue/thumb/001.png": "nXpF",
	"./blue/thumb/002.png": "VU0D",
	"./blue/thumb/003.png": "rWQk",
	"./blue/thumb/004.png": "ycfT",
	"./blue/views/caseCenter.less": "7Rsl",
	"./blue/views/clusterMonitoring.less": "sNCs",
	"./blue/views/global/empty.png": "Gh7c",
	"./blue/views/global/headbg.jpg": "3XVr",
	"./blue/views/global/login_footer.png": "3MMF",
	"./blue/views/global/login_logo.png": "U933",
	"./blue/views/global/logo.png": "BTZg",
	"./blue/views/global/noimg.gif": "oU+o",
	"./blue/views/global/pdf_icon.png": "p2eD",
	"./blue/views/help/downloadData_zh.less": "IZmZ",
	"./blue/views/imageManagement.less": "7mO3",
	"./blue/views/login.less": "wG2q",
	"./blue/views/main.less": "1E/H",
	"./blue/views/projectHome/projectHome_en.less": "UXwr",
	"./blue/views/projectHome/projectHome_zh.less": "8TT5",
	"./blue/views/projectSpace/projectSpace_en.less": "6xsA",
	"./blue/views/projectSpace/projectSpace_zh.less": "yDTQ",
	"./blue/views/researchForum.less": "iSqu",
	"./blue/views/storageManagement/storageManagement.less": "sofI",
	"./blue/views/systemManagement.less": "oUjE",
	"./blue/views/systemMonitoring.less": "flxO",
	"./blue/views/userManagement.less": "BlFa",
	"./green/components/nav/en.css": "1cVB",
	"./green/components/nav/en.less": "pHgD",
	"./green/components/nav/zh.css": "9fhh",
	"./green/components/nav/zh.less": "7b8m",
	"./green/components/pathBreadcrumb/en.css": "60lo",
	"./green/components/pathBreadcrumb/en.less": "Bb3u",
	"./green/components/pathBreadcrumb/zh.css": "I1cu",
	"./green/components/pathBreadcrumb/zh.less": "pHsv",
	"./green/index.css": "s5pN",
	"./green/index.less": "Q2Jr",
	"./green/noimg.gif": "p/+c",
	"./green/public.css": "R+xM",
	"./green/public.less": "FnmX",
	"./green/thumb/01-基础理论--.jpg": "R4oV",
	"./green/views/login.less": "sWN4",
	"./green/views/main.css": "Pz/h",
	"./green/views/main.less": "G7Ff",
	"./green/views/main/jacket.png": "ke/e",
	"./green/views/main/qunzi.png": "UL6G",
	"./green/views/projectSpace/projectSpace_en.css": "uB2A",
	"./green/views/projectSpace/projectSpace_en.less": "dOVE",
	"./green/views/projectSpace/projectSpace_zh.css": "3K5a",
	"./green/views/projectSpace/projectSpace_zh.less": "Ihk+",
	"./green/views/systemManagement.less": "zC4j"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "VI1W";

/***/ }),

/***/ "VU0D":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "ZoQJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = parseTime;
/* harmony export (immutable) */ __webpack_exports__["c"] = formatTime;
/* unused harmony export getQueryObject */
/* unused harmony export getByteLen */
/* unused harmony export cleanArray */
/* unused harmony export param */
/* unused harmony export param2Obj */
/* unused harmony export html2Text */
/* unused harmony export objectMerge */
/* unused harmony export scrollTo */
/* unused harmony export toggleClass */
/* unused harmony export pickerOptions */
/* unused harmony export getTime */
/* unused harmony export debounce */
/* unused harmony export deepClone */
/* unused harmony export uniqueArr */
/* harmony export (immutable) */ __webpack_exports__["e"] = uniqueObj;
/* harmony export (immutable) */ __webpack_exports__["b"] = echratsData;
/* unused harmony export firstPass */
/* unused harmony export nextPass */
/* harmony export (immutable) */ __webpack_exports__["a"] = character;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set__ = __webpack_require__("lHA8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__ = __webpack_require__("c/Tr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__("fZjL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__("pFYg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);




/*
 * @Author: SEDU
 * @Date: 2018-07-10 15:00:41
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-10 15:06:30
 * @Description:  一些公共函数
 */

function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  var date = void 0;
  if ((typeof time === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(time)) === 'object') {
    date = time;
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }
  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  var timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, function (result, key) {
    var value = formatObj[key];
    if (key === 'a') {
      return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return timeStr;
}

function formatTime(time, option) {
  time = +time * 1000;
  var d = new Date(time);
  var now = Date.now();

  var diff = (now - d) / 1000;

  if (diff < 30) {
    return '刚刚';
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前';
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前';
  } else if (diff < 3600 * 24 * 2) {
    return '1天前';
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分';
  }
}

function getQueryObject(url) {
  url = url == null ? window.location.href : url;
  var search = url.substring(url.lastIndexOf('?') + 1);
  var obj = {};
  var reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, function (rs, $1, $2) {
    var name = decodeURIComponent($1);
    var val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}

/**
 *get getByteLen
 * @param {Sting} val input value
 * @returns {number} output value
 */
function getByteLen(val) {
  var len = 0;
  for (var i = 0; i < val.length; i++) {
    if (val[i].match('/[^\x00-\xff]/gi') != null) {
      len += 1;
    } else {
      len += 0.5;
    }
  }
  return Math.floor(len);
}

function cleanArray(actual) {
  var newArray = [];
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

function param(json) {
  if (!json) return '';
  return cleanArray(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(json).map(function (key) {
    if (json[key] === undefined) return '';
    return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
  })).join('&');
}

function param2Obj(url) {
  var search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}

function html2Text(val) {
  var div = document.createElement('div');
  div.innerHTML = val;
  return div.textContent || div.innerText;
}

function objectMerge(target, source) {
  /* Merges two  objects,
                                                                                     giving the last one precedence */

  if ((typeof target === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(target)) !== 'object') {
    target = {};
  }
  if (Array.isArray(source)) {
    return source.slice();
  }
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(source).forEach(function (property) {
    var sourceProperty = source[property];
    if ((typeof sourceProperty === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(sourceProperty)) === 'object') {
      target[property] = objectMerge(target[property], sourceProperty);
    } else {
      target[property] = sourceProperty;
    }
  });
  return target;
}

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  setTimeout(function () {
    console.log(new Date());
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

function toggleClass(element, className) {
  if (!element || !className) {
    return;
  }
  var classString = element.className;
  var nameIndex = classString.indexOf(className);
  if (nameIndex === -1) {
    classString += '' + className;
  } else {
    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
  }
  element.className = classString;
}

var pickerOptions = [{
  text: '今天',
  onClick: function onClick(picker) {
    var end = new Date();
    var start = new Date(new Date().toDateString());
    end.setTime(start.getTime());
    picker.$emit('pick', [start, end]);
  }
}, {
  text: '最近一周',
  onClick: function onClick(picker) {
    var end = new Date(new Date().toDateString());
    var start = new Date();
    start.setTime(end.getTime() - 3600 * 1000 * 24 * 7);
    picker.$emit('pick', [start, end]);
  }
}, {
  text: '最近一个月',
  onClick: function onClick(picker) {
    var end = new Date(new Date().toDateString());
    var start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
    picker.$emit('pick', [start, end]);
  }
}, {
  text: '最近三个月',
  onClick: function onClick(picker) {
    var end = new Date(new Date().toDateString());
    var start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
    picker.$emit('pick', [start, end]);
  }
}];

function getTime(type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90;
  } else {
    return new Date(new Date().toDateString());
  }
}

function debounce(func, wait, immediate) {
  var timeout = void 0,
      args = void 0,
      context = void 0,
      timestamp = void 0,
      result = void 0;

  var later = function later() {
    // 据上一次触发时间间隔
    var last = +new Date() - timestamp;

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    context = this;
    timestamp = +new Date();
    var callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 */
function deepClone(source) {
  if (!source && (typeof source === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(source)) !== 'object') {
    throw new Error('error arguments', 'shallowClone');
  }
  var targetObj = source.constructor === Array ? [] : {};
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(source).forEach(function (keys) {
    if (source[keys] && __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(source[keys]) === 'object') {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}

function uniqueArr(arr) {
  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a(arr));
}
/* 删除数据重复对象 */
function uniqueObj(arr1, arr2) {
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    var obj = arr1[i];
    var num = obj.id;
    var isExist = false;
    for (var j = 0; j < arr2.length; j++) {
      var aj = arr2[j];
      var n = aj.id;
      if (n === num) {
        isExist = true;
      }
    }
    if (!isExist) {
      result.push(obj);
    }
  }
  return result;
}
// 资源监控公用函数封装
function echratsData(color, resources) {
  var showData = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      // icon: 'rect',
      itemWidth: 20,
      itemHeight: 10,
      itemGap: 10,
      data: [{ name: 'CPU', icon: 'rect' }, { name: 'GPU', icon: 'rect' }, { name: '内存', icon: 'rect' }, { name: '显存', icon: 'rect' }], // 分别修改legend格式
      left: '20px',
      textStyle: {
        fontSize: 12,
        color: '#333'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      data: resources.cpu.cpu_x
    }],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: 'CPU',
      type: 'line',
      stack: '总量',
      areaStyle: { normal: {} },
      data: resources.cpu.cpu_y
    }, {
      name: 'GPU',
      type: 'line',
      stack: '总量',
      areaStyle: { normal: {} },
      data: resources.gpu.gpu_y
    }, {
      name: '内存',
      type: 'line',
      stack: '总量',
      areaStyle: { normal: {} },
      data: resources.memory.memory_y
    }, {
      name: '显存',
      type: 'line',
      stack: '总量',
      areaStyle: { normal: {} },
      data: resources.show.show_y
    }],
    color: color
  };
  return showData;
}

function firstPass(rule, value, callback, that) {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    if (that.ruleForm.checkPass !== '') {
      that.$refs.ruleForm.validateField('checkPass');
    }
    callback();
  }
}
function nextPass(rule, value, callback, that) {
  if (value === '') {
    console.log(value, '++++');
    callback(new Error('请再次输入密码'));
  } else if (value !== that.ruleForm.pass) {
    console.log(value, that.ruleForm.pass);
    callback(new Error('两次输入密码不一致!'));
  } else {
    callback();
  }
}
function character(value) {
  var reg = /^[a-zA-Z0-9]{6,15}$/;

  return reg.test(value);
}

/***/ }),

/***/ "b2Aw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dOVE":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (9:0)\nYou may need an appropriate loader to handle this file type.\n|  */\r\n| \r\n| .en {\r\n|   //项目详情表格数据\r\n|   .views-project-details {\r");

/***/ }),

/***/ "flxO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gImD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gjOl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "iSqu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ke/e":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "ldOp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/noimg.60b0429.gif";

/***/ }),

/***/ "nXpF":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "oU+o":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/noimg.60b0429.gif";

/***/ }),

/***/ "oUjE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "p/+c":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:6)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "p2eD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/pdf_icon.775ba2e.png";

/***/ }),

/***/ "pHgD":
/***/ (function(module, exports) {

/*
 * @Author: Liang Liang
 * @Date: 2018-07-12 11:25:12
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-24 14:03:01
 * @Description: 
 */


/***/ }),

/***/ "pHsv":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (8:0)\nYou may need an appropriate loader to handle this file type.\n|  * @Description: \r\n|  */\r\n| @import '../../public';\r\n| .components-path-breadcrumb {\r\n|   @lineHeight: 30 / vw;\r");

/***/ }),

/***/ "rWQk":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "s5pN":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (16:0)\nYou may need an appropriate loader to handle this file type.\n|  */\n| /*fade*/\n| .fade-enter-active,\n| .fade-leave-active {\n|   transition: opacity 0.28s;");

/***/ }),

/***/ "sNCs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sWN4":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type.\n| @import '../public.less';\r\n| \r\n| @FONT_COLOR: #fff;\r");

/***/ }),

/***/ "sofI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "uB2A":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (8:0)\nYou may need an appropriate loader to handle this file type.\n|  * @Description:项目空间的样式表\n|  */\n| .en .views-project-details {\n|   background: red;\n| }");

/***/ }),

/***/ "wG2q":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "yDTQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ycfT":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "zC4j":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (10:0)\nYou may need an appropriate loader to handle this file type.\n|  */\r\n| //系统告警\r\n| .views-system-management-system-alarm{\r\n|   .tab-content{\r\n|     .green{\r");

/***/ }),

/***/ "zRGT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);