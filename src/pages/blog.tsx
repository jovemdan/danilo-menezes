import { SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { SelectedTitle } from '../components/common/selected-title'
export default function Blog() {
  return (
    <>
      <SelectedTitle title='Selected posts' />
      <Box mt={[25, 25, 28]} maxW='660px'>
        <InputGroup>
          <InputRightElement
            pointerEvents='none'
          >
            <SearchIcon color='gray.300' />
          </InputRightElement>
          <Input type='tel' placeholder='Search posts...' focusBorderColor='#FF9900' />
        </InputGroup>
      </Box>
      <Flex mt={[16]} maxW='660px' flexDirection='column' gap='30px'>
        <Flex justifyContent='space-between' >
          <Box>
            <Text fontSize='14px'>Building a mapping platform with React and Mapbox</Text>
            <Text fontSize='14px' color='#9A9A9A'>The intersection observer web API</Text>
          </Box>
          <Text fontSize='14px' color='#9A9A9A' >Dec 17, 2021</Text>
        </Flex>
        <Flex justifyContent='space-between' >
          <Box>
            <Text fontSize='14px'>Building a mapping platform with React and Mapbox</Text>
            <Text fontSize='14px' color='#9A9A9A'>The intersection observer web API</Text>
          </Box>
          <Text fontSize='14px' color='#9A9A9A' >Dec 17, 2021</Text>
        </Flex>
        <Flex justifyContent='space-between' >
          <Box>
            <Text fontSize='14px'>Building a mapping platform with React and Mapbox</Text>
            <Text fontSize='14px' color='#9A9A9A'>The intersection observer web API</Text>
          </Box>
          <Text fontSize='14px' color='#9A9A9A' >Dec 17, 2021</Text>
        </Flex>
      </Flex>
    </>
  )
}
