import { IoSearch } from "react-icons/io5";
function Search() {
  return (
    <div className="mx-auto max-w-[80%] mt-16">
      <h3 className="text-xl font-bold text-[#1D2B53]">Tous les artisans</h3>

      <div className="flex flex-col md:flex-row md:justify-center md:items-center  rounded-2xl md:rounded-full p-2 gap-2 md:gap-4">
        <input
          type="text"
          placeholder="Sélectionnez votre zone"
          className="flex px-5 py-4 bg-white  outline-none text-sm rounded-xl md:rounded-full p-2 gap-2 md:w-[40%] md:gap-4"
        />
        <input
          type="text"
          placeholder="Service"
          className="flex px-5 py-4 bg-white  outline-none text-sm rounded-xl md:rounded-full p-2 gap-2 md:w-[20%] md:gap-4"
        />
        <button className="bg-[#FA7B0C] hover:bg-orange-600 text-white px-8 py-4 rounded-xl md:rounded-full flex items-center justify-center gap-2 font-bold">
          <IoSearch size={20} /> Cherche
        </button>
      </div>
    </div>
  );
}

export default Search;
