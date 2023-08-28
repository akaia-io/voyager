import type { AttributifyAttributes } from "@unocss/preset-attributify"
import { HTMLAttributes as StandardHTMLAttributes } from "preact/compat"

export interface HTMLAttributes extends AttributifyAttributes, StandardHTMLAttributes {}

declare module "preact" {
	namespace JSX {
		type HTMLAttributes = HTMLAttributes
	}
}
