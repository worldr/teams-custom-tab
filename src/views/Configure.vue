<template>
	<div data-testid="configure-page" class="container">
		<div class="banner"></div>
		<div class="text">
			<div v-if="showCopyLog" class="copyLog">
				<div class="flexRow">
					<div class="title flexSpacer">
						Please send the text below to your system administrator for
						troubleshooting.
					</div>
					<div class="mobileActions hideReport flexBlock">Close</div>
				</div>
				<textarea
					class="log"
					ref="clientLog"
					:value="errorLog"
					:readonly="true"
					autofocus="true">
				</textarea>
			</div>
			<div class="nonMobileActions flexRow" v-if="showCopyLog">
				<div class="hideReport flexBlock">Close</div>
				<div class="flexSpacer"></div>
				<div class="downloadReport flexBlock">Download</div>
			</div>
			<div v-if="!showCopyLog && loginRequired === true">
				<div class="title">
					{{ title }}
				</div>
				<!-- <div class="description">
					Valarian provides secure messaging inside Microsoft Teams.
				</div> -->
				<div v-if="progressMessage != null" class="progress">
					{{ progressMessage }}
				</div>
				<div v-else class="action-button">Login</div>
				<div
					v-if="recoveryMessage != null"
					:class="`recovery ${showReport ? 'error' : 'notice'}`">
					{{ recoveryMessage }}
					<span v-if="showReport"
						>If the error persists, please
						<span class="report">copy the error report</span>
						and send it to your system administrator.</span
					>
				</div>
			</div>
			<div v-else-if="!showCopyLog && loginRequired === false">
				<div class="title">
					Valarian provides secure messaging inside Microsoft Teams.
				</div>
				<!-- <div class="description">
					Valarian provides secure messaging inside Microsoft Teams.
				</div> -->
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { main } from "@/core/Globals";
import { MsApp } from "@/core/ms/state/StateUtils";
import * as ms from "@microsoft/teams-js";
import { Client } from "@microsoft/microsoft-graph-client";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

const defaultTitle =
	"Please grant Valarian permission to interact with Microsoft Teams.";

export default class Configure extends Vue {
	@Prop({ type: Boolean, default: false })
	loginOnly?: boolean;

	loginRequired: boolean | null = null;

	progressMessage: string | null = null;
	recoveryMessage: string | null = null;
	title: string = defaultTitle;

	showReport: boolean = false;
	showCopyLog: boolean = false;
	errorLog: string = "";

	private async initConfiguration(): Promise<void> {
		console.debug("Configure: waiting for ms engine to get ready...");

		const settings: ms.pages.InstanceConfig = {
			contentUrl: MsApp.getContentUrl(false),
			removeUrl: main().config.logoutUrl,
			entityId: "123",
			websiteUrl: MsApp.getContentUrl(true),
		};
		console.info("Configure: settings:", settings);

		console.debug("Configure: registering onSave handler");
		ms.pages.config.registerOnSaveHandler((e: ms.pages.config.SaveEvent) => {
			console.info("Configure: config save handler:", e);
			ms.pages.config
				.setConfig(settings)
				.then(result => {
					console.warn("Configure: config set!");
					e.notifySuccess();
				})
				.catch(reason => {
					console.error("Configure: failed to set config:", reason);
					e.notifyFailure();
				});
		});
	}

	private onAuthStateChanged: () => void = () => {
		try {
			console.info("Settings validity state set to true.");
			ms.pages.config.setValidityState(true);
		} catch (err) {
			console.warn("Settings validity state was ignored:", String(err));
		}
	};
}
</script>

<style lang="scss" scoped>
.container {
	border: 1px $spacer solid;
	overflow: hidden;
	box-sizing: border-box;
	height: 100%;
	max-width: 500px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>
