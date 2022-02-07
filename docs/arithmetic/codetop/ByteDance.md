## [打乱排序](https://leetcode-cn.com/problems/shuffle-an-array/) 





## [组合](https://leetcode-cn.com/problems/combinations/)

给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。

```js
示例 1：

输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```



```js
var combine = function(n, k) {
    const ans = [];
    const dfs = (cur, n, k, temp) => {
        // 剪枝：temp 长度加上区间 [cur, n] 的长度小于 k，不可能构造出长度为 k 的 temp
        if (temp.length + (n - cur + 1) < k) {
            return;
        }
        // 记录合法的答案
        if (temp.length == k) {
            ans.push(temp);
            return;
        }
        // 考虑选择当前位置
        dfs(cur + 1, n, k, [...temp, cur]);
        // 考虑不选择当前位置
        dfs(cur + 1, n, k, temp);
    }
    dfs(1, n, k, []);
    return ans;
};
```



### [二叉树遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

```js
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    //二叉树的层序遍历
    let res=[],//结果数组,为数值
        queue=[];//当前层节点,为节点
    queue.push(root);
    if(root===null){
        return res;
    }
    while(queue.length!==0){
        // 记录当前层级节点数(来自上一层提供orRoot)
        let length=queue.length;
        //存放每一层的节点 
        let curLevel=[];
        for(let i=0;i<length;i++){
            let node=queue.shift();
            curLevel.push(node.val);
            // 存放当前层下一层的节点
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
        }
        //把每一层的结果放到结果数组
        res.push(curLevel);
    }
    return res;
};
```



## [从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)



## [买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

**每一处卖出点的最佳时机都可以做一次判定**
是与前一处卖出点相同还是有了更高卖点或更低买点
判断此点是否比买点更低或比卖点更高，更新买卖点，得到的最大差值即位最大收益

```js
var maxProfit = function(prices) {
    let min = prices[0]
    let max = 0
    for (let price of prices) {
            max = Math.max(max, price - min) // 当前最大差值
            min = Math.min(price, min) // 当前可能的最低买入
        }
        return max
};
```



## [有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)



## [连续数组](https://leetcode-cn.com/problems/contiguous-array/)



```js
var findMaxLength = function(nums) {
    let maxLength = 0;
    const map = new Map();
    let counter = 0;
    map.set(counter, -1);
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (num == 1) {
            counter++;
        } else {
            counter--;
        }
        if (map.has(counter)) {
            const prevIndex = map.get(counter);
            maxLength = Math.max(maxLength, i - prevIndex);
        } else {
            map.set(counter, i);
        }
    }
    return maxLength;
};
```



## [长度最小的子数组](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)

