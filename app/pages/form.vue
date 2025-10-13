<script setup lang="ts">
import Select from '~/components/ui/Select.vue';
const items = [
	{ label: 'Alla', value: 'all' },
	{ label: 'Some', value: 'some' },
];
</script>
<template>
	<Select :items="items" />
</template>
