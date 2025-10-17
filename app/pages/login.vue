<script setup lang="ts">
  const { fetch: fetchUserSession } = useUserSession();
  const error = ref("");

  const formData = reactive({
    email: "",
    password: "",
  });

  async function onLogin() {
    error.value = "";
    try {
      const res = await $fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      console.log(res);
      if (res?.status === 200) {
        await fetchUserSession();
        navigateTo("/protected");
      }
    } catch (e) {
      error.value = (e as Error).message;
    }
  }
</script>

<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="onLogin">
      <label for="login">Login</label>
      <input
        id="email"
        v-model="formData.email"
        type="text"
        autocomplete="off"
      />

      <label for="password">Password</label>
      <input
        id="password"
        v-model="formData.password"
        type="password"
        autocomplete="off"
      />

      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
    <NuxtLink to="/protected">Go to protected page</NuxtLink>
  </div>
</template>
