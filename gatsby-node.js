const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const { data } = await graphql(`
        query {
            series: allContentfulSeries {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    data.series.edges.forEach(({ node }) => {
        createPage({
            path: `series/${node.slug}`,
            component: path.resolve("./src/templates/series-template.js"),
            context: {
                slug: node.slug,
            },
        })
    })

    // data.series.edges.forEach()
}
