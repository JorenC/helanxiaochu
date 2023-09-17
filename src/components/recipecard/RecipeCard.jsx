import { Link } from "react-router-dom";
import styles from "./RecipeCard.css";
import recipeNames from "../../assets/recipenames.json"; // Import the JSON data

function RecipeCard(props) {
	const { name } = props;

	// Make name presentable
	const formattedName = name
		.split("-") // Split the name by hyphens
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
		.join(" "); // Join the words back with spaces

	// Get the Chinese name based on the English name from the imported JSON data
	const chineseName = recipeNames[name] || "未知中文名";

	// Dynamically construct the image filename
	const imageFilename = `../recipes/${name}/${name}.jpg`;

	return (
		<Link to={`./recipe/${name}`} className="RecipeCardWrapper">
			<div className="RecipeCardImageWrapper">
				<img src={imageFilename} alt={formattedName} />
			</div>
			<div className="RecipeCardTextWrapper">
				<h1 className="RecipeCardEnglishName">{formattedName}</h1>
				<div className="RecipeCardChineseName">{chineseName}</div>
			</div>
		</Link>
	);
}

export default RecipeCard;
