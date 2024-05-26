import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import { Text } from 'tamagui'

const WaterContainer = ({ value, maxCapacity }) => {
  const fillPercentage = (value / maxCapacity) * 100
  const animatedHeight = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.spring(animatedHeight, {
      toValue: fillPercentage*2,
      useNativeDriver: false,
    }).start()
  }, [fillPercentage])

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.water, { height: animatedHeight }]}>
        
      <Text position='absolute' left={10} bottom={90} color={'$color1'}>
          {value} / {maxCapacity}
        </Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 200,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
    borderRadius: 10,
    justifyContent: 'flex-end', // Ensure the water fills from bottom to top
  },
  water: {
    width: '100%',
    backgroundColor: '#2196F3',
  },
})

export default WaterContainer
 