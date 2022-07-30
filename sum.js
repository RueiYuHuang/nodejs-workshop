//A. for-loop
function sum(innValue) {
    let result = 0;
    for (let i = 1 ;i <= innValue; i++) {
        //這行執行次數會跟輸入成正比
        //時間複雜度0(n)
        result += i;
        // console.log(valueCount)
    }
    return result ;
}
console.log(sum(1)) 
console.log(sum(2)) 
console.log(sum(3)) 
console.log(sum(4)) 
console.log(sum(5))

//B. 公式解
function sum2(n) {
    //不管n多少 ，這行都只跑1次
    //時間複雜度 0(1) -> 常數
    return ((n + 1) * n ) / 2;
}

//資料結構 演算法 !?
