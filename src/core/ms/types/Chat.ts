// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { TeamsApp } from "@microsoft/microsoft-graph-types";
import { TabsListItem } from "./Tab";

export interface ChatWithApp {
	chat: unknown;
	app?: TeamsApp | null;
}

export interface ChatDataOld {
	tab?: TabsListItem | null;
	app?: TeamsApp | null;
}
// Mon Feb 19 19:04:50 UTC 2024
// Tue Feb 20 08:25:50 UTC 2024
// Tue Feb 27 08:25:36 UTC 2024
// Tue Mar  5 08:25:59 UTC 2024
