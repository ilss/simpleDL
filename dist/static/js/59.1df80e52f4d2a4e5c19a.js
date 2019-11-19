webpackJsonp([59],{

/***/ "7LsO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/util/index.js
var util = __webpack_require__("ZoQJ");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/personalSpace/createDevelop.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var createDevelop = ({
  data: function data() {
    var _this = this;

    var firstPass = function firstPass(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (!Object(util["a" /* character */])(value)) {
        callback(new Error('只能输入6-15位字母、数字或字符数字组合'));
      } else {
        if (_this.ruleForm.checkPass !== '') {
          _this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var nextPass = function nextPass(rule, value, callback) {
      if (value === '') {
        //  console.log(value, '++++')
        callback(new Error('请再次输入密码'));
      } else if (value !== _this.ruleForm.pass) {
        // console.log(value, this.ruleForm.pass)
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
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
      value: '',
      input: '',
      textarea: '',
      address: [],
      ruleForm: {
        name: '',
        value: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        mirror: '',
        pass: '',
        checkPass: '',
        mounting: '',
        cpu: '',
        gpu: '',
        memory: ''
      },
      createDevrules: {
        name: [{ required: true, message: '请输入环境名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        pass: [{ validator: firstPass, trigger: 'blur' }],
        checkPass: [{ validator: nextPass, trigger: 'blur' }],
        value: [{ required: true, message: '请选择镜像分类', trigger: 'change' }],
        cpu: [{ required: true, message: 'CPU不能为空', trigger: 'change' }],
        gpu: [{ required: true, message: 'GPU不能为空', trigger: 'change' }],
        memory: [{ required: true, message: '内存不能为空', trigger: 'change' }],
        mirror: [{ required: true, message: '请选择镜像', trigger: 'change' }],
        mounting: [{ required: true, message: '挂载信息不能为空', trigger: 'change' }],
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
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this2.$message({ message: '保存成功', type: 'success' });
        } else {
          _this2.$message({ message: '带*号为必填项', type: 'error' });
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2712b8ff","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/personalSpace/createDevelop.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-personal"},[_c('el-form',{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.createDevrules,"label-width":"100px"}},[_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v(_vm._s(_vm.$t('views.development.developingInformation'))+"\n            ")])]),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-develop-text"},[_c('div',{staticClass:"views-develop-select"},[_c('el-form-item',{attrs:{"label":"镜像分类","prop":"value"}},[_c('el-select',{attrs:{"placeholder":"请选择镜像","clearable":""},model:{value:(_vm.ruleForm.value),callback:function ($$v) {_vm.$set(_vm.ruleForm, "value", $$v)},expression:"ruleForm.value"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1)],1),_vm._v(" "),_c('div',{staticClass:"views-develop-input"},[_c('el-form-item',{attrs:{"label":"环境名称","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"只能输入2-50个字符、字母、数字","clearable":""},model:{value:(_vm.ruleForm.name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "name", $$v)},expression:"ruleForm.name"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"views-develop-image"},[_c('el-form-item',{attrs:{"label":"选择镜像","prop":"mirror"}},[_c('div',{staticClass:"views-develop-choice"},[_c('el-input',{attrs:{"readonly":true},model:{value:(_vm.ruleForm.mirror),callback:function ($$v) {_vm.$set(_vm.ruleForm, "mirror", $$v)},expression:"ruleForm.mirror"}}),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium",attrs:{"type":"primary"}},[_vm._v("选择")])],1)])],1)]),_vm._v(" "),_c('div',{staticClass:"views-develop-text"},[_c('div',{staticClass:"views-develop-image"},[_c('el-form-item',{attrs:{"label":_vm.$t('views.development.remarks'),"prop":"desc"}},[_c('el-input',{attrs:{"type":"textarea","rows":6,"placeholder":"请输入内容"},model:{value:(_vm.ruleForm.desc),callback:function ($$v) {_vm.$set(_vm.ruleForm, "desc", $$v)},expression:"ruleForm.desc"}})],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("密码信息")])]),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-develop-text"},[_c('div',{staticClass:"views-develop-input"},[_c('el-form-item',{attrs:{"label":"输入密码","prop":"pass"}},[_c('el-input',{attrs:{"type":"password","placeholder":"只能输入2-50个字符、字母、数字","clearable":"","auto-complete":"off"},model:{value:(_vm.ruleForm.pass),callback:function ($$v) {_vm.$set(_vm.ruleForm, "pass", $$v)},expression:"ruleForm.pass"}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"views-develop-text"},[_c('div',{staticClass:"views-develop-input"},[_c('el-form-item',{attrs:{"label":"确认密码","prop":"checkPass"}},[_c('el-input',{attrs:{"type":"password","placeholder":"只能输入2-50个字符、字母、数字","clearable":"","auto-complete":"off"},model:{value:(_vm.ruleForm.checkPass),callback:function ($$v) {_vm.$set(_vm.ruleForm, "checkPass", $$v)},expression:"ruleForm.checkPass"}})],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("存储挂载信息")])]),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_vm._l((_vm.address),function(item,index){return _c('div',{key:index,staticClass:"views-develop-mount"},[_c('el-form-item',{attrs:{"prop":"mounting","label-width":"0"}},[_c('el-input',{staticClass:"w8",attrs:{"placeholder":"","readonly":true},model:{value:(item.increaseAddress),callback:function ($$v) {_vm.$set(item, "increaseAddress", $$v)},expression:"item.increaseAddress"}}),_vm._v(" "),_c('el-button',{staticClass:"view-btn-medium",attrs:{"type":"primary"},on:{"click":function($event){_vm.developBrowse(index,item)}}},[_vm._v("浏览")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":"","readonly":true},model:{value:(item.createAddress),callback:function ($$v) {_vm.$set(item, "createAddress", $$v)},expression:"item.createAddress"}}),_vm._v(" "),_c('span',{staticClass:"views-btn-reduce",on:{"click":function($event){_vm.reduceAddress(index)}}},[_vm._v("—")]),_vm._v(" "),_c('span',[_vm._v("该挂载地址权限为读写")])],1)],1)}),_vm._v(" "),_c('div',{staticClass:"views-develop-mount"},[_c('el-button',{staticClass:"view-btn-medium",attrs:{"type":"primary"},on:{"click":_vm.mountAddress}},[_vm._v("添加挂载地址")]),_vm._v(" "),_c('span',{staticClass:"views-mount-span"},[_vm._v("*最多可添加四个挂载地址")])],1)],2),_vm._v(" "),_c('div',{staticClass:"views-header-inf"},[_c('span',[_vm._v("资源信息")])]),_vm._v(" "),_c('div',{staticClass:"views-develop-inf"},[_c('div',{staticClass:"views-develop-resources"},[_c('el-form-item',{attrs:{"label":"CPU","prop":"cpu"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.ruleForm.cpu),callback:function ($$v) {_vm.$set(_vm.ruleForm, "cpu", $$v)},expression:"ruleForm.cpu"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"CPU","prop":"gpu"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.ruleForm.gpu),callback:function ($$v) {_vm.$set(_vm.ruleForm, "gpu", $$v)},expression:"ruleForm.gpu"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"内存","prop":"memory"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.ruleForm.memory),callback:function ($$v) {_vm.$set(_vm.ruleForm, "memory", $$v)},expression:"ruleForm.memory"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1)],1)]),_vm._v(" "),_c('div',{staticClass:"views-develop-btn"},[_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{staticClass:"view-btn-big",attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("运行")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var personalSpace_createDevelop = (esExports);
// CONCATENATED MODULE: ./src/views/personalSpace/createDevelop.vue
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
  createDevelop,
  personalSpace_createDevelop,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_personalSpace_createDevelop = __webpack_exports__["default"] = (Component.exports);


/***/ })

});