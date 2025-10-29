import { FC } from "react"
import Service from "../Service/Service"
import styles from "./Main.module.scss"
import Preview from "./Preview/Preview"

const Main: FC = () => {
	return (
		<main className={styles.bodyMain}>
			<Preview></Preview>
			<Service></Service>
		</main>
	)
}
export default Main
