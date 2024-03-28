// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { TeamsApp } from "@microsoft/microsoft-graph-types";
import { FrameContexts } from "@microsoft/teams-js";
import { main } from "./Globals";

export class AuthManager {
	constructor() {}

	private state = {
		statusMessage: "",
		recoveryMessage: null,
		loginTitle: null,
		showReport: false,
		worldr: null,
		guest: null,
		ms: null,
		msApiAvailable: false,
	};
	private deviceId: string = `mst:${Math.random() * 1024}`;

	async startMsFlow(): Promise<void> {
		const msState = Promise.resolve({});
		console.info("AUTHORISATION Thu Mar 28 08:25:53 UTC 2024:", {
			"Has ms auth data": ms != null,
		});
		if (msState == null) {
			ms.app.getContext();
			ms.app.getFrameContext();
		}
	}

	// Get MS access, refresh and id tokens for
	private async startMsAuthFlow(): Promise<void> {
		console.info("Beginning explicit auth attempt");

		console.info(
			"Starting popup authentication flow, passing chars in base64 query"
		);
		const params: ms.authentication.AuthenticatePopUpParameters = {
			url: "auth-start",
			width: 400,
			height: 600,
		};

		// This promise doesn't resolve on Android:
		// https://github.com/OfficeDev/microsoft-teams-library-js/issues/1715
		// This is why we resort to periodic checking for the result getting stored in IDB.
		ms.authentication
			.authenticate(params)
			.then(result => {
				this.processMsAuthSuccess();
			})
			.catch(reason => {
				// Outcome: auth flow was interrupted, need interaction
				this.authFailureFallback(reason);
				return "Failure: rejected.";
			});
	}

	private async processMsAuthSuccess(): Promise<void> {}

	private async authFailureFallback(input: unknown): Promise<void> {
		this.cleanAuthTemporaryData();
	}

	private async cleanAuthTemporaryData(): Promise<void> {}

	private async createAuthAttempt(
		tid: string,
		uid: string,
		hint: string | null
	): Promise<unknown> {
		const endpoint =
			`https://login.microsoftonline.com/${tid}/oauth2/v2.0/authorize?` +
			JSON.stringify("");
		return {
			isSilent: false,
			state: "",
			verifier: "",
			tid: tid ?? "",
			uid: uid ?? "",
			request: "",
			endpoint,
			version: main().version.appVersion,
			time: new Date().getTime(),
		};
	}
}

let instance: AuthManager;
export function auth(): AuthManager {
	if (instance == null) {
		instance = new AuthManager();
	}
	return instance;
}
// Mon Feb 19 19:04:50 UTC 2024
// Tue Feb 20 08:25:50 UTC 2024
// Tue Feb 27 08:25:36 UTC 2024
// Tue Mar  5 08:25:59 UTC 2024
// Tue Mar 12 08:25:46 UTC 2024
// Tue Mar 19 08:25:47 UTC 2024
// Tue Mar 26 08:26:19 UTC 2024
