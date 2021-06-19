import { useRoutes } from "react-router"
import Navbar from "./components/layout/Navbar/Navbar"
import Men from "./pages/Men"
import Women from "./pages/Women"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import Notifications from "./pages/Notifications"
import Services from "./pages/Services"

const routes = [
    { path: "/", element: <Home /> },
    { path: "/notifications", element: <Notifications /> },
    { path: "/men", element: <Men /> },
    { path: "/women", element: <Women /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "/services", element: <Services /> },
]

const App = () => {
    let element = useRoutes(routes)

    return (
        <div>
            <Navbar />
            <div>{element}</div>
        </div>
    )
}

export default App
