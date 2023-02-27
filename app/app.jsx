const ReactDOM = require("react-dom/client");
const React = require("react");
const Main = require("./pages/main.jsx");

ReactDOM.createRoot(
    document.getElementById("app")
)
    .render(
        <>
            <Main />
        </>
    );
