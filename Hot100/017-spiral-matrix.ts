/**
 * 17. 螺旋矩阵
 *
 * 直观思路：使用 visited 矩阵记录走过的位置，碰到边界或已访问位置时顺时针转向。
 * 时间复杂度 O(m * n)，空间复杂度 O(m * n)。
 *
 * 最优思路：维护上、下、左、右四条边界，每走完一条边就收缩对应边界。
 * 时间复杂度 O(m * n)，空间复杂度 O(1)（不计返回数组）。
 */

export function spiralOrderBruteForce(matrix: number[][]): number[] {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const visited = Array.from({ length: rows }, () =>
    new Array<boolean>(columns).fill(false),
  );
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const result: number[] = [];
  let row = 0;
  let column = 0;
  let direction = 0;

  for (let i = 0; i < rows * columns; i++) {
    result.push(matrix[row][column]);
    visited[row][column] = true;
    const nextRow = row + directions[direction][0];
    const nextColumn = column + directions[direction][1];

    if (
      nextRow < 0 ||
      nextRow >= rows ||
      nextColumn < 0 ||
      nextColumn >= columns ||
      visited[nextRow][nextColumn]
    ) {
      direction = (direction + 1) % 4;
    }
    row += directions[direction][0];
    column += directions[direction][1];
  }
  return result;
}

export function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let column = left; column <= right; column++) result.push(matrix[top][column]);
    top++;

    for (let row = top; row <= bottom; row++) result.push(matrix[row][right]);
    right--;

    if (top <= bottom) {
      for (let column = right; column >= left; column--) result.push(matrix[bottom][column]);
      bottom--;
    }

    if (left <= right) {
      for (let row = bottom; row >= top; row--) result.push(matrix[row][left]);
      left++;
    }
  }
  return result;
}
