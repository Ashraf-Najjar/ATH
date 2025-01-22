export const productDefs = `#graphql
 type Product {
    name: String
    description: String
    quantity: Int
    category: Category
    subCategory: SubCategory
    createdAt: Date,
    lastUpdate: Date,
    createdBy: User
 }

 extend type Query {
      products: [Product]
      product(id: ID): Product
   }

   extend type Mutation {
      createProduct(product: CreateProductInput): Product
      updateProduct(id: ID, product: UpdateProductInput): Product
      deleteProduct(id: ID): Product
      enableProduct(id: ID): Product
      disableProduct(id: ID): Product
   }
`