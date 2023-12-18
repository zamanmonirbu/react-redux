import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countDecrease, countIncrease, countReset } from '../Action/ActionsFiles';

const CountComponent = () => {
    const count=useSelector((state)=>state.count)
    const dispatch=useDispatch()
    const handleIncrease=()=>{
        dispatch(countIncrease())
    }
    const handleReset=()=>{
        dispatch(countReset())
    }
    const handleDecrease=()=>{
        dispatch(countDecrease())
    }
    return (
        <div>
            <p>count {count}</p>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
};

export default CountComponent;