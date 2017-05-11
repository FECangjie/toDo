/**
 * @file: 首页
 * @author: qinchao@lianjia.com
 */
import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'

export default Vue.component('LoginPage', {
  data () {
    return {
      name: '',
      imgUrl: 'src/assets/img/od.jpeg',
      currentDate: moment(new Date()).format('YYYY-MM-DD'),
      restaurants: [],
      state3: ''  
    }
  },
  
  methods: {
      querySearch(queryString, cb) {
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
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      },
      login () {
        alert(1)
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    },
    created () {
    let me = this

  },
  template: tpl
})
