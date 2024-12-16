import React from 'react'
import pokeball from '../images/pokemon-1536849_1280_720.png'

function PokeDisplay({pokemon}) {
    console.log(pokemon);

    const loaded = () => {
        return <img src={pokemon.sprites['front_default']} alt={pokemon.name} />
    }
    const loading = () => {

        return(
            <>
         <img className='spin' src={pokeball} alt='pokeball' height= '50px' />
            <h3>Still waiting </h3>
         </>
        )
    }
    



  return ( pokemon && pokemon.sprites ? loaded() : loading() )
}

export default PokeDisplay