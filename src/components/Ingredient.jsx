import React from "react";
import styles from "./Ingredient.css";

function Ingredient(props) {
	const { name, chineseName, notes, amount, index } = props;
	const wrapperClassName = index % 2 === 0 ? "wrapper" : "wrapperred";
	console.log(index);
	console.log(wrapperClassName);
	return (
		<div className={wrapperClassName}>
			<div className="left">
				<div className="chineseWrapper">
					<div className="name">{name}</div>
					<div className="chineseName">{chineseName}</div>
				</div>
				<div className="notes">{notes}</div>
			</div>
			<div className="right">{amount}</div>
		</div>
	);
}

export default Ingredient;
