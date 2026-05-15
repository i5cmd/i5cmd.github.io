const axios = require('axios');
import * as cheerio from 'cheerio';
export class GetFromServer {
    async pfp(url) {
        try {
            // download site
            const response = await axios.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 Windows NT 10.0; Win64; x64 AppleWebKit/537.36'
                } // nie rozumiem tego i nie musisz, ja z przyszlosci
            });
            const html = response.data;
            //get element
            const doc = cheerio.load(html);
            // zdobadz source
            return doc('.avatar').first().attr('src');
        }
        catch (error) {
            console.log("CHUJ", error);
            return '';
        }
    }
}
