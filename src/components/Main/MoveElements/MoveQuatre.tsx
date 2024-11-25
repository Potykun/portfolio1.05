import { FC } from "react"
import styles from "./MoveQuatre.module.scss"

interface QuatrePropsType {
	color: string
	size: string
	direction: "vertical" | "horizontal"
	formType: "right" | "top" | "bottom" | "left"
	zIndex: -1 | 0 | 1 | 5
	top: string
	left: string
}
const MoveQuatre: FC<QuatrePropsType> = (QuatreProps) => {
	return (
		<div
			className={`${styles.quatre} ${QuatreProps.direction === "horizontal" ? styles.horizontal : styles.vertical}`}
			style={{
				height: QuatreProps.size,
				width: QuatreProps.size,
				zIndex: -1,
				top: QuatreProps.top,
				left: QuatreProps.left,
				borderRadius:
					QuatreProps.formType === "top"
						? "0 100% 0 0"
						: QuatreProps.formType === "right"
						? "0 0 100% 0 "
						: QuatreProps.formType === "bottom"
						? "0 0 0 100%"
						: "100% 0 0 0",
			}}
		></div>
	)
}
export default MoveQuatre
