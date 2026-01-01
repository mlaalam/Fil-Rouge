import React, { useState } from "react";
import Search from "../components/service_artisan/search";
import CheckBox from "../components/service_artisan/CheckBox";
import SectionArtisan from "../components/service_artisan/sectionArtisan";

function ServicePape() {
  const [villeInput , setVilleInput] = useState("");
  const [categoryInput , setCategoryInput] = useState("");


  return (
    <div>
      <Search villeInput={villeInput} setVilleInput={setVilleInput} categoryInput={categoryInput} setCategoryInput={setCategoryInput} />
      

      <main className="max-w-[80%] mx-auto mt-10">
        {/* <div className="flex flex-col lg:flex-row gap-8"> */}
          {/* <aside className="w-full lg:w-[25%] bg-white rounded-xl shadow-md p-6 h-fit mt-15 mb-16">
            <CheckBox />
          </aside> */}
          {/* <section className="w-full lg:w-[75%]"> */}
            <SectionArtisan villeInput={villeInput} categoryInput={categoryInput} />
          {/* </section> */}
        {/* </div> */}
      </main>
    </div>
  );
}

export default ServicePape;
