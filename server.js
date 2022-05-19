const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const scraper = require('./scraper');
const hish = require('./hish');
app.use(express.json());

app.get('/scraper', async (req, res) => {
    const returnedTitles = await scraper();
    console.log(returnedTitles);
    res.send(returnedTitles);
})



app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})