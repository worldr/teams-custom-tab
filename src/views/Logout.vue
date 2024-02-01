<template>
	<div></div>
	<div data-testid="logout-page" class="loading-cover">
		<div class="text">
			Please confirm you would like to remove this Valarian tab.
		</div>
		<div class="logo">
			<img src="@/assets/logos/valarian-logo.svg" />
		</div>
	</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Logout extends Vue {}
</script>
