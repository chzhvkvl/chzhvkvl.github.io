exports.ids = [4];
exports.modules = {

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/C04Columntype.vue?vue&type=template&id=e08e6d68&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "600px"
    },
    attrs: {
      "id": "sheetarea4"
    }
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/C04Columntype.vue?vue&type=template&id=e08e6d68&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/C04Columntype.vue?vue&type=script&lang=js&
/* harmony default export */ var C04Columntypevue_type_script_lang_js_ = ({
  mounted() {
    function fnClick(e) {
      console.log('fnClick');
      console.log(e);
    }
    function fnValuechanged(e) {
      var col = qcell1.getIdx("col");
      if (col === 6) {
        // 컬럼타이틀 input 이 변경될 때만 화면 갱신
        qcell1.refresh();
      }
    }
    function imageclick() {
      alert('imageclick');
    }
    function customIden(data) {
      var data_1st = data.substr(0, 6);
      var data_2nd = data.substr(6, 1);
      return data_1st + "-" + data_2nd + "XXXXXX";
    }
    function fnRenderer(id, row, col, val, obj) {
      var first, second;
      switch (Math.floor(val)) {
        case 1:
          first = "1";
          second = findSecond(val, first);
          break;
        case 2:
          first = "2";
          second = findSecond(val, first);
          break;
        case 3:
          first = "3";
          second = findSecond(val, first);
          break;
        case 4:
          first = "4";
          second = findSecond(val, first);
          break;
        case 5:
          first = "5";
          second = findSecond(val, first);
          break;
        default:
          first = "0";
          second = findSecond(val, first);
          break;
      }
      var imgFull = "<img src=\"/images/rating/star_" + first + second + ".png\">";
      if (val === 0) {
        imgFull = "";
      } else if (first === "0" && second === "") {
        imgFull = "";
      }
      return imgFull;
    }
    function findSecond(val, first) {
      var std = val - Number(first);
      var str = "";
      if (std == 0) {
        str = "";
      } else {
        if (Math.round(std) == 1) {
          str = "H";
        } else {
          str = "";
        }
      }
      return str;
    }

    // rederer 기능을 이용, 단위 10억 달러에 대한 표시 billion 강조
    function fnGdp(id, row, col, val, obj) {
      var str = '',
        html = "<span style='color: blue;'>(billion)</span>";
      str += val + " " + html;
      return str;
    }

    //rederer 기능을 이용, 단위 10억 달러에 대한 표시 billion 강조
    function fnGdp_ppp(id, row, col, val, obj) {
      var str = '',
        html = "<span style='color: blue;'>(billion)</span>";
      str += val + " " + html;
      return str;
    }
    var qcell1,
      data = [{
        "nation_flag": "/images/g20/us.png",
        "isG7": "Y",
        "isG20": "Y",
        "nation": "미국",
        "gdp": 17968,
        "gdp_ppp": 17968,
        "gdp_per_1": 55904,
        "gdp_ppp_per_1": 55904,
        "imf_category": 0,
        "population": 323969000,
        "etc": "P5, G7, OECD, DAC",
        "foramtdate": "20151006",
        "formatcustom": "7303947649348",
        "masknumber": 9435483334,
        "rating": "5"
      }, {
        "nation_flag": "/images/g20/cn.png",
        "isG7": "N",
        "isG20": "Y",
        "nation": "중국",
        "gdp": 11384,
        "gdp_ppp": 19509,
        "gdp_per_1": 8280,
        "gdp_ppp_per_1": 14189,
        "imf_category": 1,
        "population": 1377469164,
        "etc": "P5, BRICS",
        "foramtdate": "20170417",
        "formatcustom": "1875148804137",
        "masknumber": 8954222818,
        "rating": "4.5"
      }, {
        "nation_flag": "/images/g20/jp.png",
        "isG7": "Y",
        "isG20": "Y",
        "nation": "일본",
        "gdp": 4116,
        "gdp_ppp": 4842,
        "gdp_per_1": 32480,
        "gdp_ppp_per_1": 38210,
        "imf_category": 0,
        "population": 126960000,
        "etc": "G7, OECD, DAC",
        "foramtdate": "20170920",
        "formatcustom": "2219485831380",
        "masknumber": 9834343920,
        "rating": "3.6"
      }, {
        "nation_flag": "/images/g20/de.png",
        "isG7": "Y",
        "isG20": "Y",
        "nation": "독일",
        "gdp": 3371,
        "gdp_ppp": 3842,
        "gdp_per_1": 41267,
        "gdp_ppp_per_1": 47033,
        "imf_category": 0,
        "population": 81770900,
        "etc": "G7, OECD, DAC, EU",
        "foramtdate": "20150622",
        "formatcustom": "9097476549049",
        "masknumber": 8164193071,
        "rating": "4.2"
      }, {
        "nation_flag": "/images/g20/uk.png",
        "isG7": "Y",
        "isG20": "Y",
        "nation": "영국",
        "gdp": 2864,
        "gdp_ppp": 2659,
        "gdp_per_1": 44117,
        "gdp_ppp_per_1": 40958,
        "imf_category": 0,
        "population": 65110000,
        "etc": "P5, G7, OECD, DAC, EU",
        "foramtdate": "20111204",
        "formatcustom": "1642757995389",
        "masknumber": 9744822552,
        "rating": "3.6"
      }, {
        "nation_flag": "/images/g20/fr.png",
        "isG7": "Y",
        "isG20": "Y",
        "nation": "프랑스",
        "gdp": 2422,
        "gdp_ppp": 2646,
        "gdp_per_1": 37728,
        "gdp_ppp_per_1": 41221,
        "imf_category": 0,
        "population": 66710000,
        "etc": "P5, G7, OECD, DAC, EU",
        "foramtdate": "20100520",
        "formatcustom": "8241836576614",
        "masknumber": 9865223006,
        "rating": "3.3"
      }, {
        "nation_flag": "/images/g20/in.png",
        "isG7": "N",
        "isG20": "Y",
        "nation": "인도",
        "gdp": 2182,
        "gdp_ppp": 8027,
        "gdp_per_1": 1688,
        "gdp_ppp_per_1": 6209,
        "imf_category": 1,
        "population": 1291875497,
        "etc": "BRICS",
        "foramtdate": "20160229",
        "formatcustom": "2450177860521",
        "masknumber": 9984453531,
        "rating": "1.8"
      }, {
        "nation_flag": "/images/g20/it.png",
        "isG7": "Y",
        "isG20": "Y",
        "nation": "이탈리아",
        "gdp": 1819,
        "gdp_ppp": 2173,
        "gdp_per_1": 29847,
        "gdp_ppp_per_1": 35664,
        "imf_category": 0,
        "population": 60665551,
        "etc": "G7, OECD, DAC, EU",
        "foramtdate": "20100731",
        "formatcustom": "6739195833120",
        "masknumber": 9454192760,
        "rating": "3.2"
      }, {
        "nation_flag": "/images/g20/br.png",
        "isG7": "N",
        "isG20": "Y",
        "nation": "브라질",
        "gdp": 1799,
        "gdp_ppp": 3207,
        "gdp_per_1": 8802,
        "gdp_ppp_per_1": 15690,
        "imf_category": 1,
        "population": 206149411,
        "etc": "BRICS",
        "foramtdate": "20120817",
        "formatcustom": "7228167910057",
        "masknumber": 8464313349,
        "rating": "1.1"
      }, {
        "nation_flag": "/images/g20/ca.png",
        "isG7": "Y",
        "isG20": "Y",
        "nation": "캐나다",
        "gdp": 1572,
        "gdp_ppp": 1628,
        "gdp_per_1": 43934,
        "gdp_ppp_per_1": 45488,
        "imf_category": 0,
        "population": 36155487,
        "etc": "G7, OECD, DAC",
        "foramtdate": "20141208",
        "formatcustom": "6209183905933",
        "masknumber": 9115782459,
        "rating": "2.9"
      }, {
        "nation_flag": "/images/g20/kr.png",
        "isG7": "N",
        "isG20": "Y",
        "nation": "한국",
        "gdp": 1392,
        "gdp_ppp": 1849,
        "gdp_per_1": 27512,
        "gdp_ppp_per_1": 36528,
        "imf_category": 0,
        "population": 50801405,
        "etc": "OECD, DAC, MIKTA",
        "foramtdate": "20170908",
        "formatcustom": "7690412571287",
        "masknumber": 8275232603,
        "rating": "2.4"
      }, {
        "nation_flag": "/images/g20/au.png",
        "isG7": "N",
        "isG20": "Y",
        "nation": "호주",
        "gdp": 1240,
        "gdp_ppp": 1136,
        "gdp_per_1": 51641,
        "gdp_ppp_per_1": 47317,
        "imf_category": 0,
        "population": 24119805,
        "etc": "OECD, DAC, MIKTA",
        "foramtdate": "20100131",
        "formatcustom": "3039858902938",
        "masknumber": 9814783135,
        "rating": "3.1"
      }, {
        "nation_flag": "/images/g20/ru.png",
        "isG7": "N",
        "isG20": "Y",
        "nation": "러시아",
        "gdp": 1235,
        "gdp_ppp": 3473,
        "gdp_per_1": 8447,
        "gdp_ppp_per_1": 23744,
        "imf_category": 1,
        "population": 146599183,
        "etc": "P5, BRICS",
        "foramtdate": "20150613",
        "formatcustom": "5146355292449",
        "masknumber": 8275232603,
        "rating": "1.1"
      }, {
        "nation_flag": "/images/g20/mx.png",
        "isG7": "N",
        "isG20": "Y",
        "nation": "멕시코",
        "gdp": 1161,
        "gdp_ppp": 2220,
        "gdp_per_1": 9592,
        "gdp_ppp_per_1": 18334,
        "imf_category": 1,
        "population": 122273473,
        "etc": "OECD, MIKTA",
        "foramtdate": "20150625",
        "formatcustom": "6641307071125",
        "masknumber": 8264763819,
        "rating": "0.2"
      }, {
        "nation_flag": "/images/g20/id.png",
        "isG7": "N",
        "isG20": "Y",
        "nation": "인도네시아",
        "gdp": 872,
        "gdp_ppp": 3415,
        "gdp_per_1": 2838,
        "gdp_ppp_per_1": 11111,
        "imf_category": 1,
        "population": 258705000,
        "etc": "MIKTA",
        "foramtdate": "20131201",
        "formatcustom": "8647354827200",
        "masknumber": 9274582337,
        "rating": "0.7"
      }, {
        "nation_flag": "/images/g20/tr.png",
        "isG7": "N",
        "isG20": "Y",
        "nation": "터키",
        "gdp": 722,
        "gdp_ppp": 1576,
        "gdp_per_1": 9290,
        "gdp_ppp_per_1": 20276,
        "imf_category": 1,
        "population": 78741053,
        "etc": "OECD, MIKTA",
        "foramtdate": "20151001",
        "formatcustom": "6533723679213",
        "masknumber": 8565822952,
        "rating": "2.7"
      }, {
        "nation_flag": "/images/g20/sa.png",
        "isG7": "N",
        "isG20": "Y",
        "nation": "사우디아라비아",
        "gdp": 632,
        "gdp_ppp": 1681,
        "gdp_per_1": 20138,
        "gdp_ppp_per_1": 53564,
        "imf_category": 1,
        "population": 32248200,
        "etc": "OPEC",
        "foramtdate": "20110921",
        "formatcustom": "9022872203371",
        "masknumber": 9655283607,
        "rating": "3.8"
      }, {
        "nation_flag": "/images/g20/ar.png",
        "isG7": "N",
        "isG20": "Y",
        "nation": "아르헨티나",
        "gdp": 578,
        "gdp_ppp": 964,
        "gdp_per_1": 13428,
        "gdp_ppp_per_1": 22375,
        "imf_category": 1,
        "population": 43590400,
        "etc": "",
        "foramtdate": "20140313",
        "formatcustom": "4739008621233",
        "masknumber": 9815622333,
        "rating": "1.4"
      }, {
        "nation_flag": "/images/g20/za.png",
        "isG7": "N",
        "isG20": "Y",
        "nation": "남아프리카 공화국",
        "gdp": 317,
        "gdp_ppp": 724,
        "gdp_per_1": 5783,
        "gdp_ppp_per_1": 13197,
        "imf_category": 1,
        "population": 55653654,
        "etc": "BRICS",
        "foramtdate": "20170316",
        "formatcustom": "4522848060309",
        "masknumber": 9954522932,
        "rating": "0.9"
      }, {
        "nation_flag": "/images/g20/eu.png",
        "isG7": "N",
        "isG20": "Y",
        "nation": "유럽연합",
        "gdp": 16265,
        "gdp_ppp": 19176,
        "gdp_per_1": 32006,
        "gdp_ppp_per_1": 37801,
        "imf_category": 2,
        "population": 510056111,
        "etc": "국가연합",
        "foramtdate": "20120320",
        "formatcustom": "5195758713064",
        "masknumber": 9224983097,
        "rating": "4"
      }],
      combo_data = [{
        "label": "선진국",
        "value": 0
      }, {
        "label": "개발도상국",
        "value": 1
      }, {
        "label": "기타",
        "value": 2
      }];
    var QCELLProp = {
      id: "qcell1",
      parentid: "sheetarea4",
      columns: [{
        width: "5%",
        type: "checkbox",
        title: ["radio"],
        key: "chk",
        options: {
          likeradio: true
        }
      }, {
        width: "5%",
        type: "image",
        title: ["image"],
        key: "nation_flag",
        options: {
          imagestyle: {
            "cursor": "pointer"
          },
          imagewidth: "67",
          imageheight: "38",
          imageclick: imageclick
        }
      }, {
        width: "7%",
        type: "input",
        title: ["input"],
        key: "nation"
      }, {
        width: "5%",
        type: "checkbox",
        title: ["check\nbox"],
        key: "isG20",
        options: {
          checkedvalue: "Y",
          uncheckedvalue: "N"
        }
      }, {
        width: "5%",
        type: "checkbox",
        title: [""],
        key: "isG7",
        options: {
          checkedvalue: "Y",
          uncheckedvalue: "N",
          wholeselect: true
        }
      }, {
        width: "5%",
        type: "input",
        title: ["input"],
        key: "rating",
        options: {
          format: {
            type: "number",
            rule: "0.0"
          }
        },
        styleclassname: {
          data: "align-right"
        }
      }, {
        width: "10%",
        type: "html",
        title: ["html"],
        key: "rating",
        options: {
          html: {
            data: fnRenderer
          }
        }
      }, {
        width: "10%",
        type: "input",
        title: ["masknumber"],
        key: "masknumber",
        options: {
          mask: {
            alias: '999-999-9999'
          }
        },
        styleclassname: {
          data: "align-center"
        }
      }, {
        width: "8%",
        type: "input",
        title: ["formatnumber"],
        key: "gdp_per_1",
        options: {
          format: {
            type: "number",
            rule: "$ #,###"
          }
        },
        styleclassname: {
          data: "align-right"
        }
      }, {
        width: "10%",
        type: "input",
        title: ["foramtdate"],
        key: "foramtdate",
        options: {
          format: {
            type: "date",
            origin: "YYYYMMDD",
            rule: "YYYY-MM-DD"
          }
        },
        styleclassname: {
          data: "align-center"
        }
      }, {
        width: "10%",
        type: "input",
        title: ["formatcustom"],
        key: "formatcustom",
        options: {
          format: {
            type: "custom",
            callback: customIden
          }
        },
        styleclassname: {
          data: "align-center"
        }
      }, {
        width: "10%",
        type: "selectmenu",
        title: ["selectmenu"],
        key: "imf_category",
        options: {
          input: combo_data
        }
      }, {
        width: "10%",
        type: "textarea",
        title: ["textarea"],
        key: "etc"
      }],
      data: {
        "input": data
      },
      rowheader: "sequence"
    };
    setTimeout(function () {
      QCELL.create(QCELLProp);

      //qcell = QCELL.getInstance("qcell");  
    });
  }
});
// CONCATENATED MODULE: ./components/C04Columntype.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_C04Columntypevue_type_script_lang_js_ = (C04Columntypevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/C04Columntype.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_C04Columntypevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2a9f2c6c"
  
)

/* harmony default export */ var C04Columntype = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=c04-columntype.js.map