<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
	  <router-link to="/download">DownLoad</router-link> |
	  <!-- <router-link to="/Detail">Detail</router-link> | -->
	  <router-link to="/Jokes">Jokes</router-link>  |
	  <router-link to="/Carts">Carts</router-link> |
		<span v-if=" !$store.getters.geystate">
			<router-link to="/Login">Login</router-link> |
			 <router-link to="/Regist">Regist</router-link> |
		</span>	 
	   <span v-else>
		   <router-link to="/Center">Cetner</router-link> |
		    <router-link to="/Logout">Logout</router-link> 
	   </span>
	   
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
