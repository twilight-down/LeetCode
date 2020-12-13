// 两数相加，逆序输出
var addTwoNumbers = function(l1, l2) {
    l1 = l1.toString();
    l2 = l2.toString();
    let a = Array.from(l1),
        b = Array.from(l2);
    console.log(a, b);
    a = new Number(a.reverse().join(''));
    b = new Number(b.reverse().join(''));
    console.log(a, b);
    a = Array.from((a + b).toString())
    console.log(a);
    // return a = new Number(Array.from(a + b).reverse().join(''));
};

console.log(addTwoNumbers("111", "201"));