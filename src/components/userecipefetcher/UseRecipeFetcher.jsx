import { useEffect, useState } from "react";

export function useRecipeFetcher() {
  const [recipeString, setRecipeString] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("./recipes.js");
        const data = await response.json();
        setRecipeString(data.recipe);
      } catch (error) {
        // Handle any error during the fetch or parsing
        console.error("Error fetching recipe:", error);
        setRecipeString("");
      }
    }

    fetchData();
  }, []);

  return recipeString;
}
