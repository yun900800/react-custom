# React deep dive

- 什么是Host Tree?怎么理解Host Tree?
    1. React programs usually output a tree that may change over time.
    2. React基于两个基本的principal:Stability,Host Tree结构是稳定的;Regularity,The host tree can be broken down into UI patterns that look and behave consistently (such as buttons, lists, avatars) rather than random shapes.
- 什么是Host Instances?怎么理解Host Instances
    1. Host Instances是组成Host Tree的节点,不同的Host Tree有不同的节点,比如Dom Tree和IOS的tree就是不一样的,但是它们一定会提供操纵dom instance的API,这些API一般给React调用
- 什么是Renderers？怎么理解和自定义Renderers?
    1. A renderer teaches React to talk to a specific host environment and manage its host instances. 
    2. Renderers有两种工作模式,第一种叫mutating mode,就是在Host Tree或者Host instances上直接修改；另一种就是叫做persistent mode,就是创建一个新的React Element来取代老的React Element,而不是直接修改React Element.这种不变性让多线程操作更加容易
    3. As a React user, you never need to think about these modes. I only want to highlight that React isn’t just an adapter from one mode to another.
- 什么是React Element?怎么理解React Element?
    1. In the host environment, a host instance (like a DOM node) is the smallest building block. In React, the smallest building block is a React element.(简单理解就是React中的最小构件块)

    ```shell
        // JSX is a syntax sugar for these objects.
        // <button className="blue" />
        {
            type: 'button',
            props: { className: 'blue' }
        }
    ```

    2. React Element能够构建成一棵树.同时React Element是不可变的。不能修改React Element的子元素或者属性,只能重新渲染一棵新的树
- 什么是Entry Point
    1. 每一个Renderer都有一个 “entry point”， It’s the API that lets us tell React to render a particular React element tree inside a container host instance.如果有子节点就是用递归渲染
- 什么是Reconciliation？怎么理解Reconciliation？
    1. 第一个理解就是多次渲染一棵树的时候什么使用可以重用React Element？什么是否需要重新创建？
    2. If an element type in the same place in the tree “matches up” between the previous and the next renders, React reuses the existing host instance.(树节点相同位置类型相同可以重用)
- 条件渲染的好处是什么?本质上就是提高React Element的重用率
- lists中的节点增加key属性的作用其实还是提高React Element的重用率,没有变化的不用重新创建
- 函数组件中返回React Element的好处是方便交给React渲染,如果自己调用函数执行也可以,但是对组件的管理就会很混乱，一部分react管理，一部分用户自己管理,如果只交给react管理其实就是一种控制反转。
- 函数组件最好是纯函数，或者保持幂等性就可以，局部可变但是一定保持幂等性也是可以的
- 看看一下两种组件的使用方式:

    ```shell
        let reactElement = Form({ showMessage: true });
        ReactDOM.render(reactElement, domContainer);

        // { type: Form, props: { showMessage: true } }
        let reactElement = <Form showMessage={true} />;
        ReactDOM.render(reactElement, domContainer);
    ```
    理解以上两种情况的细微差别:
    1. 下面的组件渲染起到了控制反转的作用，
    2. This is why we say reconciliation is recursive. When React walks the element tree, it might meet an element whose type is a component. It will call it and keep descending down the tree of returned React elements. Eventually, we’ll run out of components, and React will know what to change in the host tree.
    3. React can do its job better if it “knows” about your components rather than if it only sees the React element tree after recursively calling them.
- 通过让 React 控制调用我们的组件，我们获得了一些有趣的属性：
    1. Components become more than functions. React can augment component functions with features like local state that are tied to the component identity in the tree. A good runtime provides fundamental abstractions that match the problem at hand. As we already mentioned, React is oriented specifically at programs that render UI trees and respond to interactions. If you called components directly, you’d have to build these features yourself.
    2. Component types participate in the reconciliation. By letting React call your components, you also tell it more about the conceptual structure of your tree. For example, when you move from rendering <Feed> to the <Profile> page, React won’t attempt to re-use host instances inside them — just like when you replace button with a <p>. All state will be gone — which is usually good when you render a conceptually different view. You wouldn’t want to preserve inputs
     state between <PasswordForm> and <MessengerChat> even if the input position in the tree accidentally “lines up” between them.
    3. React can delay the reconciliation. If React takes control over calling our components, it can do many interesting things. For example, it can let the browser do some work between the component calls so that re-rendering a large component tree doesn’t block the main thread. Orchestrating this manually without reimplementing a large part of React is difficult.
    4. A better debugging story. If components are first-class citizens that the library is aware of, we can build rich developer tools for introspection in development.
- 什么是Lazy Evaluation,它解决了什么问题?
    1. 首先它解决的是在一些条件满足的情况下，可以不用渲染某些组件,这是函数调用做不到的
    2. 看下面的例子

    ```shell
        function Story({ currentUser }) {
            // return {
            //   type: Page,
            //   props: {
            //     user: currentUser,
            //     children: { type: Comments, props: {} }
            //   }
            // }
            return (
                <Page user={currentUser}>
                <Comments />
                </Page>
            );
        }

        function Page({ user, children }) {
            return (
                <Layout>
                {children}
                </Layout>
            );
        }

        function Page({ user, children }) {
            if (!user.isLoggedIn) {
                return <h1>Please log in</h1>;
            }
            return (
                <Layout>
                {children}
                </Layout>
            );
        }

        // {
        //   type: Page,
        //   props: {
        //     children: Comments() // Always runs!
        //   }
        // }
        <Page>
            {Comments()}
        </Page>

        // {
        //   type: Page,
        //   props: {
        //     children: { type: Comments }
        //   }
        // }
        <Page>
        <Comments />
        </Page>
    ```
- 什么是react中的本地状态
    1. Local state is so useful that React lets your own components have it too.Components are still functions but React augments them with features that are useful for UIs. Local state tied to the position in the tree is one of these features.
    2. useState就是本地状态的一个例子
- Consistency
    1. 可以将react的渲染分块执行,这样能保证执行的效率和一致性
    2. This is why React splits all work into the “render phase” and the “commit phase”. Render phase is when React calls your components and performs reconciliation. It is safe to interrupt and in the future will be asynchronous. Commit phase is when React touches the host tree. It is always synchronous.
- Memoization
    1. 这个概念的作用是将那些纯函数组件告诉react缓存起来，不用每次渲染的时候都重新调用
    2. 同时这个理念也告诉我们做设计组件的时候尽可能设计纯函数组件或者幂等性的组件