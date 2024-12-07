import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//TODO:
//Catch error state if useparams is unknown.

// Get the recipe
import { Recipe } from "cooklang";
import Ingredient from "../../components/ingredient/Ingredient";
import Cookstep from "../../components/cookstep/Cookstep";
import Remark from "../../components/remark/Remark";
import styles from "./RecipePage.css";
//import { useRecipeFetcher } from "../../components/userecipefetcher/UseRecipeFetcher";
import recipesData from "../../assets/recipes/recipes.js"; // Import the recipesData object
import chinesenames from "../../assets/chinesenames.json"; // Assuming you have this file to map names

function RecipeCard() {
  const recipeParams = useParams();
  const currentRecipe = recipeParams.recipeId;
  console.log(currentRecipe);
  let recipeString = recipesData[currentRecipe];

  // Convert the recipe
  const recipe = new Recipe(recipeString);

  // Check if there is a remark in the recipe. If so, store it.
  const remarkMetadata = recipe.metadata.find(
    (metadata) => metadata.key === "remark"
  );
  const remark = remarkMetadata ? remarkMetadata.value : null;

  console.log(recipe);

  return (
    <>
      <div className="recipeCard">
        <div className="recipeCardIngredients">
          <h1>INGREDIENTS</h1>
          {recipe.ingredients.map((ingredient, index) => {
            // Split amount and unit if there are "//" marks
            const [amount, note] = ingredient.amount.includes("//")
              ? ingredient.amount.split("//").map((str) => str.trim())
              : [ingredient.amount, ""]; // Default values if "//" isn't present

            const [unit, unitNote] = ingredient.units.includes("//")
              ? ingredient.units.split("//").map((str) => str.trim())
              : [ingredient.units, ""];

            const notes = note || unitNote || ""; // Combine both notes if present

            // Look up the Chinese name for the ingredient
            const chineseName = chinesenames[ingredient.name.toLowerCase()] || ingredient.name;

            return (
              <div key={index}>
                <Ingredient
                  name={chineseName} // Ensure the Chinese name is used
                  notes={notes} // Notes extracted from amount/unit
                  amount={
                    isNaN(ingredient.quantity) || ingredient.quantity === 0
                      ? amount // Use cleaned-up amount
                      : ingredient.quantity + " " + unit // Combine quantity and cleaned-up unit
                  }
                  index={index} // Pass the index as a prop
                />
              </div>
            );
          })}
          {/* Render the remark if it exists */}
          {remark && <Remark remark={remark} />}
        </div>
        {recipe.steps.map((step, index) => (
          <Cookstep
            key={index}
            step={index + 1}
            content={step}
            recipeName={currentRecipe}
          />
        ))}
      </div>
    </>
  );
}

export default RecipeCard;
