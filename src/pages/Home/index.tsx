import { HomeContainer } from './styles'
import { HeroSection } from '../../components/HeroSection'
import { AboutUs } from '../../components/AboutUs'
import { OurServices } from '../../components/OurServices'
import { AgencyInfo } from '../../components/AgencyInfo'
import { OurStaff } from "../../components/OurStaff"
import { Gallery } from '../../components/Gallery'
import { Contact } from '../../components/Contact/'

export function Home() {
    
    return (
      <HomeContainer>
        <HeroSection />
        <AboutUs />
        <OurServices />
        <AgencyInfo />
        <Gallery />
        <OurStaff />
        <Contact />
      </HomeContainer>
    )
}