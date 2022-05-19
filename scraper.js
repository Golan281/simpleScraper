const axios = require("axios");
const cheerio = require("cheerio");

const fetchYnetTitles = async () => {
    try {
        const url = 'https://www.ynet.co.il/home/0,7340,L-8,00.html';
        const response = await axios.get(url);
        const htmlDoc = response.data;
        const $ = cheerio.load(htmlDoc);
        let titles = [];
        $('.slotTitle').each((_idx, el) => {
            const title = {title: $(el).text()};
            titles = [...titles, title];
        });

        return titles;
    } catch (e) {
        console.error(e);
    }
}

module.exports = fetchYnetTitles;