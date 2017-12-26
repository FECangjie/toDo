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
      let tags = this.$store.state.Me.tags
      tags.forEach((o, i) => {
        o.tags.sort((a, b) => {
          return b.count - a.count // 简单排序
        })
      })
      return tags
    },
    getLoading () {
      return this.$store.state.Me.loading
    }
  },
  watch: {
  },
  methods: {
      // i Tags[]下标   j  Tags[i].tags[]下标
     mouseover(e){
      e.target.style.boxShadow="5px 5px 5px rgb(170, 170, 170)";
     },
     mouseout(e){
      e.target.style.boxShadow = "";
     },
     tagsClick(item, index){
       this.$store.dispatch('get_Me_Info_Tags', {id: item.id, index: index})
     },
     getType(count) {
       if (count < 10) {
         return "#99CCFF"
       } else if (count < 25) {
         return "#9999FF"
       } else if (count < 50) {
         return "#0099CC"
       } else if (count < 100) {
         return "#9933CC"
       } else if (count < 200) {
         return "#CC3333"
       } else {
         return "#990000"
       }
       return "#eee"
     }
   },
  created () {
    this.$store.dispatch('get_Me_Info_Tags', {})
  },
  mounted() {
  },
  template: tpl
})
