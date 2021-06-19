import hero from "../assets/hero.png"
import Hero from "../components/ui/Hero"

const Homepage = () => {
    return (
        <div className="h-screen bg-blue-200">
            <Hero hero={hero} />
        </div>
    )
}

export default Homepage
