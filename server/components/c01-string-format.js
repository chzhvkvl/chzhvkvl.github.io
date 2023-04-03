exports.ids = [1];
exports.modules = {

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/C01StringFormat.vue?vue&type=template&id=4a4dd6e1&
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

// CONCATENATED MODULE: ./components/C01StringFormat.vue?vue&type=template&id=4a4dd6e1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/C01StringFormat.vue?vue&type=script&lang=js&
/* harmony default export */ var C01StringFormatvue_type_script_lang_js_ = ({
  mounted() {
    function fnCustomPhone(data) {
      var nData = '';
      if (data.startsWith("010")) {
        nData = data.substr(0, 3) + '-' + data.substr(3, 4) + '-' + data.substr(7, data.length);
      } else {
        if (data.legnth === 11) {
          nData = data.substr(0, 3) + '-' + data.substr(3, 4) + '-' + data.substr(7, data.length);
        } else {
          if (data.startsWith("02")) {
            nData = data.substr(0, 2);
            if (data.substr(2, data.length).length == 8) {
              nData += '-' + data.substr(2, 4) + '-' + data.substr(6, data.length);
            } else {
              nData += '-' + data.substr(2, 3) + '-' + data.substr(5, data.length);
            }
          } else {
            nData = data.substr(0, 3);
            if (data.substr(3, data.length).length == 8) {
              nData += '-' + data.substr(3, 4) + '-' + data.substr(7, data.length);
            } else {
              nData += '-' + data.substr(3, 3) + '-' + data.substr(6, data.length);
            }
          }
        }
      }
      return nData;
    }
    // var sampleData = [{"name":"Hello","message":"큐셀!","etc":"가장 간단한 큐셀 그리드입니다."}];  
    function fnCustomIdNum(data) {
      var nData = '';
      nData = data.substr(0, 6) + "-" + data.substr(6, 1) + "XXXXXX";
      return nData;
    }

    // 사업자 번호 자릿수에 맞춰 '-' 처리
    function fnCustomBuzNum(data) {
      var nData = '';
      nData = data.substr(0, 3) + "-" + data.substr(3, 2) + "-" + data.substr(5, data.length);
      return nData;
    }

    // 카드번호 뒷자리 8문자 'X' 처리
    function fnCustomCardNum(data) {
      var nData = '';
      nData = data.substr(0, 4) + "-" + data.substr(4, 4) + "-XXXX-XXXX";
      return nData;
    }

    // 구 우편번호 자릿수에 맞춰 '-' 처리
    function fnCustomZipNum(data) {
      var nData = '';
      nData = data.substr(0, 3) + "-" + data.substr(3, data.length);
      return nData;
    }
    var qcell1,
      data = [{
        "index": 0,
        "name": "전지현",
        "salary": "9,218",
        "phone": "0332915473",
        "id_num": "9412284432332",
        "buz_num": "5776336586",
        "card_num": "3300859548194977",
        "old_zipcode": "473850"
      }, {
        "index": 1,
        "name": "강남길",
        "salary": "8,781",
        "phone": "05312413205",
        "id_num": "8006097292336",
        "buz_num": "6707275085",
        "card_num": "3572622146441283",
        "old_zipcode": "644306"
      }, {
        "index": 2,
        "name": "고수",
        "salary": "7,904",
        "phone": "06317162077",
        "id_num": "9412048692074",
        "buz_num": "1511112056",
        "card_num": "1151618626344990",
        "old_zipcode": "600846"
      }, {
        "index": 3,
        "name": "한가인",
        "salary": "4,374",
        "phone": "06249616596",
        "id_num": "9006269861501",
        "buz_num": "3431011170",
        "card_num": "7657868466824703",
        "old_zipcode": "444747"
      }, {
        "index": 4,
        "name": "공유",
        "salary": "2,580",
        "phone": "05585154284",
        "id_num": "9006266362927",
        "buz_num": "3606286199",
        "card_num": "2891385910696542",
        "old_zipcode": "797982"
      }, {
        "index": 5,
        "name": "한효주",
        "salary": "8,008",
        "phone": "03381325732",
        "id_num": "7912164292122",
        "buz_num": "2081273834",
        "card_num": "5339637562096653",
        "old_zipcode": "154195"
      }, {
        "index": 6,
        "name": "김갑수",
        "salary": "7,519",
        "phone": "03220977021",
        "id_num": "8503077766476",
        "buz_num": "4491934984",
        "card_num": "4317429850652122",
        "old_zipcode": "707646"
      }, {
        "index": 7,
        "name": "한석규",
        "salary": "1,192",
        "phone": "0218994334",
        "id_num": "7311163284056",
        "buz_num": "9106644292",
        "card_num": "6448661096364653",
        "old_zipcode": "983943"
      }, {
        "index": 8,
        "name": "황정민",
        "salary": "4,711",
        "phone": "04436742976",
        "id_num": "7912128030880",
        "buz_num": "2224248802",
        "card_num": "5159739520724330",
        "old_zipcode": "162569"
      }, {
        "index": 9,
        "name": "송중기",
        "salary": "343",
        "phone": "05235976892",
        "id_num": "6606091887459",
        "buz_num": "8074290817",
        "card_num": "2404408186562783",
        "old_zipcode": "641656"
      }, {
        "index": 10,
        "name": "차인표",
        "salary": "5,806",
        "phone": "05438728349",
        "id_num": "7906012873181",
        "buz_num": "2878681044",
        "card_num": "4716781396457572",
        "old_zipcode": "946888"
      }, {
        "index": 11,
        "name": "김태희",
        "salary": "9,708",
        "phone": "05487459998",
        "id_num": "7311071204729",
        "buz_num": "5016555109",
        "card_num": "2648239672061404",
        "old_zipcode": "144478"
      }, {
        "index": 12,
        "name": "김진수",
        "salary": "9,033",
        "phone": "06345509643",
        "id_num": "8310053484800",
        "buz_num": "5121874916",
        "card_num": "5167959669925196",
        "old_zipcode": "787190"
      }, {
        "index": 13,
        "name": "최민수",
        "salary": "1,979",
        "phone": "0251064302",
        "id_num": "7105147589999",
        "buz_num": "7287472802",
        "card_num": "2541498758131567",
        "old_zipcode": "177755"
      }, {
        "index": 14,
        "name": "김하늘",
        "salary": "4,159",
        "phone": "04439544981",
        "id_num": "6812233406178",
        "buz_num": "2626928862",
        "card_num": "8806589130361983",
        "old_zipcode": "999448"
      }, {
        "index": 15,
        "name": "차태원",
        "salary": "5,156",
        "phone": "05593998944",
        "id_num": "7510221851115",
        "buz_num": "2624337137",
        "card_num": "2217491140165384",
        "old_zipcode": "988887"
      }, {
        "index": 16,
        "name": "남궁민",
        "salary": "2,975",
        "phone": "029599821",
        "id_num": "7007157368430",
        "buz_num": "2035133574",
        "card_num": "8419449898982989",
        "old_zipcode": "888682"
      }, {
        "index": 17,
        "name": "이서진",
        "salary": "6,022",
        "phone": "01097037125",
        "id_num": "6805039303173",
        "buz_num": "4852920311",
        "card_num": "3024677223009275",
        "old_zipcode": "821270"
      }, {
        "index": 18,
        "name": "마동석",
        "salary": "545",
        "phone": "0617932331",
        "id_num": "6807188884788",
        "buz_num": "4495445155",
        "card_num": "1957679177743531",
        "old_zipcode": "940465"
      }, {
        "index": 19,
        "name": "송혜교",
        "salary": "9,015",
        "phone": "05211028936",
        "id_num": "8809165724173",
        "buz_num": "295299151",
        "card_num": "9173806264561051",
        "old_zipcode": "357625"
      }, {
        "index": 20,
        "name": "최민식",
        "salary": "5,919",
        "phone": "06318285966",
        "id_num": "9506016944464",
        "buz_num": "6931447147",
        "card_num": "8717172151257546",
        "old_zipcode": "192250"
      }, {
        "index": 21,
        "name": "박보검",
        "salary": "4,533",
        "phone": "05571725112",
        "id_num": "8704158467188",
        "buz_num": "880973186",
        "card_num": "2589602660387844",
        "old_zipcode": "114711"
      }, {
        "index": 22,
        "name": "봉태규",
        "salary": "2,272",
        "phone": "03222456640",
        "id_num": "7810303445927",
        "buz_num": "9433665371",
        "card_num": "2728366129578920",
        "old_zipcode": "450924"
      }, {
        "index": 23,
        "name": "설경규",
        "salary": "2,712",
        "phone": "06416305347",
        "id_num": "6808194071164",
        "buz_num": "9418158265",
        "card_num": "8529712182588800",
        "old_zipcode": "728965"
      }, {
        "index": 24,
        "name": "송일국",
        "salary": "6,370",
        "phone": "05180348258",
        "id_num": "9607101248836",
        "buz_num": "1832863175",
        "card_num": "9495401475307526",
        "old_zipcode": "228665"
      }, {
        "index": 25,
        "name": "안내상",
        "salary": "2,995",
        "phone": "05227962474",
        "id_num": "7004272305180",
        "buz_num": "7487040994",
        "card_num": "8195284841994367",
        "old_zipcode": "726515"
      }, {
        "index": 26,
        "name": "심형탁",
        "salary": "7,487",
        "phone": "06476446196",
        "id_num": "6201083501092",
        "buz_num": "9514375647",
        "card_num": "1827212151298430",
        "old_zipcode": "106236"
      }, {
        "index": 27,
        "name": "양동근",
        "salary": "7,309",
        "phone": "04370482522",
        "id_num": "9103219251578",
        "buz_num": "674995270",
        "card_num": "7019307388216762",
        "old_zipcode": "972507"
      }, {
        "index": 28,
        "name": "안성기",
        "salary": "3,052",
        "phone": "04269942583",
        "id_num": "6712037946392",
        "buz_num": "4146975691",
        "card_num": "3255150778976983",
        "old_zipcode": "464979"
      }, {
        "index": 29,
        "name": "안재욱",
        "salary": "8,426",
        "phone": "04167566546",
        "id_num": "6608282907668",
        "buz_num": "344721346",
        "card_num": "8618530326324140",
        "old_zipcode": "924281"
      }, {
        "index": 30,
        "name": "엄태웅",
        "salary": "2,194",
        "phone": "05294606817",
        "id_num": "8501181748632",
        "buz_num": "662947548",
        "card_num": "3930858950906050",
        "old_zipcode": "990774"
      }, {
        "index": 31,
        "name": "배수지",
        "salary": "4,991",
        "phone": "03114714300",
        "id_num": "7802228245730",
        "buz_num": "8932039477",
        "card_num": "5554121837678785",
        "old_zipcode": "250356"
      }, {
        "index": 32,
        "name": "엄정화",
        "salary": "2,775",
        "phone": "01079783044",
        "id_num": "8501166747501",
        "buz_num": "6984555984",
        "card_num": "9055863139476695",
        "old_zipcode": "924905"
      }, {
        "index": 33,
        "name": "연정훈",
        "salary": "6,676",
        "phone": "0422098320",
        "id_num": "8805137376823",
        "buz_num": "4447734424",
        "card_num": "5331531293195014",
        "old_zipcode": "705789"
      }, {
        "index": 34,
        "name": "이순재",
        "salary": "7,504",
        "phone": "03185329908",
        "id_num": "7002277035791",
        "buz_num": "5864882903",
        "card_num": "9221517047255545",
        "old_zipcode": "664379"
      }, {
        "index": 35,
        "name": "임창정",
        "salary": "8,509",
        "phone": "01084841098",
        "id_num": "9907107985832",
        "buz_num": "3467732578",
        "card_num": "1952760812993876",
        "old_zipcode": "224119"
      }, {
        "index": 36,
        "name": "김보성",
        "salary": "4,586",
        "phone": "05235314266",
        "id_num": "8503067465783",
        "buz_num": "29930113",
        "card_num": "4935329992086865",
        "old_zipcode": "838871"
      }, {
        "index": 37,
        "name": "장혁",
        "salary": "9,655",
        "phone": "03345558811",
        "id_num": "6707253482337",
        "buz_num": "66096486",
        "card_num": "1232307397162165",
        "old_zipcode": "579755"
      }, {
        "index": 38,
        "name": "장동건",
        "salary": "628",
        "phone": "04196608582",
        "id_num": "9205275395858",
        "buz_num": "353227412",
        "card_num": "8152404165102621",
        "old_zipcode": "717739"
      }, {
        "index": 39,
        "name": "정우성",
        "salary": "8,960",
        "phone": "03169542001",
        "id_num": "6303132076383",
        "buz_num": "3037861491",
        "card_num": "3366730523974524",
        "old_zipcode": "947179"
      }, {
        "index": 40,
        "name": "이서진",
        "salary": "730",
        "phone": "05585581978",
        "id_num": "6504178504262",
        "buz_num": "3473958597",
        "card_num": "3007507524408858",
        "old_zipcode": "514396"
      }, {
        "index": 41,
        "name": "류승범",
        "salary": "5,647",
        "phone": "06175687453",
        "id_num": "7601116270097",
        "buz_num": "4912978155",
        "card_num": "2425719480931013",
        "old_zipcode": "442456"
      }, {
        "index": 42,
        "name": "류승룡",
        "salary": "6,841",
        "phone": "03321485312",
        "id_num": "8005182583523",
        "buz_num": "8084138691",
        "card_num": "9735581913243600",
        "old_zipcode": "983265"
      }, {
        "index": 43,
        "name": "김민종",
        "salary": "6,717",
        "phone": "0514371367",
        "id_num": "6106234065467",
        "buz_num": "3355095065",
        "card_num": "4803760669439818",
        "old_zipcode": "370366"
      }, {
        "index": 44,
        "name": "김상중",
        "salary": "6,295",
        "phone": "05532677775",
        "id_num": "9403259892089",
        "buz_num": "351854892",
        "card_num": "4881198329821146",
        "old_zipcode": "860757"
      }, {
        "index": 45,
        "name": "김래원",
        "salary": "9,464",
        "phone": "04160758245",
        "id_num": "8506085692216",
        "buz_num": "411648352",
        "card_num": "4460442582943062",
        "old_zipcode": "642688"
      }, {
        "index": 46,
        "name": "권오중",
        "salary": "5,952",
        "phone": "05125373195",
        "id_num": "6205125876376",
        "buz_num": "1211471543",
        "card_num": "9751324578603454",
        "old_zipcode": "270923"
      }, {
        "index": 47,
        "name": "권상우",
        "salary": "5,485",
        "phone": "0642044358",
        "id_num": "7902288621888",
        "buz_num": "2079882591",
        "card_num": "2557832541415374",
        "old_zipcode": "629849"
      }, {
        "index": 48,
        "name": "김광규",
        "salary": "1,332",
        "phone": "06116366243",
        "id_num": "8102027761221",
        "buz_num": "5203726058",
        "card_num": "6206858298014010",
        "old_zipcode": "580623"
      }, {
        "index": 49,
        "name": "김혜자",
        "salary": "8,533",
        "phone": "04297263839",
        "id_num": "9803177550938",
        "buz_num": "4833957162",
        "card_num": "2155914013671953",
        "old_zipcode": "749665"
      }];
    var QCELLProp = {
      id: "qcell1",
      parentid: "sheetarea",
      columns: [{
        type: "input",
        title: ["이름"],
        key: "name",
        width: "7%",
        styleclassname: {
          data: "align-center"
        },
        options: {
          format: {
            type: "string",
            rule: "@ 님"
          }
        }
      }, {
        type: "input",
        title: ["연봉"],
        key: "salary",
        width: "10%",
        styleclassname: {
          data: "align-center"
        },
        options: {
          format: {
            type: "string",
            rule: "@ 만원"
          }
        }
      }, {
        type: "input",
        title: ["연락처"],
        key: "phone",
        width: "13%",
        styleclassname: {
          data: "align-center"
        },
        options: {
          format: {
            type: "custom",
            callback: fnCustomPhone
          }
        }
      }, {
        type: "input",
        title: ["주민번호"],
        key: "id_num",
        width: "20%",
        styleclassname: {
          data: "align-center"
        },
        options: {
          format: {
            type: "custom",
            callback: fnCustomIdNum
          }
        }
      }, {
        type: "input",
        title: ["사업자번호"],
        key: "buz_num",
        width: "20%",
        styleclassname: {
          data: "align-center"
        },
        options: {
          format: {
            type: "custom",
            callback: fnCustomBuzNum
          }
        }
      }, {
        type: "input",
        title: ["신용카드번호"],
        key: "card_num",
        width: "20%",
        styleclassname: {
          data: "align-center"
        },
        options: {
          format: {
            type: "custom",
            callback: fnCustomCardNum
          }
        }
      }, {
        type: "input",
        title: ["구 우편번호"],
        key: "old_zipcode",
        width: "10%",
        styleclassname: {
          data: "align-center"
        },
        options: {
          format: {
            type: "custom",
            callback: fnCustomZipNum
          }
        }
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
// CONCATENATED MODULE: ./components/C01StringFormat.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_C01StringFormatvue_type_script_lang_js_ = (C01StringFormatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/C01StringFormat.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_C01StringFormatvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "184ed141"
  
)

/* harmony default export */ var C01StringFormat = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=c01-string-format.js.map