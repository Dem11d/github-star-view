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
        console.log(req.query)
        const page = req.query.page || 1;
        const minStars = req.query.minStars || 1;
        const maxStars = req.query.maxStars || 1_000_000;
        const ids = req.query.id;
        let id = "";
        let params = `q=stars:${minStars}..${maxStars}&sort=stars&order=desc&page=${page}&per_page=10`;
        if(ids){
            params = ids.map((item) => `id=${item}`).join('&');
        }
        
        const response = await axios.get(`${GITHUB_API_URL}/search/repositories?${params}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching repositories from GitHub API' });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});