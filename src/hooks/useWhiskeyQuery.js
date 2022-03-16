import { useStaticQuery, graphql } from "gatsby";

export const useWhiskeyQuery = () => {
    const data = useStaticQuery(graphql`
    query WhiskeyQuery {
      whiskey: wpPage(databaseId: {eq: 13}) {
        title
        slug
        ACF_parentSpiritPageFields {
          heroSection {
            heading
            introText
            background {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }   
    `)

    // console.log(data)

    return data
}