import { defineField, defineType } from "sanity"

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subCategories",
      title: "Sub Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "subCategory" } }],
    }),
  ],
})
