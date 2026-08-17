/**
 * 3. 最长连续序列
 *
 * 暴力思路：从每个元素开始不断查找下一个数字，找到的长度取最大值。
 * 最优思路：把所有数字放入集合，只从没有前驱数的元素开始向后计数。
 */

export function longestConsecutiveBruteForce(nums: number[]): number {
  let answer = 0;
  for (const start of nums) {
    let current = start;
    let length = 1;
    while (nums.includes(current + 1)) {
      current++;
      length++;
    }
    answer = Math.max(answer, length);
  }
  return answer;
}

export function longestConsecutive(nums: number[]): number {
  const numbers = new Set(nums);
  let answer = 0;

  for (const number of numbers) {
    if (numbers.has(number - 1)) continue;
    let current = number;
    while (numbers.has(current + 1)) current++;
    answer = Math.max(answer, current - number + 1);
  }
  return answer;
}
