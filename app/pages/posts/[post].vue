<script setup lang="ts">
  const { locale } = useI18n();
  const localeRoute = useLocaleRoute();
  const slug = localeRoute("posts-post").params.post;

  const { data, error, pending, status } = await useApiQuery<
    PostQuery,
    PostQueryVariables
  >(`post-${locale.value}`, PostDocument, {
    variables: { slug, locale: locale.value as SiteLocale },
  });

  const post = data?.value?.post;
</script>

<template>
  <div :class="$style.post">
    <div v-if="pending">Loading...</div>
    <div v-else-if="status === 'error'">Error: {{ error?.message }}</div>
    <div
      v-if="post !== null && post?.image?.responsiveImage"
      :class="$style.post"
    >
      <h1>{{ post.title }}</h1>
      <Image
        :class="$style['image-wrap']"
        :img-class="$style.image"
        :placeholder-class="$style.placeholder"
        :data="post.image.responsiveImage"
      />
    </div>
    <Markdown
      v-if="post?.content"
      :source="post.content"
      :class="$style.content"
    />
    <div :class="$style.slug">Slug: {{ slug }}</div>
    <p>
      <NuxtLinkLocale href="/" :class="$style.back">Back</NuxtLinkLocale>
    </p>
  </div>
</template>

<style lang="scss" module>
  .post {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .caption {
    font-size: 1rem;
    margin-top: var(--space);
    color: var(--black);
  }
  p {
    margin-top: var(--space);
    padding: 0;
  }
  .slug {
    font-weight: bold;
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

  .image-wrap {
    border-radius: 100px;
  }
  .image {
    width: 50vw;
    height: 50vh;
    object-fit: contain;
    border-radius: 100px;
  }

  .placeholder {
    filter: grayscale(1);
    opacity: 0.2 !important;
  }
</style>
