/***
 * leetcode-3
 * 不重复字串，连续的
 * 使用滑动窗口算法
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let right = -1, ans = 0;
    for (let i = 0; i < s.length; ++i) {
        if (i !== 0) {
            set.delete(s.charAt(i - 1));
        }
        while (right + 1 < s.length && !set.has(s.charAt(right + 1))) {
            set.add(s.charAt(right + 1));
            ++right;
        }
        ans = Math.max(ans, right - i + 1);
    }
    return ans;
};

let s = "pwwkew"
console.log(lengthOfLongestSubstring(s))
