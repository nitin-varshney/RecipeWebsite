import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';


const App=()=>{
  const APP_ID='aa15dabd';
  const App_KEY='0b26227d8f8c8a57c46b25b1b0a10ecf';

  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('banana');

  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes=async ()=>{
    const response =await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${App_KEY}`
    );
    const data= await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
  const updateSearch = e=>{
    setSearch(e.target.value);
   
  }
  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
  }
  
  return(
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={updateSearch} placeholder='Write Your Recipe Here'></input>
        <button className='search-button' type="submit">Search</button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe=>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
