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
