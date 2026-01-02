import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar, FaCommentAlt } from "react-icons/fa";
import { getRatings, storeRatin } from "../../slices/ratingSlice";
import { useParams } from "react-router-dom";
import { getUserId } from "../../services/auth";

function Rating() {
  const [rating, setRating] = useState(0);
  const [showCom, setShowCom] = useState(false);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const { ratings = [], average, loading } = useSelector(
    (state) => state.ratings
  );

  const { id } = useParams(); // artisan id
  const userId = getUserId(); // client id

  /* GET RATINGS */
  useEffect(() => {
    if (id) {
      dispatch(getRatings(id));
    }
  }, [dispatch, id]);

  /* CHECK IF USER ALREADY RATED */
  const alreadyRated = ratings.some(
    (r) => r.client_id === userId
  );

  /* SUBMIT RATING */
  const hendelSubmit = (e) => {
    e.preventDefault();

    if (!rating) {
      alert("Veuillez choisir une note");
      return;
    }

    if (alreadyRated) {
      alert("Vous avez déjà noté cet artisan");
      return;
    }

    if (userId === Number(id)) {
      alert("Vous ne pouvez pas vous noter vous-même");
      return;
    }

    dispatch(
      storeRatin({
        id,
        rating,
        comment,
      })
    );

    setRating(0);
    setComment("");
    setShowCom(false);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm relative">
      <h3 className="font-bold mb-4">
        Avis clients ⭐ {average ? Number(average).toFixed(1) : "0.0"}
      </h3>

      {/* LIST AVIS */}
      <div className="max-h-80 overflow-y-auto pr-2 space-y-4">
        {loading && (
          <p className="text-sm text-gray-500">Chargement...</p>
        )}

        {!loading && ratings.length === 0 && (
          <p className="text-sm text-gray-500">
            Aucun avis pour le moment
          </p>
        )}

        {ratings.map((review, i) => (
          <div key={i} className="border-b pb-3">
            <div className="flex justify-between items-center">
              <p className="font-semibold">
                {review.client?.nom_complet || "Client"}
              </p>

              <div className="text-yellow-400">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
            </div>

            {review.comment && (
              <p className="text-sm mt-1 text-gray-700">
                {review.comment}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* BUTTON COMMENT */}
      <div className="flex justify-end sticky bottom-0 bg-white pt-4">
        <button
          onClick={() => setShowCom(!showCom)}
          disabled={alreadyRated || userId === Number(id)}
        >
          <FaCommentAlt
            className={`w-7 h-7 ${
              alreadyRated || userId === Number(id)
                ? "text-gray-300"
                : "text-[#FA7B0C]"
            }`}
          />
        </button>
      </div>

      {/* FORM COMMENT */}
      {showCom && (
        <form onSubmit={hendelSubmit} className="mt-4 border-t pt-4">
          <h4 className="font-semibold text-lg mb-3 text-center">
            Ajouter un commentaire
          </h4>

          <div className="flex justify-center gap-2 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer ${
                  rating >= star
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>

          <textarea
            placeholder="Votre commentaire"
            rows={2}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[#FA7B0C] resize-none"
          />

          <button
            type="submit"
            disabled={alreadyRated || userId === Number(id)}
            className="w-full bg-[#FA7B0C] disabled:opacity-50 text-white font-semibold py-2 rounded-full hover:opacity-90"
          >
            Envoyer
          </button>

          {alreadyRated && (
            <p className="text-center text-sm text-red-500 mt-2">
              Vous avez déjà noté cet artisan
            </p>
          )}
        </form>
      )}
    </div>
  );
}

export default Rating;
