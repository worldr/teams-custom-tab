// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { TeamsApp } from "@microsoft/microsoft-graph-types";

/**
 * INSTALL APP
 *
 * Request data:
 * {
 *   "teamsApp@odata.bind":"https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/{teams app id from catalogue}"
 * }
 *
 * Add app to team:
 * https://docs.microsoft.com/en-us/graph/api/team-post-installedapps?view=graph-rest-1.0&tabs=http
 *
 * Add app to chat:
 * https://docs.microsoft.com/en-us/graph/api/chat-post-installedapps?view=graph-rest-1.0&tabs=http
 *
 * INSTALL TAB
 *
 * Request data:
 * https://docs.microsoft.com/en-us/graph/api/resources/teamstab?view=graph-rest-1.0
 *
 * Add tab to channel:
 * https://docs.microsoft.com/en-us/graph/api/channel-post-tabs?view=graph-rest-1.0
 *
 * Add tab to chat:
 * https://docs.microsoft.com/en-us/graph/api/chat-post-tabs?view=graph-rest-1.0&tabs=http
 */
export function installJob<T>(
	targets: T[],
	getUrl: (item: T, index: number) => string,
	getBody: (item: T, index: number) => unknown
): T {
	return {} as T;
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
// Tue Aug 20 08:33:05 UTC 2024
// Tue Aug 27 08:28:48 UTC 2024
// Tue Sep  3 08:29:09 UTC 2024
// Tue Sep 10 08:29:18 UTC 2024
// Tue Sep 17 08:29:45 UTC 2024
// Tue Sep 24 08:30:22 UTC 2024
// Tue Oct  1 08:30:51 UTC 2024
// Tue Oct  8 08:30:25 UTC 2024
// Tue Oct 15 08:30:15 UTC 2024
