import React from 'react';
import Dice from './Dice';
import {useSelector,useDispatch} from 'react-redux';

export default function DiceList() {
    const diceList = useSelector(state => state.Game.diceList);
    const dispatch = useDispatch();

    return (
        <div className="mt-5 ml-5">
            <div className="bg-white" style={{width:300, height:300, borderRadius: 150, paddingLeft:10}}>
                <div className="row">
                    <div className="col-12 text-center" style={{marginLeft:'75px'}}>
                        <Dice dice={diceList[0]}/>
                    </div>
                </div>
                <div className="row" style={{marginTop:-20}}>
                    <div className="col-4 text-right">
                    <Dice dice={diceList[1]}/>
                    </div>
                    <div className="col-4 text-right">
                    <Dice dice={diceList[2]}/>
                    </div>
                </div>
            </div>
            <div style={{marginLeft:'25%',marginTop:'5%'}}>
                <button onClick={() => {
                    dispatch({
                        type:'PLAY'
                    })
                }} className="btn btn-success " style={{fontSize:'25px'}}>
                    Roll
                </button>
            </div>
        </div>
    )
}
