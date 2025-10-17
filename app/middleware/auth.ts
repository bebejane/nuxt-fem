export default defineNuxtRouteMiddleware((props) => {
  console.log("middleware", "auth", props.fullPath);
  const { loggedIn } = useUserSession();
  if (!loggedIn.value) return navigateTo("/login");
});
