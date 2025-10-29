import { Outlet } from "react-router-dom"
import Header from "../organisms/Header/Header"

function App() {
	return (
		<>
			<Header></Header>
			<Outlet />
		</>
	)
}

export default App
