import { FC } from "react"
import styles from "./MoveQuatre.module.scss"

interface QuatrePropsType {
	size: string
	direction: "vertical" | "horizontal"
	formType: "right" | "top" | "bottom" | "left"
	zIndex: -1 | 0 | 1 | 5
	top: string
	left: string
	speed?: number
}
const MoveQuatre: FC<QuatrePropsType> = (QuatreProps) => {
	return (
		<div
			className={`MoveQuatre ${styles.quatre} ${
				QuatreProps.direction === "horizontal" ? styles.horizontal : styles.vertical
			}`}
			style={
				{
					"--dynamic-size": QuatreProps.size,
					"--dynamic-top": QuatreProps.top,
					"--dynamic-left": QuatreProps.left,
					zIndex: -1,
					"--animation-speed": `${QuatreProps.speed || 5}s`,
					borderRadius:
						QuatreProps.formType === "top"
							? "0 100% 0 0"
							: QuatreProps.formType === "right"
							? "0 0 100% 0 "
							: QuatreProps.formType === "bottom"
							? "0 0 0 100%"
							: "100% 0 0 0",
				} as React.CSSProperties
			}
		></div>
	)
}
export default MoveQuatre
