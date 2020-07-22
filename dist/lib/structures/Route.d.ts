import { Piece, PieceOptions } from '@klasa/core';
import { kRoutePathCacheSymbol } from '../SkyraApi';
import type { RouteCacheDefinition } from '../decorators/HttpMethods';
import type { RouteStore } from './RouteStore';
/**
 * @since 1.0.0
 */
export declare abstract class Route extends Piece {
    /**
     * @since 1.0.0
     */
    route: string;
    /**
     * Internal route remains empty until either the store fills it from piece options or the decorator sets it.
     * Its main function is acting as the main route for the DEFAULT HttpMethod decorators.
     * OR as the base route for decorator defined sub routes.
     * @protected
     * @since 1.0.0
     */
    protected $internalRoute: string;
    constructor(store: RouteStore, dir: string, file: string[], options?: PieceOptions);
    /**
     * @since 1.0.0
     */
    static [kRoutePathCacheSymbol]: RouteCacheDefinition[];
}
//# sourceMappingURL=Route.d.ts.map