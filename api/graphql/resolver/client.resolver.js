import clientUseCases from "../../../useCases/client/index.js";

export const clientResolver = {
    Query: {
        client: async (parent, args) => {
            return await clientUseCases.client(args);
        },
        clients: async (parent, args) => {
            return await clientUseCases.clients(args);
        }
    },
    Mutation: {
        createClient: async (parent, args) => {
            return await clientUseCases.createClient(args);
        },
        updateClient: async (parent, args) => {
            return await clientUseCases.updateClient(args);
        },
        deleteClient: async (parent, args) => {
            return await clientUseCases.deleteClient(args);
        },
        enableClient: async (parent, args) => {
            return await clientUseCases.enableClient(args);
        },
        disableClient: async (parent, args) => {
            return await clientUseCases.disableClient(args);
        },
    }
}
