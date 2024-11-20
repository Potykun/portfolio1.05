import { FC } from "react"
import styles from "./Menu.module.scss"

const Menu: FC = () => {
	return (
		<nav className={styles.menu}>
			<a>Home</a>
			<a>Service</a>
			<a>About</a>
			<a>Experience</a>
			<a>Skills</a>
			<a>Contact</a>
		</nav>
	)
}
export default Menu
