import { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../utils/config';
const axios = require('axios');
const StockDetails = () => {

  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const[page,setPage] = useState(1) //第幾頁
  const[perPage,setPerPage] = useState(5) //一頁有幾筆
  const [totalPage, setTotalPage] = useState(1); //總頁數

  // 把網址上的 :stockId 拿出來
  const { stockId } = useParams();
  // console.log('StockDetail - stockId', stockId);

  // 去後端撈資料
  useEffect(() => {
    let getStockDetail = async () => {
      // 1. axios.get -> 在哪個 useEffect 裡做？
      let response = await axios.get(`${API_URL}/stocks/${stockId}?page=${page}&perPage=${perPage}`);
      // 2. setData
      // console.log("response",response.data.data);
      setData(response.data.data);
      setTotalPage(response.data.pagination.totalPage);
    };
    getStockDetail();
  }, [page]);

  const getPages = () => {
    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <li
          style={{
            display: 'inline-block',
            margin: '2px',
            backgroundColor: page === i ? '#00d1b2' : '',
            borderColor: page === i ? '#00d1b2' : '#dbdbdb',
            color: page === i ? '#fff' : '#363636',
            borderWidth: '1px',
            width: '28px',
            height: '28px',
            borderRadius: '3px',
            textAlign: 'center',
          }}
          key={i}
          onClick={(e) => {
            setPage(i);
          }}
        >
          {i}
        </li>
      );
    }
    return pages;
  };
  return (
    <div>
      {error && <div>{error}</div>}
       {/* 放一下頁碼 */}
       <ul>{getPages()}</ul>
      目前在第 {page} 頁{/* 3. 在畫面上 render 資料, data.map */}
      {/* 3. 在畫面上 render 資料, data.map */}
      {data.map((item) => {
        return (
          <div className="bg-white bg-gray-50 p-6 rounded-lg shadow m-6" key={item.date}>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">日期：{item.date}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">成交金額：{item.amount}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">成交股數：{item.volume}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">開盤價：{item.open_price}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">收盤價：{item.close_price}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">漲跌價差：{item.delta_price}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">最高價：{item.high_price}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">最低價：{item.low_price}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">成交筆數：{item.transactions}</h2>
          </div>
        );
      })}
    </div>
  );
  
  //  1. axios.get -> 在哪個 useEffect 裡做？
  //  2. setData

};

export default StockDetails;