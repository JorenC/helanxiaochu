import { useEffect, useState } from "react";

export function useRecipeFetcher(currentRecipe, recipeFilePath) {
  const [recipeString, setRecipeString] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(recipeFilePath);
        const data = await response.json();
        setRecipeString(data.recipe);
      } catch (error) {
        // Handle any error during the fetch or parsing
        console.error("Error fetching recipe:", error);
        setRecipeString("");
      }
    }

    fetchData();
  }, [recipeFilePath]);

  return recipeString;
}
