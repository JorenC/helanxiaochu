import React, { useState } from "react";
import recipesData from "../../assets/recipes/recipes.js";
import { Link } from "react-router-dom";
import RecipeCard from "../../components/recipecard/RecipeCard.jsx";
import styles from "./MainPage.css";

export default function MainPage() {
  const [searchInput, setSearchInput] = useState("");
  const filteredRecipes = Object.entries(recipesData).filter(
    ([recipeName, recipeData]) =>
      recipeName.toLowerCase().includes(searchInput.toLowerCase()) ||
      recipeData.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <div className="mainPage">
        <div className="mainPageHeader">
          <div className="mainPageBanner">
            <img src="../logo_large.svg" height="50px" alt="logo" />
            <h1>荷兰小厨</h1>
          </div>
          <input
            id="mainSearchInput"
            type="text"
            name="search"
            placeholder="Search.."
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>

        <div className="mainPageRecipeContainer">
          {filteredRecipes.map(([recipeName, recipeData]) => (
            <RecipeCard key={recipeName} name={recipeName} />
          ))}
        </div>
      </div>
    </>
  );
}
