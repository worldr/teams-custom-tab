import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { TeamsApp } from "@microsoft/microsoft-graph-types";

export interface TeamListItem {
	id: string;
	displayName: string;
	visibility: string;
}

export interface TeamsList {
	value: TeamListItem[];
}

export interface TeamWithApp {
	team: TeamListItem;
	app?: TeamsApp | null;
}
