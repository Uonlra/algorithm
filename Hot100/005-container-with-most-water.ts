/**
 * 5. 盛最多水的容器
 *
 * 暴力思路：枚举左右边界，计算每一对边界形成的面积。
 * 最优思路：双指针从两端向内移动；只有移动较短的一边才可能得到更大面积。
 */

export function maxAreaBruteForce(height: number[]): number {
  let answer = 0;
  for (let left = 0; left < height.length; left++) {
    for (let right = left + 1; right < height.length; right++) {
      answer = Math.max(answer, (right - left) * Math.min(height[left], height[right]));
    }
  }
  return answer;
}

export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let answer = 0;

  while (left < right) {
    answer = Math.max(answer, (right - left) * Math.min(height[left], height[right]));
    if (height[left] < height[right]) left++;
    else right--;
  }
  return answer;
}
