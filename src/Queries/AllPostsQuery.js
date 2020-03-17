import gql from 'graphql-tag'

export default gql`
query AllPosts{
    allPosts {
        post {
            __typename
            id
            title
            author
            version
        }
    }
}
`