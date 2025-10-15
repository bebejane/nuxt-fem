<script setup lang="ts">
const { data, error, pending, status } = await useApiQuery<AllProjectsQuery, AllProjectsQueryVariables>(
	'allProjects',
	AllProjectsDocument
);
</script>

<template>
	<div v-if="pending">Loading...</div>
	<pre v-else-if="status === 'error'">Error: {{ JSON.stringify(error, null, 2) }}</pre>
	<div v-else>
		<ul v-for="project in data?.allProjects" :key="project.id">
			<li>
				<NuxtLinkLocale :to="{ name: 'projects-project', params: { project: project.slug } }">
					{{ project.title }}
				</NuxtLinkLocale>
			</li>
		</ul>
	</div>
</template>
