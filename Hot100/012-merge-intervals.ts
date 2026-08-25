/**
 * 12. 合并区间
 *
 * 暴力思路：反复比较任意两个区间，只要相交就合并，直到不存在相交区间。
 * 时间复杂度最坏 O(n^3)，空间复杂度 O(n)。
 *
 * 最优思路：按区间起点排序。排序后只需判断当前区间是否与结果中的最后一个区间相交。
 * 时间复杂度 O(n log n)，空间复杂度 O(n)（返回结果及排序副本）。
 */

export function mergeBruteForce(intervals: number[][]): number[][] {
  const result = intervals.map(([start, end]) => [start, end]);
  let foundOverlap = true;

  while (foundOverlap) {
    foundOverlap = false;

    outer: for (let i = 0; i < result.length; i++) {
      for (let j = i + 1; j < result.length; j++) {
        const [startA, endA] = result[i];
        const [startB, endB] = result[j];
        if (startA <= endB && startB <= endA) {
          result[i] = [Math.min(startA, startB), Math.max(endA, endB)];
          result.splice(j, 1);
          foundOverlap = true;
          break outer;
        }
      }
    }
  }
  return result;
}

export function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];
  const sorted = intervals
    .map(([start, end]) => [start, end])
    .sort((a, b) => a[0] - b[0]);
  const result: number[][] = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const last = result[result.length - 1];
    const current = sorted[i];
    if (current[0] <= last[1]) last[1] = Math.max(last[1], current[1]);
    else result.push(current);
  }
  return result;
}
