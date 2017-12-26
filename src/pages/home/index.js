import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'
import { router } from 'router'
import RainyDay from 'common/rainday.js'

export default Vue.component('home', {
  data () {
    return {
      name: '神秘x号访客',
      currentDate: moment(new Date()).format('YYYY-MM-DD'),
      btuText: '进入',
      loading: false
    }
  },
  computed: {
    getInfo() {
      return this.$store.state.Me.login.count
    }
  },

  methods: {
    goPath () {
      router.push('/home')
    },
    run() {
      // debugger
      var image = document.getElementById('background');
      image.onload = function() {
          var engine = new RainyDay({
              image: this
          });
          engine.rain([ [0, 1, 10], [3, 3, 0.3] ], 50);
      };
      image.crossOrigin = 'anonymous';
      image.src = 'src/assets/img/bg.jpg';
    }
  },
  mounted() {
    let me = this
    this.run();
  },
  beforeUpdate: function () {
  },
  updated: function () {
  },
  created () {
    this.$store.dispatch('set_Login', {})
  },
  template: tpl
})
