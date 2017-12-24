/**
 * 
 * pictureHouse [{picturePath:'', title:''}]
 *                 图片路径          图片标题
 * 图片宽度650px
 */


import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'

export default Vue.component('WorkPage', {
  data () {
    return {

      pictureHouse:[
        {picturePath:'src/assets/img/work/1.png',title:'LINK HR人事管理系统'},
        {picturePath:'src/assets/img/work/2.png',title:'LINK 客源带看系统'},
        {picturePath:'src/assets/img/work/3.png',title:'经纪人展位报买平台'},
        {picturePath:'src/assets/img/work/4.png',title:'LINK 客源商机H5应用'},
      ],
      pictureHouse1:[],
      pictureHouse2:[],
      pictureHouse3:[],
      pictureHouse4:[],

      showTooltip:false,
      tooltipPath:'',
      tooltipX:'',
      tooltipY:'',
    }
  },
  methods: {
    func(){
      //将pictureHouse 的数据分成 四 份
      for (let picture of this.pictureHouse) {
        if (this.pictureHouse1.length > this.pictureHouse2.length ) {
          this.pictureHouse2.push(picture);
        } else {
          this.pictureHouse1.push(picture);
        }
      }
      
    },
    mouseoverPicture(param){
      let e = window.event;
      this.showTooltip = true;
      this.tooltipPath = param.path[0].src;
      this.tooltipX=e.clientX+20+'px';
      this.tooltipY = e.clientY + 20 + 'px';
    },
    mouseoutPicture(param){
      this.showTooltip = false;
    }
  },

  created () {
    this.func();
  },

  template: tpl
})
