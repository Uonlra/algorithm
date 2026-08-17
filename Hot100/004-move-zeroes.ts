/**
 * 4. 移动零
 *
 * 暴力思路：反复把相邻的「0, 非 0」交换，让每个零逐步冒泡到数组末尾。
 * 最优思路：用 write 指针维护下一个非零元素的位置，最后统一补零。
 */

export function moveZeroesBruteForce(nums: number[]): void {
  for (let end = nums.length - 1; end > 0; end--) {
    for (let i = 0; i < end; i++) {
      if (nums[i] === 0 && nums[i + 1] !== 0) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  }
}

export function moveZeroes(nums: number[]): void {
  let write = 0;
  for (const number of nums) {
    if (number !== 0) nums[write++] = number;
  }
  while (write < nums.length) nums[write++] = 0;
}
