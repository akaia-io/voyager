import "near-social-bridge/near-social-bridge.css"
import { render } from "preact"
import "virtual:uno.css"

import { Voyager } from "./app.tsx"
import "./main.css"

render(Voyager(), document.getElementById("app")!)
