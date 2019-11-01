<template>
	<div class="login">
		<span>用户名</span>
		<input type="text" v-model="user.name">
		<br>
		<span>密码</span>
		<input type="password" v-model="user.pwd">
		<br>
		<button @click="login">登录</button>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				user:{
					name:"zzy0371",
					pwd:"zzy0371"
				},
			}
		},
		methods:{
			login(){
				this.$http({
					url:"http://www.520mg.com/member/index_login.php",
					method:"POST",
					withCredentials:true,
					data:`fmdo=login&dopost=login&userid=${this.user.name}&pwd=${this.user.pwd}`
				}).then((re)=>{
					// if(re.)
					console.log(re.data.status)
					// if(re.request.status)
					if(re.data.status==1)
					{
						console.log("登录成功")
						this.$store.commit("setelog",true)
						
						if(this.$route.query.red)
						{
							this.$router.push(this.$route.query.red)
						}
						else{
							this.$router.push('/')
						}
					}
					else{
						console.log("登录失败")
					}

				})
			}
		}
			
	}
</script>

<style>
</style>
