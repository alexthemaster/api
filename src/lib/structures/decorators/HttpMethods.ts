import { kRoutePathCacheSymbol } from '../../SkyraApi';
import { Methods } from '../http/HttpMethods';

/**
 * @since 1.0.0
 * @param httpMethod The standard Http method for the specified route.
 * @param route The route on which this method should answer.
 */
export function createHttpMethodDecorator(httpMethod: Methods, route: string) {
	return (target: Record<PropertyKey, unknown>, method: string) => {
		const ctor = target.constructor;
		const previous = Reflect.get(ctor, kRoutePathCacheSymbol);

		if (previous) {
			previous.push({ method, route, httpMethod });
		} else {
			Reflect.defineProperty(ctor, kRoutePathCacheSymbol, {
				value: [{ method, route, httpMethod }],
				configurable: false,
				enumerable: false,
				writable: false
			});
		}
	};
}

// From this point onward we don't want naming convention to be enforced
/* eslint-disable @typescript-eslint/naming-convention */

/**
 * @since 1.0.0
 * @param route The route on which this method should answer.
 */
export const HttpGet = (route: string) => createHttpMethodDecorator(Methods.GET, route);
