import React from 'react';
import {useDispatch} from 'react-redux';
 import {useSpring,animated} from 'react-spring';
export default function Bet(props) {
    const {bet} = props;
    const dispatch = useDispatch();
    const [propsUseSpring,set,stop] = useSpring(() =>{
        return {
            to: {scale:1.25},
            from:{scale:1},
            reset: true,
        }        
    })
    return (
        <div className="mt-3">
            <img src={bet.img} style={{ width: 200 }} />
            <div className="bg-success mt-2 pb-2 text-center" style={{ borderRadius: '5%',width: 200 }}>
                <animated.button style={{ transform:propsUseSpring.scale.interpolate(scale => `scale(${scale})`)}} onClick={() => {
                    set({scale:1});
                    set({scale:1.25});   
                    dispatch({
                        type:'BEAT',
                        bet,
                        increase:true
                    });
                    
                }} className="btn btn-danger mr-3">
                <i class="fa fa-plus"></i>
                </animated.button>
                <span className="mt-2" style={{color: 'yellow', fontSize: 25,marginRight:15}}>{bet.chips}</span>
                <animated.button style={{ transform:propsUseSpring.scale.interpolate(scale => `scale(${scale})`)}} onClick={() => {
                    set({scale:1});
                    set({scale:1.25});
                    dispatch({
                        type:'BEAT',
                        bet,
                        increase:false
                    });
                    set({scale:1});
                    set({scale:1.25});
                }} className="btn btn-danger mr-3">
                <i class="fa fa-minus"></i>
                </animated.button>
            </div>
        </div>

    )
}
