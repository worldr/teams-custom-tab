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
// Tue Feb 20 08:25:50 UTC 2024
// Tue Feb 27 08:25:36 UTC 2024
// Tue Mar  5 08:25:59 UTC 2024
// Tue Mar 12 08:25:46 UTC 2024
// Tue Mar 19 08:25:47 UTC 2024
// Tue Mar 26 08:26:19 UTC 2024
