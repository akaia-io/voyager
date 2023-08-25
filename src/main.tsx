import "near-social-bridge/near-social-bridge.css"
import { render } from "preact"
import "virtual:uno.css"

import { App } from "./app.tsx"
import "./main.css"

render(<App />, document.getElementById("app")!)
