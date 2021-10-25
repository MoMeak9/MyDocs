## L19 Shortest Path Algorithms 最短路径

**Single-Source Shortest Path Problem:**
It is a shortest path problem where the shortest path from a given source vertex to all other remaining vertices is computed.
Dijkstra’s Algorithm and Bellman Ford Algorithm are the famous algorithms used for solving single-source shortest path problem.

**relaxation 松弛法：**这些方法会通过逐步接近的方式获得相关问题的最佳解法。每运用一次松弛法就好像我们“移动”了一次，而我们要做的就是在尽可能少的移动次数内找到最佳解决方案。

### Dijkstra’s Algorithm

<img src="images/image-20210706164217895.png" alt="image-20210706164217895" style="zoom:50%;" /><img src="images/image-20210706164222649.png" alt="image-20210706164222649" style="zoom:50%;" />

<img src="images/image-20210706164236501.png" alt="image-20210706164236501" style="zoom:50%;" /><img src="images/image-20210706164242032.png" alt="image-20210706164242032" style="zoom:50%;" />

<img src="images/image-20210706164248362.png" alt="image-20210706164248362" style="zoom:50%;" /><img src="images/image-20210706164252185.png" alt="image-20210706164252185" style="zoom:50%;" />

<img src="images/image-20210706164300727.png" alt="image-20210706164300727" style="zoom: 50%;" /><img src="images/image-20210706164311658.png" alt="image-20210706164311658" style="zoom:50%;" />

#### **时间空间复杂度：**

- **By simply stored (v) in the  vth array.** 
  Relax (Decrease-Key):**O(1)** 
  Pick vertex (Extract-Min):**O(V)** 
  **Running Time:** 
  The cost of |V| operation Extract-Min is O(|V|2) 
  At most O(|E|) Decrease-Key 
  Total Time: **O(|E| + |V|2) = O(|V|2)** 

- **By using binary Heap 二叉堆**
  Relax —— Decrease-Key: **O(log |V|)** 
  Pick vertex —— Extract-Min: **O (log |V|)** 
  **RunningTime:** 
  The cost of |V| operation Extract-Min is O(|V| log |V|) 
  At most O(|E|) Decrease-Key 
  Total Time: **O((|E| + |V|) log |V|) = O(|E| log |V|)** 

#### **路径非负！**

Shortest path algorithms like Dijkstra's Algorithm that aren't able to detect such a cycle can give an incorrect result because they can go through a negative weight cycle and reduce the path length.

<img src="images/image-20210706165556399.png" alt="image-20210706165556399" style="zoom:50%;" />

### Floyd-Warshall Algorithm 弗洛伊德算法

间复杂度: ***O*（n^3）**; 空间复杂度: ***O*（n^2）**

<img src="images/image-20210706172148628.png" alt="image-20210706172148628" style="zoom: 50%;" /><img src="images/image-20210706172218170.png" alt="image-20210706172218170" style="zoom:50%;" /><img src="images/image-20210706172252258.png" alt="image-20210706172252258" style="zoom:50%;" />



同样不适用有negative weight cycle的情况

Preparation – Node Pair Matrix NxN矩阵，逐步分析Indirect Paths **via 经过** Intermediate Node A/B/C/D.....

#### Code

```java
for (int m = 0; m < matrix.length; m++) {
	for (int i = 0; i < matrix.length; i++) {
		for (int j = 0; j < matrix.length; j++) {
			Math.min(matrix[i][j], matrix[i][m] + matrix[m][j]);
		}
	}
}
```







