---
title: C语言训练营Chaptrt03 选择与循环
date: 2022-01-28
author: MoMeaks
sidebar: 'auto'
categories:
- 408
---

### 3.1 if 与 if-else

```cpp
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
	int i;
    // 文件结束符（end of file）
	while (scanf("%d", &i) != EOF)
	{
		if (i > 0)//在if的括号后面不可以加;，会造成表达式无论是真还是假，都会执行后面的语句
		{ 
			printf("i is bigger than 0\n");
		}
		else {//上面的条件为假时，走else
			printf("i is not bigger than 0\n");
		}
	}
}
```



### 3.2 while

```cpp
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

//从1加到100
int main()
{
	int i = 1;
	int total = 0;//存储最终的和
	while (i <= 100)//while后面不能够加分号，否则会死循环
	{
		total = total + i;
		i++;
	}
	printf("total=%d\n", total);
}
```



### 3.3 for 循环

```cpp
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

//从1加到100
int main()
{
	int i, total;
	//for语句中只能有两个分号
	for (i = 1, total = 0; i <= 100; i++)//for循环后不能加分号
	{
		total = total + i;
	}
	printf("total=%d\n", total);
}
```



### 3.4 continue

```cpp
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

//从1加到100
int main()
{
	int i, total;
	//for语句中只能有两个分号
	for (i = 1, total = 0; i <= 100; i++)//for循环后不能加分号
	{
		total = total + i;
	}
	printf("total=%d\n", total);
}
```



### 3.5 Break

```cpp
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

//从1加到100,当和大于2000,就终止循环
int main()
{
	int i, total;
	//for语句中只能有两个分号
	for (i = 1, total = 0; i <= 100; i++)//for循环后不能加分号
	{
		if (total > 2000)
		{
			break;//当求和大于2000，就终止循环
		}
		total = total + i;
	}
	printf("total=%d,i=%d\n", total,i);
}
```



### 3.6 day6作业

回文数判定

12321

12321

1234

4321

把最初输入的整型数a，反过来后，再存到另外一个整型数b，判断a和b是否相等，如果相等就输出yes，不相等no

```cpp
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>


int main()
{
	int a,b,c,tmp;
	while (scanf("%d", &a) != EOF)
	{
		b = 0;
		c = a;
		while (a)
		{
			tmp = a % 10;
			b = b*10+tmp;
			a = a / 10;
		}
		if (c == b)
		{
			printf("yes\n");
		}
		else {
			printf("no\n");
		}
	}
	return 0;
}
```

