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
