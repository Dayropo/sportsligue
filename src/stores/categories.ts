import { create } from "zustand"
import { Category } from "../@types/typings"

interface CategoryStore {
  categories: Category[]
  setCategories: (value: Category[]) => void
  subCategory: string
  setSubCategory: (value: string) => void
}

const useCategoriesStore = create<CategoryStore>(set => ({
  categories: [],
  subCategory: "All",
  setCategories: (value: Category[]) => set(() => ({ categories: value })),
  setSubCategory: (value: string) => set(() => ({ subCategory: value })),
}))

export default useCategoriesStore
