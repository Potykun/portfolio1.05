import { FC } from "react"
import Service from "../Service/Service"
import styles from "./Home.module.scss"
import Preview from "../../organisms/Preview/Preview"

const Home: FC = () => {
	return (
		<main className={styles.bodyMain}>
			<Preview></Preview>
			<Service></Service>
		</main>
	)
}
export default Home
