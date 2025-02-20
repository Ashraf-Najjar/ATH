export const productInputs = `#graphql
 input CreateProductInput {
   name: String
   note: String
   description: String
   quantity: Int
   price: Int
   category: ID
   subCategory: ID
   image: FileInput
 }

 input UpdateProductInput {
   name: String
   note: String
   description: String
   quantity: Int
   price: Int
   category: ID
   subCategory: ID
   image: FileInput
 }
`