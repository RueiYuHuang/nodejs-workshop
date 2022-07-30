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
//將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值
function reduce(array) {
    //累加器
    let accumulator = 0;
    for (let i = 0 ;i < array.length; i++) {
        //計算陣列arr.price總和
        accumulator += arr[i].price
    }
    return accumulator;
}  
console.log(reduce(arr));
//700;
