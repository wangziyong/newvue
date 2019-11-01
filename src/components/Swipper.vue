<template>
	<div class="container">
		<div v-for="(item,index) in items" @mouseenter="stop" @mouseleave="start">
			<img :src="item" alt="" v-show="exp==index">
		</div>
		<div class="taush">
			
		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				exp:0,
				playing:true
			}
		},
		created(){
			this.play();
		},
		methods:{
			play(){
				setInterval(()=>{
					if(this.playing)
					{
						this.exp++;
							if(this.exp>=this.items.length)
							{
								this.exp=0;
							}						
					}
					},2000)
					
			},
			stop(){
				this.playing=false
			},
			start(){
				this.playing=true
			}
		},
		props:["items"],
	}
</script>

<style>
	.container{
		/* width: 1200px; */
	}
</style>
