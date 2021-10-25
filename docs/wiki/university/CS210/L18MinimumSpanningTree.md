## L18 Minimum Spanning Tree MST

**！各类算法的时间复杂度及其推导**

最小生成树有(V - 1)条边，其中V是给定图中的顶点数。

### Kruskal’s algorithm

**STEP:**

1. 对所有边按其权值的非递减顺序排序。<img src="images/image-20210706153401937.png" alt="image-20210706153401937" style="zoom:33%;" />

2. 选择最小的边。检查到目前为止生成树是否形成了一个循环。如果没有形成循环，包括这条边。丢弃它。
3. 重复步骤#2，直到生成树中有(V-1)边。

#### Time Complexity 时间复杂度推导

**O(|E|log |E|) or O(|E| log|V|).**

1. 边的排序需要O(|E| log |E|)的时间。
2. 排序完成后，遍历所有边，应用查找并集算法。
3. 查找和并集操**Union-Find algorithm**作最多花费O(|E|log |V|)时间。
4. 所以总的复杂度是**O(|E|log|E| + |E|log|V|)**时间。
5. **（化简，log中2次方提前，消除）**|E|的取值最多为O(|V|2)，**所以O(log|V|)等于O(log|E|)**

**因此，总的时间复杂度是O(|E|log| E|)或O(|E|log|V|)**

#### **Union–find data structure** 并查集-联合查找

如果在构图时找出相同的父亲节点，则有循环cycle，不连接

<img src="images/image-20210706160657082.png" alt="image-20210706160657082" style="zoom:50%;" /><img src="images/image-20210706160723864.png" alt="image-20210706160723864" style="zoom:50%;" /><img src="images/image-20210706160738767.png" alt="image-20210706160738767" style="zoom:50%;" /><img src="images/image-20210706160831309.png" alt="image-20210706160831309" style="zoom:50%;" />

### Prim’s algorithm 普里姆算法

#### **matrix representation** 矩阵法

我们使用一个布尔数组mstSet[]来表示MST中包含的顶点集。{**0**, INF, INF, INF, INF, INF, INF, INF} ，0作为起始点。使用完将其记录

<img src="images/image-20210706155921830.png" alt="image-20210706155921830" style="zoom: 33%;" />

<img src="images/image-20210706160010211.png" alt="image-20210706160010211" style="zoom: 33%;" />

<img src="images/image-20210706160017052.png" alt="image-20210706160017052" style="zoom:33%;" />

<img src="images/image-20210706160305120.png" alt="image-20210706160305120" style="zoom: 33%;" />

**时间复杂度![O(|V|^{2})](https://wikimedia.org/api/rest_v1/media/math/render/svg/e1e99764e23be92b694aef042c6460ff921357e3)**

#### **adjacency list representation 邻接表**

Worst case time complexity of Prim’s Algorithm is
**O(|E| log |V|) using binary heap 二进制堆**

**推理：**

1. 如果用邻接表表示图，则使用广度优先搜索，可以在O(|V| + |E|)的时间内遍历所有顶点。•If adjacency list is used to represent the graph, then using breadth first search, all the vertices can be traversed in O(|V| + |E|) time.

2. 最小堆操作，如提取最小元素和减少键值需要O(log |V|)的时间。Min heap operations like extracting minimum element and decreasing key value takes O(log |V|) time.

3. So, overall time complexity is **O(|E| + |V|) x O(log |V|) = O((|E| + |V|) log |V|) = O(|E| log |V|)** 

**O(|E| + |V| log |V|) using Fibonacci heap 斐波那契堆（优化结果）**

