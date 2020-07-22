"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteStore = void 0;
const cache_1 = require("@klasa/cache");
const core_1 = require("@klasa/core");
const http_1 = require("http");
const SkyraApi_1 = require("../SkyraApi");
const pathParsing_1 = require("../utils/pathParsing");
const Route_1 = require("./Route");
/**
 * @since 1.0.0
 */
class RouteStore extends core_1.Store {
    constructor(client) {
        super(client, 'routes', Route_1.Route);
        this.routingTable = new cache_1.Cache();
        for (const method of http_1.METHODS)
            this.routingTable.set(method, new cache_1.Cache());
    }
    computePaths() {
        for (const route of this.values()) {
            const paths = Reflect.get(route.constructor, SkyraApi_1.kRoutePathCacheSymbol);
            if (!paths || paths.length === 0)
                continue;
            for (const path of paths) {
                const fullPath = `${route.path}${path.route}`;
                const methodRoute = this.routingTable.get(path.httpMethod);
                methodRoute.set(pathParsing_1.parse(fullPath), { route, method: path.method });
            }
        }
    }
}
exports.RouteStore = RouteStore;
//# sourceMappingURL=RouteStore.js.map