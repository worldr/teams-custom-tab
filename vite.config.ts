import basicSsl from "@vitejs/plugin-basic-ssl";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import viteCompression from "vite-plugin-compression";
import EnvironmentPlugin from "vite-plugin-environment";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";
import VueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [
		VueDevTools(),
		vue(),
		basicSsl(),
		tsconfigPaths(),
		EnvironmentPlugin(
			{
				BASE_URL: "/mst/",
				NODE_ENV: "development",
				VUE_APP_WORLDR_APP_VERSION:
					process.env.NODE_ENV === "development"
						? JSON.stringify("dev " + new Date().toString())
						: JSON.stringify(new Date().toString()),
			},
			{
				loadEnvFiles: true,
			}
		),
		viteCompression({ algorithm: "gzip", ext: ".gz" }),
		viteCompression({ algorithm: "brotliCompress", ext: ".br" }),
	],
	base: "/mst/",
	server: {
		port: 8080,
		host: "0.0.0.0",
		strictPort: true,
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	build: {
		minify: true,
		outDir: "dist",
		emptyOutDir: true,
		sourcemap: "inline",
		rollupOptions: {
			treeshake: true,
		},
		chunkSizeWarningLimit: 6000,
	},
	define: {
		"process.env": {
			BASE_URL: "/mst/",
			NODE_ENV: "development",
			VUE_APP_WORLDR_APP_VERSION:
				process.env.NODE_ENV === "development"
					? JSON.stringify("dev " + new Date().toString())
					: JSON.stringify(new Date().toString()),
		},
	},
	test: {
		coverage: {
			provider: "v8",
			reporter: ["text", "json-summary", "json"],
		},
		environment: "jsdom",
		globals: true,
		globalSetup: [],
		setupFiles: [
			"src/tests/setup.ts",
			"node_modules/fake-indexeddb/auto/index.js",
		],
	},
});
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
