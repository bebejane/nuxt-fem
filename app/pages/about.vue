<script setup lang="ts">
const color = ref('blue');
const route = useRoute();
</script>

<template>
	<section :class="$style.about">
		<p>This page will be displayed at the /about route.</p>
		<Paragraph :cls="$style.para" name="hojas">This is a paragraph</Paragraph>
	</section>
	<NuxtLink href="/">Home</NuxtLink>
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
<style lang="scss" module>
.para {
	font-size: 4rem !important;
	color: var(--white) !important;
}
</style>
