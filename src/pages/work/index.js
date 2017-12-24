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
        {picturePath:'src/assets/img/pictureHouse/tuyue.jpg',title:'p1'},
        {picturePath:'src/assets/img/pictureHouse/gg.jpg',title:'p2'},
        {picturePath:'src/assets/img/pictureHouse/jz.jpg',title:'p13'},
        {picturePath:'src/assets/img/pictureHouse/kipor.jpg',title:'p8'},
        {picturePath:'src/assets/img/pictureHouse/qg.jpg',title:'p7'},
        {picturePath:'src/assets/img/pictureHouse/smsg.jpg',title:'p6'},
        {picturePath:'src/assets/img/pictureHouse/tcx.jpg',title:'p5'},
        {picturePath:'src/assets/img/pictureHouse/tuyue.jpg',title:'p4'},
        {picturePath:'src/assets/img/pictureHouse/tcx.jpg',title:'p15'},
        {picturePath:'src/assets/img/pictureHouse/sszx.jpg',title:'p18'},
        {picturePath:'src/assets/img/pictureHouse/sy.jpg',title:'p17'},
        {picturePath:'src/assets/img/pictureHouse/nioix.jpg',title:'p19'},
        {picturePath:'src/assets/img/pictureHouse/onlly.jpg',title:'p10'},
        {picturePath:'src/assets/img/pictureHouse/tuyue.jpg',title:'p13'},
        {picturePath:'src/assets/img/pictureHouse/gg.jpg',title:'p12'},
        {picturePath:'src/assets/img/pictureHouse/jz.jpg',title:'p11'},
        {picturePath:'src/assets/img/pictureHouse/kipor.jpg',title:'p31'},
        {picturePath:'src/assets/img/pictureHouse/qg.jpg',title:'p11'},
        {picturePath:'src/assets/img/pictureHouse/smsg.jpg',title:'p11'},
        {picturePath:'src/assets/img/pictureHouse/tcx.jpg',title:'p123'},
        {picturePath:'src/assets/img/pictureHouse/tuyue.jpg',title:'12p1'},
        {picturePath:'src/assets/img/pictureHouse/tcx.jpg',title:'p14a'},
        {picturePath:'src/assets/img/pictureHouse/sszx.jpg',title:'p1aw2'},
        {picturePath:'src/assets/img/pictureHouse/sy.jpg',title:'p134'},
        {picturePath:'src/assets/img/pictureHouse/nioix.jpg',title:'p1x3'},
        {picturePath:'src/assets/img/pictureHouse/onlly.jpg',title:'p2'},
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
        } else if (this.pictureHouse2.length > this.pictureHouse3.length) {
          this.pictureHouse3.push(picture);
        } else if (this.pictureHouse3.length > this.pictureHouse4.length) {
          this.pictureHouse4.push(picture);
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