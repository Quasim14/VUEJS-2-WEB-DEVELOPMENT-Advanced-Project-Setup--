import Vue from 'vue'
import 'babel-polyfill'
import Test from './Test.vue'
// import Testpug from './Testpug.vue'


new Vue({
  el: '#app',
  ...Test,
  // ...Testpug,

})
