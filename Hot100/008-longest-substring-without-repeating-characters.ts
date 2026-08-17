/**
 * 8. 无重复字符的最长子串
 *
 * 暴力思路：枚举每个起点，向右扩展，遇到重复字符就停止。
 * 最优思路：滑动窗口维护无重复区间；字符重复时直接把左边界跳到上次出现位置之后。
 */

export function lengthOfLongestSubstringBruteForce(s: string): number {
  let answer = 0;
  for (let left = 0; left < s.length; left++) {
    const seen = new Set<string>();
    for (let right = left; right < s.length; right++) {
      if (seen.has(s[right])) break;
      seen.add(s[right]);
      answer = Math.max(answer, right - left + 1);
    }
  }
  return answer;
}

export function lengthOfLongestSubstring(s: string): number {
  const lastIndex = new Map<string, number>();
  let left = 0;
  let answer = 0;

  for (let right = 0; right < s.length; right++) {
    if (lastIndex.has(s[right])) left = Math.max(left, lastIndex.get(s[right])! + 1);
    lastIndex.set(s[right], right);
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}
