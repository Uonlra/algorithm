/**
 * 11. 最大子数组和
 *
 * 暴力思路：枚举每个起点，向右累加所有可能的子数组并维护最大和。
 * 时间复杂度 O(n^2)，空间复杂度 O(1)。
 *
 * 最优思路：动态规划。遍历到当前元素时，选择接在前面的子数组后面，
 * 或者从当前元素重新开始，并持续维护全局最大值。
 * 时间复杂度 O(n)，空间复杂度 O(1)。
 */

export function maxSubArrayBruteForce(nums: number[]): number {
  let answer = -Infinity;

  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    for (let end = start; end < nums.length; end++) {
      sum += nums[end];
      answer = Math.max(answer, sum);
    }
  }
  return answer;
}

export function maxSubArray(nums: number[]): number {
  let currentSum = nums[0];
  let answer = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    answer = Math.max(answer, currentSum);
  }
  return answer;
}
