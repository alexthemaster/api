"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyraApi = exports.kRoutePathCacheSymbol = void 0;
const core_1 = require("@klasa/core");
const utils_1 = require("@klasa/utils");
const Server_1 = require("./structures/http/Server");
exports.kRoutePathCacheSymbol = Symbol('pathCache');
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class SkyraApi {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    static [core_1.Client.plugin]() {
        utils_1.mergeDefault({}, this.options);
        this.server = new Server_1.Server(this);
    }
}
exports.SkyraApi = SkyraApi;
//# sourceMappingURL=SkyraApi.js.map