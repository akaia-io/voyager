import { presetAttributify, presetUno } from "unocss"
import presetTheme from "unocss-preset-theme"
import type { Theme } from "unocss/preset-uno"
import Unocss from "unocss/vite"

Unocss<Theme>({
	// Configure light themes
	theme: {},

	presets: [
		presetAttributify({ prefix: "un-", prefixedOnly: true }),
		presetUno(),

		presetTheme<Theme>({
			theme: {
				dark: {},

				compact: {},
			},
		}),
	],
})
