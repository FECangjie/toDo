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
      tuijianNames: []
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
        return this.tuijianNames
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
    fetch("login/tuijianName.json", {
      method: "post",
      body: {
        houseCode: 1,
        comment: 1
      },
      formData: true
    }).then(function(res) {
      if (res.ok) {
        res.json().then(function(data) {
          // me.name = data.data.name[0].value
          })
        } else {
          console.log("Looks like the response wasn't perfect, got status", res.status);
        }
      }, function(e) {
        console.log("Fetch failed!", e);
      })
  },
  template: tpl
})
