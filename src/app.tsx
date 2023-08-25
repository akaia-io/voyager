import { NearSocialBridgeProvider, Spinner, overrideLocalStorage } from "near-social-bridge"
import preactLogo from "./assets/preact.svg"

import "./app.css"

export function App() {
	return (
		<NearSocialBridgeProvider waitForStorage fallback={<Spinner />}>
			<div>
				<a href="https://preactjs.com" target="_blank">
					<img src={preactLogo} class="logo preact" alt="Preact logo" />
				</a>
			</div>
		</NearSocialBridgeProvider>
	)
}
