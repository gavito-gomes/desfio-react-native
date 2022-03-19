import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import PokemonInfoBox from '../../components/PokemonInfoBox'

export default function PokemonList() {
  const [pokemonList, setpokemonList] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokedex/2')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        let pokemon_entries = data.pokemon_entries
        pokemon_entries.forEach((el) => {
          fetch(el.pokemon_species.url)
            .then((res) => res.json())
            .then((pokemon) => {
              fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
                .then((res) => res.json())
                .then((info) => {
                  let poke = {
                    name: info.name,
                    number: info.id,
                    image: info.sprites.other['official-artwork'].front_default,
                  }
                  setpokemonList((pokemonList) => [...pokemonList, poke])
                })
            })
        })
      })
      .catch((err) => console.log(err))
  }, [])

  return pokemonList.map((el, i) => {
    return (
      <View style={styles.container}>
        <PokemonInfoBox pokemon={el} key={i}></PokemonInfoBox>
      </View>
    )
  })
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
