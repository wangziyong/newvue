<template>
	<div class="logout">
		<button @click="del">注销</button>
	</div>
</template>

<script>
	export default{
		methods:{
			del(){
				this.$http({
					url:"http://www.520mg.com/member/index_login.php",
					method:"post",
					withCredentials:true,
					data:'dopost=exit',
				}).then((redirct)=>{
					console.log(redirct.data.status)
					// this.$router.push('/')
					// $store.state.flag=true
					if(redirct.data.status==1)
					{
						this.$store.state.flag=false
						this.$store.commit("setelog",false)
						this.$router.push('/')
					}
					else{
						console.log("退出失败")
					}
					
				})
			}
		}
	}
</script>

<style>
</style>
