export const productDefs = `#graphql
 type Product {
   _id: ID
    name: String
    description: String
    note: String
    quantity: Int
    price: Int
    category: Category
    subCategory: SubCategory
    image: File,
    createdAt: Date,
    lastUpdate: Date,
    createdBy: User,
    deleted: Boolean,
    enabled: Boolean
 }

 extend type Query {
      products(skip: Int, limit: Int, filters: [FilterInput]): [Product]
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