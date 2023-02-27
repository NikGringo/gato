const ReactDOM = require("react-dom/client");
const React = require("react");
const Header = require("./components/header.jsx");
const Table = require("./components/table.jsx");

const header = "Gato site";

ReactDOM.createRoot(
    document.getElementById("app")
)
    .render(
        <div>
            <Header text={header} />
            <br />
            <Table />
        </div>
    );
