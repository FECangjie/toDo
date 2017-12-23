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
			axios.get(infoAPI, {}).then((res) => { // 播放信息
				let data = res.data.data
        store.commit({
          type: 'setInfo',
          payload: data.info
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
