import { Link } from "react-router-dom";
import styles from "./RecipeCard.css";

function RecipeCard(props) {
	const { name } = props;

	//Make name presentable
	const formattedName = name
		.split("-") // Split the name by hyphens
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
		.join(" "); // Join the words back with spaces

	// Chinese names for the recipes TODO: move to JSON and later to cook file
	const chineseNames = {
		"beaten-cucumber-salad": "拍黄瓜",
		"dry-fried-string-beans": "干煸四季豆",
		"red-braised-chicken-drums": "红烧鸡腿",
		"stir-fried-pak-choy-with-tofu-puffs": "豆包小白菜",
		"eggplant-with-garlic-sauce": "鱼香茄子",
	};

	// Get the Chinese name based on the English name
	const chineseName = chineseNames[name] || "未知中文名";

	// Dynamically construct the image filename
	const imageFilename = `../recipes/${name}/${name}.jpg`;

	return (
		<Link to={`./recipe/${name}`} className="RecipeCardWrapper">
			<div class="RecipeCardImageWrapper">
				<img src={imageFilename} alt={formattedName} width="200px" />
			</div>
			<div className="RecipeCardTextWrapper">
				<h1 class="RecipeCardEnglishName">{formattedName}</h1>
				<div class="RecipeCardChineseName">{chineseName}</div>
			</div>
		</Link>
	);
}

export default RecipeCard;
