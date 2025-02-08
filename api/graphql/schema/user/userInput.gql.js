export const userInputs = `#graphql
 input CreateUserInput {
   firstName: String
   lastName: String
   email: String
   phone: String
   password: String
   # managers: managersSchema,
   address: AddressInput,
    # role: {
    #     type: mongoose.Schema.Types.ObjectId, 
    #     ref: "Role", 
    #     required: true 
    # },
 }

 input UpdateUserInput {
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