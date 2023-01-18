import { Box, Flex, Text } from '@chakra-ui/react'
import { SelectedProjects } from './selected-projects'

interface ProjectDescriptionProps {
  year: string
  name: string
  description: string
  image?: string
}
export function ProjectDescription({
  year,
  name,
  description,
}: ProjectDescriptionProps) {
  return (
    <>
      <SelectedProjects />
      <Flex
        mt={19}
        gap={['20px', '20px', '87px']}
        flexDirection={['column', 'column', 'row']}
      >
        <Box>
          <Text
            w='135px'
            fontSize={['15px', '20px', '24px']}
            fontWeight='700'
            lineHeight='36px'
            color='#9A9A9A'
          >
            {year}
          </Text>
        </Box>
        <Box maxW='622px'>
          <Text
            color='white'
            fontWeight='700'
            fontSize={['14px', '15px', '16px']}
          >
            {name}
          </Text>
          <Text
            as='p'
            fontWeight='700'
            fontSize={['14px', '15px', '16px']}
            color='#9A9A9A'
            alignItems='left'
            mt='2px'
          >
            {description}
          </Text>
          <Text
            fontWeight='700'
            fontSize={['14px', '15px', '16px']}
            color='#FF9900'
            mt='10px'
          >
            Read case study
          </Text>

          <Box
            mt='16px'
            w='100%'
            height='285px'
            bgColor='#B476A6'
            borderRadius='9px'
          ></Box>
        </Box>
      </Flex>
    </>
  )
}
