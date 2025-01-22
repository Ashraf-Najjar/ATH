export const categoryDefs = `#graphql
   type Category {
      _id: ID
      name: String
      note: String
      description: String
      createdAt: Date,
      lastUpdate: Date,
      createdBy: User
      deleted: Boolean
      enabled: Boolean
   }
   extend type Query {
      categories(skip: Int, limit: Int, filters: [FilterInput]): [Category]
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