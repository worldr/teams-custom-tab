// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import {
	AuthenticationProvider,
	AuthenticationProviderOptions,
	Client,
} from "@microsoft/microsoft-graph-client";
import * as ms from "@microsoft/teams-js";
import { TeamsApp } from "@microsoft/microsoft-graph-types";
import "isomorphic-fetch";

export class Graph implements AuthenticationProvider {
	private client: Client;
	private tokenProvider: () => string | null = () => null;
	private requestCount = 0;

	constructor() {
		this.client = Client.initWithMiddleware({
			debugLogging: true,
			authProvider: this,
		});
	}

	getAccessToken(
		options?: AuthenticationProviderOptions | null
	): Promise<string> {
		if (options != null && options.scopes != null) {
			console.debug("Scopes requested by graph library:", options.scopes);
		}
		return Promise.resolve(this.tokenProvider() ?? "");
	}
}
// Mon Feb 19 19:04:50 UTC 2024
