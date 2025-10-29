import { FC } from "react"
import styles from "./ContentItem.module.scss"
import { ContentItemsTypes } from "../../organisms/ServiceContent/ServiceContent"

interface ContentItemProps extends ContentItemsTypes {
	isActive: boolean
	onClick: () => void
}

const ContentItem: FC<ContentItemProps> = ({
	name,
	id,
	iconUrl,
	iconUrlOpen,
	description,
	isActive,
	onClick,
}) => {
	return (
		<li
			className={`${styles.itemContainer} ${isActive ? styles.active : ""}`}
			onClick={onClick}
		>
			<div>
				<p className={styles.number}>{id}</p>
				<div
					className={styles.svg}
					dangerouslySetInnerHTML={{
						__html: isActive ? iconUrlOpen : iconUrl,
					}}
				></div>
			</div>
			<h1>{name}</h1>
			<div className={`${styles.descriptionContainer} ${isActive ? styles.show : ""}`}>
				<p className={styles.description}>{description}</p>
			</div>
		</li>
	)
}
export default ContentItem
