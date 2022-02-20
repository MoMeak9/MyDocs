---
title: C/C++基础纪要
date: 2022-01-30
author: MoMeaks
sidebar: 'auto'
---

### 关于取值与取地址运算符（&和*）
C++ 提供了两种指针运算符，一种是取地址运算符 &，一种是间接寻址运算符 *。

指针是一个包含了另一个变量地址的变量，您可以把一个包含了另一个变量地址的变量说成是"指向"另一个变量。变量可以是任意的数据类型，包括对象、结构或者指针。

取地址运算符 &
& 是一元运算符，返回操作数的内存地址。例如，如果 var 是一个整型变量，则 &var 是它的地址。该运算符与其他一元运算符具有相同的优先级，在运算时它是从右向左顺序进行的。

您可以把 & 运算符读作"取地址运算符"，这意味着，&var 读作"var 的地址"。

间接寻址运算符 *
第二个运算符是间接寻址运算符 *，它是 & 运算符的补充。* 是一元运算符，返回操作数所指定地址的变量的值。

请看下面的实例，理解这两种运算符的用法。

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

