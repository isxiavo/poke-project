import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ListSimple from "./components/list-simple/ListSimple";
import ListDetails from "./components/list-details/ListDetails";
import { Pokemon } from "./model/pokemon";
import { fetchPokemons } from "./services/fetchPokemons.service";
import FilterBar from "./components/filter-bar/FilterBar";

let isLoading: boolean = true;

function App() {
  const [listState, setListState] = useState(false); // false simples / true detalhes
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  const changeListState = () => {
    setListState((old) => (old = !old)); // change type of list
    if(isLoading){isLoading = false}
  }

  function currentList() {
    if(isLoading) {
      return <span>LOADING.................</span>
    }
    else{
      return listState ? (<ListSimple pokemonsList={pokemons} limitList={50}/>) : 
      (<ListDetails pokemonsList={pokemons} limitList={50}/>)
    }
  }

  useEffect(() => {
    setPokemons(() => fetchPokemons(changeListState))
  },[])

  return (
    <div className="App">
      <Header />
      <button onClick={changeListState}>A</button>
      <div>
        {currentList()}
      </div>
      <FilterBar></FilterBar>
    </div>
    
  );
}

export default App;
