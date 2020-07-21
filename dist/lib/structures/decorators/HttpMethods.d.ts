import { Methods } from '../http/HttpMethods';
/**
 * @since 1.0.0
 * @param httpMethod The standard Http method for the specified route.
 * @param route The route on which this method should answer.
 */
export declare function createHttpMethodDecorator(httpMethod: Methods, route: string): (target: Record<PropertyKey, unknown>, method: string) => void;
/**
 * @since 1.0.0
 * @param route The route on which this method should answer.
 */
export declare const HttpGet: (route: string) => (target: Record<PropertyKey, unknown>, method: string) => void;
//# sourceMappingURL=HttpMethods.d.ts.map