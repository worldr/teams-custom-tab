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
		console.info("AUTHORISATION Sun Aug 18 08:30:41 UTC 2024:", {
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
// Tue Apr  2 08:26:13 UTC 2024
// Tue Apr  9 08:26:05 UTC 2024
// Tue Apr 16 08:26:14 UTC 2024
// Tue Apr 23 08:26:29 UTC 2024
// Tue Apr 30 08:27:02 UTC 2024
// Tue May  7 08:26:43 UTC 2024
// Tue May 14 08:27:37 UTC 2024
// Tue May 21 08:26:55 UTC 2024
// Tue May 28 08:27:48 UTC 2024
// Tue Jun  4 08:27:20 UTC 2024
// Tue Jun 11 08:27:53 UTC 2024
// Tue Jun 18 08:28:12 UTC 2024
// Tue Jun 25 08:27:34 UTC 2024
// Tue Jul  2 08:27:28 UTC 2024
// Tue Jul  9 08:27:51 UTC 2024
// Tue Jul 16 08:32:34 UTC 2024
// Tue Jul 23 08:28:37 UTC 2024
// Tue Jul 30 08:27:15 UTC 2024
// Tue Aug  6 08:27:30 UTC 2024
// Tue Aug 13 08:28:08 UTC 2024
