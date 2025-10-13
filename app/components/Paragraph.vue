<script setup lang="ts">
const props = defineProps({
	name: String,
	cls: String,
});
</script>
<template>
	<h3>{{ props.cls }}</h3>
	<p :class="props.cls"><slot /></p>
</template>
