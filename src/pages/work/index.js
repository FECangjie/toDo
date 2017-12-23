
import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'

export default Vue.component('WorkPage', {
  data () {
    return {
      pictureHouse:[
        {picturePath:'src/assets/img/pictureHouse/tuyue.jpg'},
        {picturePath:'src/assets/img/pictureHouse/gg.jpg'},
        {picturePath:'src/assets/img/pictureHouse/jz.jpg'},
        {picturePath:'src/assets/img/pictureHouse/kipor.jpg'},
        {picturePath:'src/assets/img/pictureHouse/qg.jpg'},
        {picturePath:'src/assets/img/pictureHouse/smsg.jpg'},
        {picturePath:'src/assets/img/pictureHouse/tcx.jpg'},
        {picturePath:'src/assets/img/pictureHouse/tuyue.jpg'},
        {picturePath:'src/assets/img/pictureHouse/tcx.jpg'},
        {picturePath:'src/assets/img/pictureHouse/sszx.jpg'},
        {picturePath:'src/assets/img/pictureHouse/sy.jpg'},
        {picturePath:'src/assets/img/pictureHouse/nioix.jpg'},
        {picturePath:'src/assets/img/pictureHouse/onlly.jpg'},
        {picturePath:'src/assets/img/pictureHouse/tuyue.jpg'},
        {picturePath:'src/assets/img/pictureHouse/gg.jpg'},
        {picturePath:'src/assets/img/pictureHouse/jz.jpg'},
        {picturePath:'src/assets/img/pictureHouse/kipor.jpg'},
        {picturePath:'src/assets/img/pictureHouse/qg.jpg'},
        {picturePath:'src/assets/img/pictureHouse/smsg.jpg'},
        {picturePath:'src/assets/img/pictureHouse/tcx.jpg'},
        {picturePath:'src/assets/img/pictureHouse/tuyue.jpg'},
        {picturePath:'src/assets/img/pictureHouse/tcx.jpg'},
        {picturePath:'src/assets/img/pictureHouse/sszx.jpg'},
        {picturePath:'src/assets/img/pictureHouse/sy.jpg'},
        {picturePath:'src/assets/img/pictureHouse/nioix.jpg'},
        {picturePath:'src/assets/img/pictureHouse/onlly.jpg'},
      ],

    }
  },
  methods: {
    func(){
      
    }
  },
  created () {
    this.func();
  },
  template: tpl
})