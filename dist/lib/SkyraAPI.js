"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyraAPI = void 0;
const core_1 = require("@klasa/core");
const Server_1 = require("./structures/http/Server");
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class SkyraAPI {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    static [core_1.Client.plugin]() {
        this.server = new Server_1.Server(this);
    }
}
exports.SkyraAPI = SkyraAPI;
//# sourceMappingURL=SkyraAPI.js.map