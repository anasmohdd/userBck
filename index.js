const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 5000

app.get('/api/users', async (req, res) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const data = response.data;
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  });

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
  