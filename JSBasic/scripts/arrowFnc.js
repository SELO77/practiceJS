/**
 * Created by SELO on 2016. 4. 8..
 */


var result = (questionItem) => {
  switch  (questionItem.get('detailTypeCode')){
    case "IC01-01-01": return "변경/취소";
    case "IC01-01-02": return "지불/티켓팅";
    case "IC01-01-03": return "환불";
    case "IC01-01-04": return "운임규정";
    case "IC01-01-05": return "화물/탑승";
    case "IC01-01-06": return "기타";
  }
}