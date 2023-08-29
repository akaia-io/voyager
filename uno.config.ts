import { presetAttributify, presetIcons, presetUno } from "unocss"
import presetTheme from "unocss-preset-theme"
import type { Theme } from "unocss/preset-uno"
import Unocss, { defineConfig } from "unocss/vite"

export default defineConfig({
	// Light themes
	theme: {},

	presets: [
		presetIcons(),
		presetUno(),
		presetAttributify(),

		/* @ts-ignore-next-line */
		presetTheme<Theme>({
			theme: {
				dark: {},

				compact: {},
			},
		}),
	],
})
