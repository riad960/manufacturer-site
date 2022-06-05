import React from "react";

function Blog() {
  return (
    <div className="my-5 w-screen mx-auto text-center">
      <div className="font-bold text-3xl md:text-5xl"> My Blogs </div>
      <div className="my-9 w-full md:w-3/4 mx-auto text-white my-shadow p-3 rounded bg-white ">
        <h2 className="font-bold my-3 bg-[#263238] mx-3 rounded px-2 py-1">
          How will you improve the performance of a React Application?
        </h2>
        <p className="para-font font-bold text-zinc-500 px-3 py-5 bg-slate-200 mx-3 rounded">
          To improve the performance of a React Application and optimize React
          rendering, you need to make sure that components receive only
          necessary props. It will let you control the CPU consumption and avoid
          over-rendering unnecessary features. The solution is to create a
          functional component that will collect all props and redistribute them
          to other component
        </p>
      </div>
      {/* 2nd question  */}
      <div className="my-9 w-full md:w-3/4 mx-auto text-white my-shadow p-3 rounded bg-white ">
        <h2 className="font-bold my-3 bg-[#263238] mx-3 rounded px-2 py-1">
          How does prototypical inheritance work?
        </h2>
        <p className="para-font font-bold text-zinc-500 px-3 py-5 bg-slate-200 mx-3 rounded">
          The prototypical Inheritance could be a feature in javascript
          accustomed add ways and properties in objects. it's a way by that
          associate object will inherit the properties and ways of another
          object. historically, so as to induce associated set the Prototype of
          an object, we tend to use Object. getPrototypeOf and Object Using
          basic sketches and rough materials, the image is also an easy drawing
          or rough model that helps innovators verify what they have to enhance
          and fix in their style. for instance, engineers could complete a
          operating model image to check a product before it's approved for
          producing
        </p>
      </div>
      {/* 3rd question  */}
      <div className="my-9 w-full md:w-3/4 mx-auto text-white my-shadow p-3 rounded bg-white ">
        <h2 className="font-bold my-3 bg-[#263238] mx-3 rounded px-2 py-1">
          What are the different ways to manage a state in a React application?
        </h2>
        <p className="para-font font-bold text-zinc-500 px-3 py-5 bg-slate-200 mx-3 rounded">
          There ar primarily 2 ways in which within which the info gets handled
          in React. It gets handled through state and props Using React Hooks to
          share state between parts And, finally, our root element. this can be
          reaching to hold the shop and pass the specified knowledge and also
          the dispatch perform right down to the parts that require them. this
          may enable the youngsters parts to browse from and update the shop
          PRN.
        </p>
      </div>
      {/* 4rth question  */}
      <div className="my-9 w-full md:w-3/4 mx-auto text-white my-shadow p-3 rounded bg-white ">
        <h2 className="font-bold my-3 bg-[#263238] mx-3 rounded px-2 py-1">
          Why you do not set the state directly in React.?
        </h2>
        <p className="para-font font-bold text-zinc-500 px-3 py-5 bg-slate-200 mx-3 rounded">
          When you directly update the state, it doesn't amendment this. state
          now. Instead, it creates a unfinished state transition, and accessing
          it once line this methodology can solely come back this price. you'll
          lose management of the state across all elements.React useState and
          setState do not build changes on to the state object; they produce
          queues to optimize performance, that is why the changes do not update
          now.
        </p>
      </div>
      {/* 5th ques  */}
      <div className="my-9 w-full md:w-3/4 mx-auto text-white my-shadow p-3 rounded bg-white ">
        <h2 className="font-bold my-3 bg-[#263238] mx-3 rounded px-2 py-1">
          What is a unit test? Why should write unit tests?
        </h2>
        <p className="para-font font-bold text-zinc-500 px-3 py-5 bg-slate-200 mx-3 rounded">
          What is unit testing? Unit testing could be a computer code
          development method within which the littlest testable elements of AN
          application, known as units, ar severally and severally scrutinized
          for correct operation. This testing methodology is finished throughout
          the event method by the computer code developers and generally QA
          employees. One of the advantages of unit tests is that they isolate a
          operate, category or technique and solely take a look at that piece of
          code. Higher quality individual parts produce overall system
          resiliency. Thus, the result's reliable code. Unit tests conjointly
          modification the character of the debugging method
        </p>
      </div>
    </div>
  );
}

export default Blog;
