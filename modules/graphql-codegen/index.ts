import { defineNuxtModule } from '@nuxt/kit';
import { generate } from '@graphql-codegen/cli';
import type { Types } from '@graphql-codegen/plugin-helpers';
import defu from 'defu';
import type { Nuxt } from 'nuxt/schema';

type CodegenModuleOptions = Types.Config;

export default defineNuxtModule<CodegenModuleOptions>({
	meta: {
		name: 'graphql-codegen',
		configKey: 'graphqlCodegen',
	},
	async setup(options: CodegenModuleOptions, nuxt: Nuxt) {
		//console.log(options.config);
		async function generateCode() {
			const config = defu(
				options,
				getDefaultConfig({
					dir: 'app/graphql',
					types: 'app/types',
					queries: 'app/composables',
				})
			);
			await generate(config, true);
		}
		nuxt.hook('builder:watch', generateCode);
	},
	moduleDependencies: {
		'@graphql-codegen/cli': {
			version: '>=5',
			optional: true,
		},
		'@graphql-codegen/typed-document-node': {
			version: '>=5',
			optional: true,
		},
		'@graphql-codegen/typescript': {
			version: '>=4',
			optional: true,
		},
		'@graphql-codegen/typescript-graphql-files-modules': {
			version: '>=3',
			optional: true,
		},
		'@graphql-codegen/typescript-operations': {
			version: '>=4.5',
			optional: true,
		},
		'defu': {
			version: '>=6',
			optional: true,
		},
	},
});

const defaultModuleConfig = {
	dedupeOperationSuffix: true,
	dedupeFragments: true,
	pureMagicComment: false,
	exportFragmentSpreadSubTypes: true,
	namingConvention: 'keep',
	skipDocumentsValidation: false,
};

export type ConfigOptions = {
	dir: string;
	types: string;
	queries: string;
};

const getDefaultConfig = (options: ConfigOptions): Types.Config => {
	const documents = `${options.dir}/**/*.gql`;
	const typesPath = `${options.types}/datocms.d.ts`;
	const modulesPath = `${options.types}/document-modules.d.ts`;
	const queriesPath = `${options.queries}/grqphql-queries.ts`;

	return {
		schema: {
			'https://graphql.datocms.com': {
				headers: {
					'Authorization': process.env.DATOCMS_API_TOKEN as string,
					'X-Exclude-Invalid': 'true',
				},
			},
		},
		documents,
		generates: {
			[typesPath]: {
				plugins: ['typescript', 'typescript-operations'],
				config: { ...defaultModuleConfig, noExport: true },
			},
			[modulesPath]: {
				plugins: ['typescript-graphql-files-modules'],
				config: { ...defaultModuleConfig },
			},
			[queriesPath]: {
				plugins: ['typed-document-node'],
				config: { ...defaultModuleConfig, useTypeImports: true },
			},
		},
	};
};
