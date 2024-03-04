import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'
import Page from './page'
import StudentLogin from './ui/login/student-login'
import TeacherLogin from './ui/login/teacher-login'
import DashboardPage from './dashboard/page'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
    StudentLogin,
    TeacherLogin,
    DashboardPage
  },
})

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Page {...Page} />
    </ChakraBaseProvider>
  )
}