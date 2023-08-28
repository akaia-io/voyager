import { NearSocialBridgeProvider, Spinner, overrideLocalStorage } from "near-social-bridge"
import "near-social-bridge/near-social-bridge.css"
import { FunctionComponent, VNode, render } from "preact"
import { createElement as h } from "preact/compat"
import "virtual:uno.css"

import { NearSocialBridgeProps } from "near-social-bridge/bridge/types"
import { Voyager } from "./app.tsx"
import "./main.css"

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
