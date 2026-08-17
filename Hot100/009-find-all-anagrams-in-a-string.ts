/**
 * 9. 找到字符串中所有字母异位词
 *
 * 暴力思路：枚举每个长度为 p.length 的窗口，统计窗口字符并与 p 比较。
 * 最优思路：维护固定长度的滑动窗口，增删字符时更新计数；当有效字符数等于窗口长度即为答案。
 */

export function findAnagramsBruteForce(s: string, p: string): number[] {
  const result: number[] = [];
  const target = new Array<number>(26).fill(0);
  for (const char of p) target[char.charCodeAt(0) - 97]++;

  for (let start = 0; start + p.length <= s.length; start++) {
    const window = new Array<number>(26).fill(0);
    for (let i = start; i < start + p.length; i++) window[s.charCodeAt(i) - 97]++;
    if (window.every((count, i) => count === target[i])) result.push(start);
  }
  return result;
}

export function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];
  if (p.length > s.length) return result;
  const need = new Array<number>(26).fill(0);
  const window = new Array<number>(26).fill(0);
  for (const char of p) need[char.charCodeAt(0) - 97]++;
  let valid = 0;

  for (let right = 0; right < s.length; right++) {
    const added = s.charCodeAt(right) - 97;
    window[added]++;
    if (window[added] <= need[added]) valid++;

    if (right >= p.length) {
      const removed = s.charCodeAt(right - p.length) - 97;
      if (window[removed] <= need[removed]) valid--;
      window[removed]--;
    }
    if (valid === p.length) result.push(right - p.length + 1);
  }
  return result;
}
