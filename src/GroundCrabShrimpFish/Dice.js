import React, { Fragment } from 'react'
import { useSpring, animated } from 'react-spring';

export default function Dice(props) {
    let { dice } = props;
    const [propsDice, set] = useSpring(() => ({
        to: {
            xyz: [360, 360, 360]
        },
        from: {
            xyz: [0, 0, 0]
        },
        config: {
            duration: 1000
        },
        reset: true
    }))
    set({ xyz: [360, 360, 360] })
    return (

        <Fragment>
            <div className="scene">
                <animated.div className="cube" style={{
                    transform: propsDice.xyz.interpolate((x, y, z) => `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)
                }}>
                    <div className="cube__face front">
                        <img style={{ width: 50 }} src={dice.img} />
                    </div>
                    <div className="cube__face back">
                        <img style={{ width: 50 }} src="./img/Game/Calabash.png" />
                    </div>
                    <div className="cube__face left">
                        <img style={{ width: 50 }} src="./img/Game/Crab.png" />
                    </div>
                    <div className="cube__face right">
                        <img style={{ width: 50 }} src="./img/Game/Fish.png" />
                    </div>
                    <div className="cube__face top">
                        <img style={{ width: 50 }} src="./img/Game/Prawn.png" />
                    </div>
                    <div className="cube__face bottom">
                        <img style={{ width: 50 }} src="./img/Game/Rooster.png" />
                    </div>
                </animated.div>
            </div>
        </Fragment>
    )
}
