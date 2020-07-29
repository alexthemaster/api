import { Piece, PieceOptions } from '@klasa/core';
import { kRoutePathCacheSymbol } from '../Api';
import type { RouteCacheDefinition } from '../decorators/HttpMethods';
import type { RouteStore } from './RouteStore';

/**
 * @since 1.0.0
 */
export abstract class Route extends Piece {
	/**
	 * @since 1.0.0
	 */
	public route: string;

	/**
	 * Internal route remains empty until either the store fills it from piece options or the decorator sets it.
	 * Its main function is acting as the main route for the DEFAULT HttpMethod decorators.
	 * OR as the base route for decorator defined sub routes.
	 * @protected
	 * @since 1.0.0
	 */
	protected $internalRoute = '';

	public constructor(store: RouteStore, dir: string, file: string[], options: PieceOptions = {}) {
		super(store, dir, file, options);

		this.route = `${this.client.options.api.prefix}${this.$internalRoute}`;
	}

	/**
	 * @since 1.0.0
	 */
	public static [kRoutePathCacheSymbol]: RouteCacheDefinition[];
}
