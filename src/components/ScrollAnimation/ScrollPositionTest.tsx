// Test component to verify scroll position detection
// Add this temporarily to test the fix

import { useEffect } from "react"

const ScrollPositionTest = () => {
	useEffect(() => {
		console.log("=== SCROLL POSITION TEST ===")
		console.log("Current scroll position:", window.scrollY)
		console.log("Window height:", window.innerHeight)
		console.log("Document height:", document.documentElement.scrollHeight)

		// Check all ScrollAnimation elements
		const scrollElements = document.querySelectorAll('[class*="scrollAnimation"]')
		console.log(`Found ${scrollElements.length} scroll animation elements`)

		scrollElements.forEach((el, index) => {
			const rect = el.getBoundingClientRect()
			const elementTop = rect.top + window.scrollY
			const shouldBeVisible = elementTop < window.scrollY + window.innerHeight

			console.log(`Element ${index + 1}:`, {
				top: elementTop,
				shouldBeVisible,
				isVisible: el.classList.contains("visible"),
			})
		})

		console.log("===========================")
	}, [])

	return (
		<div
			style={{
				position: "fixed",
				top: 10,
				left: 10,
				background: "rgba(0,0,0,0.8)",
				color: "white",
				padding: "10px",
				fontSize: "12px",
				zIndex: 9999,
				borderRadius: "5px",
			}}
		>
			<div>Scroll: {window.scrollY}px</div>
			<div>Height: {window.innerHeight}px</div>
			<div>Doc Height: {document.documentElement.scrollHeight}px</div>
		</div>
	)
}

export default ScrollPositionTest
