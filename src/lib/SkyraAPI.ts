import { Client, Plugin } from '@klasa/core';
import { Server } from './structures/http/Server';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SkyraAPI implements Plugin {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	public static [Client.plugin](this: Client): void {
		this.server = new Server(this);
	}
}

declare module '@klasa/core/dist/src/lib/client/Client' {
	export interface Client {
		server: Server;
	}
}
