const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h3", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            animal: "Dog",
            name: "Luna",
            breed: "Chiwawa"
        }),
        React.createElement(Pet, {
            animal: "Cat",
            name: "Blublu",
            breed: "RussianBlue"
        }),
        React.createElement(Pet, {
            animal: "Bird",
            name: "Bitch",
            breed: "Parrot"
        }),
        ]
    )
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
