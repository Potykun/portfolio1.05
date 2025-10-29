import { FC } from "react"
import VerticalText from "../VerticalText/VerticalText"
import styles from "./Service.module.scss"
import ServiceContent from "./ServiceContent"

const Service: FC = () => {
	return (
		<section className={styles.servicesContainer}>
			<VerticalText text="Services" />
			<ServiceContent></ServiceContent>
		</section>
	)
}
export default Service
