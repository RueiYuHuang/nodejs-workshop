const axios = require('axios');

(async() => {
    try{
        let data = await axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220813&stockNo=2330&_=1660378514253')
        console.log(data.data)
    }catch(err){
        console.log(err)
    }

})()

    