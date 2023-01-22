import { Box } from '@chakra-ui/react'
import { Navbar } from '../components/navbar'

export default function Blog() {
  return (
    <>
      <Box maxWidth='860px' height='100vh' margin='0 auto' px={'10'}>
        <Navbar />
      </Box>
    </>
  )
}
