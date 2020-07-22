import { Client, Plugin } from '@klasa/core';
import { mergeDefault } from '@klasa/utils';
import type { ServerOptions } from 'https';
import { Server } from './structures/http/Server';

export const kRoutePathCacheSymbol = Symbol('pathCache');

/**
 * @since 1.0.0
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SkyraApi implements Plugin {
	/**
	 * @since 1.0.0
	 */
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	public static [Client.plugin](this: Client): void {
		mergeDefault({}, this.options);

		this.server = new Server(this);
	}
}

/**
 * @since 1.0.0
 */
export interface SkyraApiOptions {
	/**
	 * @since 1.0.0
	 */
	prefix: string;

	/**
	 * @since 1.0.0
	 */
	server: ServerOptions;
}

declare module '@klasa/core/dist/src/lib/client/Client' {
	export interface Client {
		server: Server;
	}

	export interface ClientOptions {
		api: Partial<SkyraApiOptions>;
	}
}
