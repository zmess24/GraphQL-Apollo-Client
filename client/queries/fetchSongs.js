import gql from 'graphql-tag'; // Library for structuring graphql queries.

export default gql`
    {
        songs {
            id 
            title
        }
    }
`;