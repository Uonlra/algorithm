/**
 * 13. 轮转数组
 *
 * 暴力思路：重复 k 次，每次取出末尾元素并插入数组开头。
 * 时间复杂度 O(k * n)，空间复杂度 O(1)（不计数组方法内部实现）。
 *
 * 最优思路：先整体反转，再分别反转前 k 个元素和剩余元素。
 * 时间复杂度 O(n)，空间复杂度 O(1)。
 */

export function rotateBruteForce(nums: number[], k: number): void {
  if (nums.length === 0) return;
  k %= nums.length;

  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop()!);
  }
}

export function rotate(nums: number[], k: number): void {
  if (nums.length === 0) return;
  k %= nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(nums: number[], left: number, right: number): void {
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}
