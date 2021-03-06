/**
给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

返回 s 所有可能的分割方案。

示例:

输入: "aab"
输出:
[
  ["aa","b"],
  ["a","a","b"]
]
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s, dp = Array.from(s, _ => Array(s.length).fill(false)), res = []) {
    for(var i = s.length; i--;)
        for (var j = i; j < s.length; j++)
            dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
    var dfs = (r, start) => {
        start === s.length && res.push(r)
        for(var j = start; j < s.length; j++)
            dp[start][j] && dfs(r.concat([s.substring(start, j + 1)]), j + 1)
    }
    return dfs([], 0), res
};
