import React from "react";
import styles from "./Ingredient.css";
import jsonData from "../../assets/chinesetranslations.json";

function Ingredient(props) {
	const { name, notes, amount, index } = props;
	const wrapperClassName =
		index % 2 === 0 ? "ingredientWrapper" : "ingredientWrapperRed";
	const chineseName = jsonData[name] || ""; // Check if the name exists in the JSON

	//Check whether notes are passed, otherwise add 2 padding to top to align single item elements.
	const ingredientNameClassName = notes
		? "ingredientName"
		: "ingredientNameWithPadding";

	const ingredientChineseNameClassName = notes
		? "ingredientChineseName"
		: "ingredientChineseNameWithPadding";

	return (
		<div className={wrapperClassName}>
			<div className="ingredientLeft">
				<div className="ingredientChineseWrapper">
					<div className={ingredientNameClassName}>{name}</div>
					{chineseName && (
						<div className={ingredientChineseNameClassName}>
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
