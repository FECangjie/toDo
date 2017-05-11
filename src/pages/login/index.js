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
      imgUrl: 'src/assets/img/od.jpeg',
      currentDate: moment(new Date()).format('YYYY-MM-DD'),
      restaurants: [],
      state3: '',
      btuText: '进入',
      loading: false,
      
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
      loadAll() {
        return [
          { "value": "金日天", "address": "" },
          { "value": "屌爆了", "address": "" },
          { "value": "大炮来袭", "address": "" },
          { "value": "逼逼侠", "address": "" },
          { "value": "栓子", "address": "" },
        ];
      },

      handleSelect(item) {
        let me = this
        me.name = item.value
      },

      handleIconClick(ev) {
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
      this.restaurants = this.loadAll()
    },
    created () {
    let me = this

  },
  template: tpl
})
