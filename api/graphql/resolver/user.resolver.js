import userUseCases from "../../../useCases/user/index.js";

export const userResolver = {
    Query: {
        user: async (parent, args) => {
            return await userUseCases.user(args);
        },
        users: async (parent, args) => {
            return await userUseCases.users(args);
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            return await userUseCases.createUser(args);
        },
        updateUser: async (parent, args) => {
            return await userUseCases.updateUser(args);
        },
        deleteUser: async (parent, args) => {
            return await userUseCases.deleteUser(args);
        },
        enableUser: async (parent, args) => {
            return await userUseCases.enableUser(args);
        },
        disableUser: async (parent, args) => {
            return await userUseCases.disableUser(args);
        },
    }
}
