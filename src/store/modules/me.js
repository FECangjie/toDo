import axios from 'axios'
import store from 'store'

const infoAPI = '/info.json'

const sideBar = {
	state: {
		info: {
			name: '',
			xueli: '',
			tel: '',
			email: '',
		}
	},
	mutations: {
		setInfo (state, obj) {
			state.info = obj.payload
		}
	},
	actions: {
		set_Info ({ commit }, obj) {
			$http.get(infoAPI, {}).then((res) => { // 播放信息
				let data = res.data && res.data.data
        store.commit({
          type: 'setInfo',
          payload: {
		  			name: '秦超',
		  			xueli: '本科985',
		  			tel: '131-2156-1943',
		  			email: 'qinchao7n@qq.com',
		        age: '25',
		        workYear: '2-3',
		        zhengzhi: '中共党员',
		        marry: '未婚',
		        address: '北京',
		        hometown: '吉林长春',
		  		}
        })

      }, (err) => {

      })
		}
	},
	getters: {
		getMeInfo: state => state.info
	}
}
export default sideBar
