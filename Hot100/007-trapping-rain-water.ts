/**
 * 7. 接雨水
 *
 * 暴力思路：对每个位置分别扫描左侧和右侧最高柱子，累加两者较小值减当前高度。
 * 最优思路：双指针维护左右最高高度；较矮的一侧可以立即确定当前位置的积水量。
 */

export function trapBruteForce(height: number[]): number {
  let answer = 0;
  for (let i = 0; i < height.length; i++) {
    let leftMax = 0;
    let rightMax = 0;
    for (let left = 0; left <= i; left++) leftMax = Math.max(leftMax, height[left]);
    for (let right = i; right < height.length; right++) rightMax = Math.max(rightMax, height[right]);
    answer += Math.min(leftMax, rightMax) - height[i];
  }
  return answer;
}

export function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let answer = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      answer += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      answer += rightMax - height[right];
      right--;
    }
  }
  return answer;
}
