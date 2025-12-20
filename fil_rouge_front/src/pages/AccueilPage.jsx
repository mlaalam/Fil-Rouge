import HeroSection from "../components/HeroSection"
import Services from "../components/Services"
import TopArtusan from "../components/TopArtusan"
import ArtisanProfess from "../components/ArtisanProfess"
import FindArtisanSteps from "../components/FindArtisanSteps"
import Comments from "../components/Comments"
import CreateCompte from "../components/CreateCompte"

function AccueilPage() {
  return (
    <div className="">
      <HeroSection />
      <Services />
      <TopArtusan />
      <ArtisanProfess />
      <FindArtisanSteps />
      <Comments />
      <CreateCompte />
    </div>
  )
}

export default AccueilPage