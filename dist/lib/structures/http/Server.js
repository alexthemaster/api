"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
class Server {
    /**
     * @since 0.0.1
     * @param client The @klasa/core Client instance
     */
    constructor(client) {
        var _a;
        this.kClient = client;
        // TODO: Remove once routing is implemented
        console.log((_a = this.kClient.user) === null || _a === void 0 ? void 0 : _a.id);
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map