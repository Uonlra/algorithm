/**
 * 19. 搜索二维矩阵 II
 *
 * 暴力思路：遍历矩阵中的每个元素，判断是否等于 target。
 * 时间复杂度 O(m * n)，空间复杂度 O(1)。
 *
 * 最优思路：从右上角开始。当前值过大就左移，过小就下移，每次排除一行或一列。
 * 时间复杂度 O(m + n)，空间复杂度 O(1)。
 */

export function searchMatrixBruteForce(matrix: number[][], target: number): boolean {
  for (const row of matrix) {
    for (const value of row) {
      if (value === target) return true;
    }
  }
  return false;
}

export function searchMatrix(matrix: number[][], target: number): boolean {
  let row = 0;
  let column = matrix[0].length - 1;

  while (row < matrix.length && column >= 0) {
    const value = matrix[row][column];
    if (value === target) return true;
    if (value > target) column--;
    else row++;
  }
  return false;
}
