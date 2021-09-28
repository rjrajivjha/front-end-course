import React from 'react';
import ReactDOM from 'react-dom';
import Dog from "./Dog";

const App = () => {
  var arr = [1, 2, 3, 4];
  return React.createElement(
    "div", // tag
    { id: "website-title" }, // attributes with the element
    [
      React.createElement("h3", {}, "Dog Website"),

      ...[arr].map((item) =>
        React.createElement("div", { id: "mapped-id" }, item)
      ),
      React.createElement(Dog, {
        name: "Bull Terrier",
        weight: "50.70 Kg",
        breed: "Terrier",
      }),
      React.createElement(Dog, {
        name: "PitBull",
        weight: "50.70 Kg",
        breed: "Bull",
      }),
      React.createElement(Dog, {
        name: "Lion",
        weight: "5.70 Kg",
        breed: "husky",
      }),
    ] // content can be another component also.
  );
};

ReactDOM.render(
  React.createElement(
    // component to render
    App
  ),
  document.getElementById("root") // place to render
);
