import { Link } from "react-router-dom";

function RecipeCard(props) {
	const { name } = props;

	// Dynamically construct the image filename
	const imageFilename = `../recipes/${name}/${name}.jpg`;

	return (
		<div>
			<Link to={`./recipe/${name}`}>
				<img src={imageFilename} alt={name} width="200px" />
				<br />
				{name}
			</Link>
			<br />
			<br />
		</div>
	);
}

export default RecipeCard;
