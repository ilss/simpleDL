webpackJsonp([60],{

/***/ "yj6B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/keyManagement/keyManagement.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var keyManagement = ({
  name: 'keyManagement',
  data: function data() {
    return {
      linTabData: '',
      linUrl: '',
      pageSize: 10,
      loading: true,
      ruleForm: {
        keys_name: ''
      },
      rules: {
        keys_name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }, { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'change' }]
      },
      tableData: { // 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        url: '/manage-keys',
        loading: true,
        Pagination: {
          page: 1,
          total_count: 40
        },
        sel: {
          name: ''
        }
      },
      dialogCreatKey: false,
      multipleSelection: []
      // keys_name: ''
    };
  },

  methods: {
    handleSelectionChange: function handleSelectionChange(rows) {
      var _this = this;

      this.multipleSelection = [];
      if (rows) {
        rows.forEach(function (val, index, rows) {
          _this.multipleSelection.push(val.keys_id);
        });
      }
      this.multipleSelection = [].concat(toConsumableArray_default()(this.multipleSelection));
    },
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
      // this.getActiveTab(name)
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
      var _this2 = this;

      this.tableData.loading = true;
      var lin = {};
      if (this.tableData.Pagination !== undefined) {
        lin = assign_default()({}, this.tableData.Pagination, { // 对象合并，也属于深度拷贝，只复制值，不改变原数据
          count: this.pageSize
        });
      }
      if (this.tableData.sel !== undefined) {
        lin = assign_default()({}, lin, this.tableData.sel);
      }
      this.$axios.get(this.tableData.url, { params: lin }).then(function (data) {
        // 根据后台接口更改
        var tableDate = data.data.data.keys_list;
        // 数据处理
        _this2.tableData.msg = [].concat(toConsumableArray_default()(tableDate)); // 深度拷贝
        // 重置数据总数
        if (_this2.tableData.Pagination !== undefined) {
          _this2.tableData.Pagination.total_count = data.data.data.total_count;
        }
        _this2.tableData.loading = false;
      });
    },
    creatKey: function creatKey(formName) {
      var _this3 = this;

      // this.dialogCreatKey =
      this.dialogCreatKey = true;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          var keysName = _this3.ruleForm.keys_name;
          _this3.$axios.post('/add-keys', { keys_name: keysName }).then(function (data) {
            if (data.data.code === 200) {
              _this3.$message({ message: '创建密钥成功', type: 'success' });
              _this3.dialogCreatKey = false;
            } else {
              _this3.$message({ message: data.data.msg, type: 'success' });
            }
          });
        } else {
          _this3.$message({ message: '提交失败', type: 'warning' });
          return false;
        }
      });
    },
    deleteMoreKeys: function deleteMoreKeys() {
      if (this.multipleSelection.length) {
        this.deleteKey(this.multipleSelection);
      } else {
        this.$message({
          type: 'info',
          message: '请至少选择一条数据！'
        });
      }
    },
    deleteSingleKey: function deleteSingleKey(id) {
      this.deleteKey([id]);
    },
    deleteKey: function deleteKey(id) {
      var _this4 = this;

      this.$confirm('确定删除所选中的项目?', '删除项目', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this4.$axios.post('/keys-delete', { keys_id: id }).then(function (data) {
          // 删除单个行
          _this4.$message({
            type: 'success',
            message: '删除成功'
          });
          _this4.initMsg();
        }).catch(function (errno) {
          _this4.$message({
            type: 'warning',
            message: '删除失败!'
          });
        });
      }).catch(function () {
        _this4.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
  created: function created() {
    var _this5 = this;

    // 每有一个表格就要写个初始化赋值
    this.getActiveTab('tableData');
    // 获取搜索的数据
    this.$axios.get('/manage-keys').then(function (data) {
      if (data.data.code === 200) {
        _this5.tableData.msg = [].concat(toConsumableArray_default()(data.data.data.keys_list));
        _this5.loading = false;
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-bc97aeb0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/keyManagement/keyManagement.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"view-key-management"},[_c('div',{staticClass:"tab-select"},[_c('div',[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t("views.keyManagement.keys_name")))]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":_vm.$t("views.keyManagement.keys_name")},model:{value:(_vm.tableData.sel.name),callback:function ($$v) {_vm.$set(_vm.tableData.sel, "name", $$v)},expression:"tableData.sel.name"}})],1),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.clearSearch('tableData')}}},[_vm._v(_vm._s(_vm.$t("views.button.reset")))]),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.doSearch('tableData')}}},[_vm._v(_vm._s(_vm.$t("views.button.search")))])]),_vm._v(" "),_c('div',[_c('el-button',{staticClass:"btn dark mid",attrs:{"type":"button"},on:{"click":function($event){_vm.dialogCreatKey = true}}},[_vm._v(_vm._s(_vm.$t("views.keyManagement.add_kay")))]),_vm._v(" "),_c('el-button',{staticClass:"btn dark mid",attrs:{"type":"button"},on:{"click":function($event){_vm.deleteMoreKeys()}}},[_vm._v("批量删除")])],1),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"tab-content",attrs:{"data":_vm.tableData.msg,"border":""},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"type":"selection","width":"55","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.keyManagement.index"),"width":"60","type":"index","header-align":"center","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"keys_name","label":_vm.$t("views.keyManagement.keys_name"),"width":"120","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"keys_value","label":"KEY","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"keys_md5","label":"KEY－MD5","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.table.operate"),"width":"200","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('button',{staticClass:"del ",attrs:{"id":scope.row.keys_id},on:{"click":function($event){_vm.deleteSingleKey(scope.row.keys_id)}}},[_vm._v(_vm._s(_vm.$t("views.button.delete")))])]}}])})],1),_vm._v(" "),_c('el-pagination',{staticClass:"tab-page",attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"current-page":_vm.tableData.Pagination.page,"total":_vm.tableData.Pagination.total_count},on:{"update:currentPage":function($event){_vm.$set(_vm.tableData.Pagination, "page", $event)},"current-change":function($event){_vm.changePage('tableData')}}}),_vm._v(" "),_c('el-dialog',{staticClass:"small",attrs:{"title":"创建托管密钥","visible":_vm.dialogCreatKey,"width":"30%","top":"30vh"},on:{"update:visible":function($event){_vm.dialogCreatKey=$event}}},[_c('el-form',{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":_vm.$t("views.keyManagement.keys_name"),"prop":"keys_name"}},[_c('el-input',{attrs:{"placeholder":"创建托管密钥"},model:{value:(_vm.ruleForm.keys_name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "keys_name", $$v)},expression:"ruleForm.keys_name"}}),_vm._v(" "),_c('p',{staticClass:"tip"},[_vm._v("*该方式默认将密钥托管至系统中！")])],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogCreatKey = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.creatKey('ruleForm')}}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var keyManagement_keyManagement = (esExports);
// CONCATENATED MODULE: ./src/views/keyManagement/keyManagement.vue
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
  keyManagement,
  keyManagement_keyManagement,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_keyManagement_keyManagement = __webpack_exports__["default"] = (Component.exports);


/***/ })

});