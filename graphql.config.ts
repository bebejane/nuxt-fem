import 'dotenv/config';
import type { IGraphQLConfig } from 'graphql-config';

const defaultConfig = {
	dedupeOperationSuffix: true,
	dedupeFragments: true,
	pureMagicComment: false,
	exportFragmentSpreadSubTypes: true,
	namingConvention: 'keep',
	skipDocumentsValidation: false,
};

const config: IGraphQLConfig = {
	schema: {
		'https://graphql.datocms.com': {
			headers: {
				'Authorization': process.env.DATOCMS_API_TOKEN as string,
				'X-Exclude-Invalid': 'true',
			},
		},
	},
	documents: 'app/graphql/**/*.gql',

	extensions: {
		codegen: {
			overwrite: true,

			generates: {
				'app/types/datocms.d.ts': {
					plugins: ['typescript', 'typescript-operations'],
					config: { ...defaultConfig, noExport: true },
				},
				'app/types/document-modules.d.ts': {
					plugins: ['typescript-graphql-files-modules'],
					config: { ...defaultConfig },
				},
				'app/composables/grqphql-queries.ts': {
					plugins: ['typed-document-node'],
					config: { ...defaultConfig, useTypeImports: true },
				},
			},
		},
	},
};

export default config;
