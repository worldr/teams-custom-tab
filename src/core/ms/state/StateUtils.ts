// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import { main } from "@/core/Globals";
import { DirectoryRole, TeamsApp } from "@microsoft/microsoft-graph-types";
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { TabsListItem } from "../types/Tab";

export interface MsContextIds {
	/**
	 * Depends on the type of chat we are in.
	 * For public team chats this is Context.groupId.
	 * For private team chats this is Context.hostTeamGroupId.
	 * For personal chats, both group and 1 on 1, this is Context.chatId.
	 */
	id: string;
}

export class MsApp {
	constructor(public app: TeamsApp) {
		this.catalogueUrl = `https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/${this.app.id}`;
	}

	readonly catalogueUrl: string;

	static getContentUrl(short: boolean): string {
		if (short) {
			return `${main().config.origin}${main().config.base}chat`;
		} else {
			return (
				`${main().config.origin}${main().config.base}chat` +
				"?theme={theme}&sessionId={sessionId}&appSessionId={appSessionId}&tid={tid}" +
				"&chatId={chatId}&teamId={teamId}&groupId={groupId}&channelId={channelId}"
			);
		}
	}
}
// Mon Feb 19 19:04:50 UTC 2024
// Tue Feb 20 08:25:50 UTC 2024
// Tue Feb 27 08:25:36 UTC 2024
// Tue Mar  5 08:25:59 UTC 2024
// Tue Mar 12 08:25:46 UTC 2024
// Tue Mar 19 08:25:47 UTC 2024
