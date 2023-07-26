import recipesData from "../../assets/recipes/recipes.js"; // Import the recipesData object
import { Link } from "react-router-dom";
import RecipeCard from "../../components/recipecard/RecipeCard.jsx";

export default function MainPage() {
  return (
    <>
      <div id="mainpage">
      <img src="../logo_large.svg"
        <h1>荷兰小厨</h1>
        HELAN XIAOCHU
        {Object.keys(recipesData).map((recipeName) => (
          <RecipeCard key={recipeName} name={recipeName} />
        ))}
      </div>
    </>
  );
}
