/**
 给你一个包含 n 个整数的数组nums，判断nums中是否存在三个元素 a，b，c ，使得a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

 注意：答案中不可以包含重复的三元组。

 输入：nums = [-1,0,1,2,-1,-4]
 输出：[[-1,-1,2],[-1,0,1]]

 输入：nums = []
 输出：[]
 */

// 感觉可以用DP，细想之后不可能，是个寻找的过程。上来就不会，直接摆

// 秒了一眼答案，可以用扫描+双指针的方法，排序先，<0就动左指针调大最小值， >0就动右指针调小最大值

// 去重使用 判断右边数字等于左边数字的方式，

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    sortedNums = nums.sort((a, b) => a - b)
    console.log(sortedNums)
    res = []
    for (let i=0; i<nums.length-2; i++) {
        if (i && nums[i] === nums[i - 1]) continue // 若当前这一项和上一项相等则跳过,去重逻辑，很巧妙
        let left = i + 1
        let right = nums.length - 1
        while( left < right ){
            console.log(nums[i],nums[left],nums[right])
            if (nums[i]+nums[left]+nums[right]>0) {
                console.log('>0')
                right--
            } else if (nums[i]+nums[left]+nums[right]<0) {
                console.log('<0')
                left++
            } else {
                console.log('==0')
                res.push([nums[i],nums[left],nums[right]])
                // 以下也是去重逻辑一部分，在有序数组中，这样做就能排除所有重复项
                left++
                right--
                while (nums[left] === nums[left+1]) {
                    left++
                }
                while (nums[right] === nums[right-1]) {
                    right--
                }
            }
        }
    }
    return res
};
// 复杂运算的时候去掉consolelog，非常影响性能

var test = [-1,0,1,2,-1,-4]
console.log(threeSum(test))
