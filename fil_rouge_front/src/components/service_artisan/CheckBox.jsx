import React from "react";

function CheckBox() {
  return (
    // <div className="mx-50 mt-15 mb-16">
    //     <div className=''>
    //       <fieldset className=''>
    //         <legend className='font-semibold mb-2 text-[#1D2B53]'>Categories</legend>
    //         <div>
    //           <input type="checkbox"  value="climatisation"/>
    //           <label for="climatisation" className='font-semibold mx-2'>Climatisation</label>
    //         </div>
    //         <div>
    //           <input type="checkbox"  value="serrurier" />
    //           <label for="serrurier" className='font-semibold mx-2'>Serrurier</label>
    //         </div>
    //         <div>
    //           <input type="checkbox"  value="peintre" />
    //           <label for="peintre" className='font-semibold mx-2'>Peintre</label>
    //         </div>
    //         <div>
    //           <input type="checkbox"  value="menuisier" />
    //           <label for="menuisier" className='font-semibold mx-2'>Menuisier</label>
    //         </div>
    //         <div>
    //           <input type="checkbox"  value="electricien" />
    //           <label for="electricien" className='font-semibold mx-2'>Électricien</label>
    //         </div>
    //       </fieldset>
    //     </div>
    //     <div className=''>
    //       <fieldset className=''>
    //         <legend className='font-semibold mb-2 mt-8 text-[#1D2B53]'>Ville</legend>
    //         <div>
    //           <input type="checkbox"  value="casablanca"/>
    //           <label for="casablanca" className='font-semibold mx-2'>Casablanca</label>
    //         </div>
    //         <div>
    //           <input type="checkbox"  value="rabat" />
    //           <label for="rabat" className='font-semibold mx-2'>Rabat</label>
    //         </div>
    //         <div>
    //           <input type="checkbox"  value="marrakech" />
    //           <label for="marrakech" className='font-semibold mx-2'>Marrakech</label>
    //         </div>
    //         <div>
    //           <input type="checkbox" className='font-semibold ' value="tangier" />
    //           <label for="tangier" className='font-semibold mx-2'>Tangier</label>
    //         </div>
    //         <div>
    //           <input type="checkbox"  value="fes" />
    //           <label for="fes" className='font-semibold mx-2'>Fes</label>
    //         </div>
    //       </fieldset>
    //     </div>
    //     <div className=''>
    //       <fieldset className=''>
    //         <legend className='font-semibold mb-2 mt-8 text-[#1D2B53]'>Disponibilité</legend>
    //         <div>
    //           <input type="checkbox"  value="aujourd"/>
    //           <label for="aujourd" className='font-semibold mx-2'>Aujourd'hui</label>
    //         </div>
    //         <div>
    //           <input type="checkbox"  value="semaine" />
    //           <label for="semaine" className='font-semibold mx-2'>Cette semaine</label>
    //         </div>
    //         <div>
    //           <input type="checkbox"  value="mois" />
    //           <label for="mois" className='font-semibold mx-2'>Ce mois</label>
    //         </div>
    //       </fieldset>
    //     </div>
    // </div>
    
    <div className="space-y-8">
      <fieldset>
        <legend className="font-bold mb-3 text-[#1D2B53]">Catégories</legend>
        <div className="space-y-2">
          {[
            "Climatisation",
            "Serrurier",
            "Peintre",
            "Menuisier",
            "Électricien",
          ].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input type="checkbox" className="accent-[#FA7B0C]" />
              <span className="font-medium">{item}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-bold mb-3 text-[#1D2B53]">Ville</legend>
        <div className="space-y-2">
          {["Casablanca", "Rabat", "Marrakech", "Tanger", "Fès"].map((city) => (
            <label
              key={city}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input type="checkbox" className="accent-[#FA7B0C]" />
              <span className="font-medium">{city}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-bold mb-3 text-[#1D2B53]">Disponibilité</legend>
        <div className="space-y-2">
          {["Aujourd’hui", "Cette semaine", "Ce mois"].map((time) => (
            <label
              key={time}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input type="checkbox" className="accent-[#FA7B0C]" />
              <span className="font-medium">{time}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export default CheckBox;
