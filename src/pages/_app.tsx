import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Navbar } from '../components/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth='860px' margin='0 auto' px={'10'}>
        <Navbar />
        <Component {...pageProps} />
        <Box as='footer' height='50px'></Box>
      </Box>
    </ChakraProvider>
  )
}
