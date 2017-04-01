//index.vue
<template>
    <div>
        <a @click="eClick()" class="btn-a">用力点我</a>
    </div>
</template>

<script>
export default {
  name: 'indexP',
  methods:{
    eClick(){
        alert('..疼')
    }
  }
}
</script>
