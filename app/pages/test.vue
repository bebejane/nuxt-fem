<script setup lang="ts">
const color = ref('blue');
const route = useRoute();

// When accessing /posts/1, route.params.id will be 1
console.log(route);
</script>

<template>
	<NuxtlLink href="/about">About</NuxtlLink>
</template>

<style lang="scss" module>
.about {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: var(--space-big);
	padding-bottom: var(--space-big);

	p {
		text-align: center;
		color: v-bind(color);
		background-color: red;
	}
}
</style>
