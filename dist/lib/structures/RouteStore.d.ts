import { Cache } from '@klasa/cache';
import { Client, Store } from '@klasa/core';
import { ParsedPart } from '../utils/pathParsing';
import type { Methods } from './http/HttpMethods';
import { Route } from './Route';
/**
 * @since 1.0.0
 */
export declare class RouteStore extends Store<Route> {
    routingTable: Cache<Methods, Cache<ParsedPart[], {
        route: Route;
        method: string;
    }>>;
    constructor(client: Client);
    computePaths(): void;
}
//# sourceMappingURL=RouteStore.d.ts.map