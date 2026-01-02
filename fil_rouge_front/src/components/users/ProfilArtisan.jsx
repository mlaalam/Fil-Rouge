import { useEffect, useState } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
import { LuClock3 } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { showArtisan } from "../../slices/artisanSlice";
import { useParams } from "react-router-dom";
import { getMyProject } from "../../slices/projectSlice";
import { getUserId, getUserRole } from "../../services/auth";
import EditProfil from "./EditProfil";
import Rating from "./Rating";
const StatBox = ({ title, value, green }) => (
  <div className="bg-white rounded-xl p-4 text-center shadow-sm">
    <p className="text-sm text-gray-500">{title}</p>
    <p className={`font-bold ${green ? "text-green-500" : "text-[#1D2B53]"}`}>
      {value}
    </p>
  </div>
);

export default function ProfilArtisan() {
  const [selectProfil, setSelectProfil] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const { data: projects } = useSelector((state) => state.projects);
  const userId = Number(getUserId());
  const totalProjectCom = projects.filter(
    (pro) => pro.artisan_id === userId && pro.status === 1
  ).length;
  const { profil: artisan, loading } = useSelector((state) => state.artisans);
  const { id } = useParams();
  useEffect(() => {
    dispatch(showArtisan(id));
    dispatch(getMyProject());
  }, [dispatch, id]);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }

  if (!artisan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Artisan not found</p>
      </div>
    );
  }
  const userRole = getUserRole();
  return (
    <>
        <div className=" min-h-screen py-10 px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {userId === artisan?.id && (
              <button
                onClick={() => {
                  setShowForm(!showForm);
                  setSelectProfil(artisan);
                }}
                className="bg-blue-400 text-white p-3 font-bold cursor-pointer rounded-lg hover:bg-blue-500 transition"
              >
                Modifier profil
              </button>
            )}
            <div className="bg-[#F3EADF] rounded-2xl p-6 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 flex flex-col">
                <img
                  src={artisan.image}
                  alt="artisan"
                  className="rounded-full mx-auto w-64 h-64 object-cover"
                />

                <a
                  href={`https://wa.me/212${artisan.numero}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full border-2 border-green-500 text-green-500 font-semibold py-2 rounded-full hover:bg-green-500 hover:text-white transition flex justify-center items-center gap-2"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>

              <div className="flex-1 space-y-3">
                <h2 className="text-2xl font-bold text-[#1D2B53]">
                  {artisan.nom_complet}
                </h2>

                <p className="text-blue-600 font-medium">{artisan.secteur}</p>

                <p className="flex items-center gap-2 text-gray-600">
                  <FaLocationDot /> {artisan.ville}
                </p>

                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400 text-lg">★★★☆☆</div>
                  <span className="text-sm text-gray-600">3.0 (120 avis)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <StatBox title="Expérience" value="15+ ans" />
                  <StatBox
                    title="Projets"
                    value={`${
                      userId === artisan?.id ? totalProjectCom : "No"
                    } complétés`}
                  />
                  <StatBox title="Réponse" value="< 2 heures" green />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm md:col-span-2">
                <h3 className="font-bold mb-2">À propos</h3>
                <p className="text-gray-600 text-sm">{artisan.propos}</p>

                <p className="mt-4 flex items-center gap-2 text-sm flex justify-start items-center gap-2">
                  <FaPhoneSquareAlt className=" rounded-full w-5 h-5" /> +212{" "}
                  {artisan.numero}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm space-y-3">
                <p className="flex items-center gap-2 font-semibold flex justify-start items-center gap-2">
                  <LiaCertificateSolid className="w-4 h-4" /> Artisan Certifié
                </p>
                <p className="flex items-center gap-2 font-semibold flex justify-start items-center gap-2">
                  <LuClock3 className="w-4 h-4" /> Ponctuel
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm md:col-span-2">
                <h3 className="font-bold mb-4">Services proposés</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Installation robinetterie",
                    "Tuyauterie",
                    "Réparation fuites",
                    "Installation chauffe-eau",
                    "Installation piscine",
                    "Débouchage",
                  ].map((service) => (
                    <span
                      key={service}
                      className="bg-orange-200 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2"
                    >
                      ✔ {service}
                    </span>
                  ))}
                </div>
              </div>
              <Rating />
            </div>
          </div>
          {showForm ? (
            <EditProfil
              showForm={showForm}
              setShowForm={setShowForm}
              profile={selectProfil}
            />
          ) : (
            ""
          )}
        </div>
      
    </>
  );
}
