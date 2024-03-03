import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'
import Page from './page'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Page {...Page} />
    </ChakraBaseProvider>
  )
}