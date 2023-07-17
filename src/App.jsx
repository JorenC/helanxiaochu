import { Recipe } from "cooklang";
import Ingredient from "./components/Ingredient";

function App() {
  const recipeString = `>> preparation: 15 minutes
>> cook time: 20 minutes
>> servings: 4

Wash the @green beans{500%gr} and pat them dry with a kitchen towel. Heat @vegetable oil{¼ cup} in a #wok over medium high heat. Fry the beans in one layer (requires two batches). They're done once they appear wrinkled and slightly scorched, after about 5 minutes. Use a #strainer to remove the beans and set aside.

Turn off the heat and scoop the oil out of the pan, except for 1 tbsp. Turn the heat to low, and add the @sichuan peppercorns{2 tsp}, @ginger{1 tsp}, @garlic{3 cloves} and @dried red chilies{3}. Stir-fry for about 1 minute, until fragrant.

Next, add in the @ground pork or chicken{125 gr} and turn up the heat to high. Stir-fry quickly to break up the pork until the meat is browned slightly.

Add in the fried green beans, @Shiao Hsing wine{1 tbsp}, @light soy sauce{1 tbsp}, @dark soy sauce{¼ tsp}, and @sugar{¼ tsp}. Toss everything well, and add @salt{to taste}. Serve hot with steamed white rice and other dishes.`; // <- Your CookLang recipe
  const recipe = new Recipe(recipeString);

  console.log(recipe.ingredients);

  return (
    <>
      <h1>INGREDIENTS</h1>
      {recipe.ingredients.map((ingredient, index) => (
        <div key={index}>
          <Ingredient
            name={ingredient.name}
            chineseName="鸡蛋"
            notes="Some notes about the ingredient"
            amount={
              isNaN(ingredient.quantity)
                ? ingredient.amount
                : ingredient.quantity + " " + ingredient.units
            }
            index={index} // Pass the index as a prop
          />{" "}
        </div>
      ))}
    </>
  );
}

export default App;
