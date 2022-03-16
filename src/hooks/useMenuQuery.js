import { useStaticQuery, graphql } from "gatsby";

export const useMenuQuery = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        menu: wpMenu(name: {eq: "Main Menu"}) {
          menuItems {
            nodes {
              label
              url
              parentId
              id
              childItems {
                nodes {
                  id
                  url
                  label
                }
              }
            }
          }
        }
      }    
    `)

    return data
}