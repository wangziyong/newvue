<template>
	<div class=""> 
		<table cellpadding="" cellspacing="" border="">
			<tr>
			<th>商品</th>
			<th>价格</th>
			<th>数量</th>
			</tr>
			<tr v-for="item in $store.state.goods">
			<td> {{item.name}}</td>
			<td>{{item.price}}</td>
			<td>{{item.num}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
</style>
