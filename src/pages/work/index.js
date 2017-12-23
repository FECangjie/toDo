
import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'

export default Vue.component('WorkPage', {
  data () {
    return {
      pictureHouse:[
        {picturePath:'src/assets/img/work/1.png',title:'p1'},
        {picturePath:'src/assets/img/work/2.png',title:'p1'},
        {picturePath:'src/assets/img/work/3.png',title:'p1'},
        {picturePath:'src/assets/img/work/4.png',title:'p1'},
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
    },
    mouseoverPicture(param){
      let e = window.event;

      console.log(param.path[0].src);
      this.showTooltip = true;
      this.tooltipPath = param.path[0].src;
      console.log(e.clientX+'   '+e.clientY);
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
