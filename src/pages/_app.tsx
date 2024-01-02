import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Navbar } from '../components/navbar'
import { BlogProvider } from '../contexts/BlogContext'
import Router from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react'


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      NProgress.start()
    })
    Router.events.on('routeChangeComplete', () => {
      NProgress.done()
    })
    Router.events.on('routeChangeError', () => {
      NProgress.done()
    })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <BlogProvider>
        <Box maxWidth='860px' margin='0 auto' px={'10'}>
          <Navbar />
          <Component {...pageProps} />
          <Box as='footer' height='50px'></Box>
        </Box>
      </BlogProvider>

    </ChakraProvider>
  )
}
