### 8.2 插入排序

1. 直接插入排序
2. 折半插入排序
3. 希尔排序

```cpp
//插入排序，从小到大排序，升序 有哨兵的
void InsertSort(ElemType A[],int n)
{
	int i,j;
	//24 66 94  2 15 74 28 51 22 18  2
	for(i=2;i<=n;i++)//第零个元素是哨兵，从第二个元素开始拿，往前面插入
	{
		if(A[i]<A[i-1])
		{
			A[0]=A[i];//放到暂存位置，A[0]即是暂存，也是哨兵
			for(j=i-1;A[0]<A[j];--j)//移动元素，内层循环控制有序序列中的每一个元素和要插入的元素比较
				A[j+1]=A[j];
			A[j+1]=A[0];//把暂存元素插入到对应位置
		}
	}
}
```



### 8.3 交换排序（冒泡排序）

```cpp
void BubbleSort(ElemType A[],int n)
{
	int i,j;
	bool flag;
	for(i=0;i<n-1;i++)//i最多访问到8
	{
		flag=false;
		for(j=n-1;j>i;j--)//把最小值就放在最前面
		{
			if(A[j-1]>A[j])
			{
				swap(A[j-1],A[j]);
				flag=true;
			}
		}
		if(false==flag)
			return;
	}
}

void swap(ElemType &a,ElemType &b)
{
	ElemType tmp;
	tmp=a;
	a=b;
	b=tmp;
}
```



### 8.4 选择排序

```cpp
void SelectSort(ElemType A[],int n)
{
	int i,j,min;//min记录最小的元素的下标
	for(i=0;i<n-1;i++)//最多可以为8
	{
		min=i;
		for(j=i+1;j<n;j++)//j最多可以为9
		{
			if(A[j]<A[min])
				min=j;
		}
		if(min!=i)
		{
			swap(A[i],A[min]);
		}
	}
}

void swap(ElemType &a,ElemType &b)
{
	ElemType tmp;
	tmp=a;
	a=b;
	b=tmp;
}
```



### 8.5 归并排序

```cpp
typedef int ElemType;
//49,38,65,97,76,13,27
void Merge(ElemType A[],int low,int mid,int high)
{
	ElemType B[N];//为了降低操作次数
	int i,j,k;
	for(k=low;k<=high;k++)//复制元素到B中
		B[k]=A[k];
	for(i=low,j=mid+1,k=i;i<=mid&&j<=high;k++)//合并两个有序数组
	{
		if(B[i]<=B[j])
			A[k]=B[i++];
		else
			A[k]=B[j++];
	}
	while(i<=mid)//如果有剩余元素，接着放入即可
		A[k++]=B[i++];
	while(j<=high)
		A[k++]=B[j++];
}
//归并排序不限制是两两归并，还是多个归并
// 1 3 5 7 9
// 2 4
// 1 2 3 4 5 7 9  主要的代码逻辑
void MergeSort(ElemType A[],int low,int high)//递归分割
{
	if(low<high)
	{
		int mid=(low+high)/2;
		MergeSort(A,low,mid);
		MergeSort(A,mid+1,high);
		Merge(A,low,mid,high);
	}
}

int main()
{
	int A[7]={49,38,65,97,76,13,27};//数组，7个元素
	MergeSort(A,0,6);
	print(A);
	system("pause");
}
```

