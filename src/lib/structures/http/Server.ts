import type { Client } from '@klasa/core';

export class Server {
	/**
	 * The managing Client instance on which this Server instance is mounted.
	 * @since 0.0.1
	 */
	private readonly kClient: Client;

	/**
	 * @since 0.0.1
	 * @param client The @klasa/core Client instance
	 */
	public constructor(client: Client) {
		this.kClient = client;

		// TODO: Remove once routing is implemented
		console.log(this.kClient.user?.id);
	}
}
