import { SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { formatDistanceToNowStrict, formatISO } from 'date-fns'
import { pt } from 'date-fns/locale'
import Link from 'next/link'
import { useEffect } from 'react'
import { Fade } from 'react-awesome-reveal'
import { SelectedTitle } from '../../components/common/selected-title'
import { useBlog } from '../../hooks/useBlog'
export default function Blog() {
  const { fetchAllPosts } = useBlog()

  function getAllPosts() {
    fetchAllPosts()
  }

  const { posts } = useBlog()

  useEffect(() => {
    getAllPosts()
  }, [])

  console.log('posts:', posts)
  return (
    <>
      <SelectedTitle title='Selected posts' />
      <Box mt={[25, 16]} maxW='660px'>
        <InputGroup>
          <InputRightElement
            pointerEvents='none'
          >
            <SearchIcon color='gray.300' />
          </InputRightElement>
          <Input type='text' placeholder='Search posts...' color={'gray.200'} focusBorderColor='#FF9900' />
        </InputGroup>
      </Box>
      <Flex mt={[16]} maxW={['450px', '660px']} flexDirection='column' gap='30px'>
        {posts.map(issue => {
          const date = formatDistanceToNowStrict(Date.parse(issue.date), {
            locale: pt
          })
          const createdAt = formatISO(issue.date, { representation: 'date' })
          return (
            <Flex key={issue.id} justifyContent='space-between' cursor='pointer' >
              <Fade delay={1e2} cascade damping={1e-1}>
                <Link href={'/blog/10'}>
                  <Text fontSize={'14px'} color='white' _hover={{ color: '#FF9900' }} transition='0.9s'>{issue.title}</Text>
                  <Text fontSize={'14px'} color='#9A9A9A'>{createdAt}</Text>
                </Link>
                <Text fontSize={['10px', '14px']} display={['none', 'none', 'block']} color='#9A9A9A' >{date}</Text>
              </Fade>
            </Flex>
          )
        })
        }
      </Flex>
    </>
  )
}
