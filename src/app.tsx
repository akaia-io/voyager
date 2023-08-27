import { NearSocialBridgeProvider, Spinner, overrideLocalStorage } from "near-social-bridge"

import "./app.css"

overrideLocalStorage()

export const Voyager = () => (
	<NearSocialBridgeProvider waitForStorage fallback={<Spinner />}>
		<div>
			<a href={"/#"}>
				<img class="logo preact" alt="Preact logo" />
			</a>
		</div>
	</NearSocialBridgeProvider>
)
