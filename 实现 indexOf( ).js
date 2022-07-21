/**
     给你两个字符串haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回 -1 。

     说明：

     当needle是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

     对于本题而言，当needle是空字符串时我们应当返回 0 。这与 C 语言的strstr()以及 Java 的indexOf()定义相符。


     输入：haystack = "hello", needle = "ll"
     输出：2*/

var strStr = function(haystack, needle) {
    // let mainIndex = 0
    // let subIndex = 0
    // while (mainIndex < haystack.length && subIndex < needle.length) {
    //     if (haystack[mainIndex] === needle[subIndex]){
    //         mainIndex++
    //         subIndex++
    //     } else {
    //         mainIndex = mainIndex - subIndex + 1
    //         subIndex = 0
    //     }
    // }
    // return subIndex === needle.length ? (mainIndex - subIndex) : -1

    let index = 0
    while (index < (haystack.length - needle.length + 1)) {
        for (let i=index; i<needle.length; i++) {
            console.log('########## index, subIndex', index, i)
            if (haystack[index] !== needle[i]) {
                index = index + i
                break
            }
            if(i===index.length-1) {
                return index
            }
        }
        index++
    }
    return -1
};

let haystack = 'xoxoxoxop'
let needle =   'xoxop'

console.log(strStr(haystack,needle))

