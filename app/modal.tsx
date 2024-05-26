import { Anchor, Paragraph, View } from 'tamagui'

export default function ModalScreen() {
  return (
    <View
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <Paragraph
        ta="center"
        color="$color12"
        themeInverse
      >
        Made by{' '}
        <Anchor
          color="$blue10"
          href="https://abdullahsaud.site"
          target="_blank"
        >
          Abdullah Saud.
        </Anchor>
      </Paragraph>
    </View>
  )
}
