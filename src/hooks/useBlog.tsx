import { useContext } from "react"
import { BlogContext } from "../contexts/BlogContext"

export function useBlog() {
  const issues = useContext(BlogContext)

  return issues
}
