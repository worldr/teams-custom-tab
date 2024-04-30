// Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved.
import { Client, ResponseType } from "@microsoft/microsoft-graph-client";
import * as ms from "@microsoft/teams-js";
import { TeamsApp } from "@microsoft/microsoft-graph-types";
import { KnownApiBlobPath, KnownApiPath } from "../ApiPaths";

interface GraphErrorData {
	endpoint: string;
	message: string;
	rawResponse?: Response;
	headers?: [string, string][];
	data?: string;
}

/**
 * Test requests with Graph explorer:
 * https://developer.microsoft.com/en-us/graph/graph-explorer
 */
export class GraphRequestAsync {
	constructor(
		private readonly client: Client,
		private readonly method: "GET" | "POST" | "PATCH",
		readonly path: KnownApiPath | KnownApiBlobPath
	) {}

	/**
	 * Request additional fields from the API handle in $expand query parameter.
	 * https://docs.microsoft.com/en-us/graph/query-parameters#expand-parameter
	 * */
	expand(fieldNames: string[]): GraphRequestAsync {
		return this;
	}

	/**
	 * Filter collection returned from the API handle in $filter query parameter.
	 * https://docs.microsoft.com/en-us/graph/query-parameters#filter-parameter
	 * */
	filter(clause: string): GraphRequestAsync {
		return this;
	}

	/**
	 * Filter fields set returned for entities from the API handle in $select query parameter.
	 * https://docs.microsoft.com/en-us/graph/query-parameters#select-parameter
	 * */
	select(fieldNames: string[]): GraphRequestAsync {
		return this;
	}

	/**
	 * Add $count to the query.
	 * https://docs.microsoft.com/en-us/graph/query-parameters#count-parameter
	 */
	count(): GraphRequestAsync {
		return this;
	}

	/**
	 * Add $top to the query.
	 * https://docs.microsoft.com/en-us/graph/query-parameters#top-parameter
	 */
	perPage(value: number): GraphRequestAsync {
		return this;
	}

	/**
	 * Add $orderby parameter to the query.
	 * https://docs.microsoft.com/en-us/graph/query-parameters#orderby-parameter
	 */

	order(fieldPaths: string[]): GraphRequestAsync {
		return this;
	}

	/**
	 * Add a request to the batch.
	 * https://docs.microsoft.com/en-us/graph/json-batching
	 */
	add(): GraphRequestAsync {
		return this;
	}

	private async execute<T>(
		convert: (r: unknown) => T | null,
		attempt: number
	): Promise<[T | null, GraphErrorData]> {
		let status = 200;
		const error: GraphErrorData = {
			endpoint: "",
			message: "Unknown error",
		};

		const request = this.client.api("//").responseType(ResponseType.RAW);
		status = error.rawResponse?.status ?? 0;
		if (status === 429 || status > 500) {
			// If status is 429, requests throttling is occuring. It has very elaborate
			// rules and is hard to predict. the official guideline is to retry with increasing
			// timeout between retries.
			// https://docs.microsoft.com/en-us/graph/throttling

			// If status is > 500, ms server fails. *Some* of these errors are temporary, so we retry.
			if (attempt < 5) {
				const delay = (attempt + 1) * 15;
				console.warn(
					"Retrying a request that failed with status",
					status,
					`for the ${attempt + 1} time`,
					`in ${delay} msec.`
				);
				return Promise.reject("");
			}
		}

		return [null, error];
	}

	get apiPath(): string {
		return "";
	}
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
