import { useEffect } from 'react'
import { useState } from 'react'
import ListDisplay from './components/ListDisplay'
import PokeDisplay from './components/PokeDisplay'
import Form from './components/Form'
import './App.css'


function App() {
  // these two have different keys in their objects
  //the first one had next, previous, results (which is an array with name and url)
  // set the state for the list of Pokemon
  const [pokemons, setPokemons] = useState([])
  // set the state for the individual Pokemon
  // this is an object with a lot of keys to describe an individual pokemon
  const [pokemon, setPokemon] = useState({})

  let url = 'https://pokeapi.co/api/v2/pokemon?limit=20'

// step 1 - get the list of Pokemon from the api
const getPokemons = async(url) => {
  console.log(url);
  try{
    const response = await fetch(url)  
    const data = await response.json()
    console.log(data);
    setPokemons(data)
  }catch(error){
    console.log(error);
  }
}


 // the use effect has two arguments, the first one is the function that will be executed
// and the second one is the condition - so what is changing to kick it off
// in this example we are using the anonymous function () => {} with a names function
// because I have a parameter/argument
// do not do this !!!!!
//useEffect(getPokemons(url), [])

useEffect(() => {getPokemons(url)}, [])

// this would run infinityly becuase i set the state in here
// so every time the state changes it will run again
// which sets the state so it will run again
//getPokemons(url)

  return (
    <>
      <h1>Pokemon App</h1>
      <p> You can search for a pokemon by name or by id. If you are't sure about the names
        you can scan through the list of Pokemon below by using the 'next' and 'back' buttons.
      </p>
      <h2>Find a Pokemon </h2>
      <Form newPokemon={setPokemon} />
      <h2>Individual Pokemon</h2>
      <PokeDisplay pokemon = {pokemon}/>
      {pokemon && pokemon.species ? <h3>{pokemon.species.name}</h3> : <h3>Search for a valid name or id</h3>}
      <ListDisplay pokeList={pokemons} getPokemons={getPokemons} />
    </>
  )
}

export default App
