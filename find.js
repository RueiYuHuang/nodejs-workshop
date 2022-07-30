let arr = [
    {
        id: 1,
        type: 'A',
        price: 100,
    },
    {
        id: 2,
        type: 'B',
        price: 200,
    },
    {
        id: 5,
        type: 'A',
        price: 150,
    },
    {
        id: 6,
        type: 'D',
        price: 250,
    },
  ];

///回傳第一個陣列元素滿足所提供之測試函式 
function find(array) {
    for (let i = 0 ;i < array.length; i++) {
        //帶入尋找條件 這裡用 id > 4 篩選
        if (array[i].id > 4 ){
            //回傳結果並終止函式
            return array[i]
        }
    }
}

console.log(find(arr))
//{ id: 5, type: 'A', price: 150 }
