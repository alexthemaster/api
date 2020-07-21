/// <reference types="node" />
import { Client, Plugin } from '@klasa/core';
import type { ServerOptions } from 'https';
import { Server } from './structures/http/Server';
export declare const kRoutePathCacheSymbol: unique symbol;
export declare class SkyraApi implements Plugin {
    static [Client.plugin](this: Client): void;
}
export interface SkyraApiOptions {
    /**
     * @since 1.0.0
     */
    server: ServerOptions;
}
declare module '@klasa/core/dist/src/lib/client/Client' {
    interface Client {
        server: Server;
    }
    interface ClientOptions {
        api: Partial<SkyraApiOptions>;
    }
}
//# sourceMappingURL=SkyraApi.d.ts.map