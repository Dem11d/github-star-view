const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();

const GITHUB_API_URL = 'https://api.github.com';


// Allow requests from any origin
// app.use(cors());
// Endpoint to fetch top repositories sorted by stars
app.get('/api/repositories', async (req, res) => {
    try {
        

        const response = await axios.get(`${GITHUB_API_URL}/search/repositories?q=stars:>1&sort=stars&order=desc`);
        res.json(response.data.items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching repositories from GitHub API' });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});