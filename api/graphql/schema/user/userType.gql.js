export const userDefs = `#graphql
 type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    phone: String
    # managers: managersSchema,
    # address: addressSchema,
    # role: {
    #     type: mongoose.Schema.Types.ObjectId, 
    #     ref: "Role", 
    #     required: true 
    # },
    createdAt: Date,
    lastUpdate: Date,
    createdBy: User
 }

 extend type Query {
   users: [User]
   user(id: ID): User
 }

 extend type Mutation {
   createUser(user: CreateUserInput): User
   updateUser(id: ID, user: UpdateUserInput): User
   deleteUser(id: ID): User
   enableUser(id: ID): User
   disableUser(id: ID): User
 }
`