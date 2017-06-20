/**
 * @file: 首页
 * @author: qinchao@lianjia.com
 */
import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'
// import xbAutocomplete from '../../components/autocomplete';

export default Vue.component('LoginPage', {
  data () {
    return {
      name: '',
      imgUrl: 'src/assets/img/lunbo1.png',
      currentDate: moment(new Date()).format('YYYY-MM-DD'),
      restaurants: [
        { "value": "不一样的", "name": "程鸡鸡" },
        { "value": "屌爆了", "name": "光头凯" },
        { "value": "大炮来袭", "name": "金日天" },
        { "value": "八宝山鬼王", "name": "哔哔虾" },
        { "value": "死肥宅", "name": "回龙观四小龙" },
        { "value": "灵魂画师", "name": "华子" },
        { "value": "哈尼王子", "name": "孙仲谋" },
        { "value": "人中泰迪", "name": "你爸爸" },
        { "value": "光头炮子", "name": "神秘挨揍青年" },
        { "value": "无脑喷子", "name": "呆哥" } // 没有mock
      ],
      btuText: '进入',
      loading: false
    }
  },

  methods: {
      querySearch(queryString, cb) {
        let me = this
        me.name = queryString
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },

      handleSelect(item) {
        let me = this
        me.name = item.value
      },

      handleIconClick(ev) { // 随机从库里生成名字～
        let me = this
        let num = Math.round(Math.random() * 10)
        let num1 = Math.round(Math.random() * 10)
        $http.get('/api/login/tuijianName.json', {
          params: {
            user: 'xbb'
          }
        }).then(
          (res) => {
            let result = res.data
            if (result.code === 1) {
              this.restaurants = result.data.name
            }
          }
        )

        this.name = this.restaurants[num] ? ( (this.restaurants[num1] ?  this.restaurants[num1].value + ' ' : '') + this.restaurants[num].name) : '库里没有了自己想吧'
      },


      login () {
        let me = this
        if (!me.name) {
           this.$alert('昵称不能为空。', '请输入昵称', {
            confirmButtonText: '确定',
            callback: action => {

            }
          })
        } else {
          me.loading = true
          me.btuText = '正在进入'
          setTimeout (item => {
            window.location.href = '/chat?name=' + encodeURI(me.name)
          }, 3000)
        }
      }
    },
    mounted() {
      let me = this
      $http.get('/api/login/tuijianName.json', {
        params: {
          user: 'xbb'
        }
      }).then(
        (res) => {
          let result = res.data
          if (result.code === 1) {
            this.restaurants = result.data.name
          }
        }
      )
    },
    beforeUpdate: function () {
    },
    updated: function () {
    },
    created () {

  },
  template: tpl
})
