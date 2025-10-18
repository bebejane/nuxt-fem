<script setup lang="ts">
  const { locale } = useI18n();

  const { allPosts, error, pending } = await useApiQuery(
    AllPostsDocument,
    { variables: { locale: locale.value as SiteLocale } },
    `allPosts-${locale.value}`
  );
</script>

<template>
  <div v-if="pending">Loading...</div>
  <pre v-else-if="error">Error: {{ JSON.stringify(error, null, 2) }}</pre>
  <div v-else>
    <ul v-for="post in allPosts" :key="post.id">
      <li>
        <NuxtLinkLocale :to="{ name: 'posts-post', params: { post: post.slug } }">
          {{ post.title }}
        </NuxtLinkLocale>
      </li>
    </ul>
  </div>
</template>
