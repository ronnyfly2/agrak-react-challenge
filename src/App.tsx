import { Outlet } from 'react-router'
import { Container, Box } from "@mui/system"
import { Header } from "./pages/users/components/Header"

export const App = () => {

  return (
    <Container maxWidth="xs" sx={{mt:10}}>
      <Box>
        <Header />
        <Outlet />
      </Box>
    </Container>
  )
}