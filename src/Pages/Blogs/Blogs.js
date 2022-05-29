import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-10 my-32'>
                <div className='border-2 p-10 rounded-2xl'>
                    <h1 className='text-2xl font-bold mb-5'>Q.1: How will you improve the performance of a React Application?</h1>
                    <p className='text-xl'>I can improve the performance of a react application by following this steps.
                        1. Keeping component state local where necessary.
                        2. Memoizing React components to prevent unnecessary re-renders.
                        3. Code-splitting in React using dynamic import().
                        4. Windowing or list virtualization in React.
                        5. Lazy loading images in React.</p>
                </div>
                <div className='border-2 p-10 rounded-2xl'>
                    <h1 className='text-2xl font-bold mb-5'>Q.2: What are the different ways to manage a state in a React application?</h1>
                    <p className='text-xl'> 1. useState is the first tool I should reach for to manage state in your components.
                        2. useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.
                        3. To manage global state, I can use third-party libraries like Zustand, Jotai, and Recoil.
                        4. URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname. example: useHistory or useLocation.</p>
                </div>
                <div className='border-2 p-10 rounded-2xl'>
                    <h1 className='text-2xl font-bold mb-5'>Q.3 How does prototypical inheritance work?</h1>
                    <p className='text-xl'>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied. Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values). JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.</p>
                </div>
                <div className='border-2 p-10 rounded-2xl'>
                    <h1 className='text-2xl font-bold mb-5'>Q.4 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p className='text-xl'>I can Implement the search by using filter() and includes() functions. Here is an example:
                        <br /> <br />
                        const search = products.filter(product = product.name.includes('keyword'));
                        console.log(search);</p>
                </div>
                <div className='border-2 p-10 rounded-2xl'>
                    <h1 className='text-2xl font-bold mb-5'>Q.5 What is a unit test? Why should write unit tests?</h1>
                    <p className='text-xl'>What is a unit test? Why should write unit tests?
                        Unit testing is a testing method that tests an individual software unit in isolation. This involves verifying the output of a function or component for a given input. For React components, this could mean checking that the component renders correctly for the specified props. In other words, writing unit tests means that we write code that verifies that our code works as expected. We'll go over the other goals of unit testing later on. Generally, I found that it's a good idea to write tests in the following situations:
                        1. Before or during implementing new functionality.
                        2. Before and during refactoring.
                        3. Before fixing a bug.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;