// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import { createApp } from "vue";
import { createPinia } from "pinia";
import Base from "./Base.vue";
import { Main, setMainInstance } from "./core/Globals";
import { getConfig } from "./core/ms/Config";
import { getVersion } from "./core/Version";
import { getRouter } from "./router/router";
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { TeamsApp } from "@microsoft/microsoft-graph-types";

// Workaround for iOS IDB lazy loading
const shim = window.indexedDB;

const startTime = new Date();
console.debug(
	"System starting",
	startTime.toUTCString(),
	`(${startTime.toISOString()})`
);

// Create the app

// Environment and connectivity logs

console.debug("User agent:", window.navigator.userAgent);
console.debug("Env:", process.env);

const r = getRouter();

console.debug("Initialising...");

export const initializer = Promise.all([getVersion(), getConfig()])
	.then(([version, config]) => {
		// Create main access object

		const main: Main = {
			appRouter: r,
			config,
			version,
		};
		setMainInstance(main);

		// Create the app

		const app = createApp(Base).use(r);
		app.config.errorHandler = (err, vm, info) => {
			console.error("Vue error:", info, new Error().stack ?? "");
			console.error(err);
		};
		app.config.warnHandler = (msg, vm, trace) => {
			console.warn("Vue warning @@@:", msg, new Error().stack ?? "");
			console.warn(trace);
		};

		const pinia = createPinia();
		app.use(pinia);

		// Mount the app

		app.mount("#app");

		return main;
	})
	.catch(reason => console.error("Init error:", reason));
// Mon Feb 19 19:04:50 UTC 2024
// Tue Feb 20 08:25:50 UTC 2024
// Tue Feb 27 08:25:36 UTC 2024
// Tue Mar  5 08:25:59 UTC 2024
// Tue Mar 12 08:25:46 UTC 2024
// Tue Mar 19 08:25:47 UTC 2024
// Tue Mar 26 08:26:19 UTC 2024
// Tue Apr  2 08:26:13 UTC 2024
