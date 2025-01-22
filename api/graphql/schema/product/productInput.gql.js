export const productInputs = `#graphql
 input CreateProductInput {
   name: String
   note: String
   description: String
   phone: String
   category: ID
   subCategory: ID
 }

 input UpdateProductInput {
   name: String
   note: String
   description: String
   phone: String
   category: ID
   subCategory: ID
 }
`