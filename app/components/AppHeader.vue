<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [
	{
		label: 'About',
		to: '/about'
	}
	// {
	// 	label: 'Shop',
	// 	to: '/shop'
	// },
	// {
	// 	label: 'Services',
	// 	to: '/services'
	// },
	// {
	// 	label: 'Contact',
	// 	to: '/contact'
	// }
]
</script>

<template>
	<UHeader
		class=""
		:links="links"
		:ui="{
			wrapper: 'relative'
		}"
	>
		<template #logo>
			<NuxtImg
				class="w-64 h-64"
				src="/images/Beltane.webp"
				alt="Logo"
				width="256"
				height="256"
			/>
		</template>

		<template #right>
			<UColorModeButton />
			<!-- <UButton
				label="Sign in"
				color="gray"
				to="/login"
			/>
			<UButton
				label="Sign up"
				icon="i-heroicons-arrow-right-20-solid"
				trailing
				color="black"
				to="/signup"
				class="hidden lg:flex"
			/> -->
		</template>

		<template #panel>
			<UNavigationTree
				:links="mapContentNavigation(navigation)"
				default-open
			/>
		</template>
	</UHeader>
</template>
