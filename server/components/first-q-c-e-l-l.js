exports.ids = [6];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FirstQCELL.vue?vue&type=template&id=0db1781e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "600px"
    },
    attrs: {
      "id": "sheetarea"
    }
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FirstQCELL.vue?vue&type=template&id=0db1781e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FirstQCELL.vue?vue&type=script&lang=js&
/* harmony default export */ var FirstQCELLvue_type_script_lang_js_ = ({
  mounted() {
    // var sampleData = [{"name":"Hello","message":"큐셀!","etc":"가장 간단한 큐셀 그리드입니다."}];  

    var QCELLProp = {
      id: 'qcell',
      parentid: 'sheetarea',
      data: {
        'input': [{
          "name": "Hello",
          "message": "큐셀!",
          "etc": "가장 간단한 첫번째 큐셀 그리드입니다."
        }]
      },
      columns: [{
        key: 'name',
        type: 'input',
        title: ['컬럼1'],
        width: "20%"
      }, {
        key: 'message',
        title: ['컬럼2'],
        width: "30%"
      }, {
        key: 'etc',
        title: ['컬럼3'],
        width: "50%"
      }]
    };
    setTimeout(function () {
      QCELL.create(QCELLProp);

      //qcell = QCELL.getInstance("qcell");  
    });
  }
});
// CONCATENATED MODULE: ./components/FirstQCELL.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FirstQCELLvue_type_script_lang_js_ = (FirstQCELLvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FirstQCELL.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FirstQCELLvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d0df3c04"
  
)

/* harmony default export */ var FirstQCELL = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=first-q-c-e-l-l.js.map