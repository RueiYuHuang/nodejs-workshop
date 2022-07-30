arr = [ 1, 3, 5, 7, 9 ];

//建立新陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。
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






