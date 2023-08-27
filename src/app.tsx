import { NearSocialBridgeProvider, Spinner, overrideLocalStorage } from "near-social-bridge"

import "./app.css"

overrideLocalStorage()

export const Voyager = () => (
	<NearSocialBridgeProvider waitForStorage fallback={<Spinner />}>
		<div un-text="white">
			<a href={"/#"}>
				<img class="logo preact" alt="Test?" />
			</a>
		</div>
	</NearSocialBridgeProvider>
)
