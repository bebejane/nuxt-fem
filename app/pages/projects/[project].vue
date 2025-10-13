<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render';

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
			<VueMarkdown :source="project.caption ?? ''" class="caption" />
		</div>
		<p>
			<NuxtLink href="/" class="back">Back</NuxtLink>
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
.caption {
	font-size: 2rem;
	color: var(--black);
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

.back {
	all: unset;
	display: block;
	text-decoration: none;
	background-color: var(--white);
	border: 2px solid var(--black);
	padding: 1rem;
	width: 260px;
	border-radius: 1rem;
	text-align: center;
	cursor: pointer;
}
</style>
