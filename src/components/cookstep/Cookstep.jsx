import React from "react";
import styles from "./Cookstep.css";

function Cookstep(props) {
	const { step, content } = props;

	// Function to convert numbers to Chinese equivalent
	const convertToChineseNumber = (number) => {
		const chineseNumbers = [
			"一",
			"二",
			"三",
			"四",
			"五",
			"六",
			"七",
			"八",
			"九",
			"十",
		];
		return chineseNumbers[number - 1];
	};

	const chineseStepNumber = convertToChineseNumber(step);

	// Function to format the step content
	const formatStepContent = (content) => {
		const formattedContent = content.map((item, index) => {
			if (typeof item === "string") {
				return item; // Return regular text as is
			} else if (item.name) {
				// Return ingredients as red text
				return (
					<span key={index} style={{ color: "#CD1619" }}>
						{item.name}
					</span>
				);
			} else {
				// Return cookware as blue text
				return (
					<span key={index} style={{ color: "blue" }}>
						{item.raw}
					</span>
				);
			}
		});
		return formattedContent;
	};

	const formattedContent = formatStepContent(content.line);

	// Dynamically construct the image filename
	const imageFilename = `../recipes/ganbiansijidou/ganbiansijidou.${step}.jpg`;

	return (
		<div className="cookStepImageWrapper">
			<img src={imageFilename} alt={`Step ${step}`} />
			<div className="cookStepWrapper">
				<div>
					<div className="cookStepCounter">
						<div className="cookStepCounterNumber">
							{chineseStepNumber}
						</div>
					</div>
					<div className="cookStepContent">{formattedContent}</div>
				</div>
			</div>
		</div>
	);
}

export default Cookstep;
