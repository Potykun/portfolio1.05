import { FC } from "react"
import ScrollAnimation from "../../atoms/ScrollAnimation/ScrollAnimation"
import MoveQuatre from "../../atoms/MoveQuatre/MoveQuatre"
import styles from "./Preview.module.scss"
import PreviewContent from "../PreviewContent/PreviewContent"

const Preview: FC = () => {
	return (
		<section className={styles.mainSection}>
			<ScrollAnimation
				direction="left"
				delay={200}
			>
				<MoveQuatre
					direction="horizontal"
					formType="top"
					size="300px"
					zIndex={-1}
					top="100px"
					left="40%"
				></MoveQuatre>
			</ScrollAnimation>

			<ScrollAnimation
				direction="bottom"
				delay={400}
			>
				<PreviewContent></PreviewContent>
			</ScrollAnimation>

			<ScrollAnimation
				direction="right"
				delay={600}
			>
				<MoveQuatre
					direction="horizontal"
					formType="bottom"
					size="150px"
					zIndex={-1}
					top="0%"
					left="50%"
					speed={10}
				></MoveQuatre>
			</ScrollAnimation>
		</section>
	)
}
export default Preview
