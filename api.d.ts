import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ErrorResponse, HealthStatus, SyncSession, SyncSessionInput } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetSyncSessionUrl: (sessionId: string) => string;
/**
 * @summary Load a sync session
 */
export declare const getSyncSession: (sessionId: string, options?: Parameters<typeof customFetch>[1]) => Promise<SyncSession>;
export declare const getGetSyncSessionQueryKey: (sessionId: string) => readonly [`/api/sync/sessions/${string}`];
export declare const getGetSyncSessionQueryOptions: <TData = Awaited<ReturnType<typeof getSyncSession>>, TError = ErrorType<ErrorResponse>>(sessionId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSyncSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSyncSession>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSyncSessionQueryResult = NonNullable<Awaited<ReturnType<typeof getSyncSession>>>;
export type GetSyncSessionQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Load a sync session
 */
export declare function useGetSyncSession<TData = Awaited<ReturnType<typeof getSyncSession>>, TError = ErrorType<ErrorResponse>>(sessionId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSyncSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpsertSyncSessionUrl: (sessionId: string) => string;
/**
 * @summary Save a sync session
 */
export declare const upsertSyncSession: (sessionId: string, syncSessionInput: SyncSessionInput, options?: Parameters<typeof customFetch>[1]) => Promise<SyncSession>;
export declare const getUpsertSyncSessionMutationKey: () => readonly ["upsertSyncSession"];
export declare const getUpsertSyncSessionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof upsertSyncSession>>, TError, UpsertSyncSessionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof upsertSyncSession>>, TError, UpsertSyncSessionMutationVariables, TContext>;
export type UpsertSyncSessionMutationResult = NonNullable<Awaited<ReturnType<typeof upsertSyncSession>>>;
export type UpsertSyncSessionMutationBody = BodyType<SyncSessionInput>;
export type UpsertSyncSessionMutationError = ErrorType<unknown>;
export type UpsertSyncSessionMutationVariables = {
    sessionId: string;
    data: BodyType<SyncSessionInput>;
};
/**
* @summary Save a sync session
*/
export declare const useUpsertSyncSession: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof upsertSyncSession>>, TError, UpsertSyncSessionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof upsertSyncSession>>, TError, UpsertSyncSessionMutationVariables, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map