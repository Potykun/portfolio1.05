import { FC } from "react"
import styles from "./Header.module.scss"
import Menu from "./Menu/Menu"

const Header: FC = () => {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.innerContainer}>
				<div>A. P.</div>
				<Menu></Menu>
			</div>
		</header>
	)
}
export default Header
