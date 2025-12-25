import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../slices/Category";

function Services() {
  const gradients = [
    "from-green-300 to-white",
    "from-blue-300 to-white",
    "from-yellow-300 to-white",
    "from-red-200 to-white",
    "from-purple-100 to-white",
    "from-orange-300 to-white",
    "from-teal-400 to-white",
  ];
  const dispatch = useDispatch();
  const {
    data: categories,
    loading,
    error,
  } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <section className="px-4 mt-18">
      <h1 className="text-center text-[#FA7B0C] text-2xl font-bold">
        Trouvez l'artisan qu'il vous faut
      </h1>

      {loading && <p className="text-center mt-4">Chargement...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      <div className="max-w-[90%] mx-auto my-6 overflow-x-auto scrollbar-hide scroll-smooth">
        <div className="flex flex-nowrap gap-4 pb-4">
          {categories.length === 0 && !loading ? (
            <p className="text-center text-gray-500">
              Aucune catégorie trouvée.
            </p>
          ) : (
            categories.map((cat, index) => {
              const bgGradient = gradients[index % gradients.length];
              return (
                <div
                  key={cat.id}
                  className={`min-w-[250px] h-[140px] rounded-xl shadow-md
              flex flex-col justify-center items-start p-4
              transition-transform duration-300 hover:-translate-y-2
              hover:shadow-lg bg-gradient-to-br ${bgGradient}`}
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-2 overflow-hidden">
                    {cat.icon ? (
                      <img
                        src={cat.icon}
                        alt="category icon"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xl">🛠️</span>
                    )}
                  </div>

                  <p className="text-sm font-semibold text-gray-800">
                    {cat.title}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default Services;
