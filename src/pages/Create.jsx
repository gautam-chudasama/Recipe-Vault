import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import {recipecontext} from "../context/Recipecontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const navigate = useNavigate();

  const { data, setdata } = useContext(recipecontext);
  
  // Assuming Recipecontext is imported from the context file
  const {register, handleSubmit, reset} = useForm();

    const submitHandler = (recipe) => {
        recipe.id = nanoid();
        // Here you can handle the form submission, e.g., send data to an API
        // or update the state in your application.

        const copydata = [...data];
        copydata.push(recipe);
        setdata(copydata);

        localStorage.setItem("recipes", JSON.stringify(copydata));

        toast.success("Recipe Created Successfully",data);
        navigate("/recipes");

        reset();
    };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
        <input 
        {...register("image")}
        className="border-b block outline-0 p-2 mt-4"
        type="url" 
        placeholder="Image URL"
        />
        <small className="text-red-400">THis is error</small>

        <input 
        {...register("title")}
        className="border-b block outline-0 p-2 mt-4"
        type="text" 
        placeholder="Recipe Title"
        />

        <textarea 
        {...register("ingredients")}
        className="border-b block outline-0 p-2 mt-4" 
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
        className="block mg-5 bg-gray-900 px-4 py-2 rounded">Create Recipe
        </button>

    </form>
  )
}

export default Create