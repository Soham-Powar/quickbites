import RecipeItem from "./RecipeItem";

export default function RecipeList({ recipes }) {
	if (recipes.length === 0) {
		return <p className="text-center text-gray-500">No recipes yet.</p>;
	}

	return (
		<div className="space-y-4">
			{recipes.map((recipe) => (
				<RecipeItem key={recipe.id} recipe={recipe} />
			))}
		</div>
	);
}
