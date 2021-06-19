import Hero from "../components/ui/Hero"
import saleImg from '../assets/sale.png'

const Sale = () => {
    return (
        <div className="h-screen bg-red-500">
            <Hero hero={saleImg} />
        </div>
    )
}

export default Sale
