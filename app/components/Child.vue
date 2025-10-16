<script setup lang="ts">
  defineProps<{ value: string; valueClass?: string }>();
  defineOptions({
    //inheritAttrs: false,
  });
</script>
<template>
  <div :class="valueClass">
    <h1>{{ value }}</h1>
    <p>hola</p>
  </div>
</template>
