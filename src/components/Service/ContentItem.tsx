import { FC } from "react"
import styles from "./Service.module.scss"
import { ContentItemsTypes } from "./ServiceContent"

const ContentItem: FC<ContentItemsTypes> = ({ name, id, iconUrl }) => {
	return (
		<li className={styles.itemContainer}>
			<div>
				<p>{id}</p>
				<div
					className={styles.svg}
					dangerouslySetInnerHTML={{ __html: iconUrl }}
				></div>
			</div>
			<h1>{name}</h1>
		</li>
	)
}
export default ContentItem
