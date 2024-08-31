<template>
	<section>
		<div
			class="container mx-auto py-12"
			:class="[
				{
					'text-center': textAlign === 'center',
					'text-left': textAlign === 'left',
					'text-right': textAlign === 'right'
				}
			]"
		>
			<h2 class="text-2xl mb-10">
				{{ title }}
			</h2>
			<div
				class="prose mb-8"
				:class="[
					{
						'mx-auto': textAlign === 'center',
						'mr-auto': textAlign === 'left',
						'ml-auto': textAlign === 'right'
					}
				]"
			>
				<slot name="content" />
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
defineProps({
	title: {
		type: String,
		default: ''
	},
	textAlign: {
		type: String,
		default: 'center'
	}
})
</script>

<style lang="scss" scoped>

</style>
