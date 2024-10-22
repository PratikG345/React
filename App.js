const heading = React.createElement("h1",{},"Hello World from react")

const parent = React.createElement(
    "div",{id: "Parent"},
    [React.createElement(
        "div",{id: "child1"},
        [React.createElement(
            "h1",{id:"h1"},
            "Hello World from 2 nested divs"
        ),React.createElement(
            "h1",{id:"h1-2"},
            "Hello I am his sibling"
    )]
    ),
    React.createElement(
        "div",{id: "child2"},
        [React.createElement(
            "h1",{id:"h1"},
            "Hello World from 2 nested divs from second child"
        ),React.createElement(
            "h1",{id:"h1-2"},
            "Hello I am his sibling but a second child"
    )]
    )]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading,parent]);