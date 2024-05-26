import { useEffect, useState } from 'react'
import { Text, View } from 'tamagui'
import UpdateGoal from 'components/updateGoal'

export default function TabTwoScreen() {
  const [goal, setGoal] = useState(2000)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://melted-kevina-darana-7386c30a.koyeb.app/goal',
          {
            method: 'POST', // Specifies the request method as POST
            headers: {
              'Content-Type': 'application/json', // Indicates the format of the data being sent
            },
            body: JSON.stringify({ goal: goal }), // Converts the JavaScript object to a JSON string
          }
        )
      } catch (error) {
        console.error('Error posting data:', error)
      }
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
  }, [goal])
  return (
    <View
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <Text
        marginBottom={20}
        fontSize={20}
        color="$blue10"
      >
        Current Goal: {goal}
      </Text>

      <UpdateGoal setGoal={setGoal} />
    </View>
  )
}
