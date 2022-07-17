/**
 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

 返回容器可以储存的最大水量。

 说明：你不能倾斜容器。


 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 两个for，把爷整笑了
    // let maxVol = 0
    // var vol
    // for (let i=0;i<height.length;i++) {
    //     for(let j=i+1; j<height.length;j++) {
    //         vol = (j-i)*Math.min(height[i],height[j])
    //         maxVol = Math.max(maxVol,vol)
    //     }
    // }
    // return maxVol

    // 双指针，意思是只有不断向内移动两块相比较短的板，面积是才可能变大。
    let left = 0
    let right = height.length - 1
    let maxVol = 0
    while(left < right) {
        // 计算容量写在最前面，如果只有两块板，直接算出答案；如果目标板子在最中间两块，left<right总能拿到
        maxVol = Math.max(maxVol,(right-left)*(Math.min(height[left],height[right])))
        if (height[left]>=height[right]) {
            right--
        } else {
            left++
        }
    }
    return maxVol
};


