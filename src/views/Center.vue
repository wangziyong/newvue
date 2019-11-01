<template>
	<div class="center">
		<h2>{{user.name}}</h2>
		<h2>{{user.honor}}</h2>
		<h2>{{user.logintime}}</h2>
	</div>
</template>

<script>
	export default{
		created(){
			this.messages()
		},
		data(){
			return {
				user:{
					name:"",
					logintime:"",
					honor:"",
				}
			}
		},
		methods:{
			messages(){
				this.$http({
					url:"http://www.520mg.com/member/ajax_login.php",
					method:"GET",
					withCredentials:true,
				}).then((success)=>
				{
					
					this.user.name=success.data.M_UserName
					this.user.honor=success.data.M_Honor
					this.user.logintime=success.data.M_LoginTime
				})
			}
		}
	}
</script>

<style>
</style>
