<script setup lang="ts">
import { Image } from 'vue-datocms';

const route = useRoute<'projects-project'>();
const { data, error, pending, status } = await useAsyncData('project', () =>
	useApiQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, { slug: route.params.project })
);

const project = data.value?.project;
</script>

<template>
	<div class="project">
		{{ route.params.project }}

		<div v-if="pending">Loading...</div>
		<div v-else-if="status === 'error'">Error: {{ error?.message }}</div>
		<div v-else-if="project?.thumbnail?.responsiveImage" class="project">
			<h1>{{ project.title }}</h1>
			<Image :data="project.thumbnail?.responsiveImage" class="image" />
		</div>
		<p>
			<NuxtLink href="/">Back</NuxtLink>
		</p>
	</div>
</template>

<style lang="scss" scoped>
.project {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
p {
	margin-top: var(--space);
	padding: 0;
}
.image {
	all: unset;
	width: 50vw;

	object-fit: cover;
}
</style>
