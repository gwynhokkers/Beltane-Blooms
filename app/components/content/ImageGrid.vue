<template>
	<section class="container mx-auto">
		<ULandingGrid class="grid">
			<slot />
		</ULandingGrid>
	</section>
</template>

<script lang="ts" setup>
</script>

<style lang="css" scoped>
/* .landing-grid {
  background-size: 100px 100px;
  background-image:
    linear-gradient(to right, rgb(var(--color-gray-200)) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(var(--color-gray-200)) 1px, transparent 1px);
}
.dark {
  .landing-grid {
    background-image:
      linear-gradient(to right, rgb(var(--color-gray-800)) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(var(--color-gray-800)) 1px, transparent 1px);
  }
} */
</style>
