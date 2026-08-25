/**
 * 15. 缺失的第一个正数
 *
 * 暴力思路：从 1 开始逐个检查正整数是否存在于数组中，找到第一个不存在的数。
 * 时间复杂度 O(n^2)，空间复杂度 O(1)。
 *
 * 最优思路：把值 x 放到下标 x - 1。完成原地交换后，第一个 nums[i] !== i + 1
 * 的位置对应缺失的最小正数。
 * 时间复杂度 O(n)，空间复杂度 O(1)。
 */

export function firstMissingPositiveBruteForce(nums: number[]): number {
  for (let candidate = 1; candidate <= nums.length + 1; candidate++) {
    if (!nums.includes(candidate)) return candidate;
  }
  return nums.length + 1;
}

export function firstMissingPositive(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] >= 1 &&
      nums[i] <= nums.length &&
      nums[nums[i] - 1] !== nums[i]
    ) {
      const targetIndex = nums[i] - 1;
      [nums[i], nums[targetIndex]] = [nums[targetIndex], nums[i]];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return nums.length + 1;
}
