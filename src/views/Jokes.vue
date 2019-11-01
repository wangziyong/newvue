<template>
	<div class="joke">
		<h2>笑话首页</h2>
		<div v-for="item in jokes">
			<h2>{{item.title}}</h2>
			<p>{{item.summary}}</p>
			
		</div>
		<button @click="more"> 加载更多</button>
	</div>
</template>

<script>
	// import axios from 'axios'
	export default{
		data(){
			return {
				jokes:[],
				number:1,
			}
		},
		created(){
			this.getjokes();
		},
		methods:{
			getjokes(page){
				this.$http({
				  method: 'get',
				  url: `http://biger.applinzi.com/duan/list.php?page=${this.number}`,
				}).then(response=>{
						// this.jokes=response.data.result
						this.jokes=this.jokes.concat(response.data.result)
						// response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
					  });
			},
			more(){
				this.number++
				this.getjokes(this.number)
			}
		
		}
		
		// Send a POST request
		
	}
</script>

<style>
	.joke{
		width: 1000px;
		margin: 0 auto;
	}
</style>
