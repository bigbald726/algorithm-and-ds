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
    }

    // 新起一个空数组放结果
    let res = []

    // 递归方程-与以往不同，此为从前向后递归
    const recursive = (newDigit, i) => {
        // 递归终止条件，递归次数i大于数字个数时
        if (i > digits.length - 1) {
            // 向数组中push这个结果，然后结束
            res.push(newDigit)
            return
        }
        // 递归开始，先拿到按钮对应的字母串
        const letters = map[digits[i]]
        // 根据字母串上的字母，逐个向结果中增加各个字母，并记录递归次数；类似树结构，树的子节点为父节点的 map[Digit[i]].length 倍
        for (let l of letters) {
            recursive(newDigit+l, i+1)
        }
    }
    recursive('',0)
    return res
}


var test = "2345"
console.log(letterCombinations((test)))
