import Recipecard from "../components/Recipecard";

const fav = () => {
 const favourite = JSON.parse(localStorage.getItem("fav")) || [];

  const renderRecipes = favourite.map((recipe) => (
    <Recipecard key={recipe.id} recipe={recipe}/>
  ));

  return <div className="flex flex-wrap">
    {favourite.length>0 ? renderRecipes:"No Favourite found"}
  </div>;
};

export default fav