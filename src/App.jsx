import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import ListDisplay from './components/ListDisplay'

function App() {
  const [pokemons, setPokemons] = useState([])

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
      <ListDisplay pokeList={pokemons} />
    </>
  )
}

export default App
