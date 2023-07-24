import { Link } from "react-router-dom";

function RecipeCard(props) {
	const { name } = props;

	return (
		<div>
			<Link to={`./recipe/${name}`}>{name}</Link>
			<br />
			<br />
		</div>
	);
}

export default RecipeCard;
