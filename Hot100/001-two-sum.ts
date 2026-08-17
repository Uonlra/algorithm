/**
 * 1. 两数之和
 *
 * 暴力思路：枚举每一对下标，检查两个数之和是否等于 target。
 * 最优思路：遍历数组时用哈希表记录已经见过的数及其下标，查找 target - nums[i]。
 */

export function twoSumBruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}

export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) return [seen.get(complement)!, i];
    seen.set(nums[i], i);
  }
  return [];
}
