//index.vue
<template>
    <div>
        <ul style="text-align:center">
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ul>
        <div class="demo-flex"></div>
        <el-button>默认按钮</el-button>
    </div>
</template>

<script>
export default {
  name: 'indexP',
  data () {
    return {
       todos: [
          { text: '游客须知：' },
          { text: '第一，项目还在搭建中。' },
          { text: '第二，服务器在测试运行。' },
          { text: '第三，内容待开发。' }
        ]
    }
  }
}
</script>
