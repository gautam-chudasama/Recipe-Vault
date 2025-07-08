import { useContext, useState } from "react";
import { useParams } from "react-router-dom"
import { recipecontext } from "../context/Recipecontext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Singlerecipe = () => {

  const { data, setdata } = useContext(recipecontext);

  const params = useParams();
  const recipe = data.find((recipe) => recipe.id == params.id);

  const navigate = useNavigate();


  const {register, handleSubmit, reset} = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      ingredients: recipe?.ingredients,
      instructions: recipe?.instructions,
      description: recipe?.description,
      category: recipe?.category
    }
  });

    const updateHandler = (recipe) => {
      const index = data.findIndex((recipe) => recipe.id == params.id);
      const copydata = [...data];
      copydata[index] = {...copydata[index], ...recipe};
      setdata(copydata);

      localStorage.setItem("recipes", JSON.stringify(copydata));

      toast.success("Recipe Updated Successfully");
    };

    const deleteHandler = () => {
      const filteredData = data.filter((r) => r.id != params.id);
      setdata(filteredData);

      localStorage.setItem("recipes", JSON.stringify(filteredData));

      toast.success("Recipe Deleted Successfully");
      navigate("/recipes");
    }

    const [favourite, setfavourite] = useState(
      JSON.parse(localStorage.getItem("fav")) || []
    )

    const FavHandler = () => {
      const copyfav = [...favourite];
      copyfav.push(recipe);
      setfavourite(copyfav);
      localStorage.setItem("fav", JSON.stringify(copyfav));
    };

    const UnFavHandler = () => {
      const filteredFav = favourite.filter((f) => f.id != recipe?.id);
      setfavourite(filteredFav);
      localStorage.setItem("fav", JSON.stringify(filteredFav));
    };
    
  return (
    recipe ? (<div className="w-full flex">
      <div className="relative left w-1/2 p-10">

      {favourite.find((f)=> f.id == recipe?.id) ? (
        <i onClick={UnFavHandler}
       className="right-[5%] absolute text-3xl text-red-500 ri-heart-fill"></i>
       ) : (
       <i onClick={FavHandler}
        className="right-[5%] absolute text-3xl text-red-500 ri-heart-line"></i>
        )}
      
        <h1 className="text-5xl font-black">{recipe?.title}</h1>
        <img className="h-[30vh] justify-self-center mt-5" src={recipe.image} alt="" />
        <h1 className="text-2xl mt-3">{recipe.description}</h1>
      </div>

      <form className="right w-1/2 p-2" onSubmit={handleSubmit(updateHandler)}>
        <input 
        {...register("image")}
        className="w-[30vw] border-b block outline-0 p-2 mt-4"
        type="url" 
        placeholder="Image URL"
        />

        <input 
        {...register("title")}
        className="w-[30vw] border-b block outline-0 p-2 mt-4"
        type="text" 
        placeholder="Recipe Title"
        />

        <textarea 
        {...register("ingredients")}
        className="w-[30vw] border-b block outline-0 p-2 mt-4"
        placeholder="Write Ingredients"
        ></textarea>

        <textarea 
        {...register("instructions")}
        className="border-b block outline-0 p-2 mt-4"
        placeholder="Write Instructions"
        ></textarea>

        <textarea 
        {...register("description")}
        className="border-b block outline-0 p-2 mt-4"
        placeholder="Description"
        ></textarea>

        <select 
        {...register("category")}
        className="border-b block outline-0 bg-gray-800 p-2 mt-4" 
        >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
        </select>

        <button 
        className="block mg-5 mt-3 bg-blue-900 px-4 py-2 rounded">Update Recipe
        </button>

        <button
        onClick={deleteHandler}
        className="block mg-5 mt-3 bg-red-900 px-4 py-2 rounded">Delete Recipe
        </button>

    </form>

    </div>)  : ("Loading...")
  )
}

export default Singlerecipe