import React from "react";
import { Provider } from "react-redux";
import Body from "./Components/Body.js";
import { createRoot } from "react-dom/client";
import appStore from "./Utilis/appStore.js";
import { Buffer } from 'buffer';
window.Buffer = Buffer;

const App = () => {
    return (
        <Provider store={appStore}>
            <Body />
        </Provider>
    );
};
const root = createRoot(document.getElementById("root"));
root.render(<App />);
export default App;