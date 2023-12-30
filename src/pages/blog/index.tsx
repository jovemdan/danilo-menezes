import { SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { SelectedTitle } from '../../components/common/selected-title'
export default function Blog() {
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
        <Flex justifyContent='space-between' cursor='pointer' >
          <Link href={'/blog/10'}>
            <Text fontSize={'14px'} color='white' _hover={{ color: '#FF9900' }} transition='0.9s'>Building a mapping platform with React and Mapbox</Text>
            <Text fontSize={'14px'} color='#9A9A9A'>The intersection observer web API</Text>
          </Link>
          <Text fontSize={['10px', '14px']} display={['none', 'none', 'block']} color='#9A9A9A' >Dec 17, 2021</Text>
        </Flex>
        <Flex justifyContent='space-between' cursor='pointer'>
          <Link href={'/blog/10'}>
            <Text fontSize={'14px'} color='white' _hover={{ color: '#FF9900' }} transition='0.9s'>Building a mapping platform with React and Mapbox</Text>
            <Text fontSize={'14px'} color='#9A9A9A'>The intersection observer web API</Text>
          </Link>
          <Text fontSize={['10px', '14px']} display={['none', 'none', 'block']} color='#9A9A9A' >Dec 17, 2021</Text>
        </Flex>
        <Flex justifyContent='space-between' cursor='pointer'>
          <Link href={'/blog/10'}>
            <Text fontSize={'14px'} color='white' _hover={{ color: '#FF9900' }} transition='0.9s'>Building a mapping platform with React and Mapbox</Text>
            <Text fontSize={'14px'} color='#9A9A9A'>The intersection observer web API</Text>
          </Link>
          <Text fontSize={['10px', '14px']} display={['none', 'none', 'block']} color='#9A9A9A' >Dec 17, 2021</Text>
        </Flex>
      </Flex>
    </>
  )
}
