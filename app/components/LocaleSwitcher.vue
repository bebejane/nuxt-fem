<script setup lang="ts">
const { locale: currentLocale, locales, setLocale } = useI18n();
</script>

<template>
	<div class="switcher">
		<button
			v-for="locale in locales"
			:key="locale.code"
			:class="{ active: currentLocale === locale.code }"
			@click="setLocale(locale.code)"
		>
			{{ locale.name }}
		</button>
	</div>
</template>

<style lang="scss" scoped>
.switcher {
	display: flex;
	flex-direction: row;
	position: fixed;
	top: 0;
	right: 0;

	button {
		all: unset;
		padding: 20px;
		cursor: pointer;
		&.active {
			background-color: #4cff6a !important;
		}
	}
}
</style>
