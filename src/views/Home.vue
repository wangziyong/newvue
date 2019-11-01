<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<swipper class="swipper" :items="imgaddr" class="is"></swipper>
	<div class="mobial" >
		<div v-for="item in message">
			<router-link :to="`/detail/${item.id}`">
				<phone  :messagelist="item"></phone>
			</router-link>
			
		</div>
	</div>
  </div>
</template>

<script> 
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import  Swipper from '@/components/Swipper.vue'
import  Phone from '@/components/Phone.vue'

export default {
  // name: 'home',
  components: {
    // HelloWorld
	 Swipper,
	 Phone
  },
  data(){
	  return {
		  imgaddr:[
			  "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6d5f1c4b27a244efe1433a411069f35.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
			  "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a845ff7f63615deed337967fd1d412e7.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
			  "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b642c13442fc0ca455394f34e59a22b3.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
		  ],
		  message:[
			  {	
				 id:101,
				photo:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				tittle:"小米9 Pro 5G",
				desc:"5G双卡全网通，晓龙855Plus",
				price:3699,
			  },
			  {
				  id:102,
				 photo:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				tittle:"Redmi 8",
				desc:"5000Ah超长续航",
				price:3699,
			  },
			  {
				  id:103,
				 photo:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				tittle:"Redmi Note 8 Pro",
				desc:"6400万场景四摄",
				price:1399,
			  },
			  {
				  id:104,
				 photo:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				tittle:"Redmi Note 8",
				desc:"千元4800万四摄",
				price:999,
			  },
			  {
				  id:105,
				 photo:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				tittle:"Redmi K20 Pro 尊享版",
				desc:"晓龙855Plus，弹出全面屏",
				price:2699,
			  },
			  {
				  id:106,
				 photo:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				tittle:"Redmi Note 8",
				desc:"4800万拍照千元机",
				price:1099,
			  },
			  {
				  id:107,
				 photo:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				tittle:"Redmi 7",
				desc:"4000Ah超长续航",
				price:899,
			  },
		  ]
	  }
  }
}
</script>

<style>
	.home{
		width: 1200px;
		margin: 0 auto;
	}
	.mobial{
		display: flex;
		flex-wrap: wrap;	
		/* justify-content: space-around; */
	}
	.is{
		width: 1200px;
	}
/* 	.mobial{
		display: flex;
		flex-wrap: wrap;
		
	} */
</style>