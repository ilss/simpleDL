webpackJsonp([49],{

/***/ "ucCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/projectSpace/creatDevelop.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var creatDevelop = ({
  data: function data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      input: '',
      textarea: '',
      address: [],
      ruleForm: {
        name: '',
        value: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        mirror: ''
      },
      createDevrules: {
        name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        value: [{ required: true, message: '请选择镜像分类', trigger: 'change' }],
        mirror: [{ required: true, message: '请选择镜像', trigger: 'change' }],
        date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
        date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
        type: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
        resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
        desc: [{ message: '请填写活动形式', trigger: 'blur' }]
      }
    };
  },
  created: function created() {},
  mounted: function mounted() {},

  methods: {
    mountAddress: function mountAddress() {
      if (this.address.length <= 3) {
        var obj = {
          increaseAddress: '',
          createAddress: ''
        };
        this.address.push(obj);
      } else {
        this.$message({
          message: '最多可添加四个挂载地址',
          type: 'warning'
        });
      }
    },
    reduceAddress: function reduceAddress(index) {
      console.log(index);
      this.address.splice(index, 1);
    },
    developBrowse: function developBrowse(index, item) {
      console.log(index, item);
    },

    // 提交
    submitForm: function submitForm(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this.$message({ message: '保存成功', type: 'success' });
        } else {
          _this.$message({ message: '带*号为必填项', type: 'error' });
          return false;
        }
      });
    },

    // 取消
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  components: {},
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8d44fa1a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/projectSpace/creatDevelop.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-personal"},[_c('el-form',{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.createDevrules,"label-width":"100px"}},[_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v(_vm._s(_vm.$t('views.development.developingInformation'))+"\n            ")])]),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-develop-text"},[_c('div',{staticClass:"views-develop-select"},[_c('el-form-item',{attrs:{"label":"镜像分类","prop":"value"}},[_c('el-select',{attrs:{"placeholder":"请选择镜像","clearable":""},model:{value:(_vm.ruleForm.value),callback:function ($$v) {_vm.$set(_vm.ruleForm, "value", $$v)},expression:"ruleForm.value"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1)],1),_vm._v(" "),_c('div',{staticClass:"views-develop-input"},[_c('el-form-item',{attrs:{"label":"环境名称","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"只能输入2-50个字符、字母、数字","clearable":""},model:{value:(_vm.ruleForm.name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "name", $$v)},expression:"ruleForm.name"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"views-develop-image"},[_c('el-form-item',{attrs:{"label":"选择镜像","prop":"mirror"}},[_c('el-input',{attrs:{"readonly":true},model:{value:(_vm.ruleForm.mirror),callback:function ($$v) {_vm.$set(_vm.ruleForm, "mirror", $$v)},expression:"ruleForm.mirror"}}),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium",attrs:{"type":"primary"}},[_vm._v("选择")])],1)],1)]),_vm._v(" "),_c('div',{staticClass:"views-develop-text"},[_c('div',{staticClass:"views-develop-image"},[_c('el-form-item',{attrs:{"label":_vm.$t('views.development.remarks'),"prop":"desc"}},[_c('el-input',{attrs:{"type":"textarea","rows":6,"placeholder":"请输入内容"},model:{value:(_vm.ruleForm.desc),callback:function ($$v) {_vm.$set(_vm.ruleForm, "desc", $$v)},expression:"ruleForm.desc"}})],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"views-develop-btn"},[_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{staticClass:"view-btn-big",attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("运行")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var projectSpace_creatDevelop = (esExports);
// CONCATENATED MODULE: ./src/views/projectSpace/creatDevelop.vue
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
  creatDevelop,
  projectSpace_creatDevelop,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_projectSpace_creatDevelop = __webpack_exports__["default"] = (Component.exports);


/***/ })

});