import handleSuccess from '../service/handlesSuccess.js';
import handleError from '../service/handleError.js';
// import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import { cheerio } from "https://deno.land/x/cheerio@1.0.7/mod.ts";
import axiod from "https://deno.land/x/axiod/mod.ts";

const getPuppeteer = {
  getPuppeteerIndex: async(req , res) => {
    const message = 'Success index';
    // const browser = await puppeteer.launch({
    //   headless:false,
    //   // executablePath: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
    // });
    // const page = await browser.newPage();
    // await page.goto("https://bot.sannysoft.com/");
    handleSuccess(res, message);
  },
  getPuppeteerCode: (req, res) => {
    try{

      axiod.get("https://rate.bot.com.tw/xrt?Lang=zh-TW").then((response)=>{
        const $ = cheerio.load(response.data);
        const tableTr = $("tbody tr");
        const coinInfo = []
        for(let i = 0 ; tableTr.length > i ; i++){
          const coinType = tableTr.eq(i).find('.hidden-phone.print_show').text().trim();
          const buyCashCoinPrice = tableTr.eq(i).children().eq(1).text();
          const sellCashCoinPrice = tableTr.eq(i).children().eq(2).text();
          const buySpotRateCoinPrice = tableTr.eq(i).children().eq(3).text().trim();
          const sellSpotRateCoinRate = tableTr.eq(i).children().eq(4).text().trim();
          coinInfo.push({
            '種類':coinType,
            '現金買入':buyCashCoinPrice,
            '現金賣出':sellCashCoinPrice,
            '即期匯率買入':buySpotRateCoinPrice,
            '即期匯率賣出':sellSpotRateCoinRate,
          });
        }
        const id = req.params.id;
        console.log(id)
        // handleSuccess(res, { id });
        handleSuccess(res, coinInfo);
      })
      
    }catch(err){
      handleError(res, 'error id')
    }
  }
}
export {
  getPuppeteer,
}