import { useEffect, useState } from "react";
import { Recipe } from "cooklang";
import Ingredient from "../ingredient/Ingredient";
import Cookstep from "../cookstep/Cookstep";
import Remark from "../remark/Remark";
import styles from "./RecipeCard.css";
import { fetchRecipe } from "../fetchrecipe/FetchRecipe";

function RecipeCard() {
  const [recipeString, setRecipeString] = useState("");
  const currentRecipe = "ganbiansijidou";
  const recipeFilePath = `./recipes/${currentRecipe}/${currentRecipe}.js`;

  useEffect(() => {
    async function fetchData() {
      const recipeString = await fetchRecipe(recipeFilePath);
      setRecipeString(recipeString);
    }
    fetchData();
  }, [recipeFilePath]);

  const recipe = new Recipe(recipeString);

  //Check if there is a remark in the recipe. If so, store it.
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
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index}>
              <Ingredient
                name={ingredient.name}
                notes={
                  ingredient.amount.includes("//") ||
                  ingredient.units.includes("//")
                    ? ingredient.amount.split("//")[1] ||
                      ingredient.units.split("//")[1]
                    : ""
                }
                amount={
                  isNaN(ingredient.quantity) || ingredient.quantity === 0
                    ? ingredient.amount.includes("//")
                      ? ingredient.amount.split("//")[0]
                      : ingredient.amount
                    : ingredient.quantity +
                      " " +
                      (ingredient.units.includes("//")
                        ? ingredient.units.split("//")[0]
                        : ingredient.units)
                }
                index={index} // Pass the index as a prop
              />{" "}
            </div>
          ))}
          {/* Render the remark if it exists */}
          {remark && <Remark remark={remark} />}
        </div>
        {recipe.steps.map((step, index) => (
          <Cookstep key={index} step={index + 1} content={step} />
        ))}
      </div>
    </>
  );
}

export default RecipeCard;
