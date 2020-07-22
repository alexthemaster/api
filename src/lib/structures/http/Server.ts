import type { Client } from '@klasa/core';
import { createServer as httpCreateServer, Server as HttpServer } from 'http';

/**
 * @since 1.0.0
 */
export class Server {
	/**
	 * The http.Server instance that manages the recieved HTTP requests.
	 * @since 1.0.0
	 */
	public readonly kServer: HttpServer;

	/**
	 * The managing Client instance on which this Server instance is mounted.
	 * @private
	 * @since 1.0.0
	 */
	private readonly kClient: Client;

	/**
	 * @since 1.0.0
	 * @param client The @klasa/core Client instance
	 */
	public constructor(client: Client) {
		this.kClient = client;
		this.kServer = httpCreateServer(this.kClient.options.api.server);
	}
}
