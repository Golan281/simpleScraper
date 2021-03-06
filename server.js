const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const scraper = require('./scraper');
app.use(express.json());

app.get('/scraper', async (req, res) => {
    const returnedTitles = await scraper();
    res.send(returnedTitles);
})



app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})