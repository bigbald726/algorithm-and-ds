/**
 实现pow(x, n)，即计算 x 的整数n 次幂函数（即，xn ）。



 示例 1：

 输入：x = 2.00000, n = 10
 输出：1024.00000
 示例 2：

 输入：x = 2.10000, n = 3
 输出：9.26100

 */


var myPow = function(x, n) {

    // 第一，就算天王老子来了，O(n)的暴力也是对的，但是不巧妙，不优雅
    // O(n) 也是解法，但是会超时。。。

    // if (n === 0) return 1
    // let isInverse = false
    // if (n < 0) {
    //     isInverse = true
    // }
    // let res = 1
    // for(let i=0;i<Math.abs(n);i++) {
    //     res = res*x
    // }
    // return isInverse? (1/res) : res


    // 第二，首先 3^8 = 3^(4*2) = (3^2)^4
    // 知道以上的这个转化之后，事半功倍
    if (n < 0) return myPow(1/x, Math.abs(n)) // 小于0直接取倒数处理了

    if (n === 0 || n === 1 ) return n === 0 ? 1 : x // 递归的出口，等于0或者1返回值

    //最后一步就是把上面的转化公式用在奇数和偶数n上，如果是奇数次幂，用floor先取个整做偶数次幂，最后乘以单独的一个x就行
    if (n > 0 ) return (n % 2 === 0) ? myPow(x*x, n/2) : myPow(x*x, Math.floor(n/2)) * x
}

const test = [2,10]
console.log(myPow.apply(this,test)) // 注意apply的使用把参数都放进一个数组，更方便，但需要声明this

