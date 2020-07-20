/// <reference types="node" />
import { ServerResponse } from 'http';
import { Types as MimeTypes } from '../../utils/Mime';
import type { CookieStore } from './CookieStore';
export declare class ApiResponse extends ServerResponse {
    cookies: CookieStore;
    ok(data?: unknown): void;
    noContent(): void;
    badRequest(data?: unknown): void;
    unauthorized(data?: unknown): void;
    forbidden(data?: unknown): void;
    notFound(data?: unknown): void;
    error(error: number | string): void;
    status(code: number): this;
    json(data: any): void;
    text(data: string): void;
    setContentType(contentType: MimeTypes): this;
}
//# sourceMappingURL=ApiResponse.d.ts.map