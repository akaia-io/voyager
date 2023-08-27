/// <reference types="vite/client" />

import type { AttributifyAttributes } from "@unocss/preset-attributify"

declare module "preact" {
	type HTMLAttributes<T> = AttributifyAttributes
}
