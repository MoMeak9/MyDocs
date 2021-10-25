## L20 NP 问题

- **P:** the class of problems which can be solved by a deterministic **polynomial algorithm.** 能用确定性多项式算法解决的一类问题。
- **NP :** the class of decision problem which can be solved by a **non-deterministic polynomial algorithm.** 一类可以用非确定性多项式算法求解的决策问题。
- **NP-hard:** the class of problems to which every NP problem reduces. 每一个NP问题都归结到的一类问题。
- **NP-complete (NPC):** the class of problems which are NP-hard and belong to NP. NP-hard的一类问题，且属于NP。

<img src="images/image-20210706173148252.png" alt="image-20210706173148252" style="zoom:50%;" />

### P = NP?

- Theorem. 
  - Suppose *Y* ∈ **NP**-complete. Then *Y* ∈ **P** if and only if **P = NP**. 

- Pf. ⇐ 
  - If **P = NP**, then *Y* ∈ **P** because *Y* ∈ **NP**.

- Pf. ⇒ 
  - Suppose *Y* ∈ **P**. 
  - Consider any problem *X* ∈ **NP**. 
  - Since *X* ≤*p* *Y*, we have *X* ∈ **P**. 
  - This implies **NP** ⊆ **P**.
  - We already know **P** ⊆ **NP**. Thus **P = NP**. 

### P, NP, and EXP 

**P.** Decision problems for which there is a poly-time algorithm.

**NP.** Decision problems for which there is a poly-time certifier.

**EXP.** Decision problems for which there is an exponential-time algorithm. 

- **Claim. NP ⊆ EXP.**

  Pf. 

  - Consider any problem *X* ∈ **NP**. 
  - By definition, there exists a poly-time certifier *C*(*s*, *t*) for *X*.
  - To solve input *s*, run *C*(*s*, *t*) on all strings *t* with |*t*| ≤ *p*(|*s*|).
  - Return *yes* if *C*(*s*, *t*) returns *yes* for any of these potential certificates. 
  - Remark. Time-hierarchy theorem implies **P** ⊊ **EXP**. 

- **Claim. P ⊆ NP. ！！**

  Pf. 

  - Consider any problem *X* ∈ **P**. 
  - By definition, there exists a poly-time algorithm *A*(*s*) that solves *X*.
  - Certificate *t* = ε, certifier *C*(*s*, *t*) = *A*(*s*). 

### 证明例题

#### Certifiers and certificates: 3-satisfiability 

- **3-SAT.** Given a CNF formula Φ, is there a satisfying assignment? 
  **Certificate.** An assignment of truth values to the n boolean variables. 
  **Certifier.** Check that each clause in Φ has at least one true literal. 
  **Example.**
  **instances** Φ =(x1∨x2∨x3) ∧ (x1∨x2∨x3) ∧ (x1∨x2∨x4) 
  **certificate** t x1 = true, x2 = true, x3 = false, x4 = false 

**Conclusion. 3-SAT ∈ NP.** 

#### Certifiers and certificates: Hamilton path 

- **HAM-PATH**. Given an undirected graph G = (V, E), does there exist a simple path P that visits every node? 
  **Certificate**. A permutation of the n nodes.
  **Certifier**. Check that the permutation contains each node in V exactly once, and that there is an edge between each pair of adjacent nodes. 

<img src="images/image-20210706174804411.png" alt="image-20210706174804411" style="zoom:50%;" />

**Conclusion. HAM-PATH ∈ NP.** 

