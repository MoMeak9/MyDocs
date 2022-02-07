## L17Greedy Alogorithm 贪心

### Greedy Algorithm

- A greedy algorithm is an approach for solving a problem by selecting the best option available at the moment, **without worrying about the future result it would bring.** 

- In other words, the **locally best choices** aim at producing globally best results.
- This algorithm may not be the best option for all the problems.  It may produce wrong results in some cases.

**Advantage：**

- The algorithm is easier to describe.
- This algorithm can perform better than other algorithms (but, not in all cases).

#### **Minimum rotations to unlock a circular lock**

```java
// Java program for min rotation to unlock
class GFG {
  
    // function for min rotation
    static int minRotation(int input, int unlock_code)
    {
        int rotation = 0;
        int input_digit, code_digit;
  
        // iterate till input and unlock code become 0
        while (input>0 || unlock_code>0) {
 
            // input and unlock last digit as reminder
            input_digit = input % 10;
            code_digit = unlock_code % 10;
  
            // find min rotation
            rotation += Math.min(Math.abs(input_digit
                       - code_digit), 10 - Math.abs(
                          input_digit - code_digit));
  
            // update code and input
            input /= 10;
            unlock_code /= 10;

        }
  
        return rotation;
    }
    // driver code
    public static void main (String[] args) {
    int input = 28756;
    int unlock_code = 98234;
    System.out.println("Minimum Rotation = "+
                  minRotation(input, unlock_code));
    }
}

```

### ！Minimum product subset of an array 数组最小乘积

**Examples:** 
Input_1: a[] = { -1, -1, -2, 4, 3 } 
Output_1: -24 
Explanation: ( -2 * -1 * -1 * 4 * 3 ) = -24 

**根据数组内容分为四种情况：**

1. 如果有偶数个负数，没有零，结果是除最大的负数外的所有数的乘积。

2. 如果有奇数个负数，没有零，结果就是所有的乘积。

3. 如果有零和正的，没有负的，结果是0。

4. 例外情况是，当没有负数，所有其他元素都是正的，那么我们的结果应该是第一个最小正数。

#### Code

```java
// Java program to find maximum product of a subset.
class GFG {

	static int minProductSubset(int a[], int n)
	{
		if (n == 1)
			return a[0];
	
		int negmax = Integer.MIN_VALUE;
		int posmin = Integer.MAX_VALUE;
		int count_neg = 0, count_zero = 0;
		int product = 1;
		for (int i = 0; i < n; i++)
		{
			// count the zero numbers 
			if(a[i] == 0) count_zero++;
			else {
				// count the negetive numbers
		       	if(a[i] < 0) {
					count_neg++;
					if(a[i] > negmax) negmax = a[i] ;
				}
				// find the minimum positive number
				if(a[i] > 0 && a[i] < posmin) posmin = a[i];
                
				product *= a[i];
			}
		}
		// if there are all zeroes
		// or zero is present but no
		// negetive number is present
		if (count_zero > 0)
			if(count_neg == 0)
				return 0;
			else {
				if (count_neg % 2 == 1)  //odd neg. 
					return product;
				else 
					retuen product / negmax;// 除以最大负数
			}
		else
			return posmin;
	}
	// main function
	public static void main(String[] args) {
		int a[] = { -1, -1, -2, 4, 3 };
		int n = 5;
		
		System.out.println(minProductSubset(a, n));
	}
}
```

**Time Complexity: O(V).**
**Auxiliary Space: O(1) as no additional space is used.**

### ！Find minimum number of coins

简单找零，硬币数最小，且各种硬币数数量无限

infinite supply of { 1, 2, 5, 10, 20, 50, 100, 500, 1000} 

Input_1: V = 70 
Output_1: 2 
We need a 50 Rs note and a 20 Rs note. 

#### Code

```java
// Java program to find minimum number of denominations
import java.util.Vector;

class GFG{

	// All denominations of Indian Currency
	static int deno[] = {1, 2, 5, 10, 20, 50, 100, 500, 1000};
	static int n = deno.length;
	static void findMin(int V) {
		Vector<Integer> ans = new Vector<>(); // Initialize result
		// Traverse through all denomination
		for (int i = n - 1; i >= 0; i--) {
			// Find denominations
			while (V >= deno[i]){
				V -= deno[i];
				ans.add(deno[i]);
			}
		}
		// Print result
		for (int i = 0; i < ans.size(); i++){
			System.out.print(" " + ans.elementAt(i));
		}
	}
	// Driver code
	public static void main(String[] args)
	{
		int n = 93;
		System.out.print("Following is minimal number "
			+"of change for " + n + ": ");
		findMin(n);
	}
}
//  Following is minimal number of change for 93: 50 20 20 2 1
```

**Time Complexity: O(V).**
**Auxiliary Space: O(1) as no additional space is used.**

