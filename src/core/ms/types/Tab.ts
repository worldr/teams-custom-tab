// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import {
	TeamsApp,
	TeamsTabConfiguration,
} from "@microsoft/microsoft-graph-types";
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";

export interface TabsListItem {
	id: string;
	displayName: string;
	webUrl: string;
	configuration: TeamsTabConfiguration;
	teamsApp: TeamsApp;
}

export interface TabsList {
	value: TabsListItem[];
}
// Mon Feb 19 19:04:50 UTC 2024
// Tue Feb 20 08:25:50 UTC 2024
// Tue Feb 27 08:25:36 UTC 2024
// Tue Mar  5 08:25:59 UTC 2024
// Tue Mar 12 08:25:46 UTC 2024
// Tue Mar 19 08:25:47 UTC 2024
// Tue Mar 26 08:26:19 UTC 2024
// Tue Apr  2 08:26:13 UTC 2024
