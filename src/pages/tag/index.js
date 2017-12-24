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
        Tags:[
            {   
                title:'生活',
                tags:[
                    {name:'弱智',count:1},
                    {name:'土豪',count:11},
                    {name:'挂逼',count:1111},
                    {name:'弱智',count:1},
                    {name:'弱智',count:1},
                    {name:'土豪',count:11},
                    {name:'挂逼',count:1111},
                    {name:'弱智',count:1},{name:'弱智',count:1},
                    {name:'土豪',count:11},
                    {name:'挂逼',count:1111},
                    {name:'弱智',count:1},
                    ]
            },

            {
                title:'游戏',
                tags:[
                    {name:'弱智',count:1},
                    {name:'土豪',count:11},
                    {name:'挂逼',count:111111112},
                    {name:'脑残',count:134}]
            },

            {
                title:'技术',
                tags:[
                    {name:'弱智',count:1},
                    {name:'土豪',count:11},
                    {name:'挂逼',count:111111112},
                    {name:'脑残',count:134}]
            },

            {
                title:'音乐',
                tags:[
                    {name:'弱智',count:1},
                    {name:'土豪',count:11},
                    {name:'挂逼',count:111111112},
                    {name:'脑残',count:134}]
            }

        ],
        tagsShadow:'',
    }
  },
  methods: {
      // i Tags[]下标   j  Tags[i].tags[]下标
     mouseover(i,j){
        
         let count = j;
         while (i) {
            count += this.Tags[i-1].tags.length;
            i -- ;
         }
         
        this.$refs.tagsItem[count].style.boxShadow="5px 5px 5px rgb(170, 170, 170)";
       
        
     },
     mouseout(i,j){
        let count = j;
        while (i ) {
           count += this.Tags[i-1].tags.length;
           i -- ;
        }
        this.$refs.tagsItem[count].style.boxShadow="";
     },
     tagsClick(item){
        console.log(item);
        item.count++;
     }
   },

  mounted() {

  },
  created () {

  },

  template: tpl
})
