/**
 * 16. 矩阵置零
 *
 * 直观思路：复制原矩阵，根据副本中的零修改原矩阵，避免新写入的零继续扩散。
 * 时间复杂度 O(m * n)，空间复杂度 O(m * n)。
 *
 * 最优思路：把第一行和第一列作为标记数组，并额外记录第一行、第一列原本是否含零。
 * 时间复杂度 O(m * n)，空间复杂度 O(1)。
 */

export function setZeroesBruteForce(matrix: number[][]): void {
  const original = matrix.map((row) => [...row]);

  for (let row = 0; row < original.length; row++) {
    for (let column = 0; column < original[0].length; column++) {
      if (original[row][column] !== 0) continue;
      for (let i = 0; i < matrix.length; i++) matrix[i][column] = 0;
      for (let j = 0; j < matrix[0].length; j++) matrix[row][j] = 0;
    }
  }
}

export function setZeroes(matrix: number[][]): void {
  const firstRowHasZero = matrix[0].some((value) => value === 0);
  const firstColumnHasZero = matrix.some((row) => row[0] === 0);

  for (let row = 1; row < matrix.length; row++) {
    for (let column = 1; column < matrix[0].length; column++) {
      if (matrix[row][column] === 0) {
        matrix[row][0] = 0;
        matrix[0][column] = 0;
      }
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let column = 1; column < matrix[0].length; column++) {
      if (matrix[row][0] === 0 || matrix[0][column] === 0) {
        matrix[row][column] = 0;
      }
    }
  }

  if (firstRowHasZero) matrix[0].fill(0);
  if (firstColumnHasZero) {
    for (const row of matrix) row[0] = 0;
  }
}
