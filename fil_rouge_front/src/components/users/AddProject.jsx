import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../slices/Category";
import { editProject, getMyProject, saveProject } from "../../slices/projectSlice";



function AddProject({showForm , setShowForm ,project}) {
  const {data:categories} = useSelector((state)=>state.categories);
  const {loadingSave ,fieldErrors } = useSelector((state)=>state.projects);
  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [image , setImage] = useState(null);
  const [category , setCategory] = useState('');

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCategory());
  },[dispatch]);
    const hendelSubmit = async (e) => {
      e.preventDefault();
      let result;
      if(project){
        result = await dispatch(
                editProject({id:project.id, title, description, image, category })
              );
      }else{
        result = await dispatch(
        saveProject({ title, description, image, category })
      );
      }
      if (saveProject.fulfilled.match(result) || editProject.fulfilled.match(result)) {
        setShowForm(false); 
      }
    };
  useEffect(()=>{
    if(project){
      setTitle(project.title);
      setDescription(project.description);
      setCategory(project.catigory_id);
    }
  },[project]);
  return (
    <div>
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Add New Project
          </h2>
          <form className="space-y-6" onSubmit={hendelSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Project Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="Enter project title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {fieldErrors.title && <p className="text-red-500">{fieldErrors.title}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Project Description
              </label>
              <textarea
                type="text"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                placeholder="Enter project title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {fieldErrors.description && <p className="text-red-500">{fieldErrors.description}</p>}
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-semibold mb-2">
                Project Image
              </label>
              <input
                type="file"
                onChange={(e)=>setImage(e.target.files[0])}
                accept="image/*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {fieldErrors.image && <p className="text-red-500">{fieldErrors.image}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Category
              </label>  
              <select value={category} onChange={(e)=>setCategory(e.target.value)}  className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.title}</option>
                  ))}
              </select>
              {fieldErrors.category && <p className="text-red-500">{fieldErrors.category}</p>}
            </div>
            <button
              type="submit"
              disabled={loadingSave}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              {loadingSave ? 'saving ...' : project ? 'modifier' : 'Submit Project'}
            </button>
            <button
              onClick={()=>setShowForm(!showForm)}
              className="w-full text-orange-600 font-semibold py-2"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProject;
