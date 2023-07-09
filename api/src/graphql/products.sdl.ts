export const schema = gql`
  type Product {
    id: String!
    name: String!
    brand: String!
    description: String
    imageUrl: String
    stock: Int!
    price: Int!
    seller: User!
    sellerId: String!
  }

  type Query {
    products: [Product!]! @requireAuth
    product(id: String!): Product @requireAuth
  }

  input CreateProductInput {
    name: String!
    brand: String!
    description: String
    imageUrl: String
    stock: Int!
    price: Int!
    sellerId: String!
  }

  input UpdateProductInput {
    name: String
    brand: String
    description: String
    imageUrl: String
    stock: Int
    price: Int
    sellerId: String
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: String!, input: UpdateProductInput!): Product!
      @requireAuth
    deleteProduct(id: String!): Product! @requireAuth
  }
`
