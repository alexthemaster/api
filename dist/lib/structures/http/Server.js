"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const http_1 = require("http");
/**
 * @since 1.0.0
 */
class Server {
    /**
     * @since 1.0.0
     * @param client The @klasa/core Client instance
     */
    constructor(client) {
        this.kClient = client;
        this.kServer = http_1.createServer(this.kClient.options.api.server);
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map