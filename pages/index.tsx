import { Box } from '@chakra-ui/react'
import { Hi } from '../components/hi/hi'
import { Navbar } from '../components/navbar'
export default function Home() {
  return (
    <Box maxWidth='860px' margin='0 auto' px={'10'}>
      <Navbar />
      <Hi />

      <Box as='footer' height='50px'></Box>
    </Box>
  )
}
