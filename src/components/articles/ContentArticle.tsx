import { Box, Text } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import { useBlog } from '../../hooks/useBlog'

export function ContentArticle() {
  const { postById } = useBlog()

  return (
    <Box>
      <Text color='white'>
        <ReactMarkdown
          components={{
            a: ({ node, ...props }) => <a className="text-blue" {...props}></a>
          }}
        >
          {postById.content}
        </ReactMarkdown>
      </Text>

    </Box>
  )
}
