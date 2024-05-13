import clientUseCases from "../../../useCases/client/index.js";

import {validateClientSchema} from "../../../validators/client-validators.js";
import { validate } from "../../../validators/validate.js";

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
            await validate(validateClientSchema(), args.client);
            return await clientUseCases.createClient(args);
        },
        updateClient: async (parent, args) => {
            await validate(validateClientSchema(), args.client);
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
