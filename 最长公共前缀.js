/**
 编写一个函数来查找字符串数组中的最长公共前缀。

 如果不存在公共前缀，返回空字符串 ""。

 输入：strs = ["flower","flow","flight"]
 输出："fl"


 */

// 先想到了 横向扫描，可以看每个位置上的字母，放到字典里再每次计算字典里字母的个数是不是正确。
// var longestCommonPrefix = function(strs) {
//     index = 0
//     mapSet = new Map()
//     temp = ''
//     const findIndex = () => {
//         while(true) {
//             for (const each of strs) {
//                 if (each[index]) {
//                     mapSet.get(each[index])? mapSet.set(each[index],mapSet.get(each[index])+1) : mapSet.set(each[index],1)
//                 } else {
//                     return index
//                 }
//                 temp = each
//             }
//             if (mapSet.get(temp[index]) % strs.length !== 0) {
//                 return index
//             } else {
//                 index++
//             }
//         }
//     }
//     const resIndex = findIndex()
//     return strs[0].slice(0,resIndex)
// };

// 使用正则判断似乎可以使代码变得更简便

// [Object RegExp].test(String) 可以判断是不是String中含有此RegExp字段
var longestCommonPrefix = function(strs) {
    var re = strs[0] ? strs[0]:'';
    for (var i=1;i<strs.length;i++){
        var regex = new RegExp('^'+re);
        while (!regex.test(strs[i]) && re.length){
            re = re.slice(0,re.length-1);
            regex = new RegExp('^'+re);
        }
    }
    return re;
};



var test = ["flower","flow","flight"]
console.log(longestCommonPrefix(test))
