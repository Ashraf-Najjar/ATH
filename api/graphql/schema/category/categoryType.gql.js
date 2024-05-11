export const categoryDefs = `#graphql
   type Category {
      name: String
      note: String
      description: String
      createdAt: Date,
      lastUpdate: Date,
      createdBy: User
   }
   extend type Query {
      categories: [Category]
      category(id: ID): Category
   }

   extend type Mutation {
      createCategory(category: CreateCategoryInput): Category
      updateCategory(id: ID, category: UpdateCategoryInput): Category
      deleteCategory(id: ID): Category
      enableCategory(id: ID): Category
      disableCategory(id: ID): Category
   }
`