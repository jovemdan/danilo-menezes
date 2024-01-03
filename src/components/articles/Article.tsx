import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import { useBlog } from '../../hooks/useBlog'
import { ContentArticle } from './ContentArticle'

interface ArticleProps {
  image?: string
  slug: string
}
export function Atrticle({ image, slug }: ArticleProps) {
  const { fetchPostById } = useBlog()

  function getPost() {
    fetchPostById(Number(slug))
  }

  useEffect(() => {
    getPost()
  }, [])
  return (
    <>
      <Fade delay={1e2} cascade damping={1e-1}>
        <Flex flexDirection={'column'} mt={['10', '12', '32']} gap={2}>
          <Link href='/blog'>
            <Flex flexDirection={'row'} gap={2}>
              <Slide>
                <Image
                  src={'/back.svg'}
                  alt={'voltar'}
                  w={'24px'}
                  cursor='pointer'
                  transition='0.9s'
                  _hover={{ color: '#FFF' }}
                >
                </Image>

                <Text color='white' cursor='pointer'
                  transition='0.9s'
                  _hover={{ color: '#FF9900' }}>
                  See all posts
                </Text>
              </Slide>
            </Flex>
          </Link>

          <Image
            src={image}
            alt={image}
            mt='16px'
            w={['100%']}
            height='285px'
            bgSize='cover'
            objectFit='cover'
            bgRepeat='no-repeat'
            borderRadius={'15px'}
          >
          </Image>
        </Flex>

        <Flex mt={10} gap={5} flexDirection={'column'}>
          <Text fontSize={['15px', '20px', '24px']}
            fontWeight='700'
            lineHeight='36px'
            color='white'
            cursor='pointer'
            transition='0.9s'
            _hover={{ color: '#FF9900' }} >Styling Radix UI with CSS
          </Text>
          <Text fontWeight='light'
            fontSize={['14px', '15px', '16px']}
            color='white'
            opacity={0.6}
            alignItems='left'
            mt='2px'
            transition='0.9s'>Dec 14, 2021
          </Text>
        </Flex>
        <Box mt={10}>
          <ContentArticle />
        </Box>
      </Fade>
    </>
  )
}
