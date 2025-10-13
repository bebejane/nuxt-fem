import { defineStore } from 'pinia';

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useProjects = defineStore('projects', {
	state: (): { projects: ProjectQuery['project'][] } => ({ projects: [] }),
	getters: {
		art: (state) => state.projects.filter((p) => p?.category === 'art'),
		tech: (state) => state.projects.filter((p) => p?.category === 'tech'),
	},
	actions: {
		filter(f?: 'art' | 'tech') {
			this.$state.projects = this.$state.projects.filter((p) => p?.category === f);
		},
	},
});
