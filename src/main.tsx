import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import App from "./App.tsx"
import About from "./components/About/About.tsx"
import Service from "./components/Service/Service.tsx"
import "./style.scss"
import Experience from "./components/Experience/Experience.tsx"
import Skills from "./components/Skills/Skills.tsx"
import Contacts from "./components/Contacts/Contacts.tsx"

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route
				path="/"
				element={<App />}
			/>
			<Route
				path="/service"
				element={<Service />}
			/>
			<Route
				path="/about"
				element={<About />}
			/>
			<Route
				path="/experience"
				element={<Experience />}
			/>
			<Route
				path="/skills"
				element={<Skills />}
			/>
			<Route
				path="/contacts"
				element={<Contacts />}
			/>
		</Routes>
	</BrowserRouter>
)
