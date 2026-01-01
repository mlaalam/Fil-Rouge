import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
function Rating() {
  const [rating , setRating] =useState(0)
  const [showCom , setShowCom] = useState(false);
  return (
    <div>
          <div className="bg-white rounded-xl p-6 shadow-sm relative">
                <h3 className="font-bold mb-4">Avis clients</h3>
                <div className="max-h-80 overflow-y-auto pr-2">
                {[
                  {
                    name: "Zineb K.",
                    text: "Travail impeccable et professionnel. Je recommande vivement!",
                    stars: 4,
                    time: "2 semaines",
                  },
                  {
                    name: "Zineb K.",
                    text: "Travail impeccable et professionnel. Je recommande vivement!",
                    stars: 4,
                    time: "2 semaines",
                  },
                  {
                    name: "Zineb K.",
                    text: "Travail impeccable et professionnel. Je recommande vivement!",
                    stars: 4,
                    time: "2 semaines",
                  },
                  {
                    name: "Zineb K.",
                    text: "Travail impeccable et professionnel. Je recommande vivement!",
                    stars: 4,
                    time: "2 semaines",
                  },
                  {
                    name: "Zineb K.",
                    text: "Travail impeccable et professionnel. Je recommande vivement!",
                    stars: 4,
                    time: "2 semaines",
                  },
                  {
                    name: "Zineb K.",
                    text: "Travail impeccable et professionnel. Je recommande vivement!",
                    stars: 4,
                    time: "2 semaines",
                  },
                  {
                    name: "Hassan M.",
                    text: "Bon service. Quelques petits ajustements auraient été appréciés.",
                    stars: 4,
                    time: "1 mois",
                  },
                  {
                    name: "Amina T.",
                    text: "Très satisfait. Mohamed est ponctuel et efficace.",
                    stars: 5,
                    time: "2 mois",
                  },
                ].map((review, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between">
                      <p className="font-semibold">{review.name}</p>
                      <div className="text-yellow-400">
                        {"★".repeat(review.stars)}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{review.time}</p>
                    <p className="text-sm mt-1">{review.text}</p>
                  </div>
                ))}
                <div className="flex justify-end items-end sticky bottom-0 p-4">
                  <button className="cursor-pointer" onClick={()=>setShowCom(!showCom)} ><FaCommentAlt  className="w-8 h-8 text-[#FA7B0C]"/></button>
                </div>
                {showCom ?(
                  <div className="flex flex-col bg-white rounded-xl p-4 w-full">
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
                      <textarea
                        placeholder="Votre commentaire"
                        rows={2}
                        
                        className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#FA7B0C] resize-none"
                      />
                
                      <button className="w-full bg-[#FA7B0C] text-white font-semibold py-2 rounded-full hover:opacity-90">
                        Envoyer
                      </button>
                      {/* <button onClick={setShowCom(false)} className="w-full text-[#FA7B0C] font-semibold py-2 rounded-full">
                        Cancel
                      </button> */}
                  </div>
                ): ''
              }
              </div>
            </div>
    </div>
  )
}

export default Rating