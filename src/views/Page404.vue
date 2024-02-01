<template>
	<div data-testid="notfound-page" class="root">
		<div class="container">
			<h1 class="error404">The page doesn't exist on the server.</h1>
			<div class="desc">
				<h1>Valarian For Teams</h1>
				<h2>Private, Secure &amp; Compliant Team Communication</h2>
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
import { Prop } from "vue-property-decorator";

@Options({
	components: {},
})
export default class Page404 extends Vue {
	@Prop({ type: Array, default: [] })
	pathMatch?: string[];

	get path(): string[] {
		const p = this.pathMatch ?? [];
		return p;
	}
}
</script>

<style lang="scss" scoped>
.container {
	padding: 25px;
	h2 {
		line-height: normal;
	}
	.desc {
		max-width: 800px;
	}
}
.error404 {
	margin-bottom: 3em;
}
</style>
