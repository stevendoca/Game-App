import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
export default function GameHeader(props) {
    const balance = useSelector(state => state.Game.balance);
    const dispatch = useDispatch();
    return (
        <div>
            <h3 className="text-center display-4">Gourd-Crab-Shrimp-Fish</h3>
            <div className="text-center mt-5">
                <span style={{fontSize:'25px', borderRadius:'5%'}} className="bg-danger p-3">
                    Money: <span className="text-white">${balance}</span>
                </span>
            </div>
            <div className="text-center mt-5">
                <button onClick={() => {
                    dispatch({
                        type:'PLAY_AGAIN',
                    })
                }} style={{fontSize:'15px'}} className="p-2 text-white bg-success">
                    Reset
                </button>
            </div>
        </div>
    )
}
