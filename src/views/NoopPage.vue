<template>
	<div data-testid="noop-page" class="root">
		<div class="container">
			<div class="desc">
				<h1>Valarian For Teams</h1>
				<h2>Private, Secure &amp; Compliant<br />Team Communication</h2>
				<div>
					Valarian is on a mission to help enterprises ensure their
					communication tools are secure, compliant and efficient.
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class NoopPage extends Vue {}
</script>

<style lang="scss" scoped>
.container {
	h2 {
		line-height: normal;
	}
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	.desc {
		max-width: 400px;
	}
}
</style>
