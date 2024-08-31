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
				Sustainably grown and naturally dried flowers
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
				<p>
					I'm Ruth and this is my little corner of the web for all things flowery. I sow, grow and responsibly forage flowers and foliage for dried flower arranging.
				</p>
				<p>
					I live just outside of Cardiff in South Wales. Click below to find out more about me, my journey and my approach to growing flowers.
				</p>
			</div>
			<UButton
				:label="'About'"
				to="/about"
			/>
		</div>
	</section>
</template>

<script lang="ts" setup>
defineProps({
	textAlign: {
		type: String,
		default: 'center'
	}
})
</script>

<style lang="scss" scoped>

</style>
