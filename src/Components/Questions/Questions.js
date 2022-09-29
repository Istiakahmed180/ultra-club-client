import React from "react";

const Questions = () => {
  return (
    <div className="my-24 lg:px-8 px-8">
      <p className="text-center font-semibold underline text-indigo-600 text-3xl">
        Queston Answer Down Position
      </p>
      <div className="my-8">
        <p>
          <span className="font-medium text-indigo-600">Question Number:1</span>{" "}
          What Is React & How Does It Actually Work?
        </p>
        <p className="mt-4">
          <span className="font-medium text-indigo-600">Answer:</span> React is
          a declarative, efficient, and flexible JavaScript library for building
          user interfaces. It lets you compose complex UIs from small and
          isolated pieces of code called “components”. React has a few different
          kinds of components, but we'll start with React.Component subclasses:
          class ShoppingList extends React. ReactJS divides the UI into isolated
          reusable pieces of code known as components. React components work
          similarly to JavaScript functions as they accept arbitrary inputs
          called properties or props. It's possible to have as many components
          as necessary without cluttering your code.
        </p>
      </div>
      <div className="my-8">
        <p>
          <span className="font-medium text-indigo-600">Question Number:2</span>{" "}
          What is the difference between state and props in React?
        </p>
        <p className="mt-4">
          <span className="font-medium text-indigo-600">Answer:</span> Props
          (short for properties) are a Component's configuration. They are
          received from above and immutable as far as the Component receiving
          them is concerned. A Component cannot change its props, but it is
          responsible for putting together the props of its child Components.
          Props do not have to just be data -- callback functions may be passed
          in as props. The state is a data structure that starts with a default
          value when a Component mounts. It may be mutated across time, mostly
          as a result of user events. A Component manages its own state
          internally. Besides setting an initial state, it has no business
          fiddling with the state of its children. You might conceptualize state
          as private to that component.
        </p>
      </div>
      <div className="my-8">
        <p>
          <span className="font-medium text-indigo-600">Question Number:3</span>{" "}
          Common side effects include for useEffect?
        </p>
        <p className="mt-4">
          <span className="font-medium text-indigo-600">Answer:</span> 1. Making
          a request to an API for data from a backend server.
          <br />
          2.To interact with browser APIs (that is, to use document or window
          directly)
          <br />
          3.Using unpredictable timing functions like setTimeout or setInterval.
        </p>
      </div>
    </div>
  );
};

export default Questions;
