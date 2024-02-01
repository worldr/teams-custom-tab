import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { TeamsApp } from "@microsoft/microsoft-graph-types";

export interface AppsListItem {
	id: string;
	teamsApp: TeamsApp;
}

export interface AppsCatalogue {
	"@odata.context": string;
	value: TeamsApp[];
}
