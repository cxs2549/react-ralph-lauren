import Hero from "../components/ui/Hero"
import giftsImg from '../assets/gifts.png'

const Gifts = () => {
    return (
        <div className="h-screen bg-red-500">
            <Hero hero={giftsImg} />
        </div>
    )
}

export default Gifts
