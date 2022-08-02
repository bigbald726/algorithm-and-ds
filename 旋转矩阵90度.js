/**
 给定一个 n×n 的二维矩阵matrix 表示一个图像。请你将图像顺时针旋转 90 度。

 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。



 示例 1：
 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 输出：[[7,4,1],[8,5,2],[9,6,3]]
 */

// 第一种：两次翻转
// var rotate = (matrix) => {
//     // 与其一个个看旋转矩阵。。不如试试看竖直+对角线反转
//     // 竖直反转（根据水平线）
//     for (let i=0;i< Math.floor(matrix.length/2);i++) {
//         for (let j=0; j<matrix.length; j++) {
//             [matrix[i][j],matrix[matrix.length - 1 - i][j]] =
//                 [matrix[matrix.length - 1 - i][j],matrix[i][j]]
//         }
//     }
//
//     // 对角线反转（根据左上到右下的对角线）
//     for (let i=0;i< matrix.length;i++) {
//         for (let j=0; j<i; j++) {
//             [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
//         }
//     }
// }

// 第二种：原地旋转
var rotate = (matrix) => {
    const n = matrix.length
    let temp
    for (let y=0;y<Math.floor(n/2);y++) {
        for (let x=0;x<Math.floor((n+1)/2);x++) {
            temp = matrix[y][x]
            // 这里从四个角想问题不太能总结，最好是四个边上的点比如（y=0,x=1）
            matrix[y][x] = matrix[n-1-x][y]
            matrix[n - x - 1][y] = matrix[n - y - 1][n - x - 1];
            matrix[n - y - 1][n - x - 1] = matrix[x][n - y - 1]
            matrix[x][n - y - 1] = temp
        }
    }
}

let test = [[1,2,3],[4,5,6],[7,8,9]]
rotate(test)
console.log(test)



