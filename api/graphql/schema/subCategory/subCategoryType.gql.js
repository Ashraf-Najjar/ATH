export const subCategoryDefs = `#graphql
 type SubCategory {
      _id: ID
      name: String
      description: String
      createdAt: Date,
      lastUpdate: Date,
      createdBy: User
      category: Category
 }

 extend type Query {
      subCategories: [SubCategory]
      subCategory(id: ID): SubCategory
   }

   extend type Mutation {
      createSubCategory(subCategory: CreateSubCategoryInput): SubCategory
      updateSubCategory(id: ID, subCategory: UpdateSubCategoryInput): SubCategory
      deleteSubCategory(id: ID): SubCategory
      enableSubCategory(id: ID): SubCategory
      disableSubCategory(id: ID): SubCategory
   }
`