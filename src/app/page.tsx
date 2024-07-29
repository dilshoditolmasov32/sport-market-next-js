
import Swipper from "../components/swiper"
import { Katalog, Products, BoxCard,Box} from "@/components"
import About from './about/page'

const Index = () => {
  return (
    <>
    <div className="pt-5 pb-10 bg-[#F2F2F2]">
    <Swipper/>
    </div>
    <Katalog/>
    <Products/>
    <BoxCard/>
    <Box/>
    <About/>
    </>
  )
}

export default Index