export async function fetchRecipe(recipeFilePath) {
  try {
    const response = await fetch(recipeFilePath);
    const data = await response.json();
    return data.recipe;
  } catch (error) {
    // Handle any error during the fetch or parsing
    console.error("Error fetching recipe:", error);
    return null;
  }
}
