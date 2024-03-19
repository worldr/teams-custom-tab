// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import { ProfilePhoto, TeamsApp } from "@microsoft/microsoft-graph-types";
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import "isomorphic-fetch";

export class GraphConversions {
	static readonly LEGACY_TAB_PREFIX_FOR_NOTIFICATIONS = "_djb2_msteams_prefix_";

	static odataTeam: RegExp = /teams\('([^']+)'\)/i;

	/**
	 * @param odataContext Example: "https://graph.microsoft.com/v1.0/$metadata#teams('7c31d087-a450-44d5-9d0b-dfa438adfaa9')/channels"
	 */
	static getTeamsIdFromContext(odataContext?: string | null): string {
		return odataContext != null
			? this.odataTeam.exec(odataContext)?.pop() ?? ""
			: "";
	}

	static isCatalogueAppsListItem(obj: unknown): obj is TeamsApp {
		return (
			typeof obj === "object" &&
			obj != null &&
			["id", "externalId"].every(i => i in obj)
		);
	}
}
// Mon Feb 19 19:04:50 UTC 2024
// Tue Feb 20 08:25:50 UTC 2024
// Tue Feb 27 08:25:36 UTC 2024
// Tue Mar  5 08:25:59 UTC 2024
// Tue Mar 12 08:25:46 UTC 2024
// Tue Mar 19 08:25:47 UTC 2024
