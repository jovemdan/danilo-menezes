import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from '../lib/axios'

interface BlogProviderProps {
  children: ReactNode
}

interface PostsType {
  id: number
  user: string
  number: number
  title: string
  content: string
  date: string
  comments: string
  url: string
}

interface BlogContextProps {
  posts: PostsType[]
  totalPosts: number
  postById: PostsType
  fetchAllPosts: () => Promise<void>
  fetchPostById: (id: number) => Promise<void>
  searchPost: (content: string) => Promise<void>
}

export const BlogContext = createContext({} as BlogContextProps)

export function BlogProvider({ children }: BlogProviderProps) {
  const [posts, setPosts] = useState<PostsType[]>([])
  const [postById, setPostById] = useState({} as PostsType)
  const [totalPosts, setTotalPosts] = useState(0)

  async function fetchAllPosts() {
    const { data } = await api.get('/repos/jovemdan/danilo-menezes/issues')
    console.log('data', data)
    const postsTotal: PostsType[] = []

    data.map((post: any) => {
      postsTotal.push({
        id: post.id,
        user: post.user.login,
        number: post.number,
        title: post.title,
        content: post.body,
        date: post.created_at,
        comments: post.comments,
        url: post.html_url
      })
    })

    setPosts(postsTotal)
    setTotalPosts(data.total_count)
  }

  async function fetchPostById(number: number) {
    setPostById({} as PostsType)

    const { data } = await api.get(`/repos/jovemdan/danilo-menezes/issues/${number}`)

    setPostById({
      id: data.id,
      user: data.user.login,
      number: data.number,
      title: data.title,
      content: data.body,
      date: data.created_at,
      comments: data.comments,
      url: data.html_url
    })
  }

  async function searchPost(content: string) {
    const { data } = await api.get('/search/issues', {
      params: {
        q: `${content}repo:jovemdan/danilo-menezes`
      }
    }
    )

    const postsTotal: PostsType[] = []

    data.items?.map((post: any) => {
      postsTotal.push({
        id: post.id,
        user: post.user.login,
        number: post.number,
        title: post.title,
        content: post.body,
        date: post.created_at,
        comments: post.comments,
        url: post.html_url
      })
    })

    setPosts(postsTotal)
    setTotalPosts(data.total_count)
  }

  return (
    <BlogContext.Provider value={{ posts, totalPosts, fetchPostById, postById, searchPost, fetchAllPosts }}>
      {children}
    </BlogContext.Provider>
  )
}
