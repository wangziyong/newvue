<template>
	<div class="conposition">
		<slot></slot>
		<table cellpadding="" cellspacing="" border="">
			<tr><th>版本</th><th>版本时间</th><th>操作</th></tr>
			<tr v-for="item in items">
				<td>{{ item.version }}</td>
				<td>{{ item.updatetime }}</td>
				<td><a href="#">下载</a></td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default{
		props:["items"],
	}
</script>

<style>
	.conposition{
		text-align: center;
	}
	.conposition table{
		width: 600px;
		margin: 0 auto;
	}
</style>
