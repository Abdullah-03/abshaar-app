// WaterContainer.js

import React from 'react'
import { View, StyleSheet } from 'react-native'

const WaterContainer = ({ value, maxCapacity }) => {
  // Calculate the fill percentage
  const fillPercentage = (value / maxCapacity) * 100

  return (
    <View style={styles.container}>
      <View style={[styles.water, { height: `${fillPercentage}%` }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 200,
    backgroundColor: '#e0e0e0', // Gray background for the container
    overflow: 'hidden', // Clip the water overflow,
    borderRadius: 10,
  },
  water: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#2196F3', // Blue color for the water
  },
})

export default WaterContainer
