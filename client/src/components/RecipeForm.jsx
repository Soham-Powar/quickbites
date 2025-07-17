import { useState } from "react";
import toast from "react-hot-toast";


export default function RecipeForm({ onAdd }) {
	const [title, setTitle] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [steps, setSteps] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!title.trim() || !ingredients.trim() || !steps.trim()) {
			toast.error("All fields are required.");
			return;
		}

		try {
			const res = await fetch("http://localhost:3001/api/recipes", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title, ingredients, steps }),
			});

			if (!res.ok) {
				throw new Error("Failed to add recipe.");
			}

			const data = await res.json();
			onAdd(data);
			toast.success("Recipe added!");
		} catch (err) {
			console.error(err);
			toast.error("Something went wrong!");
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
