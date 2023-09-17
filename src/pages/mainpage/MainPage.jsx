import React, { useState, useEffect } from "react";
import recipesData from "../../assets/recipes/recipes.js";
import { Link } from "react-router-dom";
import RecipeCard from "../../components/recipecard/RecipeCard.jsx";
import styles from "./MainPage.css";

export default function MainPage() {
  const [searchInput, setSearchInput] = useState("");
  const [shuffledRecipeNames, setShuffledRecipeNames] = useState([]);

  useEffect(() => {
    // Extract recipe names into an array and shuffle it
    const recipeNamesArray = Object.keys(recipesData);
    const shuffledArray = shuffleArray(recipeNamesArray);
    setShuffledRecipeNames(shuffledArray);
  }, []);

  const filteredRecipes = shuffledRecipeNames.filter((recipeName) =>
    recipeName.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Function to shuffle an array randomly
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  return (
    <>
      <div className="mainPage">
        <div className="mainPageHeader">
          <div className="mainPageBanner">
            <div className="mainPageLogoContainer">
              <h1 className="mainPageLogoTop">Helan Xiaochu</h1>
              <span className="mainPageLogoBottom">
                Chinese food for everyone
              </span>
            </div>
          </div>
          <input
            id="mainSearchInput"
            type="search"
            name="search"
            placeholder="Search"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>

        <div className="mainPageRecipeContainer">
          {filteredRecipes.map((recipeName) => (
            <RecipeCard key={recipeName} name={recipeName} />
          ))}
        </div>
      </div>
    </>
  );
}
