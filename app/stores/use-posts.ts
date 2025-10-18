import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useProjects = defineStore("posts", {
  state: (): { posts: AllPostsQuery["allPosts"] } => ({ posts: [] }),
  getters: {
    latest: (state) =>
      state.posts
        .sort((a, b) =>
          new Date(b.createdAt).getTime() > new Date(a.createdAt).getTime()
            ? 1
            : -1
        )
        .slice(0, 3),
  },
  actions: {},
});
