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
