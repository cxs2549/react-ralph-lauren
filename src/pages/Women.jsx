import Hero from "../components/ui/Hero"
import womens from '../assets/womens.png'

const Women = () => {
    return (
        <div className="h-screen bg-purple-500">
            <Hero hero={womens} />
        </div>
    )
}

export default Women
