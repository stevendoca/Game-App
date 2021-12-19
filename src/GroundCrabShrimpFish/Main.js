import React from 'react'
import BettingList from './BettingList'
import DiceList from './DiceList'
import GameHeader from './GameHeader'
 import './GourdCrabShrimpFish.css'
export default function Main() {
    return (
        <div id="main" className="container-fluid">
            <GameHeader/>
            <div className="row">
                <div className="col-8">
                    <BettingList/>
                </div>
                <div className="col-4">
                    <DiceList/>
                </div>
            </div>
        </div>
    )
}
