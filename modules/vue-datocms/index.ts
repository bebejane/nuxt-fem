import { addImports, defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
	setup() {
		const names = ['Image', 'StructuredText'];
		console.log(names);
		names.forEach((name) => addImports({ name, from: 'vue-datocms' }));
	},
});
