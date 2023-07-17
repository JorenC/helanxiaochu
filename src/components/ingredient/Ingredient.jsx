import React from "react";
import styles from "./Ingredient.css";
import jsonData from "./chinesetranslations.json";

function Ingredient(props) {
	const { name, notes, amount, index } = props;
	const wrapperClassName = index % 2 === 0 ? "wrapper" : "wrapperred";
	console.log(jsonData);
	console.log(name);
	const chineseName = jsonData[name] || ""; // Check if the name exists in the JSON

	return (
		<div className={wrapperClassName}>
			<div className="left">
				<div className="chineseWrapper">
					<div className="name">{name}</div>
					{chineseName && (
						<div className="chineseName">{chineseName}</div>
					)}
				</div>
				<div className="notes">{notes}</div>
			</div>
			<div className="right">{amount}</div>
		</div>
	);
}

export default Ingredient;
