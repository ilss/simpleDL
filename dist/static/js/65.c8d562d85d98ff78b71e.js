webpackJsonp([65],{

/***/ "vIVt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/imageManagement/newImage.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var newImage = ({
  name: 'newImage',
  data: function data() {
    return {
      lang: 'zh',
      msg: {
        image_name: '',
        image_type: '',
        operate_system: '',
        object: '',
        image_desc: '',
        upload_path: ''
      },
      seletions: {},
      url: '',
      isEdit: false,
      hasObjectData: false,
      para: {
        target: '//192.168.200.7:83/v1/image/imageupload', // 后台上传地址
        headers: {
          access_token: '622164773b40bbe71b42a1f63cd0294dce212e1b8a1cd75d63be7a52a6bae7bd'
        },
        token: '622164773b40bbe71b42a1f63cd0294dce212e1b8a1cd75d63be7a52a6bae7bd', //
        typeArr: [], // 文件后缀类型 ['iso','mp4']
        // 断点上传位置查询
        // checkChunkUploadedByResponse: function (chunk, message) {
        //   var objMessage = {}
        //   try {
        //     objMessage = JSON.parse(message)
        //   } catch (e) {}
        //   // fake response
        //   // objMessage.uploaded_chunks = [2, 3, 4, 5, 8, 10, 11, 12, 13, 17, 20, 21]
        //   // check the chunk is uploaded
        //   // return (objMessage.uploaded_chunks || []).indexOf(chunk.offset + 1) >= 0
        //   return (objMessage.index || 0) > chunk.offset
        // },
        chunkSize: 1 * 1024 * 1024 // 分段大小
      }
    };
  },

  watch: {
    STORE_THEME_LANG: {
      handler: function handler(options, oldOptions) {
        if (options) {
          this.lang = this.STORE_THEME_LANG;
        }
      }
    }
  },
  created: function created() {
    var _this = this;

    this.$axios.get('/image-select').then(function (data) {
      _this.seletions = extends_default()({}, data.data.data);
    });
    if (this.$route.query.imageId !== undefined) {
      this.isEdit = true;
      this.url = '/edit-image';
      this.$axios.get('/imageDetail', { params: { image_id: this.$route.query.imageId } }).then(function (data) {
        _this.msg = assign_default()({}, data.data.data);
      });
    } else {
      this.url = '/add-image';
    }
    if (this.$route.query.hasObjectData !== undefined) {
      this.hasObjectData = true;
    }
  },

  methods: {
    // 上传结果
    uploadResult: function uploadResult(data) {
      console.log('后台返回', data);
    },
    // 删除回调
    deleteFile: function deleteFile(res) {
      console.log('删除', res);
    },
    // 保存
    save: function save() {
      var _this2 = this;

      this.$axios.post(this.url, this.msg).then(function (data) {
        _this2.$router.go(-1);
        _this2.$message({ message: '保存成功', type: 'success' });
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3d33e8ec","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/imageManagement/newImage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views-image-manage-new-image"},[_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"form-section"},[_c('div',{staticClass:"form-item"},[_c('div',{staticClass:"item-title"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.mirrorName")))]),_vm._v(" "),_c('div',{staticClass:"item-content"},[_c('el-input',{attrs:{"placeholder":_vm.$t("views.imageManagement.enter")},model:{value:(_vm.msg.image_name),callback:function ($$v) {_vm.$set(_vm.msg, "image_name", $$v)},expression:"msg.image_name"}})],1)]),_vm._v(" "),_c('div',{staticClass:"form-item"},[_c('div',{staticClass:"item-title"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.mirrorClassification")))]),_vm._v(" "),_c('div',{staticClass:"item-content"},[_c('el-select',{attrs:{"placeholder":_vm.$t("views.imageManagement.chose")},model:{value:(_vm.msg.image_type),callback:function ($$v) {_vm.$set(_vm.msg, "image_type", $$v)},expression:"msg.image_type"}},_vm._l((_vm.seletions.image_type_option),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}))],1)]),_vm._v(" "),_c('div',{staticClass:"form-item"},[_c('div',{staticClass:"item-title"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.operatingSystemType")))]),_vm._v(" "),_c('div',{staticClass:"item-content"},[_c('el-select',{attrs:{"placeholder":_vm.$t("views.imageManagement.chose")},model:{value:(_vm.msg.operate_system),callback:function ($$v) {_vm.$set(_vm.msg, "operate_system", $$v)},expression:"msg.operate_system"}},_vm._l((_vm.seletions.operate_system_option),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}))],1)]),_vm._v(" "),(!_vm.isEdit)?_c('div',{staticClass:"form-item"},[_c('div',{staticClass:"item-title"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.uploadMirror")))]),_vm._v(" "),_c('div',{staticClass:"item-content"},[_c('div',{staticStyle:{"width":"400px"}},[_c('BreakpointUpload',{attrs:{"params":_vm.para,"language":_vm.lang},on:{"resultUploader":_vm.uploadResult,"deleteFiles":_vm.deleteFile}})],1)])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-section"},[(_vm.hasObjectData)?_c('div',{staticClass:"form-item"},[_c('div',{staticClass:"item-title"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.projectSpace")))]),_vm._v(" "),_c('div',{staticClass:"item-content"},[_c('el-select',{attrs:{"placeholder":_vm.$t("views.imageManagement.chose")},model:{value:(_vm.msg.object),callback:function ($$v) {_vm.$set(_vm.msg, "object", $$v)},expression:"msg.object"}},_vm._l((_vm.seletions.object_option),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}))],1)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"form-item"},[_c('div',{staticClass:"item-title"},[_vm._v(_vm._s(_vm.$t("views.imageManagement.mirrorDescription")))]),_vm._v(" "),_c('div',{staticClass:"item-content"},[_c('el-input',{attrs:{"type":"textarea","rows":"6","placeholder":_vm.$t("views.imageManagement.enter")},model:{value:(_vm.msg.image_desc),callback:function ($$v) {_vm.$set(_vm.msg, "image_desc", $$v)},expression:"msg.image_desc"}})],1)])])]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('el-button',{staticClass:"btn",on:{"click":function($event){_vm.$router.back()}}},[_vm._v(_vm._s(_vm.$t("views.imageManagement.cancel")))]),_vm._v(" "),_c('el-button',{staticClass:"btn dark",on:{"click":function($event){_vm.save()}}},[_vm._v(_vm._s(_vm.$t("views.imageManagement.save")))])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var imageManagement_newImage = (esExports);
// CONCATENATED MODULE: ./src/views/imageManagement/newImage.vue
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
  newImage,
  imageManagement_newImage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_imageManagement_newImage = __webpack_exports__["default"] = (Component.exports);


/***/ })

});