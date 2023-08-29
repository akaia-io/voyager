import path from "node:path"
import preact from "@preact/preset-vite"
import UnoCSS from "unocss/vite"
import { defineConfig } from "vite"
import { viteStaticCopy } from "vite-plugin-static-copy"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		viteStaticCopy({
			targets: [
				{
					src: path.resolve(__dirname, "./src/service/voyager/client/bos.jsx"),
					dest: path.resolve(__dirname, "./target/bos"),
					rename: "voyager.jsx",
				},
			],

			watch: {
				options: {},
				reloadPageOnChange: true,
			},
		}),

		UnoCSS(),
		preact(),
	],
})
