import {
  Anchor,
  Button,
  H2,
  H3,
  Paragraph,
  Progress,
  XStack,
  YStack,
} from 'tamagui'
import WaterContainer from 'components/waterContainer'
import LogWater from 'components/logWater'
import { useEffect, useState } from 'react'

export default function TabOneScreen() {
  const [water, setWater] = useState(0)
  const [goal, setGoal] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://melted-kevina-darana-7386c30a.koyeb.app/goal'
        )
        const data = await response.json()
        setGoal(data.goal)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <YStack
      fullscreen
      ai="center"
      gap="$8"
      mx="$10"
      mt="$5"
      bg="$alt1"
    >
      <H2 col="$color1">Track Water</H2>

      <WaterContainer
        value={water}
        maxCapacity={goal}
      />

      <LogWater
        water={water}
        setWater={setWater}
      />
    </YStack>
  )
}
