// 綜合題目練習 LV.2
// ********************
// 練習一：好多星星
// 請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案。
// stars(1) 預期輸出：
// *
// stars(3) 預期輸出：
// *
// **
// ***
function stars(n) {
  htmlStr = '';
  for (let i = 0; i < n; i++) {
    htmlStr = htmlStr + '*';
    console.log(htmlStr);
  }
}

// 練習二：好多星星 回傳版
// 請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串
// makeStars(1) 正確回傳值：*
// makeStars(2) 正確回傳值：*\n**
// makeStars(5) 正確回傳值：*\n**\n***\n****\n*****
function makeStars(n) {
  let starArray = [];
  let str = '';
  for (let i = 0; i < n; i++) {
    str = str + '*';
    starArray.push(str);
  }
  return starArray.join('\\n');
}

// 練習三：好多星星 加強版
// 請寫出一個函式 stars2，接收一個參數 n，並依照規律印出圖形。
// stars2(1) 預期輸出：
// *
// stars2(3) 預期輸出：
// *
// **
// ***
// **
// *
function stars2(n) {
  let starArray = [];
  let str = '';
  for (let i = 0; i < n; i++) {
    str = str + '*';
    starArray.push(str);
  }
  for (let i = n - 1; i > 0; i--) {
    starArray.push(starArray[i-1]);
  }
  return starArray.join('\n');
}

// 練習四
// 請寫一個函式 table，接收一個數字 n，印出 n*1 ~ n*9 的結果。
// table(1) 預期輸出：
// 1*1 = 1
// 1*2 = 2
// 1*3 = 3
// 1*4 = 4
// 1*5 = 5
// 1*6 = 6
// 1*7 = 7
// 1*8 = 8
// 1*9 = 9
function table(n) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${n}*${i}=${n * i}`);
  }
}

// 練習五
// 請寫出一個 function table9to9，並列出 1*1 ~ 9*9。
// table9to9() 預期輸出：
// 1*1 = 1
// 1*2 = 2
// 1*3 = 3
// .....
// 5*1 = 5
// 5*2 = 10
// 5*3 = 15
// ....
// 9*7 = 63
// 9*8 = 72
// 9*9 = 81
function table9to9() {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${i}*${j}=${i * j}`);
    }
  }
}

// 練習六
// 費式數列的定義為：第 n 個數等於前兩個數的總和，因此這個數列會長的像這樣：1 1 2 3 5 8 13 21 ....
// 用比較數學一點的講法，就是：
// fib(0) = 0
// fib(1) = 1
// for n >=2, fib(n) = fib(n-1) + fib(n-2)
// 現在，請你寫出一個 fib 的函式，回傳位在第 n 個位置的數字
// fib(1) 預期回傳值：1
// fib(2) 預期回傳值：1
// fib(8) 預期回傳值：21
function fib(n) {
  if (n <= 0) { return 0 }
  if (n > 0 && n <= 2) { return 1 }
  // fib(0) = 0
  // fib(1) = 1
  let fibArray = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray[n];
  // 遞迴解法 - 終止條件很重要
  // if (n <= 0) { return 0 }
  // if (n > 0 && n <= 2) { return 1 }
  // return fib(n-1) + fib(n-2);
}

// 練習七：字串反轉
// 請寫出一個函式 reverse，接收一個字串，並且回傳反轉過後的字串。（禁止使用內建函式 reverse）
// reverse("abcd") 預期回傳值：dcba
// reverse("12345aa") 預期回傳值：aa54321
function reverse(str) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse;
}

// 練習八：大小寫互換
// 請寫一個函式 swap，接收一個字串，並且回傳大小寫互換後的字串。
// swap("Peter") 預期回傳值：pETER
// swap("AbCdE") 預期回傳值：aBcDe
function swap(str) {
  tempArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
      tempArray.push(String.fromCharCode((str[i].charCodeAt() + 32)));
    } else if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
      tempArray.push(String.fromCharCode((str[i].charCodeAt() - 32)));
    } else {
      tempArray.push(str[i]);
    }
  }
  return tempArray.join('');
}

// 練習九：找出最小值
// 請寫出一個函式 findMin，接收一個陣列並回傳陣列中的最小值。（禁止使用內建函式 sort）
// findMin([1, 2, 5, 6, 99, 4, 5]) 預期回傳值：1
// findMin([1, 6, 0, 33, 44, 88, -10]) 預期回傳值：-10
function findMin(numArray) {
  // 假定第一個就是當前最小，與其他比較，若有更小就交換
  let min = numArray[0];
  for(let i = 1; i < numArray.length; i++){
    if (min > numArray[i]){
      min = numArray[i];
    }
  }
  return min;

  // 解構 + Math.min()
  // return Math.min(...numArray);
}

// 練習十：找出第 n 小的值
// 這題是上一題的加強版，上一題只要你找出最小值，而這一題請你寫一個 function findNthMin，接收一個陣列以及一個數字 n，找出第 n 小的數字。
//（禁止使用內建函式 sort）
// 提示：假設我要找出第 2 小的值，我只要先找出最小的值然後再把它刪掉，再重新找一次最小的值，就會是第 2 小的值了。
// findNthMin([1, 2, 3, 4, 5], 1) 預期回傳值：1
// findNthMin([1, 3, 5, 7, 9], 3) 預期回傳值：5
// findNthMin([1, 1, 1, 1, 1], 2) 預期回傳值：1
function findNthMin(numArray, n) {
  for (let i = 0; i < n - 1; i++) {
    let getMin = Math.min(...numArray);
    let deleteIndex = numArray.findIndex(function (el) {
      return el === getMin;
    });
    numArray.splice(deleteIndex, 1);
  }
  return Math.min(...numArray);
}

// ********************




