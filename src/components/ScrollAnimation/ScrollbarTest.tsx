// Scrollbar Test - Add this temporarily to test scrollbar behavior
// Remove after confirming single scrollbar works

const ScrollbarTest = () => {
	useEffect(() => {
		console.log("=== SCROLLBAR TEST ===")
		console.log("HTML overflow-y:", getComputedStyle(document.documentElement).overflowY)
		console.log("Body overflow-y:", getComputedStyle(document.body).overflowY)
		console.log("Root overflow-y:", getComputedStyle(document.getElementById("root")).overflowY)
		console.log("Main overflow-y:", getComputedStyle(document.querySelector("main")).overflowY)

		// Check for multiple scrollable elements
		const scrollableElements = document.querySelectorAll("*")
		let scrollableCount = 0

		scrollableElements.forEach((el) => {
			const style = getComputedStyle(el)
			if (style.overflowY === "auto" || style.overflowY === "scroll") {
				scrollableCount++
				console.log(`Scrollable element: ${el.tagName}`, el.className)
			}
		})

		console.log(`Total scrollable elements: ${scrollableCount}`)
		console.log("========================")
	}, [])

	return null
}

export default ScrollbarTest
