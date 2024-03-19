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
