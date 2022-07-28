/**
    给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

    输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
    输出：6
    解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。

 */

// var trap = function(height) {
//     // 第一种方法..双指针..有点东西..但是不是很难想到，关注左右最高高度左右缩进即可
//     let left = 0
//     let right  = height.length - 1
//     // enclose the range, exclude all 'flat ground'
//     while (height[left] === 0) left++
//     while (height[right] === 0) right--
//     let ans = 0
//     let leftMaxHeight = 0
//     let rightMaxHeight = 0
//     while (left < right) {
//         leftMaxHeight = Math.max(height[left], leftMaxHeight)
//         rightMaxHeight = Math.max(height[right], rightMaxHeight)
//         if (height[left] < height[right]) { // 左边的高度小于右边，只要右边够高，水位由左边的高度决定，所以推进左边
//             ans += leftMaxHeight - height[left]
//             left++
//         } else { // 右边的高度小于左边，只要左边够高，水位由右边的高度决定，所以推进右边
//             ans += rightMaxHeight - height[right]
//             right--
//         }
//     }
//     return ans
// };

var trap = function(height) {
    // 第二种方法，来个骚的(这种方法O(n)不及双指针O(logN)效率高，也需要3个n长度数组，性能不行，但是脑筋急转弯的解法)

    // 从左到右扫一遍，记录！
    const left2right = []
    let left2rightMax = 0
    for (let i=0;i<height.length;i++) {
        left2rightMax = Math.max(height[i],left2rightMax)
        left2right.push(left2rightMax)
    }
    // 从右到左扫一遍，记录！
    const right2left = []
    let right2leftMax = 0
    for (let i=height.length-1;i>=0;i--) {
        right2leftMax = Math.max(height[i],right2leftMax)
        right2left[i] = right2leftMax
    }
    // 两个数组取最小！
    let filled = []
    for (let i=0;i<height.length;i++) {
        filled.push(Math.min(left2right[i],right2left[i]))
    }

    // 把filled减去原始的height数组！得到ans
    let ans = 0
    for (let i=0;i<height.length;i++) {
        ans += filled[i]-height[i]
    }

    return ans
};


const test  = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(test))
