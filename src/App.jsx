import { useEffect, useState } from "react";
import { Recipe } from "cooklang";
import Ingredient from "./components/ingredient/Ingredient";
import Cookstep from "./components/cookstep/Cookstep";
import Remark from "./components/remark/Remark";

function App() {
  const [recipeString, setRecipeString] = useState(""); // Initialize recipeString as an empty string

  useEffect(() => {
    // Fetch the JSON file and retrieve its contents
    fetch("./recipes/ganbiansijidou/ganbiansijidou.js")
      .then((response) => response.json())
      .then((data) => setRecipeString(data.recipe));
  }, []);

  const recipe = new Recipe(recipeString);

  //Check if there is a remark in the recipe. If so, store it.
  const remarkMetadata = recipe.metadata.find(
    (metadata) => metadata.key === "remark"
  );
  const remark = remarkMetadata ? remarkMetadata.value : null;

  console.log(recipe);

  return (
    <>
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
      {recipe.steps.map((step, index) => (
        <Cookstep key={index} step={index + 1} content={step} />
      ))}
    </>
  );
}

export default App;
