const express = require('express');
const router = express.Router();

//連線資料庫
const pool =  require('../utils/db')

router.get('/',async (req, res, next) => {
  let [data] = await pool.execute('SELECT * FROM stocks');
  // console.log(data);
  res.json(data);
});

router.get('/:stockId',async (req, res, next) => {
  const stockId = req.params.stockId ;
  let page = req.query.page || 1; //第幾頁
  let perPage = req.query.perPage; //一頁有幾筆
  
  //資料筆數
  let total= await pool.execute('SELECT COUNT(*) as total FROM stock_prices WHERE stock_id = ?',[stockId]);
  total = total[0][0].total
  
  const offset = perPage * (page - 1);
  let totalPage = Math.ceil(total / perPage); //總頁數

  //去資料庫撈資料
  let [data] = await pool.execute('SELECT * FROM stock_prices WHERE stock_id = ? ORDER BY date LIMIT ? OFFSET ?', [stockId, perPage, offset]);
  // console.log(data);
  // 把取得的資料回覆給前端
  res.json({
    pagination: {
      total, // 總共有幾筆
      perPage, // 一頁有幾筆
      page, // 目前在第幾頁
      totalPage, // 總頁數
    },
    data,
  });
});

module.exports = router