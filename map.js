//map()
//建立新陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合

let arr = [ 1, 3, 5, 7, 9 ];

//練習一 只達成要的結果
function map(array) {
    let newArray = [];
    for (let i = 0 ;i < array.length; i++) {
        //新陣列的 所有元素*2 + 1
        newArray.push(array[i] * 2 + 1);    
    }
    return newArray;
}  
console.log(map(arr));
//[ 3, 7, 11, 15, 19 ];



//練習二 可帶入設定的條件
function map2(cb) {
    return function(arr) {
        let newArr = []
        for(let i = 0; i < arr.length; i++) {
            newArr.push(cb(arr[i]))   
        }
        return newArr
    }
}

let newArr = map2((value) => value * 2 + 1 )
console.log(newArr(arr))
//[ 3, 7, 11, 15, 19 ];



//練習三 嘗試自己寫一個map()相同用法
Array.prototype.testMap = function(cb) {
    let newArr = []
    //給予預設值 防止未輸入function報錯
    if(typeof cb != "function") cb = value => value;
    for(let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i]))   
    }
    return newArr
}

let newArr2 = arr.testMap((value) => value * 2 + 1)

console.log(newArr2)
//[ 3, 7, 11, 15, 19 ];

//對於高階函式的用法還不是很熟悉..不知道有沒機會老師能講解一下XD