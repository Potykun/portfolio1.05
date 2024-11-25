import { FC } from "react"
import Header from "../Header/Header"
import ServiceContent from "./ServiceContent"
import styles from "./Service.module.scss"

const Service: FC = () => {
	return (
		<div className={styles.servicesContainer}>
			<Header></Header>
			<ServiceContent></ServiceContent>
		</div>
	)
}
export default Service
