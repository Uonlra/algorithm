/**
 * 2. 字母异位词分组
 *
 * 暴力思路：逐个字符串与已有分组比较，比较时将字符串排序后判断是否相同。
 * 最优思路：统计每个字符串中 26 个小写字母的次数，把次数序列作为哈希键。
 */

export function groupAnagramsBruteForce(strs: string[]): string[][] {
  const groups: { key: string; words: string[] }[] = [];

  for (const word of strs) {
    const key = word.split('').sort().join('');
    const group = groups.find((item) => item.key === key);
    if (group) group.words.push(word);
    else groups.push({ key, words: [word] });
  }
  return groups.map((group) => group.words);
}

export function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const word of strs) {
    const counts = new Array<number>(26).fill(0);
    for (const char of word) counts[char.charCodeAt(0) - 97]++;
    const key = counts.join('#');
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(word);
  }
  return [...groups.values()];
}
