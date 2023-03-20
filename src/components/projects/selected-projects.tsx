import { Flex, Image, Text } from '@chakra-ui/react'

export function SelectedProjects() {
  return (
    <Flex mt={['10', '12', '32']} gap='3'>
      <Image src='/divider-small.svg' alt='divider' />
      <Text
        fontSize={['15px', '20px', '24px']}
        fontWeight='700'
        lineHeight='36px'
        color='white'
        cursor='pointer'
        transition='0.9s'
        _hover={{ color: '#FF9900' }}
      >
        Selected projects
      </Text>
    </Flex>
  )
}
