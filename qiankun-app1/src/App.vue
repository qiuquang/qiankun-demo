<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home(app1)</router-link> |
      <router-link to="/about">About(app1)</router-link>
       <p>a链接跳转到主项目/其他子项目的页面，页面会刷新，效果不好<a href="/about">parent About</a></p>
      <p v-if="isQiankun">
        主项目把router传给子项目，子项目用这个router来跳转
        <span @click="goToPage('/about')">parent About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span @click="goToPage('/guibin')">vip</span>
      </p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'APP',
  data() {
    return {
      isQiankun: window.__POWERED_BY_QIANKUN__,
    }
  },
  methods: {
    goToPage(path){
      if(this.isQiankun){
        console.log('自己的store', this.$router)
      this.$root.parentRouter.push(path);
      }
    }
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
