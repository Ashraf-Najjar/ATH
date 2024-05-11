export const productDefs = `#graphql
 type Product {
    name: String
    description: String
    createdAt: Date,
    lastUpdate: Date,
    createdBy: User
 }
`