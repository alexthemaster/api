/// <reference types="node" />
import type { Client } from '@klasa/core';
import { Server as HttpServer } from 'http';
export declare class Server {
    /**
     * The http.Server instance that manages the recieved HTTP requests.
     * @since 1.0.0
     */
    readonly kServer: HttpServer;
    /**
     * The managing Client instance on which this Server instance is mounted.
     * @since 1.0.0
     */
    private readonly kClient;
    /**
     * @since 1.0.0
     * @param client The @klasa/core Client instance
     */
    constructor(client: Client);
}
//# sourceMappingURL=Server.d.ts.map