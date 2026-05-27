var isAnagram = function(s, t){
    if(s.length !== t.length) return false;

    const count = new Array(26).fill(0);
    const base = 'a'.charCodeAt(0); // 获取字符 'a' 的 ASCII 码
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - base]++; // 计算字符串 s 中每个字符的出现次数
        count[t.charCodeAt(i) - base]--; // 计算字符串 t 中每个字符的出现次数
    }
    for (const num of count) {
        if (num !== 0) return false;
    }
    return true;
}

// 暴力解
var isAnagramSort = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');

  return sortedS === sortedT;
};
