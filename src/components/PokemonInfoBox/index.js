import React, { useEffect } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default function PokemonInfoBox({ pokemon }) {
  console.log(pokemon)
  return (
    <View style={styles.container}>
      <Image source={pokemon.image} style={styles.image}></Image>
      <Text>{pokemon.number + ' - ' + pokemon.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
})
