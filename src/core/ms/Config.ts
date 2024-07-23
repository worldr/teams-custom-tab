// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import "isomorphic-fetch";

export const CONFIG_PATH = `${process.env.BASE_URL}conf/config.json`;
export const VERSION_PATH = `${process.env.BASE_URL}VERSION`;

function isConfig(obj: unknown): obj is Config {
	const fields = ["clientId", "package", "origin", "authUrl", "logoutUrl"];
	return typeof obj === "object" && obj != null && fields.every(i => i in obj);
}

export interface Config {
	clientId: string;
	package: string;
	origin: string;
	authUrl: string;
	logoutUrl: string;
	permissions: string[];
	//
	name?: string;
	base?: string;
	maxImageSizeForPreviewKb?: number;
	inputDraftsStoreDays?: number;
	useTabsAPI?: boolean; // TODO remove it after QA #6187704
}

const defaultPermissions: string[] = [
	"Channel.ReadBasic.All",
	"ChannelMember.Read.All",
	//
	"Chat.ReadBasic",
	"ChatMember.Read",
	//
	"GroupMember.Read.All",
	//
	"Team.ReadBasic.All",
	"TeamMember.Read.All",
	"TeamsActivity.Send",
	//
	"Organization.Read.All",
	//
	"User.Read",
	"User.ReadBasic.All",
	//
	"offline_access",
	"openid",
	"profile",
];

export function getConfig(path?: string): Promise<Config> {
	const p = `${path ?? CONFIG_PATH}?${new Date().getTime()}`;
	console.debug("Loading configuration from", p);
	return fetch(p)
		.then(response => {
			console.debug("Configuration loaded!");
			return response.json();
		})
		.then(json => {
			if (isConfig(json)) {
				const complete = json;
				console.debug("Configuration parsed:", complete);
				console.warn("Base url for client:", complete.base);
				return Promise.resolve(complete);
			} else {
				throw new Error(`Malformed configuration file at ${p}:\n${json}`);
			}
		})
		.catch(reason => {
			console.error("Fatal error: failed to load configuration from", p);
			return Promise.reject(reason);
		});
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
