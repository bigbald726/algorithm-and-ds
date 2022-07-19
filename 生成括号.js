/**
 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 输入：n = 3
 输出：["((()))","(()())","(())()","()(())","()()()"]

 输入：n = 1
 输出：["()"]
 */



const generateParenthesis = (n) => {

    // left 为 左括号个数，right 为 右括号个数 个数等于0，则push。
    // 条件就是，左括号小于n时，右括号个数小于左括号时，进入下一个增加括号的循环
    let res = []
    const recursive = (left, right, temp) => {
        if (left<n) {
            recursive(left+1,right,temp+'(')
        }
        if (right<left) {
            recursive(left,right+1,temp+')')
        }
        if(right===n && left===n) {
            res.push(temp)
            return
        }
    }
    recursive(0,0,'')
    return res
}

var test = 2
console.log(generateParenthesis(test))
