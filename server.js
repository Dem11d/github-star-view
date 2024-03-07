const axios = require('axios');
const express = require('express');
const app = express();

const GITHUB_API_URL = 'https://api.github.com';

// Endpoint to fetch top repositories sorted by stars
app.get('/api/repositories', async (req, res) => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/search/repositories?q=stars:>1&sort=stars&order=desc`);
        res.json(response.data.items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching repositories from GitHub API' });
    }
});

// Endpoint to fetch favorite repositories
app.get('/api/favorites', (req, res) => {
    // Implementation to fetch favorite repositories from database
});

// Endpoint to save favorite repositories
app.post('/api/favorites', (req, res) => {
    // Implementation to save favorite repositories to database
});

// Endpoint to filter favorite repositories
app.get('/api/favorites/filter', (req, res) => {
    // Implementation to filter favorite repositories based on criteria
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});