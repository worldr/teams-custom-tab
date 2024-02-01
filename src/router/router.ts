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

const noMobile: RouteConfig = {
	path: NoMobileRoute,
	alias: [""],
	name: "NoMobile",
	component: () =>
		import(/* webpackChunkName: "noop" */ "../views/NoMobilePage.vue"),
};

const appRoutes: RouteConfig[] = [
	{
		path: "/",
		alias: [""],
		name: "Noop",
		component: () =>
			import(/* webpackChunkName: "noop" */ "../views/NoopPage.vue"),
	},
	noMobile,
	{
		path: "/logout",
		name: "Logout",
		component: () =>
			import(/* webpackChunkName: "logout" */ "../views/Logout.vue"),
	},
	{
		path: "/config",
		name: "Configure",
		component: () =>
			import(/* webpackChunkName: "config" */ "../views/Configure.vue"),
	},
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
