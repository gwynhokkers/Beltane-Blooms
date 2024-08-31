<template>
	<UForm
		class="max-w-md mx-auto"
		:fields="fields"
		:actions="actions"
		:ui="{
			wrapper: 'p-4 rounded-lg shadow-lg'
		}"
	>
		<h2 class="text-2xl font-bold">
			Get in touch
		</h2>
		<UFormGroup
			label="Name"
			name="name"
		>
			<UInput v-model="state.name" />
		</UFormGroup>

		<UFormGroup
			label="Email"
			name="email"
		>
			<UInput v-model="state.email" />
		</UFormGroup>

		<UFormGroup
			label="Phone number"
			name="phone"
		>
			<UInput
				v-model="state.phone"
				type="tel"
			/>
		</UFormGroup>

		<UFormGroup
			label="Message"
			name="message"
		>
			<UTextarea v-model="state.message" />
		</UFormGroup>

		<UButton type="submit">
			Send
		</UButton>
	</UForm>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
	name: string().required('Required'),
	email: string().email('Invalid email').required('Required'),
	phone: string(),
	message: string().required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
	email: undefined,
	name: undefined,
	phone: undefined,
	message: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
	// Do something with event.data
	console.log(event.data)
}
</script>

<style scoped>

</style>
