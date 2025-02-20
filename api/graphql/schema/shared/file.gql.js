export default `#graphql
    type File {
        fieldname: String
        originalname: String
        encoding: String
        mimetype: String
        destination: String
        filename: String
        path: String
        size: Int
    }
    
    input FileInput {
        fieldname: String
        originalname: String
        encoding: String
        mimetype: String
        destination: String
        filename: String
        path: String
        size: Int
    }
`
