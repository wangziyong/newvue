<template>
	<div>
		<div class="container" messagelist>
			<img :src="messagelist.photo" alt="">
			<h3>{{ messagelist.tittle}}</h3>
			<p>{{messagelist.desc}}</p>
			<span>{{messagelist.price}}</span>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:["messagelist"]
	}
</script>

<style>
	.container{
		width: 300px;
		text-align: center;
	}
	.container img{
		width: 300px;
	}
</style>
