// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import { Version } from "./Version";
import { Config } from "./ms/Config";
import { Router } from "vue-router";
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { TeamsApp } from "@microsoft/microsoft-graph-types";

export interface Main {
	readonly appRouter: Router;
	readonly config: Config;
	readonly version: Readonly<Version>;
}

let mainInstance: Main;
export function setMainInstance(instance: Main): void {
	mainInstance = instance;
}

export function main(): Main {
	if (mainInstance == null) {
		throw new Error(
			"The setMainInstance() function should be called before the main accessor object is used!"
		);
	}
	return mainInstance;
}
// Mon Feb 19 19:04:50 UTC 2024
// Tue Feb 20 08:25:50 UTC 2024
// Tue Feb 27 08:25:36 UTC 2024
// Tue Mar  5 08:25:59 UTC 2024
// Tue Mar 12 08:25:46 UTC 2024
// Tue Mar 19 08:25:47 UTC 2024
// Tue Mar 26 08:26:19 UTC 2024
