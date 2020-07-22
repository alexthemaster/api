"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const core_1 = require("@klasa/core");
const SkyraApi_1 = require("../SkyraApi");
/**
 * @since 1.0.0
 */
class Route extends core_1.Piece {
    constructor(store, dir, file, options = {}) {
        super(store, dir, file, options);
        /**
         * Internal route remains empty until either the store fills it from piece options or the decorator sets it.
         * Its main function is acting as the main route for the DEFAULT HttpMethod decorators.
         * OR as the base route for decorator defined sub routes.
         * @protected
         * @since 1.0.0
         */
        this.$internalRoute = '';
        this.route = `${this.client.options.api.prefix}${this.$internalRoute}`;
    }
}
exports.Route = Route;
//# sourceMappingURL=Route.js.map