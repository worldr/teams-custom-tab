// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { TeamsApp } from "@microsoft/microsoft-graph-types";
import {
	createRouter,
	createWebHistory,
	LocationQueryRaw,
	RouteComponent,
	RouteParamsRaw,
	Router,
} from "vue-router";

export const NoMobileRoute = "/nomobile";

const mobileAgents = [/(Android)(.+)(Mobile)/i, /iPhone|iPod/i, /Opera Mini/i];
const isMobile = mobileAgents.some(b => navigator.userAgent.match(b));
const isAndroid = navigator.userAgent.match(/android/i) != null;

export interface RouteOptions {
	params?: RouteParamsRaw;
	query?: LocationQueryRaw;
}

export interface RouteConfig {
	path: string;
	alias?: string[];
	name: string;
	component: () => Promise<RouteComponent>;
	props?: boolean;
}

const page404: RouteConfig = {
	path: "/:pathMatch(.*)*",
	name: "404",
	component: () =>
		import(/* webpackChunkName: "notfound" */ "../views/Page404.vue"),
	props: true,
};

const appRoutes: RouteConfig[] = [
	{
		path: "/",
		alias: [""],
		name: "Noop",
		component: () =>
			import(/* webpackChunkName: "noop" */ "../views/NoopPage.vue"),
	},
	{
		path: "/config",
		name: "Configure",
		component: () =>
			import(/* webpackChunkName: "config" */ "../views/Configure.vue"),
	},
	page404,
];

let appRouter: Router;
export function getRouter(): Router {
	if (appRouter == null) {
		appRouter = createRouter({
			history: createWebHistory(process.env.BASE_URL),
			routes: appRoutes,
		});
	}
	return appRouter;
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
// Tue Oct 22 08:30:22 UTC 2024
// Tue Oct 29 08:30:23 UTC 2024
// Tue Nov  5 08:29:38 UTC 2024
// Tue Nov 12 08:29:46 UTC 2024
// Tue Nov 19 08:31:05 UTC 2024
// Tue Nov 26 08:31:05 UTC 2024
// Tue Dec  3 08:31:13 UTC 2024
// Tue Dec 10 08:31:22 UTC 2024
// Tue Dec 17 08:31:18 UTC 2024
// Tue Dec 24 08:29:51 UTC 2024
// Tue Dec 31 08:29:37 UTC 2024
// Tue Jan  7 08:30:01 UTC 2025
// Tue Jan 14 08:29:23 UTC 2025
// Tue Jan 21 08:29:27 UTC 2025
// Tue Jan 28 08:29:34 UTC 2025
// Tue Feb  4 08:29:39 UTC 2025
// Tue Feb 11 08:29:42 UTC 2025
// Tue Feb 18 08:30:01 UTC 2025
// Tue Feb 25 08:30:29 UTC 2025
// Tue Mar  4 08:29:55 UTC 2025
// Tue Mar 11 08:30:50 UTC 2025
