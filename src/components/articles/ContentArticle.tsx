import { Box, Text } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import remarkHtml from 'remark-html'
import { useBlog } from '../../hooks/useBlog'
import breaks from 'remark-breaks'
interface ContentArticleProps {
  content: string
}
export function ContentArticle({ content }: ContentArticleProps) {
  const { postById } = useBlog()

  return (
    <Box>
      <Text color='white'>
        <ReactMarkdown
          remarkPlugins={[breaks, remarkHtml]}
          components={{
            a: ({ node, ...props }) => <a className="text-blue" {...props}></a>,
            p: ({ node, ...props }) => <p {...props} style={{ whiteSpace: 'pre-line' }} />,
          }}
          skipHtml={true}
        >
          {postById.content}
        </ReactMarkdown>
      </Text>

    </Box>
  )
}
