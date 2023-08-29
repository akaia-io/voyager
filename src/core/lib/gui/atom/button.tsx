import { JSX, h } from "preact"

export interface ButtonProps extends JSX.HTMLAttributes {
	kind: "button" | "link"
	label: string
	onClick?: () => void | null
	rootTag?: keyof JSX.IntrinsicElements
	variant?: "primary" | "outlined" | "text"
}

export const Button = ({
	kind = "button",
	label,
	onClick = null,
	rootTag = "button",
}: ButtonProps) =>
	h(
		rootTag,

		{
			onClick: kind === "button" ? onClick : null,
		},

		label,
	)
