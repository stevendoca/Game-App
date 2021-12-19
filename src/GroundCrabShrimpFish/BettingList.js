import React from 'react'
import Bet from './Bet'
import {useSelector} from 'react-redux';
export default function BettingList(props) {
    const bettingList = useSelector(state => state.Game.BettingList);

    const renderBets = () =>{
        return  bettingList.map((bet, index) => {
            return <div className="col-4" key={index}>
                <Bet bet={bet}/>
            </div>
        })
    }
    return (
        <div className="row">
            {renderBets()}
        </div>
    )
}
