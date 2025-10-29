import { FC } from "react"
import PreviewBottom from "./PreviewBottom"
import styles from "./PreviewContent.module.scss"

const PreviewContent: FC = () => {
	return (
		<div className={styles.mainContent}>
			<img
				className={styles.image}
				src="/assets/photoMain.png"
				alt="homeImage"
			/>
			<h1 className={styles.header}>
				Andrew
				<br />
				Potykun
				<br />
			</h1>
			<p>I'm Web-Developer with over 3+ years of experience</p>

			<PreviewBottom></PreviewBottom>
		</div>
	)
}
export default PreviewContent
