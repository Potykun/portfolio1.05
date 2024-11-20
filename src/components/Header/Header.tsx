import { FC } from "react"
import styles from "./Header.module.scss"
import Menu from "./Menu/Menu"

const Header: FC = () => {
	return (
		<header className={styles.main}>
			<div>A. P.</div>
			<Menu></Menu>
		</header>
	)
}
export default Header
