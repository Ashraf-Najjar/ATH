export const subCategoryInputs = `#graphql
 input CreateSubCategoryInput {
   name: String
   description: String
   category: ID
 }

 input UpdateSubCategoryInput {
   name: String
   description: String
   category: ID
 }
`