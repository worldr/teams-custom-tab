// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
export type KnownApiPath =
	| "/$batch"
	| "/me"
	| "/me/memberOf"
	| "/me/joinedTeams"
	| "/me/chats/{channel_id}/members"
	| "/chats"
	| "/chats/{id}"
	| "/chats/{id}/members"
	| "/chats/{id}/tabs"
	| "/chats/{id}/tabs/{tab_id}"
	| "/chats/{id}/installedApps"
	| "/chats/{id}/sendActivityNotification"
	| "/users/{id}/photo"
	| "/users/{id}/chats"
	| "/users/{id}/teamwork/sendActivityNotification"
	| "/groups"
	| "/groups/{id}"
	| "/teams/{id}"
	| "/teams/{id}/channels"
	| "/teams/{id}/tabs"
	| "/teams/{id}/channels/{channel_id}"
	| "/teams/{id}/channels/{channel_id}/members"
	| "/teams/{id}/sendActivityNotification"
	| "/teams/{id}/channels/{channel_id}/tabs"
	| "/teams/{id}/channels/{channel_id}/tabs/{tab_id}"
	| "/appCatalogs/teamsApps";

export type KnownApiBlobPath = "/users/{id}/photo/$value";
// Mon Feb 19 19:04:50 UTC 2024
// Tue Feb 20 08:25:50 UTC 2024
// Tue Feb 27 08:25:36 UTC 2024
