import { Box } from '@chakra-ui/react'
import { Hi } from '../components/hi/hi'
import { Navbar } from '../components/navbar'
export default function Home() {
  return (
    <Box maxWidth='860px' height='100vh' margin='0 auto' px={'10'}>
      <Navbar />
      <Hi />
    </Box>
  )
}
