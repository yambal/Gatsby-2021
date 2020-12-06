const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

'use strict'
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})
/*
exports.createPages = require('./gatsby-node/index').createPages
*/

exports.createPages = ({ actions, graphql }) => {
  console.log('--- createPages ---')
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      console.log(52, edge.node.frontmatter.template, edge.node.fields.slug)
      createPage({
        path: edge.node.fields.slug,
        tags: null,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.template)}.tsx`
        ),
        context: {
          id
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

