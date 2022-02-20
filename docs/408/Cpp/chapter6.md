---
title: C语言训练营Chaptrt06 函数
date: 2022-01-28
author: MoMeaks
sidebar: 'auto'
categories:
- 408
---

### 6.1 函数嵌套调用

一个工程当中多个文件中函数的使用

```cpp
#include "func.h"

int main()
{
	int a = 10;
	a = printstar(a);//printstar(a)函数调用，a是一个实参
	print_message();//调用print_message
	printstar(a);
	return 0;

}
```

func.h 头文件

```cpp
#include <stdio.h> //头文件中放的是函数声明

int printstar(int i);//函数声明
void print_message();//函数声明
```

func.c

```cpp
#include "func.h"

//printstar函数定义，就是函数实现
int printstar(int i)  //i即为形式参数，也叫形参
{
	printf("**********************\n");
	printf("printstar %d\n", i);
	return i + 3;
}
//print_message函数定义
void print_message()  //可以调用printstar
{
	printf("how do you do\n");
	printstar(3);
}
```



### 6.2 全局变量

```cpp
#include <stdio.h>

int i = 10;  //全局变量,在函数外定义的变量叫全局变量
void print(int a)//自定义的print函数
{
	printf("print i=%d\n", i);
}
int main()
{
	printf("main i=%d\n", i);
	int i = 5;//当这里加了int后，就是在main定义了一个名为i的局部变量
	printf("main i=%d\n", i);
	print(i);
	return 0;
}
```



### 6.3 递归

```cpp
#include <stdio.h>
//函数自己调用自己就是递归,初试考的概率极低的，机试有用到
int f(int n)
{
	if (1 == n)
	{
		return 1;//一定写结束条件
	}
	return n * f(n - 1);//第一步是写好公式
}

int main()
{
	int n = 5;
	int result = f(n);
	printf("result=%d\n", result);
}
```

