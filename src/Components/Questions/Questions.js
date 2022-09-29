import React from "react";

const Questions = () => {
  return (
    <div className="my-24 mx-auto">
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
    </div>
  );
};

export default Questions;
