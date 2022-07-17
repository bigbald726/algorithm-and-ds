/**
 罗马数字包含以下七种字符:I，V，X，L，C，D和M。

 字符          数值
 I             1
 V             5
 X             10
 L             50
 C             100
 D             500
 M             1000

 例如， 罗马数字 2 写做II，即为两个并列的 1 。12 写做XII，即为X+II。 27 写做XXVII, 即为XX+V+II。

 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做IIII，而是IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为IX。这个特殊的规则只适用于以下六种情况：

 I可以放在V(5) 和X(10) 的左边，来表示 4 和 9。
 X可以放在L(50) 和C(100) 的左边，来表示 40 和90。
 C可以放在D(500) 和M(1000) 的左边，来表示400 和900。
 给定一个罗马数字，将其转换成整数。

 */

// var romanToInt = function(s) {
//     const numMap = {
//         'I' : 1,
//         'V' : 5,
//         'X': 10,
//         'L':50,
//         'C':100,
//         'D':500,
//         'M':1000
//     }
//     let res = 0
//     let i = 0
//     while ( i < s.length ) {
//         switch (s[i]) {
//             case 'I':
//                 if(s[i+1] && s[i+1]==='V') {
//                     res += 4
//                     i++
//                 } else if (s[i+1] && s[i+1]==='X') {
//                     res += 9
//                     i++
//                 } else {
//                     res += numMap['I']
//                 }
//                 i++
//                 break
//             case 'X':
//                 if(s[i+1] && s[i+1]==='L') {
//                     res += 40
//                     i++
//                 } else if (s[i+1] && s[i+1]==='C') {
//                     res += 90
//                     i++
//                 } else {
//                     res += numMap['X']
//                 }
//                 i++
//                 break
//             case 'C':
//                 if(s[i+1] && s[i+1]==='D') {
//                     res += 400
//                     i++
//                 } else if (s[i+1] && s[i+1]==='M') {
//                     res += 900
//                     i++
//                 } else {
//                     res += numMap['C']
//                 }
//                 i++
//                 break
//             default:
//                 res += numMap[s[i]]
//                 i++
//         }
//     }
//     return res
// };
// 以上，写了一大堆，俗了


// 你来整个不俗的！
const romanToInt = s => {
    let map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]])
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let left = map.get(s[i]);
        let right = map.get(s[i + 1]);
        res += left < right ? -left : left
    }
    return res
};


const s = 'MCMXCIV'
console.log(romanToInt(s))
