---
title: Behavioral Pattern 行为模式
date: 2021-12-3
author: MoMeaks
sidebar: 'auto'
categories:
- 大学课程
- wiki
tags:
- 设计模式
---
# 行为模式

## Visitor 访问者

**访问者模式**是一种行为设计模式， 它能将算法与其所作用的对象隔离开来。

<img src="https://refactoringguru.cn/images/patterns/diagrams/visitor/structure-zh-indexed.png" alt="访问者设计模式的结构" style="zoom:80%;" />

1. **访问者** （Visitor） 接口声明了一系列以对象结构的具体元素为参数的访问者方法。 如果编程语言支持重载， 这些方法的名称可以是相同的， 但是其参数一定是不同的。
2. **具体访问者** （Concrete Visitor） 会为不同的具体元素类实现相同行为的几个不同版本。
3. **元素** （Element） 接口声明了一个方法来 “接收” 访问者。 该方法必须有一个参数被声明为访问者接口类型。
4. **具体元素** （Concrete Element） 必须实现接收方法。 该方法的目的是根据当前元素类将其调用重定向到相应访问者的方法。 请注意， 即使元素基类实现了该方法， 所有子类都必须对其进行重写并调用访问者对象中的合适方法。
5. **客户端** （Client） 通常会作为集合或其他复杂对象 （例如一个[组合](https://refactoringguru.cn/design-patterns/composite)树） 的代表。 客户端通常不知晓所有的具体元素类， 因为它们会通过抽象接口与集合中的对象进行交互。

### 场景

- 如果你需要对一个复杂对象结构 （例如对象树） 中的所有元素执行某些操作， 可使用访问者模式。
- 可使用访问者模式来清理辅助行为的业务逻辑。
- 当某个行为仅在类层次结构中的一些类中有意义， 而在其他类中没有意义时， 可使用该模式。

### 优缺点

- ***开闭原则***。 你可以引入在不同类对象上执行的新行为， 且无需对这些类做出修改。
-  ***单一职责原则***。 可将同一行为的不同版本移到同一个类中。
- 访问者对象可以在与各种对象交互时收集一些有用的信息。 当你想要遍历一些复杂的对象结构 （例如对象树）， 并在结构中的每个对象上应用访问者时， 这些信息可能会有所帮助。

### 关系

- 你可以将[访问者模式](https://refactoringguru.cn/design-patterns/visitor)视为[命令模式](https://refactoringguru.cn/design-patterns/command)的加强版本， 其对象可对不同类的多种对象执行操作。
- 你可以使用[访问者](https://refactoringguru.cn/design-patterns/visitor)对整个[组合模式](https://refactoringguru.cn/design-patterns/composite)树执行操作。
- 可以同时使用[访问者](https://refactoringguru.cn/design-patterns/visitor)和[迭代器模式](https://refactoringguru.cn/design-patterns/iterator)来遍历复杂数据结构， 并对其中的元素执行所需操作， 即使这些元素所属的类完全不同。

## Command 命令模式

**观察者模式**是一种行为设计模式， 允许你定义一种订阅机制， 可在对象事件发生时通知多个 “观察” 该对象的其他对象。

The Observer pattern is a behavior design pattern that allows you to define a subscription mechanism that notifies multiple other objects that "observe" an object when an event occurs.

<img src="https://refactoringguru.cn/images/patterns/diagrams/observer/structure-indexed.png" alt="观察者设计模式的结构" style="zoom:80%;" />

1. **发布者** （Publisher） 会向其他对象发送值得关注的事件。 事件会在发布者自身状态改变或执行特定行为后发生。 发布者中包含一个允许新订阅者加入和当前订阅者离开列表的订阅构架。
2. 当新事件发生时， 发送者会遍历订阅列表并调用每个订阅者对象的通知方法。 该方法是在订阅者接口中声明的。
3. **订阅者** （Subscriber） 接口声明了通知接口。 在绝大多数情况下， 该接口仅包含一个 `update`更新方法。 该方法可以拥有多个参数， 使发布者能在更新时传递事件的详细信息。
4. **具体订阅者** （Concrete Subscribers） 可以执行一些操作来回应发布者的通知。 所有具体订阅者类都实现了同样的接口， 因此发布者不需要与具体类相耦合。
5. 订阅者通常需要一些上下文信息来正确地处理更新。 因此， 发布者通常会将一些上下文数据作为通知方法的参数进行传递。 发布者也可将自身作为参数进行传递， 使订阅者直接获取所需的数据。
6. **客户端** （Client） 会分别创建发布者和订阅者对象， 然后为订阅者注册发布者更新。

### 场景

- 当一个对象状态的改变需要改变其他对象， 或实际对象是事先未知的或动态变化的时， 可使用观察者模式。
- 当应用中的一些对象必须观察其他对象时， 可使用该模式。 但仅能在有限时间内或特定情况下使用。

### 优缺点

- ***开闭原则 The open closed principle***。 你无需修改发布者代码就能引入新的订阅者类 （如果是发布者接口则可轻松引入发布者类）。
-  你可以在运行时建立对象之间的联系。

D：

- 订阅者的通知顺序是随机的。

### 关系

What is the difference between the observer pattern and the chain of responsibility pattern in the notification delivery?

- **责任链 **按照顺序将请求动态传递给一系列的潜在接收者， 直至其中一名接收者对请求进行处理。
- **观察者 **允许接收者动态地订阅或取消接收请求。

## Iterator 迭代器

**迭代器模式**是一种行为设计模式， 让你能在不暴露集合底层表现形式 （列表、 栈和树等） 的情况下遍历集合中所有的元素。The iterator pattern is a behavioral design pattern that lets you iterate through all the elements of a collection without exposing the underlying representation of the collection (lists, stacks, trees, etc.).

<img src="https://refactoringguru.cn/images/patterns/diagrams/iterator/structure-indexed.png" alt="迭代器设计模式的结构" style="zoom:80%;" />

1. **迭代器** （Iterator） 接口声明了遍历集合所需的操作： 获取下一个元素、 获取当前位置和重新开始迭代等。

2. **具体迭代器** （Concrete Iterators） 实现遍历集合的一种特定算法。 迭代器对象必须跟踪自身遍历的进度。 这使得多个迭代器可以相互独立地遍历同一集合。

3. **集合** （Collection） 接口声明一个或多个方法来获取与集合兼容的迭代器。 请注意， 返回方法的类型必须被声明为迭代器接口， 因此具体集合可以返回各种不同种类的迭代器。

4. **具体集合** （Concrete Collections） 会在客户端请求迭代器时返回一个特定的具体迭代器类实体。 你可能会琢磨， 剩下的集合代码在什么地方呢？ 不用担心， 它也会在同一个类中。 只是这些细节对于实际模式来说并不重要， 所以我们将其省略了而已。

5. **客户端** （Client） 通过集合和迭代器的接口与两者进行交互。 这样一来客户端无需与具体类进行耦合， 允许同一客户端代码使用各种不同的集合和迭代器。

   客户端通常不会自行创建迭代器， 而是会从集合中获取。 但在特定情况下， 客户端可以直接创建一个迭代器 （例如当客户端需要自定义特殊迭代器时）。

### 场景

- 当集合背后为复杂的数据结构， 且你希望对客户端隐藏其复杂性时 （出于使用便利性或安全性的考虑）， 可以使用迭代器模式。
- 使用该模式可以减少程序中重复的遍历代码。
-  如果你希望代码能够遍历不同的甚至是无法预知的数据结构， 可以使用迭代器模式。

### 优缺点

- 单一职责原则 Single responsibility principle。 通过将体积庞大的遍历算法代码抽取为独立的类， 你可对客户端代码和集合进行整理。
- 开闭原则 The open closed principle。 你可实现新型的集合和迭代器并将其传递给现有代码， 无需修改现有代码。
-  你可以并行遍历同一集合， 因为每个迭代器对象都包含其自身的遍历状态。
-  相似的， 你可以暂停遍历并在需要时继续。

D:

- 如果你的程序只与简单的集合进行交互， 应用该模式可能会矫枉过正。
- 对于某些特殊集合， 使用迭代器可能比直接遍历的效率低。

## Mediator 中介者

**中介者模式**是一种行为设计模式， 能让你减少对象之间混乱无序的依赖关系。 该模式会限制对象之间的直接交互， 迫使它们通过一个中介者对象进行合作。

<img src="https://refactoringguru.cn/images/patterns/diagrams/mediator/structure-indexed.png" alt="中介者设计模式的结构" style="zoom:80%;" />

1. **组件** （Component） 是各种包含业务逻辑的类。 每个组件都有一个指向中介者的引用， 该引用被声明为中介者接口类型。 组件不知道中介者实际所属的类， 因此你可通过将其连接到不同的中介者以使其能在其他程序中复用。

2. **中介者** （Mediator） 接口声明了与组件交流的方法， 但通常仅包括一个通知方法。 组件可将任意上下文 （包括自己的对象） 作为该方法的参数， 只有这样接收组件和发送者类之间才不会耦合。

3. **具体中介者** （Concrete Mediator） 封装了多种组件间的关系。 具体中介者通常会保存所有组件的引用并对其进行管理， 甚至有时会对其生命周期进行管理。

4. 组件并不知道其他组件的情况。 如果组件内发生了重要事件， 它只能通知中介者。 中介者收到通知后能轻易地确定发送者， 这或许已足以判断接下来需要触发的组件了。

   对于组件来说， 中介者看上去完全就是一个黑箱。 发送者不知道最终会由谁来处理自己的请求， 接收者也不知道最初是谁发出了请求。

### 场景

- 当一些对象和其他对象紧密耦合以致难以对其进行修改时， 可使用中介者模式。
- 当组件因过于依赖其他组件而无法在不同应用中复用时， 可使用中介者模式。
- 如果为了能在不同情景下复用一些基本行为， 导致你需要被迫创建大量组件子类时， 可使用中介者模式。

### 优缺点

- *单一职责原则*。 你可以将多个组件间的交流抽取到同一位置， 使其更易于理解和维护。
-  *开闭原则*。 你无需修改实际组件就能增加新的中介者。
-  你可以减轻应用中多个组件间的耦合情况。
-  你可以更方便地复用各个组件。

D:

- 一段时间后， 中介者可能会演化成为[上帝对象](https://refactoringguru.cn/antipatterns/god-object)。

### 关系

- [责任链模式](https://refactoringguru.cn/design-patterns/chain-of-responsibility)、 [命令模式](https://refactoringguru.cn/design-patterns/command)、 [中介者模式](https://refactoringguru.cn/design-patterns/mediator)和[观察者模式](https://refactoringguru.cn/design-patterns/observer)用于处理请求发送者和接收者之间的不同连接方式：
  - *责任链*按照顺序将请求动态传递给一系列的潜在接收者， 直至其中一名接收者对请求进行处理。
  - *命令*在发送者和请求者之间建立单向连接。
  - *中介者*清除了发送者和请求者之间的直接连接， 强制它们通过一个中介对象进行间接沟通。
  - *观察者*允许接收者动态地订阅或取消接收请求。

## Strategy 策略模式

**策略模式**是一种行为设计模式， 它能让你定义一系列算法， 并将每种算法分别放入独立的类中， 以使算法的对象能够相互替换。

The strategy pattern is a behavior design pattern that allows you to define a series of algorithms and place each algorithm in a separate class so that the objects of the algorithm are interchangeable.

<img src="https://refactoringguru.cn/images/patterns/diagrams/strategy/structure-indexed.png" alt="策略设计模式的结构" style="zoom:80%;" />

1. **上下文** （Context） 维护指向具体策略的引用， 且仅通过策略接口与该对象进行交流。
2. **策略** （Strategy） 接口是所有具体策略的通用接口， 它声明了一个上下文用于执行策略的方法。
3. **具体策略** （Concrete Strategies） 实现了上下文所用算法的各种不同变体。
4. 当上下文需要运行算法时， 它会在其已连接的策略对象上调用执行方法。 上下文不清楚其所涉及的策略类型与算法的执行方式。
5. **客户端** （Client） 会创建一个特定策略对象并将其传递给上下文。 上下文则会提供一个设置器以便客户端在运行时替换相关联的策略。

### 场景

- 当你有许多仅在执行某些行为时略有不同的相似类时， 可使用策略模式。
- 如果算法在上下文逻辑中不是特别重要， 使用该模式能将类的业务逻辑与其算法实现细节隔离开来。
-  当类中使用了复杂条件运算符以在同一算法的不同变体中切换时， 可使用该模式。

### 优缺点

- 你可以在运行时切换对象内的算法。
-  你可以将算法的实现和使用算法的代码隔离开来。
-  你可以使用组合来代替继承。
-  *开闭原则*。 你无需对上下文进行修改就能够引入新的策略。

D:

- 如果你的算法极少发生改变， 那么没有任何理由引入新的类和接口。 使用该模式只会让程序过于复杂。
-  客户端必须知晓策略间的不同——它需要选择合适的策略。
-  许多现代编程语言支持函数类型功能， 允许你在一组匿名函数中实现不同版本的算法。 这样， 你使用这些函数的方式就和使用策略对象时完全相同， 无需借助额外的类和接口来保持代码简洁。

### 关系

- **模板方法模式**基于继承机制： 它允许你通过扩展子类中的部分内容来改变部分算法。 **策略**基于组合机制： 你可以通过对相应行为提供不同的策略来改变对象的部分行为。 模板方法在类层次上运作， 因此它是静态的。 策略在对象层次上运作， 因此允许在运行时切换行为。

  **The template method pattern** is based on inheritance: it allows you to change part of the algorithm by extending part of the subclass. **Strategies** Based on composition: You can change part of an object's behavior by providing different strategies for corresponding behaviors. A template method operates at the class level, so it is static. Policies operate at the object level, thus allowing behavior to be switched at run time.

## Template Method 模板方法

**模板方法模式**是一种行为设计模式， 它在超类中定义了一个算法的框架， 允许子类在不修改结构的情况下重写算法的特定步骤。

<img src="https://refactoringguru.cn/images/patterns/diagrams/template-method/structure-indexed.png" alt="模板方法设计模式的结构" style="zoom:80%;" />

1. **抽象类** （Abstract­Class） 会声明作为算法步骤的方法， 以及依次调用它们的实际模板方法。 算法步骤可以被声明为 `抽象`类型， 也可以提供一些默认实现。
2. **具体类** （Concrete­Class） 可以重写所有步骤， 但不能重写模板方法自身。

### 场景

- 当你只希望客户端扩展某个特定算法步骤， 而不是整个算法或其结构时， 可使用模板方法模式。
-  当多个类的算法除一些细微不同之外几乎完全一样时， 你可使用该模式。 但其后果就是， 只要算法发生变化， 你就可能需要修改所有的类。

### 优缺点

- 你可仅允许客户端重写一个大型算法中的特定部分， 使得算法其他部分修改对其所造成的影响减小。
-  你可将重复代码提取到一个超类中。

D:

- 部分客户端可能会受到算法框架的限制。
-  模板方法中的步骤越多， 其维护工作就可能会越困难。

### 关系

- [工厂方法模式](https://refactoringguru.cn/design-patterns/factory-method)是[模板方法模式](https://refactoringguru.cn/design-patterns/template-method)的一种特殊形式。 同时， *工厂方法*可以作为一个大型*模板方法*中的一个步骤。

### Code

```typescript
abstract class AbstractClass {
    public templateMethod(): void {
        this.baseOperation1();
        this.requiredOperations1();
        this.baseOperation2();
        this.hook1();
        this.requiredOperation2();
        this.baseOperation3();
        this.hook2();
    }

    protected baseOperation1(): void {
        console.log('AbstractClass says: I am doing the bulk of the work');
    }

    protected baseOperation2(): void {
        console.log('AbstractClass says: But I let subclasses override some operations');
    }

    protected baseOperation3(): void {
        console.log('AbstractClass says: But I am doing the bulk of the work anyway');
    }

    protected abstract requiredOperations1(): void;

    protected abstract requiredOperation2(): void;

    protected hook1(): void { }

    protected hook2(): void { }
}

class ConcreteClass1 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log('ConcreteClass1 says: Implemented Operation1');
    }

    protected requiredOperation2(): void {
        console.log('ConcreteClass1 says: Implemented Operation2');
    }
}

class ConcreteClass2 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log('ConcreteClass2 says: Implemented Operation1');
    }

    protected requiredOperation2(): void {
        console.log('ConcreteClass2 says: Implemented Operation2');
    }

    protected hook1(): void {
        console.log('ConcreteClass2 says: Overridden Hook1');
    }
}

function clientCode(abstractClass: AbstractClass) {
    // ...
    abstractClass.templateMethod();
    // ...
}

console.log('Same client code can work with different subclasses:');
clientCode(new ConcreteClass1());
console.log('');

console.log('Same client code can work with different subclasses:');
clientCode(new ConcreteClass2());
```

## Chain of Responsibility 责任链

**责任链模式**是一种行为设计模式， 允许你将请求沿着处理者链进行发送。 收到请求后， 每个处理者均可对请求进行处理， 或将其传递给链上的下个处理者。

The chain of responsibility pattern is a behavior design pattern that allows you to send requests down a chain of handlers. Upon receipt of the request, each handler can either process it or pass it on to the next handler on the chain.

<img src="https://refactoringguru.cn/images/patterns/diagrams/chain-of-responsibility/structure-indexed.png" alt="责任链设计模式的结构" style="zoom:80%;" />

1. **处理者** （Handler） 声明了所有具体处理者的通用接口。 该接口通常仅包含单个方法用于请求处理， 但有时其还会包含一个设置链上下个处理者的方法。

2. **基础处理者** （Base Handler） 是一个可选的类， 你可以将所有处理者共用的样本代码放置在其中。

   通常情况下， 该类中定义了一个保存对于下个处理者引用的成员变量。 客户端可通过将处理者传递给上个处理者的构造函数或设定方法来创建链。 该类还可以实现默认的处理行为： 确定下个处理者存在后再将请求传递给它。

3. **具体处理者** （Concrete Handlers） 包含处理请求的实际代码。 每个处理者接收到请求后， 都必须决定是否进行处理， 以及是否沿着链传递请求。

   处理者通常是独立且不可变的， 需要通过构造函数一次性地获得所有必要地数据。

4. **客户端** （Client） 可根据程序逻辑一次性或者动态地生成链。 值得注意的是， 请求可发送给链上的任意一个处理者， 而非必须是第一个处理者。

### 场景

- 当程序需要使用不同方式处理不同种类请求， 而且请求类型和顺序预先未知时， 可以使用责任链模式。
- 当必须按顺序执行多个处理者时， 可以使用该模式。
- 如果所需处理者及其顺序必须在运行时进行改变， 可以使用责任链模式。

### 优缺点

- 你可以控制请求处理的顺序。
-  *单一职责原则*。 你可对发起操作和执行操作的类进行解耦。
-  *开闭原则*。 你可以在不更改现有代码的情况下在程序中新增处理者。

D：

- 部分请求可能未被处理

### 关系

- [责任链模式](https://refactoringguru.cn/design-patterns/chain-of-responsibility)、 [命令模式](https://refactoringguru.cn/design-patterns/command)、 [中介者模式](https://refactoringguru.cn/design-patterns/mediator)和[观察者模式](https://refactoringguru.cn/design-patterns/observer)用于处理请求发送者和接收者之间的不同连接方式：
  - *责任链*按照顺序将请求动态传递给一系列的潜在接收者， 直至其中一名接收者对请求进行处理。
  - *命令*在发送者和请求者之间建立单向连接。
  - *中介者*清除了发送者和请求者之间的直接连接， 强制它们通过一个中介对象进行间接沟通。
  - *观察者*允许接收者动态地订阅或取消接收请求。

### Code

## Memento 备忘录

### 场景

### 优缺点

### 关系

### Code

## State 状态

### 场景

### 优缺点

### 关系

### Code

## Observer 观察者

**观察者模式**是一种行为设计模式， 允许你定义一种订阅机制， 可在对象事件发生时通知多个 “观察” 该对象的其他对象。

The Observer pattern is a behavior design pattern that allows you to define a subscription mechanism that notifies multiple other objects that "observe" an object when an event occurs.

<img src="https://refactoringguru.cn/images/patterns/diagrams/observer/structure-indexed.png" alt="观察者设计模式的结构" style="zoom:80%;" />

1. **发布者** （Publisher） 会向其他对象发送值得关注的事件。 事件会在发布者自身状态改变或执行特定行为后发生。 发布者中包含一个允许新订阅者加入和当前订阅者离开列表的订阅构架。
2. 当新事件发生时， 发送者会遍历订阅列表并调用每个订阅者对象的通知方法。 该方法是在订阅者接口中声明的。
3. **订阅者** （Subscriber） 接口声明了通知接口。 在绝大多数情况下， 该接口仅包含一个 `update`更新方法。 该方法可以拥有多个参数， 使发布者能在更新时传递事件的详细信息。
4. **具体订阅者** （Concrete Subscribers） 可以执行一些操作来回应发布者的通知。 所有具体订阅者类都实现了同样的接口， 因此发布者不需要与具体类相耦合。
5. 订阅者通常需要一些上下文信息来正确地处理更新。 因此， 发布者通常会将一些上下文数据作为通知方法的参数进行传递。 发布者也可将自身作为参数进行传递， 使订阅者直接获取所需的数据。
6. **客户端** （Client） 会分别创建发布者和订阅者对象， 然后为订阅者注册发布者更新。

### 场景

- 当一个对象状态的改变需要改变其他对象， 或实际对象是事先未知的或动态变化的时， 可使用观察者模式。
- 当应用中的一些对象必须观察其他对象时， 可使用该模式。 但仅能在有限时间内或特定情况下使用。

### 优缺点

- *开闭原则*。 你无需修改发布者代码就能引入新的订阅者类 （如果是发布者接口则可轻松引入发布者类）。
-  你可以在运行时建立对象之间的联系。

-  订阅者的通知顺序是随机的。



