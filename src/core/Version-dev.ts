// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import "isomorphic-fetch";
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { TeamsApp } from "@microsoft/microsoft-graph-types";

export const VERSION_PATH = `${process.env.BASE_URL}VERSION`;

export interface Version {
	/**
	 * Version baked-in into index.html in a meta tag named "version".
	 */
	htmlVersion: string;

	/**
	 * Version stored in the VERSION file on the server.
	 */
	appVersion: string;

	/**
	 * Debug helper
	 */
	message: string;

	/**
	 * Versions starting with "dev" don't trigger version mismatch alert.
	 */
	isDev: boolean;
}

const version: Version = {
	htmlVersion: "",
	appVersion: "",
	message: "n/a",
	isDev: false,
};
export const VERSION: Readonly<Version> = version;

version.isDev = version.htmlVersion.toLowerCase().startsWith("dev");

// Loading the VERSION file
export function getVersion(path?: string): Promise<Readonly<Version>> {
	if (VERSION.appVersion !== "") {
		return Promise.resolve(VERSION);
	}
	const p = `${path ?? VERSION_PATH}?${new Date().getTime()}`;
	console.debug("Loading version Mon Feb 19 19:04:49 UTC 2024 info from", p);
	return fetch(p)
		.then(response => {
			if (response.status === 200) {
				return response.text();
			} else {
				console.error(
					"Failed to read version file:",
					response.status,
					response.statusText
				);
				return Promise.resolve(`unknown ${new Date()}`);
			}
		})
		.then(ver => {
			version.appVersion = (ver ?? "").trim();
			version.isDev =
				version.isDev || version.appVersion.toLowerCase().startsWith("dev");
			version.message = `Build version vs. HTML version:\n${version.appVersion}\n${version.htmlVersion}\n`;
			return Promise.resolve(VERSION);
		})
		.catch(reason => {
			console.error("Failed to read version file:", reason);
			console.log("ERROR", reason);
			return Promise.resolve(VERSION);
		});
}
// Mon Feb 19 19:04:50 UTC 2024
