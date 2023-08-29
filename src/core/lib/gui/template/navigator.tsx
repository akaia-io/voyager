export const NavigatorTemplate = ({ ...props }) => {
	const collectionsMock = [{ type: "collection", name: "Foxes", icon: "openmoji-fox" }]

	return (
		<div flex="col" w="full" h="full" {...props}>
			<div flex="~" gap="4" p="4" w="full" h="full">
				<aside flex="col">
					<ul w="full" h="full" p="0" m="0" list="none">
						{collectionsMock.map(({ name, icon }) => (
							<li flex="~" gap="2">
								<span un-i={icon ?? "openmoji-black-hole"} />
								<span>{name}</span>
							</li>
						))}
					</ul>
				</aside>

				<section flex="~">
					{[{ type: "image", name: "Fox 1", previewSrc: "" }].map(({ name, previewSrc }) => (
						<a href="/#" un-decoration="none">
							<figure>
								<img src={previewSrc} alt={name} />
								<figcaption>{name}</figcaption>
							</figure>
						</a>
					))}
				</section>
			</div>
		</div>
	)
}
