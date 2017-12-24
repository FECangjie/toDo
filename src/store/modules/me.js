import axios from 'axios'
import store from 'store'

const infoAPI = '/me/info.json'
const tagsAPI = '/me/tags.json'

const Me = {
	state: {
		info: {
			name: '',
			xueli: '',
			tel: '',
			email: '',
		},
		tags: [
				{
						title:'个人标签',
						tags:[
								]
				},
				{
						title:'技术标签',
						tags:[
								]
				},
				{
						title:'生活标签',
						tags:[]
				}
		],
		loading: true

	},
	getters: {
		getMeInfo: state => state.info
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
		},

		get_Me_Info_Tags({ commit }, obj) {
			store.commit({
				type: 'setLoading',
				payload: true
			})
			$http.get(tagsAPI, {}).then((res) => { // 播放信息
				let data = res.data && res.data.data
        store.commit({
          type: 'getMeInfoTags',
          payload: data.tags
        })
				store.commit({
					type: 'setLoading',
					payload: false
				})
      }, (err) => {

      })
		}
	},
	mutations: {
		setInfo (state, obj) {
			state.info = obj.payload
		},
		getMeInfoTags (state, obj) {
			state.tags = obj.payload
		},
		setLoading (state, obj) {
			state.loading = obj.payload
		}
	}
}
export default Me
