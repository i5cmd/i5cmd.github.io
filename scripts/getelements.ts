const axios = require('axios');
import * as cheerio from 'cheerio';

export class GetFromServer {
    async pfp(url: string): Promise<string> {
        try {
            // download site
            const response: any = await axios.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 Windows NT 10.0; Win64; x64 AppleWebKit/537.36'
                } // nie rozumiem tego i nie musisz, ja z przyszlosci
            });
            const html: any = response.data;
            //get element
            const doc: any = cheerio.load(html);

            // zdobadz source
            return doc('.avatar').first().attr('src') as string;
        }
        catch(error) {
            console.log("CHUJ", error)
            return '';
        }
    }
}