// 1. 自動取得今日日期 （可能利用 cron 排程工具 系統每日自動執行）
// 2. 從檔案中讀取股票代碼
const axios = require('axios');
const moment = require('moment'); 
const fsPromises = require('fs').promises;
// 開始抓資料
// 2330 台積電
// 2603 長榮
// TODO: 需要從 stock.txt 的檔案裡讀取股票代碼
let queryDate = moment().format('YYYYMMDD'); //'20220814';
(async () => {
  try {
    let data = await fsPromises.readFile('stock.txt', 'utf8') 
    let stockNo = Number(data)
    let response = await axios.get(`https://www.twse.com.tw/exchangeReport/STOCK_DAY`, {
      params: {
        response: 'json',
        date: queryDate,
        stockNo: stockNo,
      }
    });
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
})();


    