(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[11],{QcnN:function(e,t,s){"use strict";s.r(t);var n=s("oCYn"),i=s("XJYT");n.default.use(i.Card),n.default.use(i.Step),n.default.use(i.Steps);var r={name:"ResetPasswordDone",data:()=>({}),created(){setTimeout(()=>this.$router.push({path:"/signin"}),5e3)}},o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"resetPasswordDone"}},[s("el-steps",{attrs:{active:3}},[s("el-step",{attrs:{title:e.$t("reset.steps.title.1"),description:e.$t("reset.steps.description.1")}}),e._v(" "),s("el-step",{attrs:{title:e.$t("reset.steps.title.2"),description:e.$t("reset.steps.description.2")}}),e._v(" "),s("el-step",{attrs:{title:e.$t("reset.steps.title.3"),description:e.$t("reset.steps.description.3")}})],1),e._v(" "),s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[s("font-awesome-icon",{attrs:{icon:"check-circle",size:"4x"}}),e._v(" "),s("h2",[e._v(e._s(e.$t("reset.PasswordDone.title")))])],1),e._v(" "),s("div",{staticClass:"content"},[e._v("\n      "+e._s(e.$t("reset.PasswordDone.description"))+"\n    ")])])],1)};o._withStripped=!0;var a=s("JFUb"),c=Object(a.a)(r,o,[],!1,function(e){s("g2ml")},"data-v-f82e79fc",null);c.options.__file="src/views/resetPasswordDone.vue",t.default=c.exports},eA7S:function(e,t,s){(e.exports=s("I1BE")(!0)).push([e.i,"\n#resetPasswordDone[data-v-f82e79fc] {\n  max-width: 50%;\n  margin: 0 auto;\n}\n.title[data-v-f82e79fc] {\n  width: 50%;\n  margin: 0 auto;\n  text-align: center;\n}\n.content[data-v-f82e79fc] {\n  font-size: 16px;\n}\n\n","",{version:3,sources:["/home/pool/IdeaProjects/arise/src/views/src/views/resetPasswordDone.vue"],names:[],mappings:";AAwDA;EACA,eAAA;EACA,eAAA;CACA;AACA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;CACA;AACA;EACA,gBAAA;CACA",file:"resetPasswordDone.vue",sourcesContent:['<template>\n  <div id="resetPasswordDone">\n    <el-steps\n      :active="3">\n      <el-step\n        :title="$t(\'reset.steps.title.1\')"\n        :description="$t(\'reset.steps.description.1\')"/>\n      <el-step\n        :title="$t(\'reset.steps.title.2\')"\n        :description="$t(\'reset.steps.description.2\')"/>\n      <el-step\n        :title="$t(\'reset.steps.title.3\')"\n        :description="$t(\'reset.steps.description.3\')"/>\n    </el-steps>\n    <el-card class="box-card">\n      <div\n        slot="header"\n        class="title">\n        <font-awesome-icon\n          icon="check-circle"\n          size="4x"/>\n        <h2>{{ $t("reset.PasswordDone.title") }}</h2>\n      </div>\n      <div class="content">\n        {{ $t("reset.PasswordDone.description") }}\n      </div>\n    </el-card>\n  </div>\n</template>\n\n<script>\n  import Vue from \'vue\'\n  import {\n    Card,\n    Step,\n    Steps\n  } from \'element-ui\'\n\n\n  Vue.use(Card);\n  Vue.use(Step);\n  Vue.use(Steps);\n\n  export default {\n    name: "ResetPasswordDone",\n\n    data() {\n      return {\n      }\n    },\n    created() {\n      setTimeout( () => this.$router.push({path: \'/signin\'}), 5000);\n    }\n  }\n<\/script>\n<style scoped>\n  #resetPasswordDone {\n    max-width: 50%;\n    margin: 0 auto;\n  }\n  .title {\n    width: 50%;\n    margin: 0 auto;\n    text-align: center;\n  }\n  .content {\n    font-size: 16px;\n  }\n\n  </style>'],sourceRoot:""}])},g2ml:function(e,t,s){var n=s("eA7S");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals),(0,s("SZ7m").default)("45b4b202",n,!1,{})}}]);
//# sourceMappingURL=[requests]7.js.map