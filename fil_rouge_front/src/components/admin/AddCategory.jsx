
import { useDispatch ,useSelector } from "react-redux";
import { storeCategory } from "../../slices/Category";
import { useState } from "react";
function AddCategory({setShowForm}) {
  const [title ,setTitle] = useState('')
  const [icon ,setIcon] = useState(null)
  const {loading} = useSelector((state)=>state.categories);
  const dispatch = useDispatch();
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await dispatch(storeCategory({ title, icon }));

    if (storeCategory.fulfilled.match(res)) {
        setShowForm(false); 
    }
  } catch (error) {
    console.error("Failed to save category:", error);
  }
};


  return (
    <div>
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Add New Category
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Category Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="Enter category title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-semibold mb-2">
                Icon Category
              </label>
              <input
                type="file"
                onChange={(e)=>setIcon(e.target.files[0])}
                accept="image/*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
               {loading ? 'saving ...': 'Add category'}
            </button>
            <button
              type="button"
              onClick={()=>setShowForm(false)}
              className="w-full text-blue-600 font-semibold py-2"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddCategory