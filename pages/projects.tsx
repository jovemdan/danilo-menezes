import { Box, Flex, Text, Image } from '@chakra-ui/react'
import { Navbar } from '../components/navbar'
import { ProjectDescription } from '../components/projects'
import { SelectedProjects } from '../components/projects/selected-projects'

export default function Projects() {
  return (
    <>
      <Box maxWidth='860px' margin='0 auto' px={'10'}>
        <Navbar />
        <ProjectDescription
          year=' 2022 - Now'
          name='Bitrefill'
          description='I currently work at Bitrefill, mainly focusing on search &
              discovery. I also lead design & development of the design system.'
        />
        <ProjectDescription
          year=' 2022 - Now'
          name='Bitrefill'
          description='I currently work at Bitrefill, mainly focusing on search &
              discovery. I also lead design & development of the design system.'
        />
        <ProjectDescription
          year=' 2022 - Now'
          name='Bitrefill'
          description='I currently work at Bitrefill, mainly focusing on search &
              discovery. I also lead design & development of the design system.'
        />
        <Box as='footer' height='50px'></Box>
      </Box>
    </>
  )
}
