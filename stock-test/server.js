const express = require('express');
// 利用 express 這個框架/函式庫 來建立一個 web application
require('dotenv').config();

const app = express();
const cors = require('cors');
app.use(cors());

const pool =  require('./utils/db')

const router = require('./routers/stocks.js')
// const mysql = require('mysql2/promise');
// let pool = mysql
//   .createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     // 限制 pool 連線數的上限
//     connectionLimit: 10,
//   });
// app.[method]
// method: get, post, delete, put, patch, ...
app.get('/', (req, res) => {

  console.log('這裡是首頁');
  res.send('Hello Express');
});

const stockRouter = require('./routers/stocks')
app.use('/api/1.0/stocks', stockRouter);

// app.get('/api/1.0/stocks',async (req, res, next) => {
//   let [data] = await pool.execute('SELECT * FROM stocks');
//   console.log(data);
//   // 利用 res.json 回覆 json 格式資料
//   res.json(data);
// });

// app.get('/api/1.0/stocks/:stockId',async (req, res, next) => {
//   const stockId = req.params.stockId ;
//   let page = req.query.page || 1;
//   let perPage = req.query.perPage || 5;
//   // console.log(page,perPage)
//   // let [total]=
//   let total= await pool.execute('SELECT COUNT(*) as total FROM stock_prices WHERE stock_id = ?',[stockId]);
//   total = total[0][0].total
//   console.log(total);

//   const offset = perPage * (page - 1);
//   // TODO: 去資料庫撈資料
//   // let [data] = await pool.execute('SELECT * FROM stock_prices WHERE stock_id = ?',[stockId]);
//   let [data] = await pool.execute('SELECT * FROM stock_prices WHERE stock_id = ? ORDER BY date LIMIT ? OFFSET ?', [stockId, perPage, offset]);
//   // console.log(data);
//   // TODO: 把取得的資料回覆給前端
//   res.json({ data });
// });

app.use((req, res, next) => {
  console.log('在所有路由中間件的下面 -> 404 了！');
  res.status(404).send('Not Found!!');
});

const port = process.env.SERVER_PORT
// 啟動 server，並且開始 listen 一個 port
app.listen(port, () => {
  console.log(`server start at ${port}`);
});