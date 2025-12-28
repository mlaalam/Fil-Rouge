import HeroSection from "../components/HeroSection"
import Services from "../components/Services"
import TopArtusan from "../components/TopArtusan"
import ArtisanProfess from "../components/ArtisanProfess"
import FindArtisanSteps from "../components/FindArtisanSteps"
import Comments from "../components/Comments"
import CreateCompte from "../components/CreateCompte"
import { useState } from "react"

function AccueilPage({searchVille ,searchCategory,setSearchVille,setSearchCategory}) {
  
  return (
    <div className="">
      <HeroSection searchVille={searchVille} searchCategory={searchCategory} setSearchVille={setSearchVille} setSearchCategory={setSearchCategory} />
      <Services />
      <TopArtusan />
      <ArtisanProfess searchVille={searchVille} searchCategory={searchCategory} />
      <FindArtisanSteps />
      <Comments />
      <CreateCompte />
    </div>
  )
}

export default AccueilPage