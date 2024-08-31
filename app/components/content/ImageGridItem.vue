<template>
	<div :class="`md:col-span-${colSpan} md:row-span-${rowSpan}`">
		<NuxtPicture
			src="/images/hero.webp"
			:img-attrs="{
				class: 'object-cover w-full h-full rounded-md'
			}"
		/>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	image: String,
	colSpan: {
		type: Number,
		default: 12
	},
	rowSpan: {
		type: Number,
		default: 1
	}

})
</script>

<style lang="scss" scoped>

</style>
