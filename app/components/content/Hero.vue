<template>
	<section>
		<NuxtPicture
			:src="image"
			:img-attrs="{
				class: 'object-cover w-full h-full max-h-96'
			}"
		/>
	</section>
</template>

<script lang="ts" setup>
defineProps({
	image: String
})
</script>

<style lang="scss" scoped>

</style>
