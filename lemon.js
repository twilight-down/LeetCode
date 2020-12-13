/**
 * @param {number[]} bills
 * @return {boolean}
 */

//  柠檬找钱问题
var lemonadeChange = function(bills) {
    let arr = bills;
    let five = 0;
    let ten = 0;
    if (arr[0] == 10 || arr[0] == 20) {
        return false
    } else if (arr[1] == 20) {
        return false
    };
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] == 5) {
            five++
        } else if (arr[j] == 10) {
            ten++
            five--
            if (five < 0) {
                return false
            }
        } else if (arr[j] == 20) {
            if (ten) {
                ten--;
                five--;
                if (five < 0) {
                    return false
                }
            } else {
                five -= 3;
                if (five < 0) {
                    return false
                }
            }
        }
    }
    return true

};
console.log(lemonadeChange([5, 5, 5, 5, 20, 20, 5, 5, 20, 5]));
console.log(lemonadeChange([5, 5, 10, 20]));
console.log(lemonadeChange([5, 10, 20]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));
console.log(lemonadeChange([5, 5, 10]));


// arr[0] ==5 
// arr[1] == 10
// arr[2]==10



// if(arr[0]==10||arr[0]==20){
//         return "false"
//     }else if(arr[1]==20){
//         return "false"
//     }else if(arr[2]==10&&arr[1]==10){
//         return "false"
//     }else if(arr[]){}