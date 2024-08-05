import HookEffect from "../Effect/HookEffect"
import ProductCarousel from "../Pages/Carousel"
import DispalyIdCard from "../Product/DispalyIdCard"
import DispalyProducts from "../Product/DispalyProducts"

const Herosection = () => {
    return (
        <>
        <ProductCarousel/>
        {/* <DispalyIdCard/> */}
        <DispalyProducts/>
        <HookEffect/>
        </>
    )
}

export default Herosection