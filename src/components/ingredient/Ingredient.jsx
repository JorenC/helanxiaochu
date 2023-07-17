import React from "react";
import styles from "./Ingredient.css";
import jsonData from "./chinesetranslations.json";

function Ingredient(props) {
	const { name, notes, amount, index } = props;
	const wrapperClassName =
		index % 2 === 0 ? "ingredientWrapper" : "ingredientWrapperRed";
	const chineseName = jsonData[name] || ""; // Check if the name exists in the JSON

	return (
		<div className={wrapperClassName}>
			<div className="ingredientLeft">
				<div className="ingredientChineseWrapper">
					<div className="ingredientName">{name}</div>
					{chineseName && (
						<div className="ingredientChineseName">
							{chineseName}
						</div>
					)}
				</div>
				<div className="ingredientNotes">{notes}</div>
			</div>
			<div className="ingredientRight">{amount}</div>
		</div>
	);
}

export default Ingredient;
