import { useContext } from "react";
import { recipecontext } from "../context/Recipecontext";
import Recipecard from "../components/Recipecard";

const Recipes = () => {
  const { data } = useContext(recipecontext);
  
  const renderRecipes = data.map((recipe) => (
    <Recipecard key={recipe.id} recipe={recipe}/>
  ));

  return <div className="flex flex-wrap">{data.length>0 ? renderRecipes:"No Recipe found"}</div>;
};

export default Recipes;
