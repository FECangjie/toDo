/**
 *
 * 没有加载效果 连续点击标签之后 会出现 选中文字效果（）
 *
 */

import Vue from 'vue'
import tpl from './tpl.vtpl'
import './style.less'

export default Vue.component('tag', {
  data () {
    return {
      tagsShadow:'',
    }
  },
  computed: {
    getTags () {
      return this.$store.state.Me.tags
    }
  },
  methods: {
      // i Tags[]下标   j  Tags[i].tags[]下标
     mouseover(e){
      e.target.style.boxShadow="5px 5px 5px rgb(170, 170, 170)";
     },
     mouseout(e){
        e.target.style.boxShadow = "";
     },
     tagsClick(item){
        item.count++;
     }
   },
  created () {
    this.$store.dispatch('get_Me_Info_Tags', {})
  },
  mounted() {
  },
  template: tpl
})