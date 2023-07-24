import recipesData from "../../assets/recipes/recipes.js"; // Import the recipesData object
import { Link } from "react-router-dom";
import RecipeCard from "../../components/recipecard/RecipeCard.jsx";

export default function MainPage() {
  return (
    <>
      <div id="mainpage">
        <h1>MainPage</h1>
        {Object.keys(recipesData).map((recipeName) => (
          <RecipeCard key={recipeName} name={recipeName} />
        ))}
      </div>
    </>
  );
}
