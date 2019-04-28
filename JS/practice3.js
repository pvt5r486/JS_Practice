// 綜合題目練習 LV.3
// ********************
// 請寫一個 function sort，接收一個陣列並且回傳由小到大排序後的陣列。（禁止使用內建函式 sort）
// 提示：如果你已經會找第 n 小的值了，試著把這個概念應用到這題上。
// sort([ 6, 8, 3, 2]) 預期回傳值：[2, 3, 6, 8]
// sort([ 1, 2, 7 ,5]) 預期回傳值：[1, 2, 5, 7]
function sort(numArray) {
  let tempArray = [];
  // 取得初始陣列長度
  let len = numArray.length;
  for (let i = 0; i < len; i++) {
    let getMin = Math.min(...numArray);
    let deleteIndex = numArray.findIndex(function (el) {
      return el === getMin;
    });
    tempArray.push(getMin);
    numArray.splice(deleteIndex, 1);
  }
  return tempArray;
}

// 練習二：壓平陣列
// 請寫出一個 function flatten，接收一個多維陣列並回傳「壓平」後的陣列。
// flatten([1, 2, 3]) 預期回傳值：[1, 2, 3]
// flatten([1, 2, [1, 2], [1, 3], 6]) 預期回傳值：[1, 2, 1, 2, 1, 3, 6]
// flatten([1, [2, [3, [4]], 5], 6]) 預期回傳值：[1, 2, 3, 4, 5, 6]
// 遞迴
function flatten(array) {
  let tempArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      // 壓平陣列 CALL 自己
      let flat = flatten(array[i]); // ex [1, 2, 3]
      // 推入陣列
      for (let j = 0; j < flat.length; j++) {
        tempArray.push(flat[j]);
      }
    } else {
      tempArray.push(array[i]);
    }
  }
  return tempArray;
}


// 練習三：印出聖誕樹
// 請寫一個 function tree，接收一個數字 n，按照規律列印出大小為 n 的聖誕樹
// tree(2) 預期輸出：
// _*
// ***
// _*
// _*

// tree(5) 預期輸出：
// ____*
// ___***
// __*****
// _*******
// *********
// ____*
// ____*
// ____*
// ____*
// ____*

function tree(n) {
  printTreeTop(n);
  printTreeBottom(n);
}
function printTreeTop(n) {
  for (var i = 1; i <= n; i++){
    console.log(' '.repeat(n-i) + '*'.repeat((i * 2)-1))
  }
}
function printTreeBottom(n) {
  if(n === 1){ return }
  for (var i = 1; i <= n; i++){
    console.log(' '.repeat(n-1) + '*')
  }
}

// 練習四：判斷圈圈叉叉勝負
// 請寫出一個 function winner，接收一個代表圈圈叉叉的陣列，並回傳贏的是 O 還是 X，如果平手或還沒下完，請回傳 draw。

// winner([
// ['O', 'O', 'X'],
// ['O', 'X', 'X'],
// ['O', 'X', 'O']
// ]) 預期回傳值：O

// winner([
// ['O', 'O', 'X'],
// ['O', 'X', 'X'],
// ['X', 'X', 'O']
// ]) 預期回傳值：X

// winner([
// ['O', 'O', 'X'],
// ['O', 'O', 'X'],
// ['X', 'X', '']
// ]) 預期回傳值：draw

function winner(array){
  // 判斷橫排
  for(let i = 0; i < 3; i++){
    // EX O O O
    if(array[i][0] === array[i][1] && array[i][1] === array[i][2]){
      return array[i][0];
    }
  }
  // 判斷直排
  for(let i = 0; i < 3; i++){
    if(array[0][i] === array[1][i] && array[1][i] === array[2][i]){
      return array[0][i];
    }
  }
  // 斜排 2 個 case
  if(array[0][0] === array[1][1] && array[1][1] === array[2][2]){
    return array[0][0];
  }
  if(array[0][2] === array[1][1] && array[1][1] === array[2][1]){
    return array[0][2];
  }
  return 'draw'
}

// 練習五：判斷質數
// 請寫出一個 function isPrime，給定一個數字 n，回傳 n 是否為質數。
// （質數的定義：除了 1 以外，沒辦法被所有 < n 的正整數整除）
function isPrime(n){
  if (n === 1){ return false }
  for(let i = 2; i < n; i++){
    if(n % i === 0){ return false }
  }
  return true
}
