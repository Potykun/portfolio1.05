import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import AppTemplate from "./templates/App.tsx"
import About from "./pages/About/About.tsx"
import ServicePage from "./pages/Service/Service.tsx"
import "./style.scss"
import Experience from "./pages/Experience/Experience.tsx"
import Skills from "./pages/Skills/Skills.tsx"
import Contacts from "./pages/Contacts/Contacts.tsx"
import Home from "./pages/Home/Home.tsx"

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<AppTemplate />}>
							<Route index element={<Home />} />
							<Route path="/service" element={<ServicePage />} />
							<Route path="/about" element={<About />} />
							<Route path="/experience" element={<Experience />} />
							<Route path="/skills" element={<Skills />} />
							<Route path="/contacts" element={<Contacts />} />
						</Route>
		</Routes>
	</BrowserRouter>,
)
