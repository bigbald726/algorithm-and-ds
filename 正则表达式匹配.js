/**
 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

 '.' 匹配任意单个字符
 '*' 匹配零个或多个前面的那一个元素
 所谓匹配，是要涵盖 整个 字符串 s 的，而不是部分字符串。

 */


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sLen = s.length;
    let pLen = p.length;
    let dp = new Array(s + 1);
    for (let i = 0; i <= sLen; i++) {
        dp[i] = new Array(pLen + 1).fill(false);
    }
    dp[0][0] = true;
    for (let i = 2; i <= pLen; i += 2) {
        if (p[i - 1] === '*') dp[0][i] = dp[0][i - 2];
    }
    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '.') dp[i][j] = dp[i - 1][j - 1];
            else if (p[j - 1] === '*') {
                if (p[j - 2] !== s[i - 1] && p[j - 2] !== '.') dp[i][j] = dp[i][j - 2];
                else dp[i][j] = dp[i - 1][j] || dp[i][j - 2] || dp[i][j - 1];
            }
        }
    }
    return dp[sLen][pLen];
};

// test case
var s = "aa", p = 'a'
// var s = "aa", p = "a*"
// var s = "ab", p = ".*"

console.log(isMatch(s,p))
