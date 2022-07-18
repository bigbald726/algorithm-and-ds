/**
    给定一个仅包含数字2-9的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

    给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };
 */

var letterCombinations = (digits) => {
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };
    const res = []
    const recursiveCall = (newDigit, i) => {
        if (i > digits.length - 1) {
            res.push(newDigit)
            return
        }
        const letters = map[digits[i]]
        for (const l of letters) {
            recursiveCall( newDigit+l , i+1)
        }
    }
    recursiveCall('',0)
    return res
}


var test = "2345"
console.log(letterCombinations((test)))
