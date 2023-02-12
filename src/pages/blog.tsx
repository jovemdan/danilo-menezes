import { Flex, Image, Text } from '@chakra-ui/react'
export default function Blog() {
  return (
    <>
      <Flex mt={['10', '12', '24']} gap='3'>
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
          Page under development
        </Text>
      </Flex>
      <Image
        src='/development.png'
        alt='/development.png'
        mt='50px'
        w={['200', '400px']}
        h={['200', '400px']}
        bgSize='cover'
        objectFit='cover'
        bgRepeat='no-repeat'
        borderRadius='9px'
        transition='0.9s'
        _hover={{ opacity: 0.5 }}
      />
    </>
  )
}
