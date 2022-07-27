import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/exports';
import { changeController } from '../Redux/Control/changeControlAction';
import { updatePlayerData } from '../Redux/PlayerProgress/updatePlayerDataAction';
import { checkWinner } from '../Redux/PlayerProgress/logicForWinner';
import { findWinner } from '../Redux/Winner/winnerAction'
import { resetPlayerData } from '../Redux/PlayerProgress/updatePlayerDataAction';
import { resetToDefault } from '../Redux/Control/changeControlAction';
import { resetWinnerToDefault } from '../Redux/Winner/winnerAction';


export default function TicTacToe(props) {

    const useRefValue = useRef(0)

    const dispatch = useDispatch();

    // const [winner, setWinner] = useState("None")
    // const [number, setNumber] = useState(0)

    const state = useSelector(function (state) { return state.changeControllerReducer })
    const playerData = useSelector(function (state) { return state.updatePlayerDataReducer })
    const winnerr = useSelector((state) => { return state.winnerReducer })


    useEffect(function () {
        // console.log(`I am called ${useRefValue.current}`);
        if (useRefValue.current === 0) {
            dispatch(resetPlayerData());
            dispatch(resetToDefault());
            dispatch(resetWinnerToDefault());
            // console.log(`Data Reset successful`);
        }
        return function () {
            useRefValue.current = 1;
            // setWinner(checkWinner(playerData.P1 , playerData.P2));
        }
    }, [])


    function handleChange(x) {
        let block = document.getElementById(x);
        const elementToBeAdded = x.split('element')[1]
        dispatch(updatePlayerData(state.currentPlayer, elementToBeAdded))
        //console.log(playerData);
        // console.log(state.currentPlayer ,elementToBeAdded);

        // let winner = checkWinner(playerData.P1, playerData.P2)
        // if (winner !== "None") {
        //     console.log(`Hi`);
        //     setWinner(winner)
        // }

        // setWinner(checkWinner(playerData.P1 , playerData.P2));
        //console.log(winner);
        dispatch(findWinner(playerData.P1, playerData.P2))
        // setNumber(number + 1)

        // document.getElementById('winner').innerHTML = "qweqweqwe"

        block.style.backgroundColor = state.backgroundColor
        block.style.color = state.color
        block.innerText = state.pattern
        block.disabled = true


        if (state.pattern === "X") {
            dispatch(changeController("P2"))
        } else {
            dispatch(changeController("P1"))
        }

    }

    return (
        <div className='container mt-2 p-4'>
            <h1 className='text-center text-decoration-underline mb-5 display-2'>Tic Tac Toe Game</h1>
            <div className='text-center'>
                <div className="mx-auto row row-cols-3 text-center" style={{ maxWidth: "500px" }}>


                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (elem) {
                            return (
                                <button onClick={() => { handleChange(`element${elem}`) }} key={elem} id={`element${elem}`} className="fs-2 btn btn-outline-dark text-white col border border-dark border-3">✔</button>
                            )
                        })
                    }

                    {/* <button className="btn btn-outline-dark" onClick={() => { console.log(playerData)}}>sdsdf</button> */}

                </div>
            </div>
            {/* <div className="display-1 text-center mt-5">useState Winner: {winner}</div> */}
            {/* <div className="display-1 text-center mt-5">Props: {props.winner}</div> */}
            {/* <div className="display-1 text-center mt-5">Redux Winner: {winnerr}</div> */}
            {/* <div id='winner' className="display-1 text-center mt-5">Redux: {winnerr}</div> */}
        </div>
    )
}
