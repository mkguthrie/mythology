import { useStaticQuery, graphql } from "gatsby";

export const useVodkaQuery = () => {
    const data = useStaticQuery(graphql`
    query VodkaQuery {
        vodka: wpPage(databaseId: {eq: 76}) {
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