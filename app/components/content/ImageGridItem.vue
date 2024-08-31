<template>
	<div :class="`${colSpanVariants[colSpan]} ${rowSpanVariants[rowSpan]}`">
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

const colSpanVariants = {
	1: 'md:col-span-1',
	2: 'md:col-span-2',
	3: 'md:col-span-3',
	4: 'md:col-span-4',
	5: 'md:col-span-5',
	6: 'md:col-span-6',
	7: 'md:col-span-7',
	8: 'md:col-span-8',
	9: 'md:col-span-9',
	10: 'md:col-span-10',
	11: 'md:col-span-11',
	12: 'md:col-span-12'
}

const rowSpanVariants = {
	1: 'md:row-span-1',
	2: 'md:row-span-2',
	3: 'md:row-span-3',
	4: 'md:row-span-4',
	5: 'md:row-span-5',
	6: 'md:row-span-6',
	7: 'md:row-span-7',
	8: 'md:row-span-8',
	9: 'md:row-span-9',
	10: 'md:row-span-10',
	11: 'md:row-span-11',
	12: 'md:row-span-12'
}
</script>

<style lang="scss" scoped>

</style>
