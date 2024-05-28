// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { TeamsApp } from "@microsoft/microsoft-graph-types";
import { Graph } from "../graph/Graph";
import { MsEngine, MsEngineBase } from "./MsEngine";

export class MsEngineImpl extends MsEngineBase implements MsEngine {
	/**
	 * Resolves when MS API status is determined regardless of whether it is available or not.
	 * This status is determined once and can not change during the app session.
	 **/
	readonly whenInitComplete: Promise<unknown>;

	readonly graph: Graph;

	constructor() {
		super(false);
		this.whenInitComplete = Promise.resolve({});
		this.graph = new Graph();
	}

	private async initialise(): Promise<unknown> {
		console.debug("Is MS api available?");
		await ms.app.initialize().then(console.log).catch(console.error);

		console.debug("MS API is available!");
		console.debug("Can we get application context?");
		const ctx = await ms.app.getContext().catch(reason => {
			return null;
		});
		if (ctx == null) {
			throw new Error(
				`Context callback did not return an object: ${arguments.length} args`
			);
		}

		return this.state;
	}
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
