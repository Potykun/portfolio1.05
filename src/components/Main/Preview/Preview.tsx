import { FC } from "react"
import MoveQuatre from "../MoveElements/MoveQuatre"
import styles from "./Preview.module.scss"
import PreviewContent from "./PreviewContent"

const Preview: FC = () => {
	return (
		<section className={styles.mainSection}>
			<MoveQuatre
				color="red"
				direction="horizontal"
				formType="top"
				size="300px"
				zIndex={-1}
				top="100px"
				left="40%"
			></MoveQuatre>
			<PreviewContent></PreviewContent>
			<MoveQuatre
				color="red"
				direction="horizontal"
				formType="bottom"
				size="250px"
				zIndex={-1}
				top="75%"
				left="50%"
			></MoveQuatre>
		</section>
	)
}
export default Preview
