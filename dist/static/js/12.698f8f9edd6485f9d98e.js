webpackJsonp([12,25],{

/***/ "9I3m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/storageManagement/components/uploadFile.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var uploadFile = ({
  name: 'uploadFile',
  data: function data() {
    return {
      params: {
        key: 0,
        storage_id: 0
      },
      ruleForm: {
        keyName: '',
        keyMD5: ''
      },
      rules: {
        keyName: [{ required: true, message: '请输入KEY值', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        keyMD5: [{ required: true, message: '请输入KEY-MD5值', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 25 个字符', trigger: 'blur' }]
      },
      keySelected: '',
      keyListArr: [],
      keyName: '',
      keyType: true,
      encrypt: false,
      dialogCreateKey: false,
      failFileList: [],
      newFile: '',
      fileList: []
    };
  },
  created: function created() {
    var _this = this;

    this.$get('/manage-keys', '').then(function (res) {
      _this.keyListArr = res.data.keys_list;
    });
  },

  methods: {
    handleRemove: function handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    fileSuccess: function fileSuccess(response, file, fileList) {
      console.log(response);
      this.newFile = response.newFile;
    },
    createKey: function createKey() {
      this.dialogCreateKey = false;
      console.log(this.keyName);
    },
    newFileCreate: function newFileCreate() {
      var params = {};
      params.newFile = this.newFile;
      if (this.encrypt) {
        params.keyType = this.keyType;
        if (this.keyType) {
          params.keySelected = this.keySelected;
        } else {
          params.key = this.ruleForm;
        }
      }
      return params;
    },
    fileChange: function fileChange(file, fileList) {
      this.fileList = fileList.slice(-1);
    },
    handleError: function handleError(error, file) {
      console.log(error, file);
      this.failFileList.push(file);
      this.$message({
        type: 'error',
        showClose: true,
        message: '\u6587\u4EF6' + file.name + '\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5'
      });
    },
    beforeRemove: function beforeRemove(file, fileList) {
      return this.$confirm('\u786E\u5B9A\u79FB\u9664 ' + file.name + '\uFF1F');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-bf0fc530","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/storageManagement/components/uploadFile.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comp-upload-file"},[_c('el-upload',{staticClass:"upload-demo",attrs:{"action":"https://jsonplaceholder.typicode.com/posts/","on-remove":_vm.handleRemove,"accept":"","on-change":_vm.fileChange,"before-remove":_vm.beforeRemove,"on-success":_vm.fileSuccess,"on-error":_vm.handleError,"data":_vm.params,"file-list":_vm.fileList}},[_c('el-button',{staticClass:"view-btn-small",attrs:{"size":"small"}},[_vm._v("点击上传")]),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("上传大小等限制提示")])],1),_vm._v(" "),_c('div',{staticStyle:{"padding":"10px 0"}},[_c('el-checkbox',{model:{value:(_vm.encrypt),callback:function ($$v) {_vm.encrypt=$$v},expression:"encrypt"}},[_vm._v("加密")]),_vm._v(" "),_c('el-tooltip',{attrs:{"content":"Bottom Center 提示文字","placement":"bottom-start"}},[_c('i',{staticClass:"iconfont icon-Group"})])],1),_vm._v(" "),(_vm.encrypt)?_c('div',{staticClass:"v-encrypt"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"item-encrypt"},[_c('span',[_vm._v("密钥：")]),_vm._v(" "),_c('div',[_c('el-radio',{attrs:{"label":true},model:{value:(_vm.keyType),callback:function ($$v) {_vm.keyType=$$v},expression:"keyType"}},[_vm._v("托管密钥")]),_vm._v(" "),_c('el-radio',{attrs:{"label":false},model:{value:(_vm.keyType),callback:function ($$v) {_vm.keyType=$$v},expression:"keyType"}},[_vm._v("自定义密钥")])],1)]),_vm._v(" "),(_vm.keyType)?_c('div',{staticClass:"item-encrypt"},[_c('span'),_vm._v(" "),_c('div',[_c('el-select',{attrs:{"clearable":"","filterable":"","placeholder":_vm.$t("views.button.selectPlease")},model:{value:(_vm.keySelected),callback:function ($$v) {_vm.keySelected=$$v},expression:"keySelected"}},_vm._l((_vm.keyListArr),function(item){return _c('el-option',{key:item.keys_id,attrs:{"label":item.keys_name,"value":item.keys_id}})})),_vm._v(" "),_c('a',{on:{"click":function($event){_vm.dialogCreateKey=true}}},[_vm._v("创建密钥")])],1)]):_c('div',{staticClass:"item-encrypt"},[_c('span'),_vm._v(" "),_c('div',[_c('el-form',{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"0"}},[_c('el-form-item',{attrs:{"label":"","prop":"keyName"}},[_c('el-input',{attrs:{"placeholder":"请输入KEY值"},model:{value:(_vm.ruleForm.keyName),callback:function ($$v) {_vm.$set(_vm.ruleForm, "keyName", $$v)},expression:"ruleForm.keyName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"","prop":"keyMD5"}},[_c('el-input',{attrs:{"placeholder":"请输入KEY-MD5值"},model:{value:(_vm.ruleForm.keyMD5),callback:function ($$v) {_vm.$set(_vm.ruleForm, "keyMD5", $$v)},expression:"ruleForm.keyMD5"}})],1)],1)],1)])]):_vm._e(),_vm._v(" "),_c('el-dialog',{staticClass:"small",attrs:{"title":"创建密钥","visible":_vm.dialogCreateKey,"append-to-body":""},on:{"update:visible":function($event){_vm.dialogCreateKey=$event}}},[_c('div',[_c('div',{staticClass:"input-label"},[_c('span',{staticStyle:{"width":"80px"}},[_vm._v("密钥名称")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":"请输入密钥名称","size":"medium"},model:{value:(_vm.keyName),callback:function ($$v) {_vm.keyName=$$v},expression:"keyName"}})],1),_vm._v(" "),_c('p',{staticStyle:{"margin-left":"70px","line-height":"150%"}},[_vm._v("*该方式默认将密钥托管至系统中！")])]),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogCreateKey = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.createKey}},[_vm._v("保存")])],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item-encrypt"},[_c('span',[_vm._v("加密算法：")]),_vm._v("AES")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_uploadFile = (esExports);
// CONCATENATED MODULE: ./src/views/storageManagement/components/uploadFile.vue
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
  uploadFile,
  components_uploadFile,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var storageManagement_components_uploadFile = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/storageManagement/fileManagement.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var fileManagement = ({
  name: 'fileManagement',
  components: {
    uploadFile: storageManagement_components_uploadFile
  },
  data: function data() {
    return {
      dialogNewFlod: false,
      dialogNewFile: false,
      tableData: [],
      fileKeyArr: [],
      pageSize: 10,
      newFloderName: '',
      storageId: 0,
      key: 0,
      searchName: '',
      apiFileList: '/api/admin/announcement/fileManagement',
      errorString: null,
      Pagination: {
        page: 1,
        total_count: 10
      },
      listLoading: true
    };
  },

  props: {},
  created: function created() {
    this.storageId = this.$route.query.storageId;
    this.errorString = this.$t('views.storageManagement.fileManagement.tableFileList.thRecover');
    this.initTable();
  },
  mounted: function mounted() {
    // 把根路径加入面包屑
    this.$refs.seduPathBreadcrumb.addPath({ key: 0 });
  },

  watch: {},
  methods: {
    initTable: function initTable() {
      this.getFileList({ key: 0 });
    },
    btnNewFile: function btnNewFile() {
      this.dialogNewFile = false;
      var params = this.$refs.uploadComn.newFileCreate();
      this.$message({ message: '上传成功', type: 'success' });
      console.log(params);
    },
    createFloderDialod: function createFloderDialod() {
      this.dialogNewFlod = true;
    },
    createFloder: function createFloder() {
      if (this.newFloderName === '') {
        this.$message({ message: '文件夹名称不能为空', type: 'warning' });
      } else {
        this.dialogNewFlod = false;
        this.$post('/storage_folder', { folder_name: this.newFloderName }).then(function (res) {
          console.log(res);
        });
      }
    },
    deleteStorage: function deleteStorage(key) {
      var _this = this;

      this.$post('/storage-delete-files', { 'key': key, storage_id: this.storageId }).then(function (res) {
        _this.$message({ message: '删除成功', type: 'success' });
        _this.searchNameBtn();
      });
    },
    batchDeleteId: function batchDeleteId() {
      if (this.fileKeyArr.length > 0) {
        this.$message({ message: '删除成功', type: 'success' });
        this.fileKeyArr = [];
        this.searchNameBtn();
      } else {
        this.$message({ message: '请选择删除项', type: 'error' });
      }
    },
    selectChange: function selectChange(rows) {
      for (var i = 0; i < rows.length; i++) {
        this.fileKeyArr.push(rows[i].key);
      }
    },
    searchNameBtn: function searchNameBtn() {
      var objkey = {};
      this.Pagination.page = 1;
      this.getFileList(objkey);
    },
    pageChange: function pageChange() {
      var objkey = {};
      this.getFileList(objkey);
    },
    updateTable: function updateTable(obj) {
      if (!obj) return false;
      //   this.targetPath = obj
      this.key = obj.key;
      this.Pagination.page = 1;
      this.$refs.seduPathBreadcrumb.addPath(obj);
      this.getFileList(obj);
    },
    getBackFileList: function getBackFileList(obj) {
      this.Pagination.page = 1;
      this.getFileList(obj);
    },
    getFileList: function getFileList(obj) {
      var _this2 = this;

      this.listLoading = true;
      var prams = {
        key: obj.key,
        storage_id: this.storageId,
        page: this.Pagination.page,
        file_name: this.searchName
      };
      this.$get(this.apiFileList, prams, this.errorString).then(function (res) {
        _this2.tableData = [].concat(toConsumableArray_default()(res.data.file_list));
        _this2.Pagination.total_count = res.data.total_count;
        _this2.listLoading = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-175e5958","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/storageManagement/fileManagement.vue
var fileManagement_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container"},[_c('div',{staticClass:"v-line"},[_c('span',{staticClass:"primary-color"},[_vm._v(_vm._s(_vm.$t("views.storageManagement.fileManagement.title")))])]),_vm._v(" "),_c('div',{staticClass:"options"},[_c('div',{staticClass:"search"},[_c('span',[_vm._v("名称")]),_vm._v(" "),_c('el-input',{attrs:{"size":"small"},model:{value:(_vm.searchName),callback:function ($$v) {_vm.searchName=$$v},expression:"searchName"}}),_vm._v(" "),_c('el-button',{staticClass:"views-btn-query",attrs:{"size":"small"},on:{"click":function($event){_vm.searchName=''}}},[_vm._v("重置")]),_vm._v(" "),_c('el-button',{staticClass:"views-btn-query",attrs:{"size":"small"},on:{"click":_vm.searchNameBtn}},[_vm._v("查询")])],1),_vm._v(" "),_c('div',{staticClass:"btn-group"},[_c('el-button',{staticClass:"dark mid btn",on:{"click":function($event){_vm.dialogNewFile=true}}},[_vm._v("上传文件")]),_vm._v(" "),_c('el-button',{staticClass:"dark mid btn",attrs:{"size":"small"},on:{"click":_vm.createFloderDialod}},[_vm._v("新建文件夹")]),_vm._v(" "),_c('el-button',{staticClass:"dark mid btn",attrs:{"size":"small"},on:{"click":_vm.batchDeleteId}},[_vm._v(_vm._s(_vm.$t("views.button.batchDelete")))])],1)]),_vm._v(" "),_c('sedu-path-breadcrumb',{ref:"seduPathBreadcrumb",staticStyle:{"font-size":"13px"},attrs:{"backLabel":_vm.$t('views.storageManagement.fileManagement.seduPathBreadcrumb.backLabel'),"allFileLabel":_vm.$t('views.storageManagement.fileManagement.seduPathBreadcrumb.allFileLabel'),"callBack":_vm.getBackFileList}}),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.listLoading),expression:"listLoading"}],ref:"multipleTable",staticClass:"tab-content",staticStyle:{"margin-top":"10px"},attrs:{"data":_vm.tableData,"default-sort":{prop: 'date', order: 'descending'},"border":""},on:{"selection-change":_vm.selectChange}},[_c('el-table-column',{attrs:{"type":"selection","align":"center","width":"55"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.storageManagement.fileManagement.tableFileList.thName")},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.floder)?_c('div',[_c('i',{staticClass:"iconfont icon-wenjianjia",staticStyle:{"color":"#417dd0"}}),_vm._v(" \n          "),_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":function($event){_vm.updateTable(scope.row)}}},[_c('span',[_vm._v(_vm._s(scope.row.name))])])]):_c('div',[_c('i',{staticClass:"el-icon-document"}),_vm._v(" \n          "),_c('span',[_vm._v(_vm._s(scope.row.name))])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","width":"100","label":_vm.$t("views.storageManagement.fileManagement.tableFileList.thSize")},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n        "+_vm._s(_vm.numberFormatter(scope.row.size, 2))+"\n      ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","width":"120","label":_vm.$t("views.storageManagement.fileManagement.tableFileList.thEncipher")},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.encipher)?_c('el-tag',{attrs:{"type":"success","size":"small"}},[_vm._v(_vm._s(_vm.$t("views.storageManagement.fileManagement.tableFileList.tagEncrypted")))]):_c('el-tag',{attrs:{"type":"info","size":"small"}},[_vm._v(_vm._s(_vm.$t("views.storageManagement.fileManagement.tableFileList.tagUnencrypted")))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t("views.storageManagement.fileManagement.tableFileList.thDate"),"sortable":"","prop":"date"}}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","width":"200","label":_vm.$t("views.storageManagement.fileManagement.tableFileList.thAction")},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(!scope.row.floder)?_c('button',{staticClass:"btn",on:{"click":function($event){_vm.deleteStorage(scope.row.key)}}},[_vm._v("下载")]):_vm._e(),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":function($event){_vm.deleteStorage(scope.row.key)}}},[_vm._v(_vm._s(_vm.$t('views.button.delete')))])]}}])}),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])])],1),_vm._v(" "),_c('el-pagination',{staticClass:"tab-page",attrs:{"layout":"prev, pager, next","current-page":_vm.Pagination.page,"total":_vm.Pagination.total_count},on:{"update:currentPage":function($event){_vm.$set(_vm.Pagination, "page", $event)},"current-change":_vm.pageChange}}),_vm._v(" "),_c('el-dialog',{staticClass:"small",attrs:{"title":"新建文件夹","visible":_vm.dialogNewFlod},on:{"update:visible":function($event){_vm.dialogNewFlod=$event}}},[_c('div',{staticClass:"create-flod"},[_c('span',[_vm._v("文件夹名称")]),_vm._v(" "),_c('div',{staticClass:"floder-desc"},[_c('el-input',{attrs:{"size":"small"},model:{value:(_vm.newFloderName),callback:function ($$v) {_vm.newFloderName=$$v},expression:"newFloderName"}}),_vm._v(" "),_c('p',[_vm._v("命名规则：")]),_vm._v(" "),_c('p',[_vm._v("1. 文件夹名称不能包括下列符号 : \\ / ; * ? \" , . < > | 。")]),_vm._v(" "),_c('p',[_vm._v("2. 文件夹名称不能以\".\"开头或结尾")]),_vm._v(" "),_c('p',[_vm._v("3. 文件夹的绝对路径总长度不能超过1023字符")])],1)]),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogNewFlod = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{staticClass:"primary",attrs:{"type":"primary"},on:{"click":_vm.createFloder}},[_vm._v("保存")])],1)]),_vm._v(" "),_c('el-dialog',{staticClass:"small",attrs:{"title":"上传文件","visible":_vm.dialogNewFile},on:{"update:visible":function($event){_vm.dialogNewFile=$event}}},[_c('uploadFile',{directives:[{name:"show",rawName:"v-show",value:(_vm.dialogNewFile),expression:"dialogNewFile"}],ref:"uploadComn"}),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogNewFile = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{staticClass:"primary",attrs:{"type":"primary"},on:{"click":_vm.btnNewFile}},[_vm._v("确定")])],1)],1)],1)}
var fileManagement_staticRenderFns = []
var fileManagement_esExports = { render: fileManagement_render, staticRenderFns: fileManagement_staticRenderFns }
/* harmony default export */ var storageManagement_fileManagement = (fileManagement_esExports);
// CONCATENATED MODULE: ./src/views/storageManagement/fileManagement.vue
var fileManagement_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var fileManagement___vue_template_functional__ = false
/* styles */
var fileManagement___vue_styles__ = null
/* scopeId */
var fileManagement___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var fileManagement___vue_module_identifier__ = null
var fileManagement_Component = fileManagement_normalizeComponent(
  fileManagement,
  storageManagement_fileManagement,
  fileManagement___vue_template_functional__,
  fileManagement___vue_styles__,
  fileManagement___vue_scopeId__,
  fileManagement___vue_module_identifier__
)

/* harmony default export */ var views_storageManagement_fileManagement = __webpack_exports__["default"] = (fileManagement_Component.exports);


/***/ }),

/***/ "KAlT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/views/storageManagement/fileManagement.vue + 5 modules
var fileManagement = __webpack_require__("9I3m");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/storageManagement/storageDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var storageDetail = ({
  name: 'storageDetail',
  components: {
    fileManage: fileManagement["default"]
  },
  data: function data() {
    return {
      dialogSpaceName: false,
      dialogSpaceDesc: false,
      used_storage_numer: 0,
      count_project_storage: 0,
      updateSpaceName: '',
      updateSpaceDesc: '',
      boolSpaceDesc: true,
      baseinfo: {
        user_name: '',
        create_time: '',
        storage_desc: '',
        storage_name: ''
      }
    };
  },

  methods: {
    btnEditesStorageName: function btnEditesStorageName() {
      this.dialogSpaceName = true;
      this.updateSpaceName = this.baseinfo.storage_name;
    },
    saveStorageName: function saveStorageName() {
      this.dialogSpaceName = false;
      this.baseinfo.storage_name = this.updateSpaceName;
    },
    showSpaceDesc: function showSpaceDesc() {
      this.dialogSpaceDesc = true;
      this.updateSpaceDesc = this.baseinfo.storage_desc;
    },
    closeSpaceDesc: function closeSpaceDesc(done) {
      this.boolSpaceDesc = true;
      done();
    },
    saveStorageDesc: function saveStorageDesc() {
      if (!this.boolSpaceDesc) {
        this.$message({ message: '修改成功', type: 'success' });
        this.baseinfo.storage_desc = this.updateSpaceDesc;
        this.dialogSpaceDesc = false;
      }
      this.boolSpaceDesc = !this.boolSpaceDesc;
    },
    getStorageDetail: function getStorageDetail() {
      var _this = this;

      this.$get('/storage-detail', { storage_id: this.storageId }).then(function (res) {
        console.log(res);
        _this.used_storage_numer = res.data.used_storage_numer;
        _this.count_project_storage = res.data.count_project_storage;
        _this.baseinfo = res.data.baseinfo;
      });
    }
  },
  created: function created() {
    this.getStorageDetail();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-da5679e4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/storageManagement/storageDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"storage-detail"},[_c('div',{staticStyle:{"padding":"10px 0"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"clear-float",staticStyle:{"padding":"10px 0"}},[_c('div',{staticClass:"base-info-v"},[_c('div',[_c('span',[_vm._v("空间名称：")]),_vm._v(" "),_c('p',{staticClass:"text-ellipsis",attrs:{"title":_vm.baseinfo.storage_name}},[_vm._v(_vm._s(_vm.baseinfo.storage_name))]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-edit edit-btn primary-color",on:{"click":_vm.btnEditesStorageName}})]),_vm._v(" "),_c('div',[_c('span',[_vm._v("创建时间：")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.baseinfo.create_time))])]),_vm._v(" "),_c('div',[_c('span',[_vm._v("拥有者：")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.baseinfo.user_name))]),_vm._v(" "),_c('a',{on:{"click":_vm.showSpaceDesc}},[_vm._v("查看空间描述")])])]),_vm._v(" "),_c('div',{staticClass:"num-space bg-blue"},[_c('i',{staticClass:"iconfont icon-duixiangliebiao-n"}),_vm._v(" "),_c('div',{staticClass:"text-desc"},[_c('p',[_vm._v("对象数量")]),_vm._v(" "),_c('p',[_c('span',[_vm._v(_vm._s(_vm.count_project_storage))]),_vm._v("个")])])]),_vm._v(" "),_c('div',{staticClass:"num-space bg-yellow"},[_c('i',{staticClass:"iconfont icon-cunchu",staticStyle:{"font-size":"60px"}}),_vm._v(" "),_c('div',{staticClass:"text-desc"},[_c('p',[_vm._v("存储用量")]),_vm._v(" "),_c('p',[_c('span',[_vm._v(_vm._s(_vm.used_storage_numer))]),_vm._v("Byte")])])])])]),_vm._v(" "),_c('fileManage'),_vm._v(" "),_c('el-dialog',{staticClass:"small",attrs:{"title":"修改空间名称","visible":_vm.dialogSpaceName},on:{"update:visible":function($event){_vm.dialogSpaceName=$event}}},[_c('div',{staticClass:"input-label"},[_c('span',{staticStyle:{"width":"80px"}},[_vm._v("空间名称")]),_vm._v(" "),_c('el-input',{attrs:{"size":"medium"},model:{value:(_vm.updateSpaceName),callback:function ($$v) {_vm.updateSpaceName=$$v},expression:"updateSpaceName"}})],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogSpaceName = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveStorageName}},[_vm._v("确定")])],1)]),_vm._v(" "),_c('el-dialog',{staticClass:"small",attrs:{"title":"空间描述","before-close":_vm.closeSpaceDesc,"visible":_vm.dialogSpaceDesc},on:{"update:visible":function($event){_vm.dialogSpaceDesc=$event}}},[_c('div',{staticClass:"input-label"},[(_vm.boolSpaceDesc)?_c('div',[_c('p',{staticStyle:{"line-height":"150%"}},[_vm._v(_vm._s(this.updateSpaceDesc))])]):_c('el-input',{attrs:{"rows":"6","type":"textarea"},model:{value:(_vm.updateSpaceDesc),callback:function ($$v) {_vm.updateSpaceDesc=$$v},expression:"updateSpaceDesc"}})],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[(_vm.boolSpaceDesc)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveStorageDesc}},[_vm._v("编辑")]):_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveStorageDesc}},[_vm._v("保存")])],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"v-line"},[_c('span',{staticClass:"primary-color"},[_vm._v("基本信息")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var storageManagement_storageDetail = (esExports);
// CONCATENATED MODULE: ./src/views/storageManagement/storageDetail.vue
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
  storageDetail,
  storageManagement_storageDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_storageManagement_storageDetail = __webpack_exports__["default"] = (Component.exports);


/***/ })

});