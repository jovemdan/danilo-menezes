import { GetServerSideProps } from 'next'
import { Atrticle } from '../../components/articles/Article'

interface BlogDetailsProps {
  slug: string
}
export default function BlogDetails({ slug }: BlogDetailsProps) {
  return (
    <>
      <Atrticle image='/articles/image.png' slug={slug} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug

  return {
    props: {
      slug
    }
  }
}
