import { FC, useState } from "react"
import { NavLink } from "react-router"
import styles from "./Menu.module.scss"

const Menu: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<>
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
				<button
					className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ""}`}
					onClick={toggleMenu}
					aria-label="Toggle menu"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</nav>

			{/* Mobile Menu Overlay */}
			<div className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
				<nav className={styles.mobileMenu}>
					<NavLink
						to="/"
						end
						onClick={closeMenu}
					>
						Home
					</NavLink>
					<NavLink
						to="/service"
						end
						onClick={closeMenu}
					>
						Service
					</NavLink>
					<NavLink
						to="/about"
						end
						onClick={closeMenu}
					>
						About
					</NavLink>
					<NavLink
						to="/Experience"
						end
						onClick={closeMenu}
					>
						Experience
					</NavLink>
					<NavLink
						to="/skills"
						end
						onClick={closeMenu}
					>
						Skills
					</NavLink>
					<NavLink
						to="/contacts"
						end
						onClick={closeMenu}
					>
						Contacts
					</NavLink>
				</nav>
			</div>
		</>
	)
}
export default Menu
