/**
     整数数组 nums 按升序排列，数组中的值 互不相同 。

     在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

     给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

     你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。



     示例 1：
         输入：nums = [4,5,6,7,0,1,2], target = 0
         输出：4
 */

// 有个思路...先找出最大值的位置，O(log2N)，再在sub数组中找元素位置，O(log2N), 不是严格的O(log2N)...
var search = function(nums, target) {
    function findMax(nums) {
        let left = 0
        let right = nums.length - 1
        let mid = Math.floor(left + (right - left) / 2)
        while (left <= right) {
            if (nums[mid] > nums[mid + 1]) {
                return mid
            }
            if (nums[left] > nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
            mid = Math.floor(left + (right - left) / 2)
        }
        return left
    }

    function findNum(l, r) {
        let left = l
        let right = r
        let mid = Math.floor(left + (right - left) / 2)
        while (left <= right) {
            if (nums[mid] === target) return mid
            if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
            mid = Math.floor(left + (right - left) / 2)
        }
        return -1
    }

    const maxNumIndex = findMax(nums)
    if (target === nums[0]) return 0
    if (target > nums[0]) return findNum(0, maxNumIndex)
    if (target < nums [0]) return findNum(maxNumIndex + 1, nums.length - 1)
}

// 或者...你想没想过可以改一下二分里面的判断条件..
var search2 = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid = Math.floor(left + (right-left) / 2 )
    while (left <= right) {
        if (nums[mid] === target) {
            return mid
        }
        // 到以上都是普通的二分而已...下面的判断才是精华
        if (nums[0] <= nums[mid]) {
            // 如果此时中位数大于了首位....
            if (nums[0] <= target && target < nums[mid]) {
                // ...并且target还在首位和中位之间！！妥妥的缩短右侧到中位-1的位置，这时左到右就是是单调增了
                right = mid - 1
            } else {
                // ...但是target不在首位和mid之间，这样他就不在一个确定的单调增区间里面，缩短左边继续确定...
                left = mid + 1
            }

        } else {
            // 如果此时中位小于首位...
            if (nums[mid] < target && target <= nums[nums.length - 1]) {
                // ...并且target还在中位和末尾之间！！妥妥的缩短左侧侧到中位+1的位置，这时左到右就是是单调增了
                left = mid + 1
            } else {
                // ...但是target不在mid和末尾之间，这样他就不在一个确定的单调增区间里面，缩短右边继续确定...
                right = mid - 1
            }
        }
        mid = Math.floor(left + (right-left) / 2 )
    }
    return - 1
}

const test = [7,8,9,10,0,2,4,5]
const target = 4
console.log(search2(test,target))
