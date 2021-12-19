/* eslint-disable no-fallthrough */
/* eslint-disable import/no-anonymous-default-export */

const initialState = {
  BettingList: [
      {id:'calabash',img:'./img/Game/Calabash.png',chips:0},
      {id:'crab',img:'./img/Game/Crab.png',chips:0},
      {id:'fish',img:'./img/Game/Fish.png',chips:0},
      {id:'prawn',img:'./img/Game/Prawn.png',chips:0},
      {id:'rooster',img:'./img/Game/Rooster.png',chips:0},
      {id:'stag',img:'./img/Game/Stag.png',chips:0},
  ],
  balance: 1000,
  diceList: [
    {id:'calabash',img:'./img/Game/Calabash.png'},
    {id:'crab',img:'./img/Game/Crab.png'},
    {id:'fish',img:'./img/Game/Fish.png'},
  ] 
}

export default (state = initialState, action) => {

    switch (action.type) {
      case 'BEAT':{
        let BettingListUpdate = [...state.BettingList];
        const index = BettingListUpdate.findIndex( beat => beat.id == action.bet.id);
        if (index !== -1){
          if (action.increase && state.balance > 0){
            BettingListUpdate[index].chips += 100;
            state.balance-=100
          }
          if (!action.increase){
            if (BettingListUpdate[index].chips > 0){
              BettingListUpdate[index].chips -= 100;
              state.balance+=100
            }
          }
          
        }
        state.BettingList = BettingListUpdate;
        return {...state};
      }
      case 'PLAY':{
        let diceListUpdated = [];
        for (let  i = 0; i < 3; i ++){
          let randomNum = Math.floor(Math.random() * 6);
            diceListUpdated.push(state.BettingList[randomNum])
        };
        state.diceList = diceListUpdated;
        //Increase balance if applicable
        diceListUpdated.forEach((dice, index) => {
          let i = state.BettingList.findIndex(bet => bet.id === dice.id);
          if (i !== -1){
            state.balance += state.BettingList[i].chips
          }
        })
        //Return money if applicable
        state.BettingList.forEach((bet, index) => {
          let indexResult = diceListUpdated.findIndex(result => result.id === bet.id);
          if (indexResult != -1){
            state.balance += bet.chips;
          }
        })
        //reset game
        state.BettingList = state.BettingList.map((bet, index) => {
          return {...bet,chips:0}
        })
        return {...state};
      }
      case 'PLAY_AGAIN':{
        state.balance = 1000;
        state.BettingList = state.BettingList.map((bet, index) => {
          return {...bet,chips:0}
        })
        return {...state};
      }
    default:
        return state
    }
}
