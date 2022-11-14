// 给一个整数，将整数部分，每三位数加一个逗号
function format_thousands(n) {

}


 // 方法四
function toThousands(num) {
     var num = (num || 0).toString(), result = '';
     while (num.length > 3) {
         result = ',' + num.slice(-3) + result;
         num = num.slice(0, num.length - 3);
     }
     if (num) { result = num + result; }
     return result;
 }

  // 方法六使用正则
function toThousands(num) {
     return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
 }


 function toThousands(num) {
 	return num.toLocaleString()
 }