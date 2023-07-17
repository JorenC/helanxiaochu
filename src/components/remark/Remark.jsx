import React from "react";
import styles from "./Remark.css";
import remarkOrnament from "./RemarkOrnament.svg";

function Remark(props) {
	const { remark } = props;

	return (
		<div className="remarkWrapper">
			<div className="remarkIcon">
				<img src={remarkOrnament} alt="Ornamental Icon" />
			</div>
			<div className="remarkContent">{remark}</div>
			<div className="remarkIcon">
				<img src={remarkOrnament} alt="Ornamental Icon" />
			</div>
		</div>
	);
}

export default Remark;
