import { Link, Tabs } from 'expo-router'
import { Button } from 'tamagui'
import { GlassWater, Target } from '@tamagui/lucide-icons'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          unmountOnBlur: true,
          title: 'Log',
          tabBarIcon: ({ color }) => <GlassWater color={color} />,
          headerRight: () => (
            <Link
              href="/modal"
              asChild
            >
              <Button
                mr="$4"
                bg="$purple10"
                color="$white"
              >
                Hello!
              </Button>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Target',
          tabBarIcon: ({ color }) => <Target color={color} />,
        }}
      />
    </Tabs>
  )
}
