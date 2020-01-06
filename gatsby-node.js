/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

/** Create slugs
 * While `MDX` folder is not in `pages` folder, it's necessary
 * to generate a slug for each posts so that Gatsby can know
 * the URLs to render their content to.
 *
 * See more: https://gatsbyjs.org/docs/mdx/programmatically-creating-pages/#generate-slugs
 =============================================================*/
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Only check MDX nodes.
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value: `/blog${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/BlogPost.tsx'),
      context: { id: node.id },
    })
  })
}
