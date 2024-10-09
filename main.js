
 
// const head = React.createElement("h1", {id: "heading"}, "Hello React"); // we give attributes to a tag in {} eg :{id: "heading"}
// console.log(head);

// const paragraph = React.createElement("p", {}, "This is a paragraph in React")

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"},[
        React.createElement("h1",{key: "h1"},"This is h1 tag."),
        React.createElement("h2",{key: "h2"},"This is h2 tag."),
    ]),
        React.createElement("div", {id: "child2"},
            [React.createElement("h1",{key: "h1.2"},"This is h1 tag."),
            React.createElement("h2",{key: "h2.2"},"This is h2 tag."),
        ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
