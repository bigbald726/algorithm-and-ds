/**
     给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

     如果数组中不存在目标值 target，返回[-1, -1]。

     你必须设计并实现时间复杂度为O(log n)的算法解决此问题。


     示例 1：
     输入：nums = [5,7,7,8,8,10], target = 8
     输出：[3,4]

     示例 2：
     输入：nums = [5,7,7,8,8,10], target = 6
     输出：[-1,-1]
 */


// 第一种通过二分大致寻找目标，然后再通过 二分查找 找到左右边界， 这个方法已经有点倦怠了
var searchRange = function(nums, target) {
//     function findApproxIndex(n,t) {
//         let left = 0
//         let right = n.length - 1
//         let mid = Math.floor(left + (right - left) / 2)
//         while (left <= right) {
//             console.log('f() findApproxIndex-> left, right', left, right)
//             if (n[mid]===t) { return mid }
//             if (n[mid] < t) {
//                 left = mid + 1
//             } else {
//                 right = mid - 1
//             }
//             mid = Math.floor(left + (right - left) / 2)
//         }
//         return -1
//     }
//
//     function findLeftEdge(l,r) {
//         let left = l
//         let right = r
//         let mid = Math.floor(left + (right - left) / 2)
//         while (left<=right) {
//             if (nums[mid]===target && nums[mid-1]!==target) return mid
//             if (nums[mid]===target) {
//                 right = mid - 1
//             } else {
//                 left = mid + 1
//             }
//             mid = Math.floor(left + (right - left) / 2)
//         }
//     }
//
//     function findRightEdge(l,r) {
//         let left = l
//         let right = r
//         let mid = Math.floor(left + (right - left) / 2)
//         while (left<=right) {
//             if (nums[mid]===target && nums[mid+1]!==target) return mid
//             if (nums[mid]===target) {
//                 left = mid + 1
//             } else {
//                 right = mid - 1
//             }
//             mid = Math.floor(left + (right - left) / 2)
//         }
//     }
//
//     const approxIndex = findApproxIndex(nums,target)
//     console.log('########## find approx index', approxIndex)
//     if (approxIndex === -1) return [-1,-1]
//     const leftEdge = findLeftEdge(0,approxIndex)
//     const rightEdge = findRightEdge(approxIndex,nums.length - 1)
//     return [leftEdge,rightEdge]


// 第二种方法就是在外面重新定义一个二分查找函数
    let ans = [-1, -1];
    const leftIdx = binarySearch(nums, target, true);
    const rightIdx = binarySearch(nums, target, false) - 1;
    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
        ans = [leftIdx, rightIdx];
    }
    return ans;

};

const binarySearch = (nums, target, lower) => {
    let left = 0, right = nums.length - 1, ans = nums.length;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > target || (lower && nums[mid] >= target)) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}


const test = [5,7,7,8,8,10]
const target = 8


console.log(searchRange(test,target))
