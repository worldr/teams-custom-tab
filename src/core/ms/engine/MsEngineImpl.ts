// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { TeamsApp } from "@microsoft/microsoft-graph-types";
import { Graph } from "../graph/Graph";
import { MsEngine, MsEngineBase } from "./MsEngine";

export class MsEngineImpl extends MsEngineBase implements MsEngine {
	/**
	 * Resolves when MS API status is determined regardless of whether it is available or not.
	 * This status is determined once and can not change during the app session.
	 **/
	readonly whenInitComplete: Promise<unknown>;

	readonly graph: Graph;

	constructor() {
		super(false);
		this.whenInitComplete = Promise.resolve({});
		this.graph = new Graph();
	}

	private async initialise(): Promise<unknown> {
		console.debug("Is MS api available?");
		await ms.app.initialize().then(console.log).catch(console.error);

		console.debug("MS API is available!");
		console.debug("Can we get application context?");
		const ctx = await ms.app.getContext().catch(reason => {
			return null;
		});
		if (ctx == null) {
			throw new Error(
				`Context callback did not return an object: ${arguments.length} args`
			);
		}

		return this.state;
	}
}
