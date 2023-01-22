import { Box, Flex, Text, Image } from '@chakra-ui/react'
import Link from 'next/link'

interface ProjectDescriptionProps {
  year: string
  name: string
  description: string
  image?: string
  imageMobile?: string
  githubUrl: string
  projectUrl: string
}
export function ProjectDescription({
  year,
  name,
  description,
  image,
  imageMobile,
  githubUrl,
  projectUrl,
}: ProjectDescriptionProps) {
  return (
    <>
      <Flex
        mt={25}
        gap={['20px', '20px', '87px']}
        flexDirection={['column', 'column', 'row']}
        cursor='pointer'
      >
        <Box>
          <Text
            w='140px'
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
            cursor='pointer'
            transition='0.9s'
            _hover={{ color: '#FF9900' }}
          >
            {name}
          </Text>
          <Text
            as='p'
            fontWeight='700'
            fontSize={['14px', '15px', '16px']}
            color='white'
            opacity={0.6}
            alignItems='left'
            mt='2px'
            transition='0.9s'
            _hover={{ opacity: 0.9 }}
          >
            {description}
          </Text>
          <Link href={githubUrl} target='_blank'>
            <Text
              fontWeight='700'
              fontSize={['14px', '15px', '16px']}
              color='#FF9900'
              mt='10px'
              transition='0.9s'
              _hover={{ opacity: 0.5 }}
            >
              View in Github
            </Text>
          </Link>

          <Link href={projectUrl} target='_blank'>
            <Image
              src={image}
              alt={image}
              mt='16px'
              w={['100%']}
              height='285px'
              bgSize='cover'
              objectFit='cover'
              bgRepeat='no-repeat'
              borderRadius='9px'
              transition='0.9s'
              _hover={{ opacity: 0.5 }}
            />
          </Link>
        </Box>
      </Flex>
      <Box h='50px'></Box>
    </>
  )
}
