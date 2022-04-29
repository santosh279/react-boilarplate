import React from "react";

const Counter = ({ count, clickIncrement, clickDecrement }) => {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3 display-3">{count}</p>
                                <button
                                    onClick={clickIncrement}
                                    className="btn btn-success m-1"
                                >
                                    Increment
                                </button>
                                <button
                                    onClick={clickDecrement}
                                    className="btn btn-warning m-1"
                                >
                                    Decrement
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Counter;
