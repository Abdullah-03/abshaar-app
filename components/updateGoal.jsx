import { useState } from "react";
import { Button, Input, Label, XStack, YStack } from "tamagui";

export default function UpdateGoal({setGoal}){
    const[input, setInput] = useState(500)
    return(
        <YStack backgroundColor={'#e0e0e0'} padding={20} borderRadius={10}>
            <XStack justifyContent="space-between">
                <Label color={'$color1'}>New Goal: </Label>
                <Input defaultValue="500" backgroundColor={'white'} color={'$color1'} onChangeText={(n)=>{setInput(n)}} keyboardType="numeric"/>
            </XStack>

            <Button marginTop={10} onPress={()=>{setGoal(Number(input))}}>Submit</Button>
        </YStack>
    )
}