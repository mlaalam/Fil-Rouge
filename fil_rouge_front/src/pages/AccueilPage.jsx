import HeroSection from "../components/HeroSection"
import Services from "../components/Services"
import ArtisanProfess from "../components/ArtisanProfess"
import FindArtisanSteps from "../components/FindArtisanSteps"
import Comments from "../components/Comments"
import CreateCompte from "../components/CreateCompte"
import ProjectsArtisan from "../components/ProjectsArtisan"

function AccueilPage({searchVille ,searchCategory,setSearchVille,setSearchCategory}) {
  
  return (
    <div className="">
      <HeroSection searchVille={searchVille} searchCategory={searchCategory} setSearchVille={setSearchVille} setSearchCategory={setSearchCategory} />
      <Services />
      <ArtisanProfess searchVille={searchVille} searchCategory={searchCategory} />
      <ProjectsArtisan />
      <FindArtisanSteps />
      <Comments />
      <CreateCompte />
    </div>
  )
}

export default AccueilPage