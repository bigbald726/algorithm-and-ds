/**
 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。


 示例 1:

 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

 */

var groupAnagrams = function(strs) {
    // 写一个把每个词转换为key的方法
    const getKey = (str) => {
        return str.split('').sort().join('') // split和slice傻傻分不清
    }

    const newMap = new Map()
    for (const str of strs) {
        const key = getKey(str)
        if(newMap.get(key)) {
            newMap.get(key).push(str)
        } else {
            newMap.set(key, [str])
        }
    }

    console.log(...newMap.values())
    return [...newMap.values()]  // 这里.value解构需要注意
};

const test = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(test))
