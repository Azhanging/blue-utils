type ArgNumber = string | number;

function countDecimals(num: ArgNumber): number {
  let len = 0;
  try {
    num = Number(num);
    let str = num.toString().toUpperCase();
    if (str.split(`E`).length === 2) {
      let isDecimal = false;
      if (str.split(`.`).length === 2) {
        str = str.split(`.`)[1];
        if (parseInt(str.split(`E`)[0]) !== 0) {
          isDecimal = true;
        }
      }
      let x = str.split(`E`);
      if (isDecimal) {
        len = x[0].length;
      }
      len -= parseInt(x[1]);
    } else if (str.split(`.`).length === 2) {
      if (parseInt(str.split(`.`)[1]) !== 0) {
        len = str.split(`.`)[1].length;
      }
    }
  } catch (e) {
    throw e;
  } finally {
    if (isNaN(len) || len < 0) {
      len = 0;
    }
    return len;
  }
}

function convertToInt(num: ArgNumber) {
  num = Number(num);
  let newNum = num;
  let times = countDecimals(num);
  let temp_num = num.toString().toUpperCase();
  if (temp_num.split(`E`).length === 2) {
    newNum = Math.round(num * Math.pow(10, times));
  } else {
    newNum = Number(temp_num.replace(`.`, ``));
  }
  return newNum;
}

//计算类型
enum MathTypes {
  ADD = `add`,
  SUB = `sub`,
  DIV = `div`,
  MUL = `mul`,
}

function getCorrectResult(
  type: MathTypes,
  num1: number,
  num2: number,
  result: number
) {
  let temp_result = 0;
  switch (type) {
    case MathTypes.ADD:
      temp_result = num1 + num2;
      break;
    case MathTypes.SUB:
      temp_result = num1 - num2;
      break;
    case MathTypes.DIV:
      temp_result = num1 / num2;
      break;
    case MathTypes.MUL:
      temp_result = num1 * num2;
      break;
  }
  if (Math.abs(result - temp_result) > 1) {
    return temp_result;
  }
  return result;
}

/**
 * 加法计算
 *  */ 
export function accAdd(num1: ArgNumber, num2: ArgNumber) {
  num1 = Number(num1);
  num2 = Number(num2);
  let dec1: number;
  let dec2: number;
  let times: number;
  try {
    dec1 = countDecimals(num1) + 1;
  } catch (e) {
    dec1 = 0;
  }
  try {
    dec2 = countDecimals(num2) + 1;
  } catch (e) {
    dec2 = 0;
  }
  times = Math.pow(10, Math.max(dec1, dec2));
  let result = (accMul(num1, times) + accMul(num2, times)) / times;
  return getCorrectResult(MathTypes.ADD, num1, num2, result);
}

/**
 * 减法计算
 *  */ 
export function accSub(num1: ArgNumber, num2: ArgNumber) {
  num1 = Number(num1);
  num2 = Number(num2);
  let dec1: number;
  let dec2: number;
  let times: number;
  try {
    dec1 = countDecimals(num1) + 1;
  } catch (e) {
    dec1 = 0;
  }
  try {
    dec2 = countDecimals(num2) + 1;
  } catch (e) {
    dec2 = 0;
  }
  times = Math.pow(10, Math.max(dec1, dec2));
  let result = Number((accMul(num1, times) - accMul(num2, times)) / times);
  return getCorrectResult(MathTypes.SUB, num1, num2, result);
}

/**
 * 除法计算
 *  */
export function accDiv(num1: ArgNumber, num2: ArgNumber) {
  num1 = Number(num1);
  num2 = Number(num2);
  let t1 = 0;
  let t2 = 0;
  let dec1: number;
  let dec2: number;
  try {
    t1 = countDecimals(num1);
  } catch (e) {}
  try {
    t2 = countDecimals(num2);
  } catch (e) {}
  dec1 = convertToInt(num1);
  dec2 = convertToInt(num2);
  let result = accMul(dec1 / dec2, Math.pow(10, t2 - t1));
  return getCorrectResult(MathTypes.DIV, num1, num2, result);
}

/**
 * 乘法计算
 *  */
export function accMul(num1: ArgNumber, num2: ArgNumber) {
  num1 = Number(num1);
  num2 = Number(num2);
  let times = 0;
  let s1 = num1.toString();
  let s2 = num2.toString();
  try {
    times += countDecimals(s1);
  } catch (e) {}
  try {
    times += countDecimals(s2);
  } catch (e) {}
  let result = (convertToInt(s1) * convertToInt(s2)) / Math.pow(10, times);
  return getCorrectResult(MathTypes.MUL, num1, num2, result);
}
