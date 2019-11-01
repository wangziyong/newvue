<template>
	<div class="regist">
		<span>用户名：</span>
		<input type="text" v-model="user.name">
		<br>
		<span>密码：</span>
		<input type="password" v-model="user.pwd1">
		<br>
		<span>重复密码：</span>
		<input type="password" v-model="user.pwd2">
		<br>
		<span>邮箱：</span>
		<input type="text" v-model="user.email">
		<br>
		<button @click="register">注册</button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				user:{
					name:"",
					pwd1:"",
					pwd2:"",
					email:"",
				}
			}
		},
		methods:{
			register(){
				if(this.user.name=="" || this.user.pwd1=="" || this.user.pwd2=="" || this.user.email=="")
				{
					alert("信息不能为空")
				}
				else if(this.user.pw1 !=this.user.pw2)
				{
					alert("密码不一致")
				}
				else{
					// this.$router.push('/login')
					this.$http({
						url:"http://www.520mg.com/member/reg_new2.php",
						mathod:"POST",
						withCredentials:true,
						data:`userid=${this.user.name}&userpwd=${this.user.pwd1}&email=${this.user.email}`,
					}).then((succe)=>{
						console.log(succe.data.status)
						this.$router.push('/login')
												
					})
				}
				
			}
		}
	}
</script>

<style scoped="scoped">
	
</style>
