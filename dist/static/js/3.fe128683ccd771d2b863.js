webpackJsonp([3],{

/***/ "1alW":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__("kM2E");

$export($export.S, 'Number', { isInteger: __webpack_require__("AKgy") });


/***/ }),

/***/ "AKgy":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__("EqjI");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "QCcE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/number/is-integer.js
var is_integer = __webpack_require__("RRo+");
var is_integer_default = /*#__PURE__*/__webpack_require__.n(is_integer);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/systemManagement/systemSetting.vue




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var systemSetting = ({
  name: 'systemSetting',
  data: function data() {
    var checkCPU = function checkCPU(rule, value, callback) {
      console.log(value);
      if (!value) {
        return callback(new Error('输入不能为空'));
      }
      setTimeout(function () {
        if (!is_integer_default()(value - 0)) {
          callback(new Error('请输入100以内的数字'));
        } else {
          if (value > 100) {
            callback(new Error('数字不能大于100'));
          } else {
            callback();
          }
        }
      }, 500);
    };
    var checkGPU = function checkGPU(rule, value, callback) {
      if (!value) {
        return callback(new Error('输入不能为空'));
      }
      setTimeout(function () {
        if (!is_integer_default()(value - 0)) {
          callback(new Error('请输入10以内的数字'));
        } else {
          if (value > 10) {
            callback(new Error('数字不能大于10'));
          } else {
            callback();
          }
        }
      }, 500);
    };
    var checkMemory = function checkMemory(rule, value, callback) {
      if (!value) {
        return callback(new Error('输入不能为空'));
      }
      setTimeout(function () {
        if (!is_integer_default()(value - 0)) {
          callback(new Error('请输入256以内的数字'));
        } else {
          if (value > 256) {
            callback(new Error('数字不能大于256'));
          } else {
            callback();
          }
        }
      }, 500);
    };
    return {
      parentActiveName: 'diskManagement', // 外面当前激活页
      activeName: 'clearDisk', // 当前激活页
      linSelData: '',
      linTabData: '',
      linLoad: '',
      linUrl: '',
      node_name: [],
      pickerOptions: {
        shortcuts: [{
          text: this.$t('views.systemManagement.recentOneWeek'),
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: this.$t('views.systemManagement.recentOneMonth'),
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: this.$t('views.systemManagement.recentThreeMonth'),
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      tableData1: [],
      tableData2: [],
      tabSel2: {
        node_name: '',
        full_date: '',
        start_data: '',
        end_data: ''
      },
      resourceForm: {
        CPU: '',
        GPU: '',
        memory: ''
      },
      resourceFormRules: {
        CPU: [{ validator: checkCPU, trigger: 'blur', required: true }],
        GPU: [{ validator: checkGPU, trigger: 'blur', required: true }],
        memory: [{ validator: checkMemory, trigger: 'blur', required: true }]
      },
      loading1: true,
      loading2: true,
      clearTime: [],
      clearTimeMsg: '',
      logTime: [],
      logTimeMsg: '',
      languageList: [],
      basis: {
        disabled: true,
        content: {
          languages: '',
          page_num: '',
          user_create_num: ''
        }
      },
      mirror: {
        disabled: true,
        content: {
          project_image_num: '',
          personal_image_num: ''
        }
      },
      personal: {
        disabled: true,
        content: {
          cpu: '',
          memory: '',
          gpu: ''
        }
      },
      storage: {
        disabled: true,
        content: {
          project_storage_size: '',
          project_storage_num: '',
          personal_storage_size: '',
          personal_storage_num: ''
        }
      },
      tableData3: { // 没有分页就删掉Pagination，没有查询条件就删掉sel
        msg: [],
        url: '',
        loading: true,
        Pagination: {
          page: 1,
          total_count: 5
        }
      },
      page: 1,
      total_count: 1,
      pageSize: 4,
      diskCleaningPop: false,
      diskCleaningPopMsg: {
        node_id: '',
        clear_time: ''
      },
      setResourcePop: false,
      setResourcePopMsg: {
        project_id: '',
        quota_id: ''
      }
    };
  },

  methods: {
    getActiveTabs: function getActiveTabs() {
      // 获取当前展示的表格、搜索等信息
      switch (this.activeName) {// 对应tabs的name
        case 'clearDisk':
          this.linSelData = '';
          this.linTabData = 'tableData1';
          this.linLoad = 'loading1';
          this.linUrl = '/disk-sys-setting';
          break;
        case 'diskHistory':
          this.linSelData = 'tabSel2';
          this.linTabData = 'tableData2';
          this.linLoad = 'loading2';
          this.linUrl = '/disk-clear-log';
          break;
      }
      this.initMsgTabs();
    },
    clearSearchTabs: function clearSearchTabs() {
      // 清除搜索条件、分页切换
      var str = void 0;
      switch (this.activeName) {// 对应tabs的name
        case 'first':
          str = '';
          break;
        case 'second':
          str = 'tabSel2';
          break;
      }
      for (var key in this[str]) {
        this[str][key] = '';
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
        if (this[this.linSelData].full_date !== undefined) {
          if (this[this.linSelData].full_date !== null && this[this.linSelData].full_date !== '') {
            this[this.linSelData].start_data = this[this.linSelData].full_date[0];
            this[this.linSelData].end_data = this[this.linSelData].full_date[1];
          } else {
            this[this.linSelData].start_data = '';
            this[this.linSelData].end_data = '';
          }
        }
        lin = assign_default()({}, lin, this[this.linSelData]);
      }
      this.$axios.get(this.linUrl, { params: lin }).then(function (data) {
        // 根据后台接口更改
        var tableDate = data.data.data.disk_clear_table;
        // 数据处理
        _this[_this.linTabData] = [].concat(toConsumableArray_default()(tableDate));
        // 重置数据总数
        _this.total_count = data.data.data.total_count;
        _this[_this.linLoad] = false;
      });
    },
    getActiveTab: function getActiveTab(name) {
      // 获取当前展示的表格、搜索等信息
      this.linTabData = name;
      this.linUrl = this[name].url;
      this.initMsg();
    },
    changePage: function changePage(name) {
      // 改变分页
      this.getActiveTab(name);
    },
    initMsg: function initMsg() {
      var _this2 = this;

      this[this.linTabData].loading = true;
      var lin = {};
      if (this[this.linTabData].Pagination !== undefined) {
        lin = assign_default()({}, this[this.linTabData].Pagination, {
          count: this.pageSize
        });
      }
      if (this[this.linTabData].sel !== undefined) {
        lin = assign_default()({}, lin, this[this.linTabData].sel);
      }
      this.$axios.get(this[this.linTabData].url, { params: lin }).then(function (data) {
        // 数据处理
        _this2[_this2.linTabData].msg = [].concat(toConsumableArray_default()(data.data.sys_log_table));
        // 重置数据总数
        if (_this2[_this2.linTabData].Pagination !== undefined) {
          _this2[_this2.linTabData].Pagination.total_count = data.total_count;
        }
        _this2[_this2.linTabData].loading = false;
      });
    },
    diskCleaning: function diskCleaning(id) {
      this.diskCleaningPopMsg.clear_time = '';
      this.diskCleaningPopMsg.node_id = id;
      this.diskCleaningPop = true;
    },
    diskCleaningPopDo: function diskCleaningPopDo() {
      var _this3 = this;

      this.$axios.post('/clear-disk', this.diskCleaningPopMsg).then(function (data) {
        _this3.diskCleaningPop = false;
      });
    },
    setResource: function setResource(id) {
      this.setResourcePopMsg.project_id = id;
      this.setResourcePopMsg.quota_id = '';
      this.setResourcePop = true;
    },
    setResourcePopDo: function setResourcePopDo() {
      var _this4 = this;

      this.$axios.post('/systemManagement/systemSetting/quotaSetting/change', this.setResourcePopMsg).then(function (data) {
        _this4.$message({ message: '设置成功', type: 'success' });
        _this4.setResourcePop = false;
      });
    },
    saveClearTime: function saveClearTime() {
      var _this5 = this;

      this.$axios.post('/clear-disk-setting', { time_number: this.clearTimeMsg }).then(function (data) {
        _this5.$message({ message: '保存成功', type: 'success' });
      });
    },
    saveLogTime: function saveLogTime() {
      var _this6 = this;

      this.$axios.post('/log-sys-setting', { month_nunber: this.logTimeMsg }).then(function (data) {
        _this6.$message({ message: '保存成功', type: 'success' });
      });
    },
    editBasis: function editBasis() {
      this.basis.disabled = false;
    },
    saveBasis: function saveBasis() {
      var _this7 = this;

      this.$axios.post('/update-system-base', this.basis.content).then(function (data) {
        _this7.basis.disabled = true;
      });
    },
    editMirror: function editMirror() {
      this.mirror.disabled = false;
    },
    saveMirror: function saveMirror() {
      var _this8 = this;

      this.$axios.post('/update-system-images', this.mirror.content).then(function (data) {
        _this8.mirror.disabled = true;
      });
    },
    editPersonal: function editPersonal() {
      this.personal.disabled = false;
    },
    savePersonal: function savePersonal() {
      var _this9 = this;

      this.$axios.post('/update-personal-space', this.personal.content).then(function (data) {
        _this9.personal.disabled = true;
      });
    },
    editStorage: function editStorage() {
      this.storage.disabled = false;
    },
    saveStorage: function saveStorage() {
      var _this10 = this;

      this.$axios.post('/update-storage-space', this.storage.content).then(function (data) {
        _this10.storage.disabled = true;
      });
    }
  },
  created: function created() {
    var _this11 = this;

    this.getActiveTabs();
    this.initMsgTabs();
    this.$axios.get('/systemManagement/systemSetting/diskManagement/sel').then(function (data) {
      _this11.clearTime = [].concat(toConsumableArray_default()(data.data.data.clear_log_time));
      _this11.node_name = [].concat(toConsumableArray_default()(data.data.data.node_type));
    });
    this.$axios.get('/log-sys-setting').then(function (data) {
      _this11.logTime = [].concat(toConsumableArray_default()(data.data.data.select_month));
    });
    this.$axios.get('/systemManagement/systemSetting/quotaSetting/sel').then(function (data) {
      _this11.languageList = [].concat(toConsumableArray_default()(data.data.data.languages_list));
    });
    this.$axios.get('/sys-setting-params').then(function (data) {
      _this11.basis.content = extends_default()({}, data.data.data.base_setting);
      _this11.mirror.content = extends_default()({}, data.data.data.images_setting);
      _this11.personal.content = extends_default()({}, data.data.data.person_space_setting);
      _this11.storage.content = extends_default()({}, data.data.data.storage_param_setting);
      _this11.tableData3.msg = [].concat(toConsumableArray_default()(data.data.data.project_list));
      _this11.tableData3.loading = false;
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-464474f7","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/systemManagement/systemSetting.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-system-management-system-setting"},[_c('el-tabs',{model:{value:(_vm.parentActiveName),callback:function ($$v) {_vm.parentActiveName=$$v},expression:"parentActiveName"}},[_c('el-tab-pane',{attrs:{"label":_vm.$t("views.systemManagement.diskManagementSettings"),"name":"diskManagement"}},[_c('div',{staticClass:"disk-title"},[_vm._v("\n        "+_vm._s(_vm.$t("views.systemManagement.diskManagementSettings"))+"："+_vm._s(_vm.$t("views.systemManagement.systemSetting.p1"))+"\n        "),_c('el-select',{attrs:{"clearable":"","filterable":"","placeholder":_vm.$t("views.systemManagement.chose")},model:{value:(_vm.clearTimeMsg),callback:function ($$v) {_vm.clearTimeMsg=$$v},expression:"clearTimeMsg"}},_vm._l((_vm.clearTime),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v("\n        "+_vm._s(_vm.$t("views.systemManagement.systemSetting.p2"))+"\n        "),_c('el-button',{staticClass:"btn dark small",on:{"click":_vm.saveClearTime}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.save")))])],1),_vm._v(" "),_c('el-tabs',{on:{"tab-click":_vm.clearSearchTabs},model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},[_c('el-tab-pane',{attrs:{"label":_vm.$t("views.systemManagement.diskCleaning"),"name":"clearDisk"}},[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading1),expression:"loading1"}],staticClass:"tab-content",attrs:{"data":_vm.tableData1,"border":""}},[_c('el-table-column',{attrs:{"prop":"node_name","align":"center","label":_vm.$t("views.systemManagement.nodeName")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"disk_type","width":"100","align":"center","label":_vm.$t("views.systemManagement.type")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"disk_used","align":"center","label":_vm.$t("views.systemManagement.diskUsage")},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v("磁盘使用量达到"+_vm._s(scope.row.disk_used)+"%")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"disk_status","width":"120","align":"center","label":_vm.$t("views.systemManagement.status")},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{class:scope.row.disk_status===0?'':scope.row.disk_status===1?'green':scope.row.disk_status===2?'yellow':'red'},[_vm._v(_vm._s(scope.row.disk_status===0?'良好':scope.row.disk_status===1?'低风险':scope.row.disk_status===2?'中风险':'高风险'))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"disk_warn_time","align":"center","label":_vm.$t("views.systemManagement.alarmTime")}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.systemManagement.operating"),"width":"150","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('button',{staticClass:"btn",on:{"click":function($event){_vm.diskCleaning(scope.row.node_id)}}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.diskCleaning")))])]}}])}),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])])],1)],1),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":_vm.$t("views.systemManagement.diskCleaningRecord"),"name":"diskHistory","lazy":true}},[_c('div',{staticClass:"tab-select"},[_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t("views.systemManagement.nodeName")))]),_vm._v(" "),_c('el-select',{attrs:{"clearable":"","filterable":"","placeholder":_vm.$t("views.systemManagement.chose")},model:{value:(_vm.tabSel2.node_name),callback:function ($$v) {_vm.$set(_vm.tabSel2, "node_name", $$v)},expression:"tabSel2.node_name"}},_vm._l((_vm.node_name),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('span',{staticClass:"tab-select-title"},[_vm._v(_vm._s(_vm.$t("views.systemManagement.cleaningTime")))]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"-","start-placeholder":_vm.$t("views.systemManagement.beginTime"),"end-placeholder":_vm.$t("views.systemManagement.endTime"),"picker-options":_vm.pickerOptions},model:{value:(_vm.tabSel2.full_date),callback:function ($$v) {_vm.$set(_vm.tabSel2, "full_date", $$v)},expression:"tabSel2.full_date"}}),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.clearSearchTabs('tableData1')}}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.reset")))]),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.doSearchTabs('tableData1')}}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.select")))])],1),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading2),expression:"loading2"}],staticClass:"tab-content",attrs:{"data":_vm.tableData2,"border":""}},[_c('el-table-column',{attrs:{"prop":"node_name","align":"center","width":"200","label":_vm.$t("views.systemManagement.nodeName")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"option_content","label":_vm.$t("views.systemManagement.alarmContent")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"disk_clear_time","align":"center","width":"200","label":_vm.$t("views.systemManagement.cleaningTime")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"free_size","align":"center","width":"150","label":_vm.$t("views.systemManagement.freeSpace")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"time_limt","align":"center","label":_vm.$t("views.systemManagement.cleanDiskRange")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"option_name","align":"center","width":"100","label":_vm.$t("views.systemManagement.OperationSource")}}),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])])],1)],1)],1),_vm._v(" "),_c('el-pagination',{staticClass:"tab-page",attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"current-page":_vm.page,"total":_vm.total_count},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.changePageTabs}})],1),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":_vm.$t("views.systemManagement.systemLogSettings"),"name":"logSetting","lazy":true}},[_c('div',{staticClass:"log-title"},[_vm._v("\n        "+_vm._s(_vm.$t("views.systemManagement.systemLogSettings"))+"："+_vm._s(_vm.$t("views.systemManagement.systemSetting.p3"))+"\n        "),_c('el-select',{attrs:{"clearable":"","filterable":"","placeholder":_vm.$t("views.systemManagement.chose")},model:{value:(_vm.logTimeMsg),callback:function ($$v) {_vm.logTimeMsg=$$v},expression:"logTimeMsg"}},_vm._l((_vm.logTime),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v("\n        "+_vm._s(_vm.$t("views.systemManagement.systemSetting.p4"))+"\n        "),_c('el-button',{staticClass:"btn dark small",on:{"click":_vm.saveLogTime}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.save")))])],1)]),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":_vm.$t("views.systemManagement.systemConfigurationSettings"),"name":"quotaSetting","lazy":true}},[_c('div',{staticClass:"quota-title"},[_c('div',{staticClass:"item"},[_c('p',{staticClass:"item-top"},[_vm._v("\n            "+_vm._s(_vm.$t("views.systemManagement.basicSettings"))+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('p',[_vm._v(_vm._s(_vm.$t("views.systemManagement.language")))]),_vm._v(" "),_c('el-select',{attrs:{"disabled":_vm.basis.disabled===true,"clearable":"","filterable":"","placeholder":_vm.$t("views.systemManagement.chose")},model:{value:(_vm.basis.content.languages),callback:function ($$v) {_vm.$set(_vm.basis.content, "languages", $$v)},expression:"basis.content.languages"}},_vm._l((_vm.languageList),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t("views.systemManagement.systemSetting.p5")))]),_vm._v(" "),_c('el-input',{attrs:{"disabled":_vm.basis.disabled===true,"placeholder":"请输入内容"},model:{value:(_vm.basis.content.page_num),callback:function ($$v) {_vm.$set(_vm.basis.content, "page_num", $$v)},expression:"basis.content.page_num"}}),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t("views.systemManagement.systemSetting.p6")))]),_vm._v(" "),_c('el-input',{attrs:{"disabled":_vm.basis.disabled===true,"placeholder":"请输入内容"},model:{value:(_vm.basis.content.user_create_num),callback:function ($$v) {_vm.$set(_vm.basis.content, "user_create_num", $$v)},expression:"basis.content.user_create_num"}})],1),_vm._v(" "),_c('div',{staticClass:"controls"},[(_vm.basis.disabled===true)?_c('el-button',{staticClass:"btn dark small",on:{"click":_vm.editBasis}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.modify")))]):_vm._e(),_vm._v(" "),(_vm.basis.disabled===false)?_c('el-button',{staticClass:"btn dark small",on:{"click":_vm.saveBasis}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.save")))]):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('p',{staticClass:"item-top"},[_vm._v("\n            "+_vm._s(_vm.$t("views.systemManagement.mirrorParameterSetting"))+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('p',[_vm._v(_vm._s(_vm.$t("views.systemManagement.systemSetting.p7")))]),_vm._v(" "),_c('el-input',{attrs:{"disabled":_vm.mirror.disabled===true,"placeholder":"请输入内容"},model:{value:(_vm.mirror.content.project_image_num),callback:function ($$v) {_vm.$set(_vm.mirror.content, "project_image_num", $$v)},expression:"mirror.content.project_image_num"}}),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t("views.systemManagement.systemSetting.p8")))]),_vm._v(" "),_c('el-input',{attrs:{"disabled":_vm.mirror.disabled===true,"placeholder":"请输入内容"},model:{value:(_vm.mirror.content.personal_image_num),callback:function ($$v) {_vm.$set(_vm.mirror.content, "personal_image_num", $$v)},expression:"mirror.content.personal_image_num"}})],1),_vm._v(" "),_c('div',{staticClass:"controls"},[(_vm.mirror.disabled===true)?_c('el-button',{staticClass:"btn dark small",on:{"click":_vm.editMirror}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.modify")))]):_vm._e(),_vm._v(" "),(_vm.mirror.disabled===false)?_c('el-button',{staticClass:"btn dark small",on:{"click":_vm.saveMirror}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.save")))]):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('p',{staticClass:"item-top"},[_vm._v("\n            "+_vm._s(_vm.$t("views.systemManagement.personalSpaceResourceQuota"))+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('p',[_vm._v("CPU")]),_vm._v(" "),_c('el-input',{attrs:{"disabled":_vm.personal.disabled===true,"placeholder":"请输入内容"},model:{value:(_vm.personal.content.cpu),callback:function ($$v) {_vm.$set(_vm.personal.content, "cpu", $$v)},expression:"personal.content.cpu"}},[_c('template',{slot:"append"},[_vm._v("个")])],2),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t("views.systemManagement.RAM")))]),_vm._v(" "),_c('el-input',{attrs:{"disabled":_vm.personal.disabled===true,"placeholder":"请输入内容"},model:{value:(_vm.personal.content.memory),callback:function ($$v) {_vm.$set(_vm.personal.content, "memory", $$v)},expression:"personal.content.memory"}},[_c('template',{slot:"append"},[_vm._v("G")])],2),_vm._v(" "),_c('p',[_vm._v("GPU")]),_vm._v(" "),_c('el-input',{attrs:{"disabled":true,"placeholder":"请输入内容"},model:{value:(_vm.personal.content.gpu),callback:function ($$v) {_vm.$set(_vm.personal.content, "gpu", $$v)},expression:"personal.content.gpu"}},[_c('template',{slot:"append"},[_vm._v("个")])],2)],1),_vm._v(" "),_c('div',{staticClass:"controls"},[(_vm.personal.disabled===true)?_c('el-button',{staticClass:"btn dark small",on:{"click":_vm.editPersonal}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.modify")))]):_vm._e(),_vm._v(" "),(_vm.personal.disabled===false)?_c('el-button',{staticClass:"btn dark small",on:{"click":_vm.savePersonal}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.save")))]):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"item else"},[_c('p',{staticClass:"item-top"},[_vm._v("\n            "+_vm._s(_vm.$t("views.systemManagement.storageSpaceParameterSetting"))+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"group"},[_c('p',[_vm._v(_vm._s(_vm.$t("views.systemManagement.systemSetting.p9")))]),_vm._v(" "),_c('div',{staticClass:"group-content"},[_c('div',{staticClass:"group-content-item"},[_c('p',[_vm._v(_vm._s(_vm.$t("views.systemManagement.systemSetting.p10")))]),_vm._v(" "),_c('el-input',{attrs:{"disabled":_vm.storage.disabled===true,"placeholder":"请输入内容"},model:{value:(_vm.storage.content.project_storage_size),callback:function ($$v) {_vm.$set(_vm.storage.content, "project_storage_size", $$v)},expression:"storage.content.project_storage_size"}},[_c('template',{slot:"append"},[_vm._v("G")])],2)],1),_vm._v(" "),_c('div',{staticClass:"group-content-item"},[_c('p',[_vm._v(_vm._s(_vm.$t("views.systemManagement.count")))]),_vm._v(" "),_c('el-input',{attrs:{"disabled":_vm.storage.disabled===true,"placeholder":"请输入内容"},model:{value:(_vm.storage.content.project_storage_num),callback:function ($$v) {_vm.$set(_vm.storage.content, "project_storage_num", $$v)},expression:"storage.content.project_storage_num"}})],1)])]),_vm._v(" "),_c('div',{staticClass:"group"},[_c('p',[_vm._v(_vm._s(_vm.$t("views.systemManagement.systemSetting.p11")))]),_vm._v(" "),_c('div',{staticClass:"group-content"},[_c('div',{staticClass:"group-content-item"},[_c('p',[_vm._v(_vm._s(_vm.$t("views.systemManagement.systemSetting.p10")))]),_vm._v(" "),_c('el-input',{attrs:{"disabled":_vm.storage.disabled===true,"placeholder":"请输入内容"},model:{value:(_vm.storage.content.personal_storage_size),callback:function ($$v) {_vm.$set(_vm.storage.content, "personal_storage_size", $$v)},expression:"storage.content.personal_storage_size"}},[_c('template',{slot:"append"},[_vm._v("G")])],2)],1),_vm._v(" "),_c('div',{staticClass:"group-content-item"},[_c('p',[_vm._v(_vm._s(_vm.$t("views.systemManagement.count")))]),_vm._v(" "),_c('el-input',{attrs:{"disabled":_vm.storage.disabled===true,"placeholder":"请输入内容"},model:{value:(_vm.storage.content.personal_storage_num),callback:function ($$v) {_vm.$set(_vm.storage.content, "personal_storage_num", $$v)},expression:"storage.content.personal_storage_num"}})],1)])])]),_vm._v(" "),_c('div',{staticClass:"controls"},[(_vm.storage.disabled===true)?_c('el-button',{staticClass:"btn dark small",on:{"click":_vm.editStorage}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.modify")))]):_vm._e(),_vm._v(" "),(_vm.storage.disabled===false)?_c('el-button',{staticClass:"btn dark small",on:{"click":_vm.saveStorage}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.save")))]):_vm._e()],1)])]),_vm._v(" "),_c('div',{staticClass:"quota-content"},[_c('p',[_vm._v(_vm._s(_vm.$t("views.systemManagement.projectQuotaAdjustment")))]),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.tableData3.loading),expression:"tableData3.loading"}],staticClass:"tab-content",attrs:{"data":_vm.tableData3.msg,"border":""}},[_c('el-table-column',{attrs:{"type":"index","label":_vm.$t("views.systemManagement.serialNumber"),"align":"center","width":"50"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"project_name","label":_vm.$t("views.systemManagement.projectName")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_user","label":_vm.$t("views.systemManagement.user")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","align":"center","width":"200","label":_vm.$t("views.systemManagement.creationTime")}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"project_description","label":_vm.$t("views.systemManagement.projectDescription")}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t("views.systemManagement.operating"),"align":"center","width":"140"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('button',{staticClass:"btn",on:{"click":function($event){_vm.setResource(scope.row.project_id)}}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.setResourceQuota")))])]}}])}),_vm._v(" "),_c('div',{attrs:{"slot":"empty"},slot:"empty"},[_c('div',{staticClass:"views-empty"},[_c('span',{staticClass:"views-empty-table"}),_vm._v(" "),_c('p',{staticClass:"views-empty-text"},[_vm._v(_vm._s(_vm.$t('views.table.noData')))])])])],1),_vm._v(" "),_c('el-pagination',{staticClass:"tab-page",attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"current-page":_vm.tableData3.Pagination.page,"total":_vm.tableData3.Pagination.total_count},on:{"update:currentPage":function($event){_vm.$set(_vm.tableData3.Pagination, "page", $event)},"current-change":function($event){_vm.changePage('tableData3')}}})],1)])],1),_vm._v(" "),_c('el-dialog',{staticClass:"diskCleaningPop small",attrs:{"title":_vm.$t("views.systemManagement.diskCleaning"),"visible":_vm.diskCleaningPop,"width":"30%"},on:{"update:visible":function($event){_vm.diskCleaningPop=$event}}},[_c('div',{staticClass:"content"},[_vm._v("\n      "+_vm._s(_vm.$t("views.systemManagement.clean"))+"\n      "),_c('el-date-picker',{attrs:{"type":"date","placeholder":_vm.$t("views.systemManagement.chose")},model:{value:(_vm.diskCleaningPopMsg.clear_time),callback:function ($$v) {_vm.$set(_vm.diskCleaningPopMsg, "clear_time", $$v)},expression:"diskCleaningPopMsg.clear_time"}}),_vm._v("\n      "+_vm._s(_vm.$t("views.systemManagement.systemSetting.p12"))+"\n    ")],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"cancel",on:{"click":function($event){_vm.diskCleaningPop = false}}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.cancel")))]),_vm._v(" "),_c('el-button',{staticClass:"primary",attrs:{"type":"primary"},on:{"click":_vm.diskCleaningPopDo}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.start")))])],1)]),_vm._v(" "),_c('el-dialog',{staticClass:"small",attrs:{"title":_vm.$t("views.systemManagement.setResourceQuota"),"visible":_vm.setResourcePop,"width":"50%"},on:{"update:visible":function($event){_vm.setResourcePop=$event}}},[_c('div',{staticClass:"content"},[_c('el-form',{ref:"resourceForm",attrs:{"model":_vm.resourceForm,"rules":_vm.resourceFormRules,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"CPU","prop":"CPU"}},[_c('el-input',{attrs:{"placeholder":"请输入100以内的数字"},model:{value:(_vm.resourceForm.CPU),callback:function ($$v) {_vm.$set(_vm.resourceForm, "CPU", $$v)},expression:"resourceForm.CPU"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"内存","prop":"memory"}},[_c('el-input',{attrs:{"placeholder":"请输入256以内的数字"},model:{value:(_vm.resourceForm.memory),callback:function ($$v) {_vm.$set(_vm.resourceForm, "memory", $$v)},expression:"resourceForm.memory"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"GPU","prop":"GPU"}},[_c('el-input',{attrs:{"placeholder":"请输入10以内的数字"},model:{value:(_vm.resourceForm.GPU),callback:function ($$v) {_vm.$set(_vm.resourceForm, "GPU", $$v)},expression:"resourceForm.GPU"}})],1)],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"cancel",on:{"click":function($event){_vm.setResourcePop = false}}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.cancel")))]),_vm._v(" "),_c('el-button',{staticClass:"primary",attrs:{"type":"primary"},on:{"click":_vm.setResourcePopDo}},[_vm._v(_vm._s(_vm.$t("views.systemManagement.save")))])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var systemManagement_systemSetting = (esExports);
// CONCATENATED MODULE: ./src/views/systemManagement/systemSetting.vue
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
  systemSetting,
  systemManagement_systemSetting,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_systemManagement_systemSetting = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "RRo+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("c45H"), __esModule: true };

/***/ }),

/***/ "c45H":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1alW");
module.exports = __webpack_require__("FeBl").Number.isInteger;


/***/ })

});