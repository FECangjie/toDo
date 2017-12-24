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
				console.log(res)
				let data = res.data && res.data.data
        store.commit({
          type: 'setInfo',
          payload: data.info
        })

      }, (err) => {

      })
		},

		get_Me_Info_Tags({ commit }, obj) {
			store.commit({
				type: 'setLoading',
				payload: true
			})
			$http.get(tagsAPI, {params: obj}).then((res) => { // 标签信息
				console.log(res)
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
