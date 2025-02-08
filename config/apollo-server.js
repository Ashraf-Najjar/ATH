import { ApolloServer } from 'apollo-server-express';

import typeDefs from "../api/graphql/schema/index.js";
import resolvers from "../api/graphql/resolver/index.js";
import {extractUserFromToken} from "../auth/auth.js";

export const startApolloServer = async(app) => {
    try {
        // server setup
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            // context: async ({ req }) => {
            //   try {
            //     const authHeader = req.headers["authorization"];
            //     const user = extractUserFromToken(authHeader); // Extract user
            //     return { user };
            //   } catch (err) {
            //     throw new AuthenticationError("Authentication failed");
            //   }
            // }
          })
          
        await server.start();
        server.applyMiddleware({ app });
      } catch (error) {
        console.log('Server Error ============')
        console.log(error);
        process.exit(1);
      }
}