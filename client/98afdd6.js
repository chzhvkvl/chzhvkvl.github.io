(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5],{267:function(t,e,n){"use strict";n.r(e);n(193),n(77);var r={mounted:function(){function t(t,e){var n=t-Number(e);return 0==n?"":1==Math.round(n)?"H":""}var e={id:"qcell1",parentid:"sheetarea4",columns:[{width:"5%",type:"checkbox",title:["radio"],key:"chk",options:{likeradio:!0}},{width:"5%",type:"image",title:["image"],key:"nation_flag",options:{imagestyle:{cursor:"pointer"},imagewidth:"67",imageheight:"38",imageclick:function(){alert("imageclick")}}},{width:"7%",type:"input",title:["input"],key:"nation"},{width:"5%",type:"checkbox",title:["check\nbox"],key:"isG20",options:{checkedvalue:"Y",uncheckedvalue:"N"}},{width:"5%",type:"checkbox",title:[""],key:"isG7",options:{checkedvalue:"Y",uncheckedvalue:"N",wholeselect:!0}},{width:"5%",type:"input",title:["input"],key:"rating",options:{format:{type:"number",rule:"0.0"}},styleclassname:{data:"align-right"}},{width:"10%",type:"html",title:["html"],key:"rating",options:{html:{data:function(e,n,col,r,o){var m,l;switch(Math.floor(r)){case 1:l=t(r,m="1");break;case 2:l=t(r,m="2");break;case 3:l=t(r,m="3");break;case 4:l=t(r,m="4");break;case 5:l=t(r,m="5");break;default:l=t(r,m="0")}var c='<img src="/images/rating/star_'+m+l+'.png">';return(0===r||"0"===m&&""===l)&&(c=""),c}}}},{width:"10%",type:"input",title:["masknumber"],key:"masknumber",options:{mask:{alias:"999-999-9999"}},styleclassname:{data:"align-center"}},{width:"8%",type:"input",title:["formatnumber"],key:"gdp_per_1",options:{format:{type:"number",rule:"$ #,###"}},styleclassname:{data:"align-right"}},{width:"10%",type:"input",title:["foramtdate"],key:"foramtdate",options:{format:{type:"date",origin:"YYYYMMDD",rule:"YYYY-MM-DD"}},styleclassname:{data:"align-center"}},{width:"10%",type:"input",title:["formatcustom"],key:"formatcustom",options:{format:{type:"custom",callback:function(data){return data.substr(0,6)+"-"+data.substr(6,1)+"XXXXXX"}}},styleclassname:{data:"align-center"}},{width:"10%",type:"selectmenu",title:["selectmenu"],key:"imf_category",options:{input:[{label:"선진국",value:0},{label:"개발도상국",value:1},{label:"기타",value:2}]}},{width:"10%",type:"textarea",title:["textarea"],key:"etc"}],data:{input:[{nation_flag:"/images/g20/us.png",isG7:"Y",isG20:"Y",nation:"미국",gdp:17968,gdp_ppp:17968,gdp_per_1:55904,gdp_ppp_per_1:55904,imf_category:0,population:323969e3,etc:"P5, G7, OECD, DAC",foramtdate:"20151006",formatcustom:"7303947649348",masknumber:9435483334,rating:"5"},{nation_flag:"/images/g20/cn.png",isG7:"N",isG20:"Y",nation:"중국",gdp:11384,gdp_ppp:19509,gdp_per_1:8280,gdp_ppp_per_1:14189,imf_category:1,population:1377469164,etc:"P5, BRICS",foramtdate:"20170417",formatcustom:"1875148804137",masknumber:8954222818,rating:"4.5"},{nation_flag:"/images/g20/jp.png",isG7:"Y",isG20:"Y",nation:"일본",gdp:4116,gdp_ppp:4842,gdp_per_1:32480,gdp_ppp_per_1:38210,imf_category:0,population:12696e4,etc:"G7, OECD, DAC",foramtdate:"20170920",formatcustom:"2219485831380",masknumber:9834343920,rating:"3.6"},{nation_flag:"/images/g20/de.png",isG7:"Y",isG20:"Y",nation:"독일",gdp:3371,gdp_ppp:3842,gdp_per_1:41267,gdp_ppp_per_1:47033,imf_category:0,population:81770900,etc:"G7, OECD, DAC, EU",foramtdate:"20150622",formatcustom:"9097476549049",masknumber:8164193071,rating:"4.2"},{nation_flag:"/images/g20/uk.png",isG7:"Y",isG20:"Y",nation:"영국",gdp:2864,gdp_ppp:2659,gdp_per_1:44117,gdp_ppp_per_1:40958,imf_category:0,population:6511e4,etc:"P5, G7, OECD, DAC, EU",foramtdate:"20111204",formatcustom:"1642757995389",masknumber:9744822552,rating:"3.6"},{nation_flag:"/images/g20/fr.png",isG7:"Y",isG20:"Y",nation:"프랑스",gdp:2422,gdp_ppp:2646,gdp_per_1:37728,gdp_ppp_per_1:41221,imf_category:0,population:6671e4,etc:"P5, G7, OECD, DAC, EU",foramtdate:"20100520",formatcustom:"8241836576614",masknumber:9865223006,rating:"3.3"},{nation_flag:"/images/g20/in.png",isG7:"N",isG20:"Y",nation:"인도",gdp:2182,gdp_ppp:8027,gdp_per_1:1688,gdp_ppp_per_1:6209,imf_category:1,population:1291875497,etc:"BRICS",foramtdate:"20160229",formatcustom:"2450177860521",masknumber:9984453531,rating:"1.8"},{nation_flag:"/images/g20/it.png",isG7:"Y",isG20:"Y",nation:"이탈리아",gdp:1819,gdp_ppp:2173,gdp_per_1:29847,gdp_ppp_per_1:35664,imf_category:0,population:60665551,etc:"G7, OECD, DAC, EU",foramtdate:"20100731",formatcustom:"6739195833120",masknumber:9454192760,rating:"3.2"},{nation_flag:"/images/g20/br.png",isG7:"N",isG20:"Y",nation:"브라질",gdp:1799,gdp_ppp:3207,gdp_per_1:8802,gdp_ppp_per_1:15690,imf_category:1,population:206149411,etc:"BRICS",foramtdate:"20120817",formatcustom:"7228167910057",masknumber:8464313349,rating:"1.1"},{nation_flag:"/images/g20/ca.png",isG7:"Y",isG20:"Y",nation:"캐나다",gdp:1572,gdp_ppp:1628,gdp_per_1:43934,gdp_ppp_per_1:45488,imf_category:0,population:36155487,etc:"G7, OECD, DAC",foramtdate:"20141208",formatcustom:"6209183905933",masknumber:9115782459,rating:"2.9"},{nation_flag:"/images/g20/kr.png",isG7:"N",isG20:"Y",nation:"한국",gdp:1392,gdp_ppp:1849,gdp_per_1:27512,gdp_ppp_per_1:36528,imf_category:0,population:50801405,etc:"OECD, DAC, MIKTA",foramtdate:"20170908",formatcustom:"7690412571287",masknumber:8275232603,rating:"2.4"},{nation_flag:"/images/g20/au.png",isG7:"N",isG20:"Y",nation:"호주",gdp:1240,gdp_ppp:1136,gdp_per_1:51641,gdp_ppp_per_1:47317,imf_category:0,population:24119805,etc:"OECD, DAC, MIKTA",foramtdate:"20100131",formatcustom:"3039858902938",masknumber:9814783135,rating:"3.1"},{nation_flag:"/images/g20/ru.png",isG7:"N",isG20:"Y",nation:"러시아",gdp:1235,gdp_ppp:3473,gdp_per_1:8447,gdp_ppp_per_1:23744,imf_category:1,population:146599183,etc:"P5, BRICS",foramtdate:"20150613",formatcustom:"5146355292449",masknumber:8275232603,rating:"1.1"},{nation_flag:"/images/g20/mx.png",isG7:"N",isG20:"Y",nation:"멕시코",gdp:1161,gdp_ppp:2220,gdp_per_1:9592,gdp_ppp_per_1:18334,imf_category:1,population:122273473,etc:"OECD, MIKTA",foramtdate:"20150625",formatcustom:"6641307071125",masknumber:8264763819,rating:"0.2"},{nation_flag:"/images/g20/id.png",isG7:"N",isG20:"Y",nation:"인도네시아",gdp:872,gdp_ppp:3415,gdp_per_1:2838,gdp_ppp_per_1:11111,imf_category:1,population:258705e3,etc:"MIKTA",foramtdate:"20131201",formatcustom:"8647354827200",masknumber:9274582337,rating:"0.7"},{nation_flag:"/images/g20/tr.png",isG7:"N",isG20:"Y",nation:"터키",gdp:722,gdp_ppp:1576,gdp_per_1:9290,gdp_ppp_per_1:20276,imf_category:1,population:78741053,etc:"OECD, MIKTA",foramtdate:"20151001",formatcustom:"6533723679213",masknumber:8565822952,rating:"2.7"},{nation_flag:"/images/g20/sa.png",isG7:"N",isG20:"Y",nation:"사우디아라비아",gdp:632,gdp_ppp:1681,gdp_per_1:20138,gdp_ppp_per_1:53564,imf_category:1,population:32248200,etc:"OPEC",foramtdate:"20110921",formatcustom:"9022872203371",masknumber:9655283607,rating:"3.8"},{nation_flag:"/images/g20/ar.png",isG7:"N",isG20:"Y",nation:"아르헨티나",gdp:578,gdp_ppp:964,gdp_per_1:13428,gdp_ppp_per_1:22375,imf_category:1,population:43590400,etc:"",foramtdate:"20140313",formatcustom:"4739008621233",masknumber:9815622333,rating:"1.4"},{nation_flag:"/images/g20/za.png",isG7:"N",isG20:"Y",nation:"남아프리카 공화국",gdp:317,gdp_ppp:724,gdp_per_1:5783,gdp_ppp_per_1:13197,imf_category:1,population:55653654,etc:"BRICS",foramtdate:"20170316",formatcustom:"4522848060309",masknumber:9954522932,rating:"0.9"},{nation_flag:"/images/g20/eu.png",isG7:"N",isG20:"Y",nation:"유럽연합",gdp:16265,gdp_ppp:19176,gdp_per_1:32006,gdp_ppp_per_1:37801,imf_category:2,population:510056111,etc:"국가연합",foramtdate:"20120320",formatcustom:"5195758713064",masknumber:9224983097,rating:"4"}]},rowheader:"sequence"};setTimeout((function(){QCELL.create(e)}))}},o=n(42),component=Object(o.a)(r,(function(){return(0,this._self._c)("div",{staticStyle:{width:"100%",height:"600px"},attrs:{id:"sheetarea4"}})}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,n){"use strict";n.r(e);var r={name:"p04columntype"},o=n(42),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content",attrs:{role:"main"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-md-4",attrs:{role:"main"}},[e("br"),e("br"),t._v(" "),e("div",{attrs:{id:"div1"}},[e("p",[t._v(' QCELL에서 지원하는 여러 타입들을 활용하는 예제입니다.\n              ① 출력만을 지원하는 "static", ② 일반적인 입력형태인 "input", ③ 장문의 입력형태의 "textarea", ④ checkbox와 radio 기능을 지원하는 "checkbox", ⑤ combo를 지원하는 "selectmenu", ⑥ cell안에 html tag의 사용을 지원하는 "html", ⑦ image를 지원하는 "image"를 통해 사용자가 원하는 형태로의 데이터 표현이 가능합니다.\n          ')]),t._v(" "),e("br"),t._v(" "),e("C04Columntype")],1)])])])])}),[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse",attrs:{id:"sidebarMenu"}},[e("div",{staticClass:"sidebar-sticky pt-3"},[e("ul",{staticClass:"nav flex-column"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",staticStyle:{cursor:"pointer"},attrs:{id:"a001",href:"/"}},[e("span",{attrs:{"data-feather":"home"}}),t._v("\n\t\t\t\t\t\t\tFirst QCELL\n\t\t\t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",staticStyle:{cursor:"pointer"},attrs:{id:"a002",href:"/p01stringformat"}},[e("span",{attrs:{"data-feather":"file"}}),t._v("\n\t\t\t\t\t\t\tString Format\n\t\t\t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",staticStyle:{cursor:"pointer"},attrs:{id:"a003",href:"/p02numberformat"}},[e("span",{attrs:{"data-feather":"shopping-cart"}}),t._v("\n\t\t\t\t\t\t\tNumber Format\n\t\t\t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",staticStyle:{cursor:"pointer"},attrs:{id:"a004",href:"/p03dateformat"}},[e("span",{attrs:{"data-feather":"users"}}),t._v("\n\t\t\t\t\t\t\tDate Format\n\t\t\t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",staticStyle:{cursor:"pointer"},attrs:{id:"a005",href:"/p04columntype"}},[e("span",{attrs:{"data-feather":"bar-chart-2"}}),t._v("\n\t\t\t\t\t\t\tColumn Type\n\t\t\t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",staticStyle:{cursor:"pointer"},attrs:{id:"a006",href:"/p05masterdetail"}},[e("span",{attrs:{"data-feather":"bar-chart-2"}}),t._v("\n\t\t\t\t\t\t\tMaster Detail\n\t\t\t\t\t\t")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{C04Columntype:n(267).default})}}]);