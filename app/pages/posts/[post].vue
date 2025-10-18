<script setup lang="ts">
  const setI18nParams = useSetI18nParams();
  const locale = useI18n().locale.value as SiteLocale;
  const localeRoute = useLocaleRoute();
  const slug = localeRoute("posts-post").params.post;

  const { post, error, pending } = await useApiQuery(PostDocument, { variables: { slug, locale } }, `post-${locale}`);

  setI18nParams({
    en: { post: post?.slugs?.find((s) => s.locale === "en")?.value },
    sv: { post: post?.slugs?.find((s) => s.locale === "sv")?.value },
  });
</script>

<template>
  <div :class="$style.post">
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error?.message }}</div>
    <div v-if="post !== null && post?.image?.responsiveImage" :class="$style.post">
      <h1>{{ post.title }}</h1>
      <Image
        :class="$style['image-wrap']"
        :img-class="$style.image"
        :placeholder-class="$style.placeholder"
        :data="post.image.responsiveImage"
      />
    </div>
    <Markdown v-if="post?.content" :source="post.content" :class="$style.content" />

    <h3>Structured text</h3>
    <StructuredText :data="post?.structuredContent as any" />
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
    height: 50vh;
    object-fit: cover;
    border-radius: 100px;
  }

  .placeholder {
    filter: grayscale(1);
    opacity: 0.2 !important;
  }
</style>
