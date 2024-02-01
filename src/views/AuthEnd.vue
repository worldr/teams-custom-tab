<template>
	<div data-testid="auth-end-page" class="loading-cover">
		<div class="logo">
			<img src="@/assets/logos/valarian-logo.svg" />
		</div>
	</div>
</template>

<script lang="ts">
import { app, authentication } from "@microsoft/teams-js";
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { Vue } from "vue-class-component";

/**
 * This happens in a popup that escapes the iframe context,
 * we may not have access to the storage at all, at least
 * not to the same one.
 */
export default class AuthEnd extends Vue {
	beforeMount(): void {
		app
			.initialize()
			.then(result => {
				console.debug("ms lib initialised!");
			})
			.catch(reason => {
				console.error("ms lib failed to initialise:", reason);
			});
	}
	async mounted(): Promise<void> {
		const query = new URLSearchParams(window.location.hash.substr(1));
		console.info("Window location hash:", window.location.hash);
		console.info("Query state:", query.get("state"));
		console.debug("Exchanging auth code for an access token...");
		Promise.resolve("")
			.then(result => {
				console.info("Success!");
				// Working around the bug that results in the MS library to report "CancelledByUser"
				// instead of success in some cases.
				// https://github.com/OfficeDev/microsoft-teams-library-js/issues/629
				console.debug("Reporting success to the Teams callback.");
				// Reporting success the normal way.
				this.notifySuccess(this.prepareResponse({}));
			})
			.catch(reason => {
				console.debug("Failed to get an access token!");
				this.notifyFailure(this.prepareResponse({}));
			});
	}

	private notifySuccess(data: string): void {
		authentication.notifySuccess(data);
	}

	private notifyFailure(data: string): void {
		authentication.notifyFailure(data);
	}

	prepareResponse(callbackData: unknown): string {
		return JSON.stringify(callbackData);
	}
}
</script>
