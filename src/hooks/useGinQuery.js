import { useStaticQuery, graphql } from "gatsby";

export const useGinQuery = () => {
    const data = useStaticQuery(graphql`
    query GinQuery {
        gin: wpPage(databaseId: {eq: 15}) {
            slug
            title
            ACF_parentSpiritPageFields {
              heroSection {
                heading
                background {
                  localFile {
                    publicURL
                  }
                }
                introText
              }
            }
        }
    }   
    `)

    return data
}