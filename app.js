import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "heading-1", key:1 },
    "Namaste React"
  );
  const heading2 = React.createElement(
    "h2",
    { id: "heading-2" , key:2},
    "Hello React"
  );

  const container = React.createElement("div", { id: "container" }, [
    heading,
    heading2,
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);

  console.log(container);
