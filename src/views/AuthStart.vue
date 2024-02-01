<template>
	<div data-testid="auth-start-page" class="loading-cover">
		<div class="logo">
			<img src="@/assets/logos/valarian-logo.svg" />
		</div>
	</div>
</template>

<script lang="ts">
import { AuthAttempt, isAuthAttempt } from "@/core/auth/MsAuth";
import { authentication } from "@microsoft/teams-js";
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { Vue } from "vue-class-component";

/**
 * This happens in a popup that escapes the iframe context,
 * we may not have access to the storage at all, at least
 * not to the same one.
 */
export default class AuthStart extends Vue {
	mounted(): void {
		this.redirect();
	}

	async redirect(): Promise<void> {
		const attempt = await Promise.resolve({ endpoint: "" });
		if (attempt != null) {
			window.location.assign(attempt.endpoint);
		} else {
			const message = "Failed to read auth attempt data from local storage key";
			console.error(message);
			authentication.notifyFailure(JSON.stringify({ message }));
		}
	}
}
</script>
