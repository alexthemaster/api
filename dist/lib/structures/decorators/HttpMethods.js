"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpGet = exports.createHttpMethodDecorator = void 0;
const SkyraApi_1 = require("../../SkyraApi");
require("../http/HttpMethods");
/**
 * @since 1.0.0
 * @param httpMethod The standard Http method for the specified route.
 * @param route The route on which this method should answer.
 */
function createHttpMethodDecorator(httpMethod, route) {
    return (target, method) => {
        const ctor = target.constructor;
        const previous = Reflect.get(ctor, SkyraApi_1.kRoutePathCacheSymbol);
        if (previous) {
            previous.push({ method, route, httpMethod });
        }
        else {
            Reflect.defineProperty(ctor, SkyraApi_1.kRoutePathCacheSymbol, {
                value: [{ method, route, httpMethod }],
                configurable: false,
                enumerable: false,
                writable: false
            });
        }
    };
}
exports.createHttpMethodDecorator = createHttpMethodDecorator;
// From this point onward we don't want naming convention to be enforced
/* eslint-disable @typescript-eslint/naming-convention */
/**
 * @since 1.0.0
 * @param route The route on which this method should answer.
 */
exports.HttpGet = (route) => createHttpMethodDecorator("GET" /* GET */, route);
//# sourceMappingURL=HttpMethods.js.map