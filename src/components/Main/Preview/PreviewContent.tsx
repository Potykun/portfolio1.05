import { FC } from "react"
import PreviewBottom from "./PreviewBottom"
import styles from "./PreviewContent.module.scss"

const PreviewContent: FC = () => {
	return (
		<div className={styles.mainContent}>
			<h1 className={styles.header}>
				Andre
				<br />
				Potykun
				<br />
				<span>Resume</span>
			</h1>
			<p>I'm Web-Developer with over 3+ years of experience</p>
			<img
				className={styles.image}
				src="/assets/photoMain.png"
				alt="homeImage"
			/>
			<PreviewBottom></PreviewBottom>
		</div>
	)
}
export default PreviewContent
