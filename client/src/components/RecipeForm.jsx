import { useState } from "react";

export default function RecipeForm({ onAdd }) {
	const [title, setTitle] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [steps, setSteps] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await fetch("http://localhost:3001/api/recipes", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ title, ingredients, steps }),
			});

			const newRecipe = await res.json();
			onAdd(newRecipe); // Add to list in parent
			setTitle("");
			setIngredients("");
			setSteps("");
		} catch (err) {
			console.error("Error adding recipe:", err);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white p-4 rounded-lg shadow mb-6 w-full max-w-xl mx-auto space-y-4"
		>
			<input
				type="text"
				placeholder="Recipe Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className="w-full border border-gray-300 rounded px-3 py-2"
				required
			/>
			<textarea
				placeholder="Ingredients (comma-separated)"
				value={ingredients}
				onChange={(e) => setIngredients(e.target.value)}
				className="w-full border border-gray-300 rounded px-3 py-2"
				required
			/>
			<textarea
				placeholder="Steps"
				value={steps}
				onChange={(e) => setSteps(e.target.value)}
				className="w-full border border-gray-300 rounded px-3 py-2"
				required
			/>
			<button
				type="submit"
				className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
			>
				Add Recipe
			</button>
		</form>
	);
}
