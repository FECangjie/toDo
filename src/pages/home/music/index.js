/**
 * @file: 首页
 * @author: qinchao@lianjia.com
 */
import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'

export default Vue.component('MusicPage', {
  data () {
    return {
      isLoading: true,
      errorTip: '',
      title: '如鲸向海，似鸟投林。不可避免，退无可退。',
      imgUrl: 'src/assets/img/od.jpeg',
      musicUrl: 'src/assets/music/oceansDeep.mp3',
      content: {
        name: 'Oceans Deep',
        text: [
              "Even though the world I'm in",
              "即使我所生活的世界",
              "The perfect pitch this way appears",
              "以怎样完美的状态呈现 ",
              "The greatest pressures of my sin don't disappear",
              "Although alive and without much",
              "The wishing, well I wished for you",
              "Then I look to see myself within it all",
              "My oceans deep my rivers wide",
              "The strangers weep at pleasures side",
              "Oh why do I not see the only one unseen",
            ]
          }
　　 }
  },
  created () {
    let me = this

    /** ajax例子
    $http.get('api/linkApp/index.json').then(
      (res) => {
        me.isLoading = false
        let data = res.data
        if (data && data.code) {
          me.errorTip = ''
          me.lastContactedNum = data.data.lastContactedNum
          me.ownerCompletedRate = data.data.ownerCompletedRate
          me.ownerConfirmedRate = data.data.ownerConfirmedRate
          me.collectedNum = data.data.collectedNum
          me.relatedRegionList = data.data.relatedRegionList
        } else {
          me.errorTip = data.msg || '数据获取失败'
        }
      },
      (res) => {
        me.isLoading = false
      }
    ) **/
  },
  template: tpl
})
