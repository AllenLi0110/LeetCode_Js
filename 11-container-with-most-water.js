//Blog:http://52.198.119.162/2022/05/18/leetcode-js-11-container-with-most-water/

/* <strong>solution:</strong>
1. 最大的x軸需取最左與最右，接下來做後續配對
2. max = x軸的長度 * Math.min(左邊, 右邊)
3. while (左邊大於右邊)，直到(左邊 = 右邊)跳出迴圈
4.「if條件」height[right] < height[left]
true: 右邊--
false: 左邊++
5.「if條件」currentMax > max => ture: 更新最大的值
6. 回傳max */

var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let max = (right - left) * Math.min(height[left], height[right])
  while (right > left) {
    if (height[right] < height[left]) {
      right--
    } else {
      left++
    }
    let currentMax = (right - left) * Math.min(height[left], height[right])
    if (currentMax > max) {
      max = currentMax
    }
  }
  return max
}

// step.1
// L
// [1, 8, 6, 2, 5, 4, 8, 3, 7]
// R
// right - left = 8 - 0 = 8
// Math.min(1, 7) = 1
// max = 8 * 1 = 8

// step.2
// L
// [1, 8, 6, 2, 5, 4, 8, 3, 7]
// R
// right - left = 8 - 1 = 7
// Math.min(8, 7) = 7
// max = 7 * 7 = 49

// step.3
// L
// [1, 8, 6, 2, 5, 4, 8, 3, 7]
// R
// right - left = 7 - 1 = 6
// Math.min(8, 3) = 3
// max = 6 * 3 = 18 

// step.4
// L
// [1, 8, 6, 2, 5, 4, 8, 3, 7]
// R
// right - left = 7 - 2 = 5
// Math.min(6, 3) = 3
// max = 5 * 3 = 15 

// step.5
// L
// [1, 8, 6, 2, 5, 4, 8, 3, 7]
// R
// right - left = 6 - 2 = 4
// Math.min(6, 8) = 6
// max = 4 * 6 = 24 

// step.6
// L
// [1, 8, 6, 2, 5, 4, 8, 3, 7]
// R
// right - left = 6 - 3 = 3
// Math.min(2, 8) = 2
// max = 3 * 2 = 6 

// step.7
// L
// [1, 8, 6, 2, 5, 4, 8, 3, 7]
// R
// right - left = 6 - 4 = 2
// Math.min(5, 8) = 5
// max = 1 * 5 = 5

// step.8
// L
// [1, 8, 6, 2, 5, 4, 8, 3, 7]
// R
// right - left = 6 - 5 = 1
// Math.min(4, 8) = 4
// max = 1 * 4 = 4

// step.9
// L
// [1, 8, 6, 2, 5, 4, 8, 3, 7]
// R
// right - left = 6 - 6 = 0
// Math.min(8, 8) = 8
// max = 0 * 8 = 0
