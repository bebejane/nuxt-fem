import { executeQuery, ApiError, type ExecuteQueryOptions, type TypedDocumentNode } from '@datocms/cda-client';
import type { DocumentNode, ExecutableDefinitionNode } from 'graphql';

export type ApiQueryOptions = ExecuteQueryOptions & { all?: boolean };

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useApiQuery = async <T, V = void>(
	query: DocumentNode,
	variables?: ExecuteQueryOptions<V>['variables'],
	options?: ExecuteQueryOptions<V>
): Promise<T> => {
	const config = useRuntimeConfig();
	return executeQuery(query, { ...options, variables, token: config.public.apiToken as string });
};
