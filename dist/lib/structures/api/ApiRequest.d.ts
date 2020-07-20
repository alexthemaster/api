/// <reference types="node" />
import { IncomingMessage } from 'http';
export interface UserAuthObject {
    token: string;
    refresh: string;
    user_id: string;
    expires: number;
}
export declare class ApiRequest extends IncomingMessage {
}
export interface ApiRequest {
    originalUrl: string;
    path: string;
    search: string;
    query: Record<string, string | string[]>;
    params: Record<string, string>;
    body?: any;
    length?: number;
    auth?: UserAuthObject;
}
//# sourceMappingURL=ApiRequest.d.ts.map