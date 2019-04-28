// 綜合題目練習 LV.1 
// ********************
// 綜合練習一
// 請你分別用 for loop 以及 while 迴圈，印出 1~9, 如
// 1
// 2
// ...
// 9
function printNum() {
  for(let i = 1; i < 10; i+=1){
    console.log(i);
  }

  // let i = 1
  // while (i < 10) {
  //   console.log(i);
  //   i++;
  // }
}

// 綜合練習二
// 請寫一個函式叫做 print，接收一個是數字的參數 n，並且印出 1~n。
// 1
// 2
// ...
// n
function print(n) {
  for (let i = 0; i < n; i++) {
    console.log(i + 1);
  }
}

// 綜合練習三
// 寫一個函式 star，接收一個參數 n，並印出 n 個 *
// star(1) 預期輸出：
// *
// star(5) 預期輸出：
// *****
function star(n) {
  let star = '';
  for (let i = 0; i < n; i++) {
    star = star + '*';
  }
  console.log(star);
}

// 綜合練習四
// 請寫出一個叫做 starReturn 的 function 並且接受一個參數 n，能回傳 n 個 *
function starReturn(n) {
  let star = '';
  for (let i = 0; i < n; i++) {
    star = star + '*';
  }
  return star;
}

// 綜合練習五
// 請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫。
// isUpperCase("abcd") 正確回傳值：false
// isUpperCase("Abcd") 正確回傳值：true
function isUpperCase(str) {
  // 65 為 A 的 ASCII CODE 90 為 Z
  // 可以直接比字母 if (str[0] >= 'A' && str[0] <= 'Z')
  if (str[0].charCodeAt() >= 65 && str[0].charCodeAt() <= 90) {
    return true
  } else {
    return false;
  }
  // 邏輯簡化後只需一行
  // return str[0] >= 'A' && str[0] <= 'Z';
}

// 綜合練習六
// 請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1。
function position(str) {
  for (let i = 0; i < str.length; i++) {
    // 檢查是否大寫
    if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
      return `${str[i]} ${i}`
    }
  }
  return -1;
}

// 綜合練習七 
// 回傳陣列裡面所有小於 n 的數的數量
// 請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n。
// findSmallCount([1, 2, 3], 2) 預期回傳值：1
// findSmallCount([1, 2, 3, 4, 5], 0) 預期回傳值：0
function findSmallCount(numArray, n) {
  let smallThanN = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] < n) {
      smallThanN++;
    }
  }
  return smallThanN;
  // return numArray.filter(function(item){
  //   return item < n
  // }).length
}

// 綜合練習八
// 請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和。
// findSmallerTotal([1, 2, 3], 3) 正確回傳值：3
// findSmallerTotal([1, 2, 3], 1) 正確回傳值：0
// findSmallerTotal([3, 2, 5, 8, 7], 999) 正確回傳值：25
// findSmallerTotal([3, 2, 5, 8, 7], 0) 正確回傳值：0
function findSmallerTotal(numArray, n) {
  let smallTotal = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] < n) {
      smallTotal = smallTotal + numArray[i];
    }
  }
  return smallTotal;
}

// 綜合練習九
// 請寫一個函式 findAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）。
// findAllSmall([1, 2, 3], 10) 正確回傳值：[1, 2, 3]
// findAllSmall([1, 2, 3], 2) 正確回傳值：[1]
// findAllSmall([1, 3, 5, 4, 2], 4) 正確回傳值：[1, 3, 2]
function findAllSmall(numArray, n) {
  let smallThanNArray = [];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] < n) {
      smallThanNArray.push(numArray[i]);
    }
  }
  return smallThanNArray;
}

// 綜合練習十
// 回傳陣列總和
// 請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。
// sum([1, 2, 3]) 預期回傳值：6
// sum([-1, 1, 2, -2, 3, -3]) 預期回傳值：0
function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total;

  // ES6 reduce
  // 沒給 0 預設是 null
  // return array.reduce(function(accumu, currentValue){
  //   return accumu + currentValue 
  // }, 0)
}
// ********************