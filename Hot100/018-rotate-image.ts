/**
 * 18. 旋转图像
 *
 * 直观思路：创建新矩阵，将原位置 [row][column] 放到 [column][n - 1 - row]，
 * 再把结果复制回原矩阵。
 * 时间复杂度 O(n^2)，空间复杂度 O(n^2)。
 *
 * 最优思路：先沿主对角线转置矩阵，再反转每一行，即可原地顺时针旋转 90 度。
 * 时间复杂度 O(n^2)，空间复杂度 O(1)。
 */

export function rotateImageBruteForce(matrix: number[][]): void {
  const size = matrix.length;
  const rotated = Array.from({ length: size }, () => new Array<number>(size));

  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
      rotated[column][size - 1 - row] = matrix[row][column];
    }
  }

  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
      matrix[row][column] = rotated[row][column];
    }
  }
}

export function rotateImage(matrix: number[][]): void {
  const size = matrix.length;

  for (let row = 0; row < size; row++) {
    for (let column = row + 1; column < size; column++) {
      [matrix[row][column], matrix[column][row]] = [
        matrix[column][row],
        matrix[row][column],
      ];
    }
  }

  for (const row of matrix) row.reverse();
}
