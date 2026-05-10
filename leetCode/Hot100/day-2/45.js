/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 哈希表解
var groupAnagrams = function(strs) {
    const map = new Map();

    for (const str of strs) {
        const key = str.split('').sort().join('');

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(str);
    }

    return Array.from(map.values());
};

//  暴力解
var groupAnagramsBruteForce = function(strs) {
    const res = [];
    const visited = new Array(strs.length).fill(false);

    function isAnagram(s1, s2) {
        if (s1.length !== s2.length) return false;

        const count = new Array(26).fill(0);

        for (const ch of s1) {
            count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for (const ch of s2) {
            count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }

        for (const num of count) {
            if (num !== 0) return false;
        }

        return true;
    }

    for (let i = 0; i < strs.length; i++) {
        if (visited[i]) continue;

        const group = [strs[i]];
        visited[i] = true;

        for (let j = i + 1; j < strs.length; j++) {
            if (!visited[j] && isAnagram(strs[i], strs[j])) {
                group.push(strs[j]);
                visited[j] = true;
            }
        }

        res.push(group);
    }

    return res;
};
