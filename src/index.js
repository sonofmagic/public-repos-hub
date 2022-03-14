require('dotenv').config()
const { Octokit } = require('@octokit/rest')

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

octokit.rest.repos
  .listForOrg({
    org: 'octokit',
    type: 'public'
  })
  .then(({ data }) => {
    // handle data
  })
