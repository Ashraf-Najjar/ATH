export default `#graphql
    type Address {
        country: String
        region: String
        point: String
    }
    
    input AddressInput {
        country: String
        region: String
        point: String
    }
`;
