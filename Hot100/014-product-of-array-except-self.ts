/**
 * 14. 除自身以外数组的乘积
 *
 * 暴力思路：对每个位置遍历整个数组，乘上除当前位置之外的所有元素。
 * 时间复杂度 O(n^2)，空间复杂度 O(1)（不计返回数组）。
 *
 * 最优思路：先将每个位置左侧的乘积写入答案，再从右向左乘上右侧乘积。
 * 时间复杂度 O(n)，空间复杂度 O(1)（不计返回数组）。
 */

export function productExceptSelfBruteForce(nums: number[]): number[] {
  const result = new Array<number>(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) result[i] *= nums[j];
    }
  }
  return result;
}

export function productExceptSelf(nums: number[]): number[] {
  const result = new Array<number>(nums.length).fill(1);
  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return result;
}
