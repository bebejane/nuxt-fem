<script setup lang="ts"></script>

<template>
  <div>
    <Child value="test page!" class="test" />
    <p class="test">sadsa</p>
  </div>
</template>

<style lang="scss" scoped>
  :deep(.test) {
    background-color: pink !important;
    p {
      color: red;
    }
  }
  .value {
    background-color: red;
  }
</style>
