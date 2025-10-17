export default defineEventHandler(async (event) => {
  console.log("middleware", "auth", "server", event.path);
  if (event.path === "/login") return;
  //const { user } = await getUserSession(event);

  //if (!user) return sendRedirect(event, "/login");

  //const { loggedIn } = useUserSession();
  //if (!loggedIn.value) return navigateTo("/login");
});
