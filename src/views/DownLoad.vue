<template>
	<div>
		<slot>pycharm</slot>
		<download-table :items="pycharm"></download-table>
	</div>
</template>

<script>
	import DownloadTable from '@/components/DownloadTable.vue'
	export default{
		components:{
			DownloadTable
		},
		data(){
			return {
				pycharm:[
					{
						version:"2.1.3",
						updatetime:"2017-8",
					},
					{
						version:"2.5.3",
						updatetime:"2018-11",
					},
					{
						version:"3.1.3",
						updatetime:"2019-3",
					},
					{
						version:"3.6.3",
						updatetime:"2019-9",
					},
				]
			}
		},
		
	}
</script>

<style>
</style>
