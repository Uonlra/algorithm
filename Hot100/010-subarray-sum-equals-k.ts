/**
 * 10. 和为 K 的子数组
 *
 * 暴力思路：枚举每个起点并向右累加，遇到累计和为 k 时计数。
 * 最优思路：利用前缀和；当前前缀和为 sum 时，之前出现过 sum - k 的次数就是新增答案数。
 */

export function subarraySumBruteForce(nums: number[], k: number): number {
  let answer = 0;
  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    for (let end = start; end < nums.length; end++) {
      sum += nums[end];
      if (sum === k) answer++;
    }
  }
  return answer;
}

export function subarraySum(nums: number[], k: number): number {
  const prefixCounts = new Map<number, number>([[0, 1]]);
  let prefixSum = 0;
  let answer = 0;

  for (const number of nums) {
    prefixSum += number;
    answer += prefixCounts.get(prefixSum - k) ?? 0;
    prefixCounts.set(prefixSum, (prefixCounts.get(prefixSum) ?? 0) + 1);
  }
  return answer;
}
