<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/guibin/">vip</router-link> |
      <router-link to="/app-vue/">app1</router-link>
    </div>
      <span @click="changeParentState">主项目的数据：{{ commonData.parent }}，点击变回1</span>
    <div id="container"></div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'APP',
  computed: {
    commonData(){
      return this.$store.state.commonData;
    }
  },
  methods: {
    changeParentState() {
      this.$store.commit('setCommonData',{ parent: 1 });

    }
  }
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
  padding: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#container{
  height: 100%;
}
div[data-name] {
  height: 100%;
}

</style>
