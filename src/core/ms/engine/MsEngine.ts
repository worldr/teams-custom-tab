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
