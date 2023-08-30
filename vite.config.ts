import path from "node:path"
import preact from "@preact/preset-vite"
import UnoCSS from "unocss/vite"
import { defineConfig } from "vite"
import { chunkSplitPlugin } from "vite-plugin-chunk-split"
import { viteStaticCopy } from "vite-plugin-static-copy"

// https://vitejs.dev/config/
export default defineConfig({
	build: { outDir: "target/browser/voyager" },

	plugins: [
		viteStaticCopy({
			targets: [
				{
					src: path.resolve(__dirname, "src/service/voyager/client/bos.jsx"),
					dest: path.resolve(__dirname, "target/bos"),
					rename: "voyager.jsx",
				},
			],

			watch: {
				reloadPageOnChange: true,
			},
		}),

		UnoCSS(),
		preact(),

		chunkSplitPlugin({
			strategy: "unbundle",

			customChunk: ({ file: relPath }) => {
				if (/\.(ts|tsx|js|jsx)$/.test(relPath)) {
					return relPath.includes("node_modules")
						? [".vendor", relPath.match(/node_modules\/(.*?)\/(.*?)@/).at(2)].join("/")
						: relPath.replace(/src\//, "").replace(/\.(ts|tsx)$/, "")
				} else {
					return null
				}
			},
		}),
	],
})
