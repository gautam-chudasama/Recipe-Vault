import { useContext } from "react";
import { useParams } from "react-router-dom"
import { recipecontext } from "../context/Recipecontext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const Singlerecipe = () => {

  const { data, setdata } = useContext(recipecontext);

  const params = useParams();
  const recipe = data?.find((recipe) => recipe.id == params.id);
  // console.log(recipe);

  const navigate = useNavigate();


  const {register, handleSubmit} = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      ingredients: recipe?.ingredients,
      instructions: recipe?.instructions,
      description: recipe?.description,
      category: recipe?.category
    }
  });

    const submitHandler = (recipe) => {
      const index = data.findIndex((recipe) => recipe.id == params.id);
      const copydata = [...data];
      copydata[index] = {...copydata[index], ...recipe};
      console.log(copydata[index]);
      setdata(copydata);
      localStorage.setItem("recipes", JSON.stringify(copydata));
      toast.success("Recipe Updated Successfully");
      

      // copydata[index] = recipe;
      // setdata(copydata);
    };

    const deleteHandler = () => {
      const filteredData = data.filter((r) => r.id != params.id);
      setdata(filteredData);
      localStorage.setItem("recipes", JSON.stringify(filteredData));
      toast.success("Recipe Deleted Successfully");
      navigate("/recipes");
    }

    // const {data} = useContext(recipecontext)
    
  return (
    recipe ? (<div className="w-full flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img className="h-[30vh] justify-self-center mt-5" src={recipe.image} alt="" />
        <h1 className="text-2xl mt-3">{recipe.description}</h1>
      </div>

      <form className="right w-1/2 p-2" onSubmit={handleSubmit(submitHandler)}>
        <input 
        {...register("image")}
        // value={recipe.image}
        className="w-[30vw] border-b block outline-0 p-2 mt-4"
        type="url" 
        placeholder="Image URL"
        />

        <input 
        {...register("title")}
        // value={recipe.title}
        className="w-[30vw] border-b block outline-0 p-2 mt-4"
        type="text" 
        placeholder="Recipe Title"
        />

        <textarea 
        {...register("ingredients")}
        // value={recipe.ingredients}
        className="w-[30vw] border-b block outline-0 p-2 mt-4"
        placeholder="Write Ingredients"
        ></textarea>

        <textarea 
        {...register("instructions")}
        // value={recipe.instructions}
        className="border-b block outline-0 p-2 mt-4"
        placeholder="Write Instructions"
        ></textarea>

        <textarea 
        {...register("description")}
        // value={recipe.description}
        className="border-b block outline-0 p-2 mt-4"
        placeholder="Description"
        ></textarea>

        <select 
        {...register("category")}
        // value={recipe.category}
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