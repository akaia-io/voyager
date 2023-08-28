import "@unocss/reset/normalize.css"
import "@unocss/reset/sanitize/assets.css"
import "@unocss/reset/sanitize/sanitize.css"
import { NearSocialBridgeProvider, Spinner, overrideLocalStorage } from "near-social-bridge"
import "near-social-bridge/near-social-bridge.css"
import { FunctionComponent, VNode, createElement as h, render } from "preact"
import "virtual:uno.css"

import { NearSocialBridgeProps } from "near-social-bridge/bridge/types"
import { Voyager } from "./app.tsx"

overrideLocalStorage()

interface PatchedNearSocialBridgeProps extends Partial<NearSocialBridgeProps> {
	fallback?: VNode<null>
	waitForStorage: boolean
}

render(
	h(
		NearSocialBridgeProvider as FunctionComponent<PatchedNearSocialBridgeProps>,
		{ waitForStorage: true, fallback: h(Spinner, null) },
		h(Voyager, {}),
	),

	document.getElementById("app")!,
)
