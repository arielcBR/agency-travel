import { HomeContainer } from './styles'
import { HeroSection } from '../../components/HeroSection'
import { AboutUs } from '../../components/AboutUs'
import { OurServices } from '../../components/OurServices'
import { AgencyInfo } from '../../components/AgencyInfo'

export function Home() {
    
    return (
      <HomeContainer>
        <HeroSection />
        <AboutUs />
        <OurServices />
        <AgencyInfo />
      </HomeContainer>
    )
}