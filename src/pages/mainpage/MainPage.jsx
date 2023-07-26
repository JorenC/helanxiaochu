import recipesData from "../../assets/recipes/recipes.js"; // Import the recipesData object
import { Link } from "react-router-dom";
import RecipeCard from "../../components/recipecard/RecipeCard.jsx";
import styles from "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <div id="mainpage">
        <div className="mainPageHeader">
          <img src="../logo_large.svg" height="50px" />
          <h1>荷兰小厨</h1>
        </div>
        {Object.keys(recipesData).map((recipeName) => (
          <RecipeCard key={recipeName} name={recipeName} />
        ))}
      </div>
    </>
  );
}
