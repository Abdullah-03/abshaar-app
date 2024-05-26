import { ExternalLink } from '@tamagui/lucide-icons'
import {
  Anchor,
  Button,
  H2,
  Paragraph,
  Progress,
  XStack,
  YStack,
} from 'tamagui'
import { ToastViewport } from '@tamagui/toast'
import { CurrentToast, ToastControl } from 'app/CurrentToast'
import WaterContainer from 'components/waterContainer'
import { useState } from 'react'

export default function TabOneScreen() {
  const [water, setWater] = useState(0)
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
        maxCapacity={100}
      />

      <Button
        onPress={() => {
          setWater(water + 30)
        }}
      >
        Add Water
      </Button>

      <ToastControl />
      <CurrentToast />
      <ToastViewport
        top="$5"
        left="$5"
        right="$5"
      />
    </YStack>
  )
}
