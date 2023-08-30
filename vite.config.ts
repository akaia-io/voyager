import path from "node:path"
import preact from "@preact/preset-vite"
import UnoCSS from "unocss/vite"
import { defineConfig } from "vite"
import { chunkSplitPlugin } from "vite-plugin-chunk-split"
import { viteStaticCopy } from "vite-plugin-static-copy"

// https://vitejs.dev/config/
export default defineConfig({
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

			customChunk: ({ file: relPath, id, moduleId }) => {
				if (/\.(ts|tsx|js|jsx)$/.test(relPath)) {
					console.log({ relPath, id, moduleId })

					return relPath.includes("node_modules")
						? [".vendor", relPath.match(/node_modules\/(.*?)\/(.*?)@/).at(2)].join("/")
						: relPath.replace(/src\//, "").replace(/\.(ts|tsx)$/, "")
				}

				return null
			},
		}),
	],
})
