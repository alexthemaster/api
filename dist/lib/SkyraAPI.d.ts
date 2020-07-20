import { Client, Plugin } from '@klasa/core';
import { Server } from './structures/http/Server';
export declare class SkyraAPI implements Plugin {
    static [Client.plugin](this: Client): void;
}
declare module '@klasa/core/dist/src/lib/client/Client' {
    interface Client {
        server: Server;
    }
}
//# sourceMappingURL=SkyraAPI.d.ts.map