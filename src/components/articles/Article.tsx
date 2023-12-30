import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useBlog } from '../../hooks/useBlog'
import { ContentArticle } from './ContentArticle'

interface ArticleProps {
  image?: string
  slug: string
}
export function Atrticle({ image, slug }: ArticleProps) {
  const { fetchPostById, postById } = useBlog()

  function getPost() {
    fetchPostById(Number(slug))
    console.log('slug', slug)
  }

  useEffect(() => {
    getPost()
  }, [])
  return (
    <>
      <Box mt={40} >
        <Image
          src={image}
          alt={image}
          mt='16px'
          w={['100%']}
          height='285px'
          borderRadius={'15px'}
        >
        </Image>
      </Box>

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
    </>
  )
}
