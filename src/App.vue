<template>
  <div id="app">
    <div class="header">
      <div class="logo"></div>
      <Menu mode="horizontal" active-name="1">
        <MenuItem name="1" to="/">主页</MenuItem>
        <MenuItem name="2" to="/about">关于</MenuItem>
      </Menu>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <div class="main">
      <div class="nav">
        <Menu active-name="1-1">
          <Submenu name="1">
            <template slot="title">
                <Icon type="ios-paper" />
                下拉菜单
            </template>
            <MenuItem name="1-1" to="/">主页</MenuItem>
            <MenuItem name="1-2" to="/about">关于</MenuItem>
          </Submenu>
        </Menu>
      </div>
      <div class="main-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style lang="less">
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.main {
  display: flex;
  height: 100%;
}
.nav .ivu-menu {
  height: 100%;
}
.main-content {
  flex: auto;
}
.header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dcdee2;
  .logo {
    width: 260px;
  }
}
</style>
