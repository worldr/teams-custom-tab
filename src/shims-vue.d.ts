/* eslint-disable */
declare module "*.vue" {
	import type { DefineComponent } from "vue";
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module "*.svg" {
	const filePath: string;
	export default filePath;
}
// Mon Feb 19 19:04:50 UTC 2024
