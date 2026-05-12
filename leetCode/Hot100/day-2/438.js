//朴素解
var findAnagramsBrute = function(s, p) {
  const result = [];

  if (p.length > s.length) {
    return result;
  }

  const sortedP = p.split('').sort().join('');
  const windowLen = p.length;

  for (let i = 0; i <= s.length - windowLen; i++) {
    const sub = s.slice(i, i + windowLen);
    const sortedSub = sub.split('').sort().join('');

    if (sortedSub === sortedP) {
      result.push(i);
    }
  }

  return result;
};
// 较优解
var findAnagrams = function(s, p) {
  const result = [];

  if (p.length > s.length) {
    return result;
  }

  const pCount = new Array(26).fill(0);
  const windowCount = new Array(26).fill(0);
  const base = 'a'.charCodeAt(0);
  const windowLen = p.length;

  function isSameCount(a, b) {
    for (let i = 0; i < 26; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < windowLen; i++) {
    pCount[p.charCodeAt(i) - base]++;
    windowCount[s.charCodeAt(i) - base]++;
  }

  if (isSameCount(pCount, windowCount)) {
    result.push(0);
  }

  for (let right = windowLen; right < s.length; right++) {
    const inIndex = s.charCodeAt(right) - base;
    const outIndex = s.charCodeAt(right - windowLen) - base;

    windowCount[inIndex]++;
    windowCount[outIndex]--;

    const start = right - windowLen + 1;

    if (isSameCount(pCount, windowCount)) {
      result.push(start);
    }
  }

  return result;
};

