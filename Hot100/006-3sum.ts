/**
 * 6. 三数之和
 *
 * 暴力思路：枚举三个下标，判断三数之和，并用集合去重。
 * 最优思路：排序后固定第一个数，另外两个数用双指针查找，并跳过重复值。
 */

export function threeSumBruteForce(nums: number[]): number[][] {
  const result = new Map<string, number[]>();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] !== 0) continue;
        const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
        result.set(triplet.join(','), triplet);
      }
    }
  }
  return [...result.values()];
}

export function threeSum(nums: number[]): number[][] {
  const sorted = [...nums].sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < sorted.length - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right];
      if (sum === 0) {
        result.push([sorted[i], sorted[left], sorted[right]]);
        while (left < right && sorted[left] === sorted[left + 1]) left++;
        while (left < right && sorted[right] === sorted[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
}
