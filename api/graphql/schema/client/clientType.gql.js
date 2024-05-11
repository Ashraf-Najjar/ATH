export const clientDefs = `#graphql
   type Client {
      firstName: String
      lastName: String
      email: String
      phone: Int
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
      clients: [Client]
      client(id: ID): Client
   }

   extend type Mutation {
      createClient(client: CreateClientInput): Client
      updateClient(id: ID, client: UpdateClientInput): Client
      deleteClient(id: ID): Client
      enableClient(id: ID): Client
      disableClient(id: ID): Client
   }
`