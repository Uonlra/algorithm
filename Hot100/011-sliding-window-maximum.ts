/**
 * 11. 滑动窗口最大值
 *
 * 暴力思路：每个窗口单独遍历 k 个元素，找出窗口最大值。
 * 时间复杂度 O(n * k)，空间复杂度 O(1)（不计返回数组）。
 *
 * 最优思路：维护一个下标单调递减的双端队列。队首始终是当前窗口最大值的下标，
 * 新元素加入时移除所有不可能成为最大值的较小元素，窗口左边界移出时删除过期下标。
 * 时间复杂度 O(n)，空间复杂度 O(k)。
 */

export function maxSlidingWindowBruteForce(nums: number[], k: number): number[] {
  if (nums.length === 0 || k === 0) return [];
  const result: number[] = [];

  for (let left = 0; left + k <= nums.length; left++) {
    let maximum = -Infinity;
    for (let i = left; i < left + k; i++) {
      maximum = Math.max(maximum, nums[i]);
    }
    result.push(maximum);
  }
  return result;
}

export function maxSlidingWindow(nums: number[], k: number): number[] {
  if (nums.length === 0 || k === 0) return [];
  const result: number[] = [];
  const deque: number[] = [];
  let head = 0;

  for (let right = 0; right < nums.length; right++) {
    while (head < deque.length && deque[head] <= right - k) head++;
    while (
      deque.length > head &&
      nums[deque[deque.length - 1]] <= nums[right]
    ) {
      deque.pop();
    }
    deque.push(right);

    if (right >= k - 1) result.push(nums[deque[head]]);
  }
  return result;
}
