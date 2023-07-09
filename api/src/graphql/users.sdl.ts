export const schema = gql`
  type User {
    id: String!
    email: String!
    hashedPassword: String!
    name: String
    imageUrl: String
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: Role!
    store: String
    Product: [Product]!
  }

  enum Role {
    SELLER
    CUSTOMER
    ADMIN
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    hashedPassword: String!
    name: String
    imageUrl: String
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: Role!
    store: String
  }

  input UpdateUserInput {
    email: String
    hashedPassword: String
    name: String
    imageUrl: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: Role
    store: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
