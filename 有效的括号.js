/**
 给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串 s ，判断字符串是否有效。

 有效字符串需满足：

 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。

 */
var isValid = function(s) {
    let bracketMap = {
        '(':')',
        '{':'}',
        '[':']'
    }
    let stack = []
    let top = null
    console.log(s.length)
    for (let i=0;i<s.length;i++) { // 遍历一次
        top = stack[stack.length-1] || null // top is the top of stack (last of the array)
        console.log('#########',i,'###',top, s[i])
        if (s[i] === bracketMap[top]){ // 如果stack的顶部与扫描遍历个体相呼应
            stack.pop()
        } else { // 如果不呼应，记录
            stack.push(s[i])
        }
        console.log(stack)
    }
    return stack.length === 0
};

let test = '{()}'
console.log(isValid(test))
