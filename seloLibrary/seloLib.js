/**
 * SELO UTIL Library
 * Created by SELO77
 * github.com/selo77
 * rochan87@gmail.com
 */

const util = {
  // 통화 타입 3개의 문자마다 콤마(,) 찍기
  currency : function (num) {
    let result = "";
    let numArray = num.toString().split(".");
    numArray[0] = numArray[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if( numArray.length > 1){
      result = numArray[0] + "." + numArray[1];
    } else {
      result = numArray[0];
    }
    return result
  },

  // 요일 구하는 함수
  getDay : function (date) {
    let yy = parseInt(date.substr(0,4), 10);
    let mm = parseInt(date.substr(5,2), 10);
    let dd = parseInt(date.substr(8), 10);

    let dateFor = new Date(yy,mm-1,dd);
    console.log("++++",dateFor);
    let weekDay = ["일", "월", "화", "수", "목", "금", "토"];
    return weekDay[dateFor.getDay()];
  }
};

export default util;

