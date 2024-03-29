import { Flex, Image, Text } from '@chakra-ui/react'
import { Slide } from 'react-awesome-reveal'

interface SelectedTitleProps {
  title: string
}
export function SelectedTitle({ title }: SelectedTitleProps) {
  return (
    <Slide>
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
          {title}
        </Text>
      </Flex>
    </Slide>
  )
}
