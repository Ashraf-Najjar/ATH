export const clientInputs = `#graphql
 input CreateClientInput {
   firstName: String
   lastName: String
   email: String
   phone: String
   # managers: managersSchema,
   address: AddressInput,
    # role: {
    #     type: mongoose.Schema.Types.ObjectId, 
    #     ref: "Role", 
    #     required: true 
    # },
 }

 input UpdateClientInput {
    firstName: String
    lastName: String
    email: String
    phone: String
    # managers: managersSchema,
    address: AddressInput,
    # role: {
    #     type: mongoose.Schema.Types.ObjectId, 
    #     ref: "Role", 
    #     required: true 
    # },
 }
`