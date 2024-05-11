import DateType from "./data-type.js";

export default {
    typedefs: `
        ${DateType.gql}
    `,
    resolvers: {
        Date: DateType.resolver
    }
}