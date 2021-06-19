import { useRoutes } from "react-router"
import Navbar from "./components/layout/Navbar/Navbar"
import Homepage from "./pages/Homepage"
import Men from "./pages/Men"
import Women from "./pages/Women"
import KidsBaby from "./pages/KidsBaby"
import Home from "./pages/Home"
import Gifts from "./pages/Gifts"
import RL from "./pages/RL"
import Sale from "./pages/Sale"

const routes = [
    { path: "/", element: <Homepage /> },
    { path: "/men", element: <Men /> },
    { path: "/women", element: <Women /> },
    { path: "/kids-baby", element: <KidsBaby /> },
    { path: "/home", element: <Home /> },
    { path: "/gifts", element: <Gifts /> },
    { path: "/world-of-rl", element: <RL /> },
    { path: "/sale", element: <Sale /> },
    { path: "/sale", element: <Sale /> },
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
