const express = require('express');
// 利用 express 這個框架/函式庫 來建立一個 web application

require('dotenv').config();
const app = express();

// app.[method]
// method: get, post, delete, put, patch, ...
app.get('/', (req, res) => {
  res.send('Hello Express');
});
const port = process.env.SERVER_PORT
// 啟動 server，並且開始 listen 一個 port
app.listen(port, () => {
  console.log(`server start at 3001`);
});