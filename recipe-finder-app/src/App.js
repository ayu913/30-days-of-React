import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from "./Recipe";

const App = () => {

  const APP_ID = "da030200";
  const APP_KEY = "fbd1aba6120b25bf28c18960afb34116";
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');


  useEffect(() => {
    getRecipes();
    console.log(query);
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);

  };



  return (
    <>
      <h1>Recipe Finder App 🧾🧾🧾</h1>
      <div className="App">
        <form className="search-form" onSubmit={getSearch}>
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">Search</button>
        </form>
        <div className="recipes">
          {recipes.map((recipe, index) => (
            <Recipe
              key={index}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>

    </>
  );
};

export default App;
