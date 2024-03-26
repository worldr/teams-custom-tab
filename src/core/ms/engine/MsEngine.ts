// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { TeamsApp } from "@microsoft/microsoft-graph-types";
import { Graph } from "../graph/Graph";

export interface MsEngine {
	readonly graph: Graph | null;
	get context(): ms.app.Context | null;
}

export abstract class MsEngineBase {
	protected status = {
		available: false,
		contextIds: {
			id: "",
			channelId: "",
			webUrl: "",
			teamName: "",
			teamId: "",
		},
		internalTabId: "",
		setupComplete: false,
	};

	get state(): Readonly<typeof this.status> {
		return this.status;
	}

	constructor(protected isIntegratoinBlocked: boolean) {
		if (this.isIntegratoinBlocked) {
			console.warn("Blocking MS integration!");
		} else {
			console.info("Creating MS integration engine.");
		}
	}

	get context(): ms.app.Context | null {
		return null;
	}
}
// Mon Feb 19 19:04:50 UTC 2024
// Tue Feb 20 08:25:50 UTC 2024
// Tue Feb 27 08:25:36 UTC 2024
// Tue Mar  5 08:25:59 UTC 2024
// Tue Mar 12 08:25:46 UTC 2024
// Tue Mar 19 08:25:47 UTC 2024
// Tue Mar 26 08:26:19 UTC 2024
