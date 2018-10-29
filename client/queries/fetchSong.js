import gql from 'graphql-tag';

export default gql`
    query SongQuery($id: ID!) {
        song(id: $id) {
            id
            title
        }
    }
`; 

// Exclamation point on the `ID!` signifies it's a required argument.
// Queries are automatically executed, where as mutations must be manually called.