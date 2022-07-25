/**
 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。


 示例 1：

 输入：nums = [1,2,0]
 输出：3
 示例 2：

 输入：nums = [3,4,-1,1]
 输出：2
 示例 3：

 输入：nums = [7,8,9,11,12]
 输出：1

 */

var firstMissingPositive = function(nums) {

    // 如果 这里面都有1 ，那必然是1
    if (!nums.includes(1)) return 1


    // 先处理一下数组，把负数，0， 和大于 数组长度的，都替换成 1
    for (let i=0;i<nums.length;i++) {
        if (nums[i]<=0 || nums[i]>nums.length) {
            nums[i] = 1
        }
    }

    // 现在看这个过滤过的数组，把出现的元素当成序号，序号位上的数变成负数
    for (let i=0;i<nums.length;i++) {
        let pointer = Math.abs(nums[i]) - 1 // 第一位是0
        nums[pointer] = -(Math.abs(nums[pointer]))
    }

    for (let i=0;i<nums.length;i++) {
        if (nums[i] > 0) {
            return i + 1
        }
    }
    return nums.length + 1
}

const test = [3,4,-1,1]
console.log(firstMissingPositive(test))
