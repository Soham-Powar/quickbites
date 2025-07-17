export default function RecipeItem({ recipe }) {
	return (
		<div className="bg-white p-4 rounded-lg shadow w-full max-w-xl mx-auto">
			<h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
			<p className="text-sm text-gray-600 mb-2">
				<strong>Ingredients:</strong> {recipe.ingredients}
			</p>
			<p>{recipe.steps}</p>
		</div>
	);
}
