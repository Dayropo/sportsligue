import { create } from "zustand"
import { Post } from "../@types/typings"

interface PostStore {
  posts: Post[]
  setPosts: (value: Post[]) => void
}

const usePostsStore = create<PostStore>(set => ({
  posts: [],
  setPosts: (value: Post[]) => set(() => ({ posts: value })),
}))

export default usePostsStore
