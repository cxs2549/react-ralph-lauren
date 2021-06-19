import Hero from "../components/ui/Hero"
import homeImg from '../assets/home.png'

const Home = () => {
    return (
        <div className="h-screen bg-green-200">
            <Hero hero={homeImg} />
        </div>
    )
}

export default Home
