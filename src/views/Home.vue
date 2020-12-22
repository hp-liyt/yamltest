<template>
  <div class="home">
    <el-button type="primary" round @click="toeditor1">CodeMirror+js-yaml语法检查（简易版）</el-button>
    <el-button type="primary" round @click="toeditor2">CodeMirror+js-yaml语法检查（详情版）</el-button>
    <el-button type="primary" round @click="toeditor3">导入kibana看板测试1</el-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods:{
    toeditor1(){
      this.$router.push({ path:'/demo1'})
    },
    toeditor2(){
      this.$router.push({ path:'/demo'})
    },
    toeditor3(){
      this.$router.push({ path:'/penal1'})
    }
  }
}
</script>
