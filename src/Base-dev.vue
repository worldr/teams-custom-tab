<!-- Copyright © 2020-present Worldr Technologies Limited. All Rights Reserved. -->
<template>
	<div id="baseWrap" data-testid="base-page">
		<router-view />
	</div>
</template>

<script lang="ts">
import { main } from "@/core/Globals";
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { Options, Vue } from "vue-class-component";
import { auth } from "./core/AuthManager";

@Options({
	components: {},
})
export default class Base extends Vue {
	isDebugLogVisible = false;

	beforeMount(): void {
		console.log("Before main app mounted... Sat Jun 21 08:31:00 UTC 2025");
		this.startAuthFlowWithTeams();
	}

	mounted(): void {
		console.log("Main app mounted", document.location.href);
		console.debug("VERSION Sat Jun 21 08:31:00 UTC 2025", main().version);
	}

	private async startAuthFlowWithTeams(): Promise<void> {
		console.log("Starting TEAMS flow.");

		auth().startMsFlow();

		if (auth() == null) {
			ms.app.registerOnThemeChangeHandler(theme => {});
		}
	}

	private debugOpenAttempts: number = 0;
	openDebugLog(): void {
		this.debugOpenAttempts++;
		this.isDebugLogVisible = this.debugOpenAttempts > 5;
	}
	closeDebugLog(): void {
		this.isDebugLogVisible = false;
	}
}
</script>

<style lang="scss">
html,
body {
	margin: 0;
	padding: 0;
	position: fixed;
	overscroll-behavior-y: none;
	height: 100%;
	overflow: hidden;
}
</style>
