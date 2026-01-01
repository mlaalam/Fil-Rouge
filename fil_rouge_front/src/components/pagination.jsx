import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Pagination({ currentPage, setCurrentPage, totalPages }) {
  return (
    <div className="mx-auto flex justify-center items-center mb-18 gap-4 mt-10">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="border w-10 h-10 rounded-xl flex justify-center items-center"
      >
        <IoIosArrowBack />
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`w-10 h-10 rounded-xl font-semibold
        ${
          currentPage === i + 1
            ? "bg-[#FA7B0C] text-white"
            : "border border-[#FA7B0C] text-black"
        }
      `}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="border w-10 h-10 rounded-xl flex justify-center items-center"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Pagination;
