import React from "react";
import styles from "./Remark.css";
import remarkOrnament from "./RemarkOrnament.svg";

function Remark(props) {
	const { remark } = props;

	return (
		<div class="remarkWrapper">
			<div class="remarkIcon">
				<img src={remarkOrnament} alt="Ornamental Icon" />
			</div>
			<div class="remarkContent">
				Don't use western vermicelli, but get vermicelli (or glass)
				noodles from any Asian grocery store (e.g. Lungkow Vermicelli in
				Amazing Oriental)
			</div>
			<div class="remarkIcon">
				<img src={remarkOrnament} alt="Ornamental Icon" />
			</div>
		</div>
	);
}

export default Remark;
