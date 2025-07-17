import './index.css'

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);

  const API_URL =
    import.meta.env.DEV
      ? "http://localhost:3001"
      : import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/recipes`)
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);


  const addRecipe = (newRecipe) => {
    setRecipes((prev) => [newRecipe, ...prev]);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center mb-6">QuickBites 🍝</h1>
        <RecipeForm onAdd={addRecipe} />
        <RecipeList recipes={recipes} />
      </div>
      <Toaster position="top-right" />
    </>
  );
}

export default App;

