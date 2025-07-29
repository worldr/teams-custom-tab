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
// Tue Mar 18 08:31:05 UTC 2025
// Tue Mar 25 08:31:19 UTC 2025
// Tue Apr  1 08:31:25 UTC 2025
// Tue Apr  8 08:31:26 UTC 2025
// Tue Apr 15 08:31:29 UTC 2025
// Tue Apr 22 08:31:31 UTC 2025
// Tue Apr 29 08:31:40 UTC 2025
// Tue May  6 08:31:30 UTC 2025
// Tue May 13 08:31:41 UTC 2025
// Tue May 20 08:31:43 UTC 2025
// Tue May 27 08:31:35 UTC 2025
// Tue Jun  3 08:31:48 UTC 2025
// Tue Jun 10 08:31:47 UTC 2025
// Tue Jun 17 08:31:46 UTC 2025
// Tue Jun 24 08:31:45 UTC 2025
// Tue Jul  1 08:31:45 UTC 2025
// Tue Jul  8 08:31:42 UTC 2025
// Tue Jul 15 08:31:52 UTC 2025
// Tue Jul 22 08:32:00 UTC 2025
// Tue Jul 29 08:32:04 UTC 2025
