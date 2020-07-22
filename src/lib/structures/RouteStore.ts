import { Cache } from '@klasa/cache';
import { Client, PieceConstructor, Store } from '@klasa/core';
import { METHODS } from 'http';
import type { RouteCacheDefinition } from '../decorators/HttpMethods';
import { kRoutePathCacheSymbol } from '../SkyraApi';
import { parse, ParsedPart } from '../utils/pathParsing';
import type { Methods } from './http/HttpMethods';
import { Route } from './Route';

/**
 * @since 1.0.0
 */
export class RouteStore extends Store<Route> {
	public routingTable: Cache<Methods, Cache<ParsedPart[], { route: Route; method: string }>> = new Cache();

	public constructor(client: Client) {
		super(client, 'routes', (Route as unknown) as PieceConstructor<Route>);

		for (const method of METHODS) this.routingTable.set(method as Methods, new Cache());
	}

	public computePaths() {
		for (const route of this.values()) {
			const paths: RouteCacheDefinition[] | undefined = Reflect.get(route.constructor, kRoutePathCacheSymbol);
			if (!paths || paths.length === 0) continue;

			for (const path of paths) {
				const fullPath = `${route.path}${path.route}`;
				const methodRoute = this.routingTable.get(path.httpMethod)!;

				methodRoute.set(parse(fullPath), { route, method: path.method });
			}
		}
	}
}
