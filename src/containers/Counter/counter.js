import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../../components/counter/counter";

import { increment, decrement } from "../../reducers/features/counter.feature";

const CounterContainer = () => {
    let dispatch = useDispatch();

    /**
     * Get information from redux store
     */
    let counterState = useSelector((state) => {
        return state["counter"];
    });

    let { count } = counterState;

    const clickIncrement = () => {
        dispatch(increment());
    };

    const clickDecrement = () => {
        dispatch(decrement());
    };

    return (
        <React.Fragment>
            <Counter
                clickIncrement={clickIncrement}
                clickDecrement={clickDecrement}
                count={count}
            />
        </React.Fragment>
    );
};

export default CounterContainer;
