import { Reader, Writer } from 'protobufjs/minimal';
import { Scavenge } from '../scavenge/scavenge';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "cosmonaut.scavenge.scavenge";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetScavengeRequest {
    index: string;
}
export interface QueryGetScavengeResponse {
    Scavenge: Scavenge | undefined;
}
export interface QueryAllScavengeRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllScavengeResponse {
    Scavenge: Scavenge[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetScavengeRequest: {
    encode(message: QueryGetScavengeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetScavengeRequest;
    fromJSON(object: any): QueryGetScavengeRequest;
    toJSON(message: QueryGetScavengeRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetScavengeRequest>): QueryGetScavengeRequest;
};
export declare const QueryGetScavengeResponse: {
    encode(message: QueryGetScavengeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetScavengeResponse;
    fromJSON(object: any): QueryGetScavengeResponse;
    toJSON(message: QueryGetScavengeResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetScavengeResponse>): QueryGetScavengeResponse;
};
export declare const QueryAllScavengeRequest: {
    encode(message: QueryAllScavengeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllScavengeRequest;
    fromJSON(object: any): QueryAllScavengeRequest;
    toJSON(message: QueryAllScavengeRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllScavengeRequest>): QueryAllScavengeRequest;
};
export declare const QueryAllScavengeResponse: {
    encode(message: QueryAllScavengeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllScavengeResponse;
    fromJSON(object: any): QueryAllScavengeResponse;
    toJSON(message: QueryAllScavengeResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllScavengeResponse>): QueryAllScavengeResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a scavenge by index. */
    Scavenge(request: QueryGetScavengeRequest): Promise<QueryGetScavengeResponse>;
    /** Queries a list of scavenge items. */
    ScavengeAll(request: QueryAllScavengeRequest): Promise<QueryAllScavengeResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Scavenge(request: QueryGetScavengeRequest): Promise<QueryGetScavengeResponse>;
    ScavengeAll(request: QueryAllScavengeRequest): Promise<QueryAllScavengeResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
