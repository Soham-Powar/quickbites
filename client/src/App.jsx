import './index.css'

import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/recipes")
      .then((res) => res.json())
      .then(setRecipes)
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">🍽️ QuickBites</h1>
        <p className="text-lg text-gray-600 mt-2">Your favorite recipe hub</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {recipes.map((r) => (
          <div
            key={r.id}
            className="bg-white shadow-md border border-gray-200 rounded-xl p-6 transition hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{r.title}</h2>
            <div className="mb-3">
              <h3 className="text-sm font-bold uppercase text-gray-500">Ingredients</h3>
              <p className="text-gray-700 text-sm">{r.ingredients}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase text-gray-500">Steps</h3>
              <p className="text-gray-700 text-sm">{r.steps}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
