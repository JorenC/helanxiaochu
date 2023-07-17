import { Recipe } from "cooklang";
import Ingredient from "./components/ingredient/Ingredient";
import Cookstep from "./components/cookstep/Cookstep";
import Remark from "./components/remark/Remark";

function App() {
  const recipeString = `>> preparation: 15 minutes
>> cook time: 20 minutes
>> servings: 4
>> remark: Don't use western vermicelli, but get vermicelli (or glass) noodles from any Asian grocery store (e.g. Lungkow Vermicelli in Amazing Oriental)

Wash the @green beans{500%gr // top & bottom removed, halved} and pat them dry with a kitchen towel. Heat @vegetable oil{¼ cup // or sunflower oil} in a #wok over medium high heat. Fry the beans in one layer (requires two batches). They're done once they appear wrinkled and slightly scorched, after about 5 minutes. Use a #strainer to remove the beans and set aside.

Turn off the heat and scoop the oil out of the pan, except for 1 tbsp. Turn the heat to low, and add the @sichuan peppercorns{2 tsp}, @ginger{1 tsp // minced}, @garlic{3 cloves // minced} and @dried red chilies{3 // deseeded and sliced}. Stir-fry for about 1 minute, until fragrant.

Next, add in the @ground pork or chicken{125 gr // or vegetarian alternative} and turn up the heat to high. Stir-fry quickly to break up the pork until the meat is browned slightly.

Add in the fried green beans, @Shiao Hsing wine{1 tbsp}, @light soy sauce{1 tbsp}, @dark soy sauce{¼ tsp}, and @sugar{¼ tsp}. Toss everything well, and add @salt{to taste}. Serve hot with steamed white rice and other dishes.`; // <- Your CookLang recipe
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
