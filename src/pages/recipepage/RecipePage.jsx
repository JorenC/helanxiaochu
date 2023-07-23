import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Get the recipe
//TODO:
//Add all recipes to one JSON + BAT file
//Load all recipes to recipes subfile.
//Use useParams to get the current recipe
//Render the current recipe
//Get the right pictures.
//Catch error state if useparams is unknown.

import { Recipe } from "cooklang";
import Ingredient from "../../components/ingredient/Ingredient";
import Cookstep from "../../components/cookstep/Cookstep";
import Remark from "../../components/remark/Remark";
import styles from "./RecipePage.css";
//import { useRecipeFetcher } from "../../components/userecipefetcher/UseRecipeFetcher";
import recipesData from "../../assets/recipes/recipes.js"; // Import the recipesData object

function RecipeCard() {
  // const recipeFilePath = `../recipes/${currentRecipe}/${currentRecipe}.js`;

  const recipes = {
    ganbiansijidou:
      ">> preparation: 35 minutes\n>> cook time: 20 minutes\n>> servings: 4\n>> remark: Don't use western vermicelli, but get vermicelli (or glass) noodles from any Asian grocery store (e.g. Lungkow Vermicelli in Amazing Oriental) \nWash the @green beans{500%gr // top & bottom removed, halved} and pat them dry with a kitchen towel. Heat @vegetable oil{¼ cup // or sunflower oil} in a #wok over medium high heat. Fry the beans in one layer (requires two batches). They're done once they appear wrinkled and slightly scorched, after about 5 minutes. Use a #strainer to remove the beans and set aside.\n Turn off the heat and scoop the oil out of the pan, except for 1 tbsp. Turn the heat to low, and add the @sichuan peppercorns{2 tsp}, @ginger{1 tsp // minced}, @garlic{3 cloves // minced} and @dried red chilies{3 // deseeded and sliced}. Stir-fry for about 1 minute, until fragrant.\nNext, add in the @ground pork or chicken{125 gr // or vegetarian alternative} and turn up the heat to high. Stir-fry quickly to break up the pork until the meat is browned slightly.\nAdd in the fried green beans, @Shiao Hsing wine{1 tbsp}, @light soy sauce{1 tbsp}, @dark soy sauce{¼ tsp}, and @sugar{¼ tsp}. Toss everything well, and add @salt{to taste}. Serve hot with steamed white rice and other dishes.",
    pancakes:
      "Crack the @eggs{3} into a blender, then add the @flour{125%g}, @milk{250%ml} and @sea salt{1%pinch}, and blitz until smooth.\nPour into a #bowl and leave to stand for ~{15%minutes}.\nMelt the @butter (or a drizzle of @oil if you want to be a bit healthier) in a #large non-stick frying pan{} on a medium heat, then tilt the pan so the butter coats the surface.\nPour in 1 ladle of batter and tilt again, so that the batter spreads all over the base, then cook for 1 to 2 minutes, or until it starts to come away from the sides.\nOnce golden underneath, flip the pancake over and cook for 1 further minute, or until cooked through.\nServe straightaway with your favourite topping. -- Add your favorite topping here to make sure it's included in your meal plan!",
    another_recipe: "This is another recipe description.",
    yet_another_recipe: "This is yet another recipe description.",
  };

  const recipeParams = useParams();
  const currentRecipe = recipeParams.recipeId;
  console.log(currentRecipe);
  let recipeString = recipesData[currentRecipe];
  //let recipeString = recipes[currentRecipe];

  //Convert the recipe
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
