import { FC } from "react"
import styles from "./VerticalText.module.scss"

interface VerticalTextProps {
	text: string
	className?: string
}

const VerticalText: FC<VerticalTextProps> = ({ text, className = "" }) => {
	return <span className={`${styles.verticalText} ${className}`}>{text}</span>
}

export default VerticalText
