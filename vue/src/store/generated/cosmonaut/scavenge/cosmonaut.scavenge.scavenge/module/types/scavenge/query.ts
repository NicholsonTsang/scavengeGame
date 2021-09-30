/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Scavenge } from '../scavenge/scavenge'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'cosmonaut.scavenge.scavenge'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetScavengeRequest {
  index: string
}

export interface QueryGetScavengeResponse {
  Scavenge: Scavenge | undefined
}

export interface QueryAllScavengeRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllScavengeResponse {
  Scavenge: Scavenge[]
  pagination: PageResponse | undefined
}

const baseQueryGetScavengeRequest: object = { index: '' }

export const QueryGetScavengeRequest = {
  encode(message: QueryGetScavengeRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetScavengeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetScavengeRequest } as QueryGetScavengeRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetScavengeRequest {
    const message = { ...baseQueryGetScavengeRequest } as QueryGetScavengeRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetScavengeRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetScavengeRequest>): QueryGetScavengeRequest {
    const message = { ...baseQueryGetScavengeRequest } as QueryGetScavengeRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetScavengeResponse: object = {}

export const QueryGetScavengeResponse = {
  encode(message: QueryGetScavengeResponse, writer: Writer = Writer.create()): Writer {
    if (message.Scavenge !== undefined) {
      Scavenge.encode(message.Scavenge, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetScavengeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetScavengeResponse } as QueryGetScavengeResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Scavenge = Scavenge.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetScavengeResponse {
    const message = { ...baseQueryGetScavengeResponse } as QueryGetScavengeResponse
    if (object.Scavenge !== undefined && object.Scavenge !== null) {
      message.Scavenge = Scavenge.fromJSON(object.Scavenge)
    } else {
      message.Scavenge = undefined
    }
    return message
  },

  toJSON(message: QueryGetScavengeResponse): unknown {
    const obj: any = {}
    message.Scavenge !== undefined && (obj.Scavenge = message.Scavenge ? Scavenge.toJSON(message.Scavenge) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetScavengeResponse>): QueryGetScavengeResponse {
    const message = { ...baseQueryGetScavengeResponse } as QueryGetScavengeResponse
    if (object.Scavenge !== undefined && object.Scavenge !== null) {
      message.Scavenge = Scavenge.fromPartial(object.Scavenge)
    } else {
      message.Scavenge = undefined
    }
    return message
  }
}

const baseQueryAllScavengeRequest: object = {}

export const QueryAllScavengeRequest = {
  encode(message: QueryAllScavengeRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllScavengeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllScavengeRequest } as QueryAllScavengeRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllScavengeRequest {
    const message = { ...baseQueryAllScavengeRequest } as QueryAllScavengeRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllScavengeRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllScavengeRequest>): QueryAllScavengeRequest {
    const message = { ...baseQueryAllScavengeRequest } as QueryAllScavengeRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllScavengeResponse: object = {}

export const QueryAllScavengeResponse = {
  encode(message: QueryAllScavengeResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Scavenge) {
      Scavenge.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllScavengeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllScavengeResponse } as QueryAllScavengeResponse
    message.Scavenge = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Scavenge.push(Scavenge.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllScavengeResponse {
    const message = { ...baseQueryAllScavengeResponse } as QueryAllScavengeResponse
    message.Scavenge = []
    if (object.Scavenge !== undefined && object.Scavenge !== null) {
      for (const e of object.Scavenge) {
        message.Scavenge.push(Scavenge.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllScavengeResponse): unknown {
    const obj: any = {}
    if (message.Scavenge) {
      obj.Scavenge = message.Scavenge.map((e) => (e ? Scavenge.toJSON(e) : undefined))
    } else {
      obj.Scavenge = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllScavengeResponse>): QueryAllScavengeResponse {
    const message = { ...baseQueryAllScavengeResponse } as QueryAllScavengeResponse
    message.Scavenge = []
    if (object.Scavenge !== undefined && object.Scavenge !== null) {
      for (const e of object.Scavenge) {
        message.Scavenge.push(Scavenge.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a scavenge by index. */
  Scavenge(request: QueryGetScavengeRequest): Promise<QueryGetScavengeResponse>
  /** Queries a list of scavenge items. */
  ScavengeAll(request: QueryAllScavengeRequest): Promise<QueryAllScavengeResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Scavenge(request: QueryGetScavengeRequest): Promise<QueryGetScavengeResponse> {
    const data = QueryGetScavengeRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.scavenge.scavenge.Query', 'Scavenge', data)
    return promise.then((data) => QueryGetScavengeResponse.decode(new Reader(data)))
  }

  ScavengeAll(request: QueryAllScavengeRequest): Promise<QueryAllScavengeResponse> {
    const data = QueryAllScavengeRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.scavenge.scavenge.Query', 'ScavengeAll', data)
    return promise.then((data) => QueryAllScavengeResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
