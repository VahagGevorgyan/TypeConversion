'use strict'

function myParseInt1(str) {
    let res = 0;
    let nums = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
    };
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i])) {
        let char = str[i];
        let value = nums[char];
        res = res * 10 + value;
      } else {
        break;
      }
    }
    return res;
  }
  
  console.log(myParseInt1("1203.9hyhy6"));
  