<script setup lang="ts">
const { data, error, pending, status } = await useAsyncData('allProjects', () =>
	useApiQuery<AllProjectsQuery>(AllProjectsDocument)
);
</script>
<template>
	<div v-if="status === 'pending'">Loading...</div>
	<pre v-else-if="status === 'error'">Error: {{ JSON.stringify(error, null, 2) }}</pre>
	<ul v-else v-for="project in data?.allProjects">
		<li>
			<NuxtLink :href="`/projects/${project.slug}`">{{ project.title }}</NuxtLink>
		</li>
	</ul>
</template>
