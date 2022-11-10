import React, { useEffect } from 'react';

const Blogs = () => {
    //dynamic title
    const changeTitle = "blogs-wanderlust";
    useEffect(() => {
      document.title = changeTitle;
    }, [changeTitle]);
    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-4'>All Blogs</h1>
            <div className='bg-[#7600DC] my-4 p-6 text-white rounded-lg'>
                <p>
                    <p className='font-bold text-2xl'>1. Difference between SQL and NoSQL?</p>
                    <img className='mx-auto rounded-lg my-2 h-32' src="https://www.guru99.com/images/SQL-vs-NoSQL.png" alt="" />
                    <ul>
                        <li className='list-disc'>SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.</li>
                        <li className='list-disc'>Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.</li>
                        <li className='list-disc'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                        <li className='list-disc'>SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.</li>
                        <li className='list-disc'>Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</li>
                    </ul>
                </p>
            </div>
            <div className='bg-[#7600DC] mb-4 p-6 text-white rounded-lg'>
                <p>
                    <p className='font-bold text-2xl mb-2'>2. What is JWT, and how does it work?</p>
                    JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. <br />
                    JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it. <br />
                    <img className='mx-auto my-2 h-60 rounded-xl' src="https://bykowski.pl/wp-content/uploads/2019/03/json-web-token.png" alt="" />
                    Here are some scenarios where JSON Web Tokens are useful: <br />
                    <li>Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token.</li>
                    <li>Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. </li>
                    In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required. <br />
                </p>
            </div>
            <div className='bg-[#7600DC] mb-4 p-6 text-white rounded-lg'>
                <p className='font-bold text-2xl mb-2'>3. What is the difference between javascript and NodeJS?</p>
                <p>1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. <br />
                2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. <br />
                3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. <br />
                4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific. <br />
                5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input. <br />
                </p>
            </div>
            <div className='bg-[#7600DC] mb-4 p-6 text-white rounded-lg'>
                <p className='font-bold text-2xl mb-2'>4. How does NodeJS handle multiple requests at the same time?</p>
                <p>
                NodeJS server uses an EventQueue, which queues incoming client requests and an EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded and acts as a listener for the EventQueue which processes incoming requests based on FIFO policy. <br />
                When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then the request is forwarded to the thread manager, which then based on an algorithm, picks up an idle thread from the pool and lets it process the request. After completion of the request processing operation, the thread, returns the response back to the EventLoop which is then forwarded to the client. Thus, even if an incoming request needs blocking IO, the thread pool allows it to run asynchronously in the background without blocking the EventLoop and it gives a seamless experience of NodeJS handling multiple incoming requests concurrently without any persistent delays or bottlenecks.
                </p>
            </div>
        </div>
    );
};

export default Blogs;