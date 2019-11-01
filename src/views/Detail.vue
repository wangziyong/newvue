<template>
	<div class="detail">
		<h2>商品{{good.tittle}}</h2>
		<img :src="good.image" alt="">
		<button class="reduce">-</button>
		<span>{{num}}</span>
		<button @click="adds">+</button>
		<br>
		<button @click="addcarts">添加购物车</button>
		<router-view></router-view>
		<router-link :to="`/detail/${this.$route.params.id}/baby`">商品详情</router-link>
		<router-link :to="`/detail/${this.$route.params.id}/coments`">评论</router-link>
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				good:null,
				num:1,	
				
			}
		},
		created(){
			// console.log(this.$route.params),
			this.good={
				// console.log(this.$route.params.id)
				tittle1:`商品${this.$route.params.id}`,
				image:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				// num:1
				price:20,
			}
		},
		methods:{
			reduce(){
				this.num--
			},
			adds(){
				this.num++
			},
			addcarts()
			{
				this.$store.commit("add",{
					name:this.good.tittle1,
					price:this.good.price,
					num:this.num
				})
			}
		}
	}
</script>

<style>
</style>
