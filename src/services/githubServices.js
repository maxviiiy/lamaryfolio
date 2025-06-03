const axios = require('axios');
require('dotenv').config();

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const TOPIC_FILTER = process.env.TOPIC_FILTER; 

const fetchGitHubProjects = async () => {
  let page = 1;
  let allRepos = [];
  const perPage = 100;
  
  try {
    while (true) {
      const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
        headers: { 'Accept': 'application/vnd.github.mercy-preview+json' },
        params: {
          per_page: perPage,
          page: page
        }
      });

      const repos = response.data;
      if (repos.length === 0) break;
      allRepos = allRepos.concat(repos);
      page++;
    }

    return allRepos
      .filter(repo => repo.topics && repo.topics.includes(TOPIC_FILTER))
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        updated_at: repo.updated_at,
        topics: repo.topics || []
      }));
  } catch (error) {
    throw new Error('Error fetching GitHub projects');
  }
};

module.exports = {
  fetchGitHubProjects,
};