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
      title: '我爱你，如鲸向海，似鸟投林。不可避免，退无可退。',
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
              "那沉重的伤感始终挥之不去",
              "Although alive and without much",
              "或许我这一生拥有的不多",
              "The wishing, well I wished for you",
              "但我将一切美好的祝愿送给你",
              "Then I look to see myself within it all",
              "然后尽我的全力去帮你一一实现 ",
              "My oceans deep my rivers wide",
              "我对你的爱像海洋一样深 像江河一样广",
              "The strangers weep at pleasures side",
              "身旁的人们都为幸福喜悦而泣",
              "Oh why do I not see the only one unseen",
              "可为什麼我却始终看不见我唯一想见的人"
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
