/**
 * @file: 首页
 * @author: qinchao@lianjia.com
 */
import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'

export default Vue.component('ChatHomePage', {
    props: ['name', 'pageType'],
  data () {
    return {
      isLoading: true,
      errorTip: '',
      title: ['欢迎'+this.name+'来到虾哔哔','欢迎'+this.name+'来瞎逼逼','欢迎'+this.name+'来逼次几句','欢迎'+this.name+'来舌战群乳'],
      imgUrl: 'src/assets/img/od.jpeg',
      imgUrls: ['src/assets/img/lunbo3.jpeg', 'src/assets/img/lunbo2.jpeg', 'src/assets/img/lunbo3.jpeg', 'src/assets/img/lunbo4.jpg'],
      rooms: 3,
      currentDate: moment(new Date()).format('MM-DD hh:mm'),
      // 弹窗
      formLabelWidth: '100px',
      dialogFormVisible: false,
      createTitle:"创建者："+this.name,
      form: {
        radio:"8人",
      }
    　}
  },
  methods: {
    //form初始化
    onInit ()
    {
      let me = this
         me.dialogFormVisible = false
         me.form = {
            radio: "8人",
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          }
    },
    // 创建房间按钮
    onCreate () {
      // 入口
      let me =this
      this.dialogFormVisible = !this.dialogFormVisible
    },
    // 设置按钮
    onSet () {
    },
    // 反馈按钮
    onSuggest () {
      this.$prompt('请输入反馈内容', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '感谢您的反馈！(反正也没人会看)'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入（大胆说出你的想法嘛）'
          });
        });
    },
    /**
     * 提交创建房间
     */
    onCreateSubmit () {
      let me = this
      me.onInit()
      me.$parent.setPageType('room')
      // me.&emit('pageType','room')
    }
  },
  created () {
    let me = this

  },
  template: tpl
})
