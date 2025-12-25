import { useState } from "react";
import { FaStar } from "react-icons/fa";

const CommentCard = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex flex-col bg-white rounded-xl p-4 w-full ">
      
      <h4 className="font-semibold text-lg mb-4 text-center">
        Ajouter un commentaire
      </h4>
      <div className="flex justify-center gap-2 mb-4">
        {[1,2,3,4,5].map((star) => (
          <FaStar
            key={star}
            className={`cursor-pointer ${
              rating >= star ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => setRating(star)}
          />
        ))}
      </div>
{/* 
      <input
        type="text"
        placeholder="Votre nom"
        className="w-full border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[#FA7B0C]"
      />

      <input
        type="text"
        placeholder="Votre ville"
        className="w-full border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[#FA7B0C]"
      /> */}

      <textarea
        placeholder="Votre commentaire"
        rows="3"
        className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#FA7B0C]"
      />

      <button className="w-full bg-[#FA7B0C] text-white font-semibold py-2 rounded-full hover:opacity-90">
        Envoyer
      </button>
    </div>
  );
};

export default CommentCard;
