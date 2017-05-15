import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'

export default Vue.component('ChatRoomPage',{
    props: ['name'],
    data () {
    return {
        isLoading: true,
        errorTip: '',
        imgUrl: 'src/assets/img/od.jpeg',
        imgUrls: ['src/assets/img/lunbo3.jpeg', 'src/assets/img/lunbo2.jpeg', 'src/assets/img/lunbo3.jpeg', 'src/assets/img/lunbo4.jpg'],
        currentDate: moment(new Date()).format('MM-DD hh:mm'),
        formLabelWidth: '100px',
        labelPosition: 'left',
        formLabelAlign: {
            room: '',
            name: ''
        },
        sites: [
            'Do ',
            'You',
            'Love'
        ]
    }
},
    method:{
        onSubmit () {
            this.sites.push(this.formLabelAlign.name)
            this.formLabelAlign.name = ''
        }
    },
    created () {
        let me = this
    },
    template: tpl
})
