import { FC, ReactNode, useEffect, useRef, useState } from "react"
import styles from "./ScrollAnimation.module.scss"

interface ScrollAnimationProps {
	children: ReactNode
	direction?: "left" | "right" | "bottom" | "top"
	delay?: number
	duration?: number
	threshold?: number
	className?: string
}

const ScrollAnimation: FC<ScrollAnimationProps> = ({
	children,
	direction = "left",
	delay = 0,
	duration = 0.6,
	threshold = 0.1,
	className = "",
}) => {
	const [isVisible, setIsVisible] = useState(false)
	const [isAnimating, setIsAnimating] = useState(false)
	const elementRef = useRef<HTMLDivElement>(null)
	const observerRef = useRef<IntersectionObserver | null>(null)
	const timeoutRef = useRef<number | null>(null)
	const lastScrollY = useRef(0)
	const hasTriggered = useRef(false)
	const hasCheckedInitial = useRef(false)

	// Check if element should be visible based on current scroll position
	const checkInitialVisibility = () => {
		if (!elementRef.current || hasTriggered.current || hasCheckedInitial.current) return

		const rect = elementRef.current.getBoundingClientRect()
		const windowHeight = window.innerHeight
		const scrollY = window.scrollY
		const elementTop = rect.top + scrollY

		// If element is above current scroll position or in viewport, make it visible immediately
		if (elementTop < scrollY + windowHeight) {
			console.log(
				`Element should be visible - top: ${elementTop}, scroll: ${scrollY}, window: ${windowHeight}`,
			)
			setIsVisible(true)
			hasTriggered.current = true
			setIsAnimating(true)

			// Clean up observer since we don't need it anymore
			if (observerRef.current && elementRef.current) {
				observerRef.current.unobserve(elementRef.current)
				observerRef.current.disconnect()
				observerRef.current = null
			}
		}

		hasCheckedInitial.current = true
	}

	// Handle scroll direction detection and intersection
	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		const [entry] = entries
		const currentScrollY = window.scrollY

		// Only trigger on scroll down and if not already triggered
		if (
			entry.isIntersecting &&
			currentScrollY > lastScrollY.current &&
			!hasTriggered.current &&
			!isAnimating
		) {
			hasTriggered.current = true
			setIsAnimating(true)

			// Clear any existing timeout
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}

			// Set timeout for delay
			timeoutRef.current = setTimeout(() => {
				setIsVisible(true)

				// Clean up observer after animation triggers
				if (observerRef.current && elementRef.current) {
					observerRef.current.unobserve(elementRef.current)
					observerRef.current.disconnect()
					observerRef.current = null
				}
			}, delay)
		}

		lastScrollY.current = currentScrollY
	}

	useEffect(() => {
		// Check initial visibility on mount with a small delay to ensure DOM is ready
		const initialCheckTimer = setTimeout(() => {
			checkInitialVisibility()
		}, 100)

		// Only create observer if element hasn't been triggered yet
		if (!hasTriggered.current && elementRef.current) {
			observerRef.current = new IntersectionObserver(handleIntersection, {
				threshold,
				rootMargin: "0px 0px -50px 0px",
			})

			observerRef.current.observe(elementRef.current)
		}

		// Complete cleanup function
		return () => {
			clearTimeout(initialCheckTimer)
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
				timeoutRef.current = null
			}
			if (observerRef.current && elementRef.current) {
				observerRef.current.unobserve(elementRef.current)
				observerRef.current.disconnect()
				observerRef.current = null
			}
		}
	}, [delay, threshold])

	// Clean up after animation completes
	useEffect(() => {
		if (isVisible && isAnimating) {
			const cleanupTimer = setTimeout(() => {
				setIsAnimating(false)
			}, duration * 1000 + delay)

			return () => clearTimeout(cleanupTimer)
		}
	}, [isVisible, isAnimating, duration, delay])

	return (
		<div
			ref={elementRef}
			className={`${styles.scrollAnimation} ${styles[direction]} ${
				isVisible ? styles.visible : ""
			} ${className}`}
			style={
				{
					"--animation-duration": `${duration}s`,
				} as React.CSSProperties
			}
		>
			{children}
		</div>
	)
}

export default ScrollAnimation
