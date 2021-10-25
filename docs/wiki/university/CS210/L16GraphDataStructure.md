## L16 Graph Data Structure

Graph is a pair of sets **(V, E)**, where **V** is the set of **vertices顶点** and **E** is the set of **edges边**, 

In this graph,V = {a, b, c, d, e},E = {ab, ac, bd, cd, de}

<img src="images/image-20210705212428408.png" alt="image-20210705212428408" style="zoom:50%;" />

**Adjacency 邻接**

- Two node or vertices are adjacent if they are connected to each other through an edge. 

**Path 路径**

- Path represents a sequence of edges between the two vertices

**Adjacency Matrix 邻接矩阵**

对于增删一条边都是O(1), 占据的空间为O(V2)

<img src="images/image-20210705212726674.png" alt="image-20210705212726674" style="zoom: 50%;" />

**Adjacency List 邻接表**

<img src="images/image-20210705213035142.png" alt="image-20210705213035142" style="zoom:50%;" />

### DFS Depth First Search

运用**stack 栈**记录被访问顶点所邻接的未访问顶点vertex

时间复杂度为O(V+E) ,空间复杂度O(V)

<img src="images/image-20210705214114761.png" alt="image-20210705214114761" style="zoom:33%;" /><img src="images/image-20210705214125161.png" alt="image-20210705214125161" style="zoom:33%;" />

<img src="images/image-20210705214136747.png" alt="image-20210705214136747" style="zoom:33%;" /><img src="images/image-20210705214143309.png" alt="image-20210705214143309" style="zoom: 44%;" />

<img src="images/image-20210705214201132.png" alt="image-20210705214201132" style="zoom:44%;" /><img src="images/image-20210705214211822.png" alt="image-20210705214211822" style="zoom: 33%;" />

#### Code

```java
import java.util.*; 

class Graph { 
	private LinkedList<Integer> adjLists[]; 	
	private boolean visited[]; 

	// Graph creation 
	Graph(int vertices) { 
		adjLists = new LinkedList[vertices]; 
		visited = new boolean[vertices]; 
		for (int i = 0; i < vertices; i++) 
			adjLists[i] = new LinkedList<Integer>(); 
	} 
	// Add edges 
	void addEdge(int src, int dest) { 
		adjLists[src].add(dest); 
	} 
	// DFS algorithm !!!!
	void DFS(int vertex) { 
		visited[vertex] = true; 
		System.out.print(vertex + " "); 
		Iterator<Integer> ite = adjLists[vertex].listIterator(); 
		while (ite.hasNext()) { 
			int adj = ite.next(); 
			if (!visited[adj]) 
				DFS(adj); 
		} 
	}
	public static void main(String args[]) { 
		Graph g = new Graph(4); 
		g.addEdge(0, 1); 
		g.addEdge(0, 2); 
		g.addEdge(1, 2); 
		g.addEdge(2, 3); 
		System.out.println("Following is Depth First Traversal"); 		g.DFS(2); 
	} 
}

```

### BFS Breadth First Search

利用**queue 队列**先进先出原则记录被访问点

时间复杂度为O(V+E) ,空间复杂度O(V)

<img src="images/image-20210705214536257.png" alt="image-20210705214536257" style="zoom:33%;" /><img src="images/image-20210705214543070.png" alt="image-20210705214543070" style="zoom:33%;" />

<img src="images/image-20210705214551481.png" alt="image-20210705214551481" style="zoom:33%;" /><img src="images/image-20210705214601209.png" alt="image-20210705214601209" style="zoom:50%;" />

<img src="images/image-20210705214608031.png" alt="image-20210705214608031" style="zoom:50%;" /><img src="images/image-20210705214614428.png" alt="image-20210705214614428" style="zoom:33%;" />

#### Code

```java
import java.util.*; 

public class Graph { 
	private int V; 
	private LinkedList<Integer> adj[]; 

	// Create a graph Graph(int v) { 
		V = v; 
		adj = new LinkedList[v]; 
		for (int i = 0; i < v; ++i) adj[i] = new LinkedList(); 
	} 
	// Add edges to the graph 
	void addEdge(int v, int w) { 
		adj[v].add(w); 
	} 
	// BFS algorithm !!!!!
	void BFS(int s) { 
		boolean visited[] = new boolean[V]; 
		LinkedList<Integer> queue = new LinkedList(); 
		visited[s] = true; 
		queue.add(s); 
		while (queue.size() != 0) { 
			s = queue.poll(); 
			System.out.print(s + " "); 
			Iterator<Integer> i = adj[s].listIterator(); 
			while (i.hasNext()) { 
				int n = i.next(); 
				if (!visited[n]) { 
					visited[n] = true; 
					queue.add(n); 
				} 
			} 
		} 
	} 
	public static void main(String args[]) { 
		Graph g = new Graph(4); 
		g.addEdge(0, 1); 
		g.addEdge(0, 2);
		g.addEdge(1, 2); 
		g.addEdge(2, 0); 
		g.addEdge(2, 3); 
		g.addEdge(3, 3); 
		System.out.println("Following is Breadth First Traversal " + 
                           "(starting from vertex 2)"); 
		g.BFS(2); 
	} 
}


```

### Topological 拓扑排序 

**Total time: O(|V|+|E|)** DFS:O(|V|+|E|), 不需要排序

在图论中，**拓扑排序（Topological Sorting**）是一个有向无环图（DAG, Directed Acyclic Graph）的所有顶点的线性序列。且该序列必须满足下面两个条件：

1. 每个顶点出现且只出现一次。
2. 若存在一条从顶点 A 到顶点 B 的路径，那么在序列中顶点 A 出现在顶点 B 的前面。

有向无环图（DAG）才有拓扑排序，非DAG图没有拓扑排序一说。

它是一个 DAG 图，那么如何写出它的拓扑排序呢？这里说一种比较常用的方法：

1. 从 DAG 图中选择一个 没有前驱（即**入度 in-degree**为0）的顶点并输出。
2. 从图中删除该顶点和所有以它为起点的有向边。
3. 重复 1 和 2 直到当前的 DAG 图为空或当前图中不存在无前驱的顶点为止。后一种情况说明有向图中必然存在环。

<img src="https:////upload-images.jianshu.io/upload_images/8468731-da38fa971e5d52b5.png?imageMogr2/auto-orient/strip|imageView2/2/w/544/format/webp" alt="img" style="zoom: 67%;" />

于是，得到拓扑排序后的结果是 { 1, 2, 4, 3, 5 }。

通常，一个有向无环图可以有一个或多个拓扑排序序列。

e.Number of different topological orderings possible = 6. <img src="images/image-20210705220121750.png" alt="image-20210705220121750" style="zoom:50%;" />
Thus, Correct answer is 6. 注意F必须最后输出，其入度为2

A -B- C-D-E-F

​		 D-C-E-F

​		D-E-C-F

A-D- B-C-E-F

​		 B-D-E-F

   	  E-B-C-F

#### 利用栈stack操作

<img src="images/image-20210706144400245.png" alt="image-20210706144400245" style="zoom:50%;" />

<img src="images/image-20210706144407781.png" alt="image-20210706144407781" style="zoom:50%;" />

<img src="images/image-20210706144418060.png" alt="image-20210706144418060" style="zoom:50%;" />

<img src="images/image-20210706144508261.png" alt="image-20210706144508261" style="zoom:50%;" />

**Output: 5, 4, 2, 3, 1, 0**

#### code

```java
// A Java program to print topological
// sorting of a DAG
import java.io.*;
import java.util.*;
 
// This class represents a directed graph using adjacency list representation
class Graph {
    private int V; // No. of vertices
 
    // Adjacency List as ArrayList of ArrayList's
    private ArrayList<ArrayList<Integer> > adj;
 
    // Constructor
    Graph(int v)
    {
        V = v;
        adj = new ArrayList<ArrayList<Integer> >(v);
        for (int i = 0; i < v; ++i)
            adj.add(new ArrayList<Integer>());
    }
 
    // Function to add an edge into the graph
    void addEdge(int v, int w) { adj.get(v).add(w); }
	// A recursive function used by topologicalSort
    void topologicalSortUtil(int v, boolean visited[],
                             Stack<Integer> stack)
    {
        // Mark the current node as visited.
        visited[v] = true;
        Integer i;
 
        // Recur for all the vertices adjacent to this vertex
        Iterator<Integer> it = adj.get(v).iterator();
        while (it.hasNext()) {
            i = it.next();
            if (!visited[i])
                topologicalSortUtil(i, visited, stack);
        }
 
        // Push current vertex to stack which stores result
        stack.push(new Integer(v));
    }
	// The function to do Topological Sort.
    // It uses recursive topologicalSortUtil()
    void topologicalSort()
    {
        Stack<Integer> stack = new Stack<Integer>();
 
        // Mark all the vertices as not visited
        boolean visited[] = new boolean[V];
        for (int i = 0; i < V; i++)
            visited[i] = false;
 
        // Call the recursive helper function to store
        // Topological Sort starting from all vertices one by one
        for (int i = 0; i < V; i++)
            if (visited[i] == false)
                topologicalSortUtil(i, visited, stack);
 
        // Print contents of stack
        while (stack.empty() == false)
            System.out.print(stack.pop() + " ");
    }
	// Driver code
    public static void main(String args[])
    {
        // Create a graph given in the above diagram
        Graph g = new Graph(6);
        g.addEdge(5, 2);
        g.addEdge(5, 0);
        g.addEdge(4, 0);
        g.addEdge(4, 1);
        g.addEdge(2, 3);
        g.addEdge(3, 1);
 
        System.out.println("Following is a Topological "
                           + "sort of the given graph");
        // Function Call
        g.topologicalSort();
    }
}
```

