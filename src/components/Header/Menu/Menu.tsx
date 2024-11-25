import { FC } from "react"
import { NavLink } from "react-router"
import styles from "./../Header.module.scss"

const Menu: FC = () => {
	return (
		<nav className={styles.menu}>
			<NavLink
				to="/"
				end
			>
				Home
			</NavLink>
			<NavLink
				to="/service"
				end
			>
				Service
			</NavLink>
			<NavLink
				to="/about"
				end
			>
				About
			</NavLink>
			<NavLink
				to="/Experience"
				end
			>
				Experience
			</NavLink>
			<NavLink
				to="/skills"
				end
			>
				Skills
			</NavLink>
			<NavLink
				to="/contacts"
				end
			>
				Contacts
			</NavLink>
		</nav>
	)
}
export default Menu
