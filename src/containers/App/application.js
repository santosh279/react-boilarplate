import React from "react";
import {Route , Routes} from "react-router-dom";
import CounterContainer from "../Counter/counter";

const App = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path={"/"} element={<CounterContainer />} />
            </Routes>
        </React.Fragment>
    );
};

export default App;
