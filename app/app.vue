<template>
	<NuxtPage />
</template>

<style global>
.page-enter-active,
.page-leave-active {
	opacity: 1;
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
	transition: all 0.4s;
}
</style>
