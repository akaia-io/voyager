import "near-social-bridge/near-social-bridge.css"
import { createElement as h, render } from "preact"
import "virtual:uno.css"

import { Voyager } from "./app.tsx"
import "./main.css"

render(h(Voyager, {}), document.getElementById("app")!)
