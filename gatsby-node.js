/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `ContentfulBlogPost`) {
    // console.log(createFilePath({ node, getNode, basePath: `pages` }))
    // const slug = createFilePath({ node, getNode, basePath: `pages` })
    // createNodeField({
    //   node,
    //   name: `slug`,
    //   value: slug,
    // })
  }
}
