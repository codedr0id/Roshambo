import React, { useState } from "react";
import Header from "./Header";
import GameInitial from "./GameInitial";
import GamePlay from "./GamePlay";

const Game = () => {
    const [score, setScore] = useState(0);
    const [started, setStarted] = useState(false);
    const [userPick, setUserPick] = useState(null);
    const [housePick, setHousePick] = useState(null);
    const [result, setResult] = useState(null);
    const [modalActive, setModalActive] = useState(false);

    const options = ["rock", "paper", "scissors"];

    const gamePlayHandler = newUserPick => {
        setStarted(true);
        setUserPick(newUserPick);

        const options = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * 3);
        const newHousePick = options[random];
        setHousePick(newHousePick);

        const newResult = determineResult(newUserPick, newHousePick);
        setResult(newResult);
        setTimeout(() => {
            if (newResult === "win") { setScore(score + 1) };
            if (newResult === "lose") { setScore(score - 1) };
        }, 2000)
    }

    const restartHandler = () => {
        setStarted(false);
    }

    const modalHandler = () => {
        setModalActive(!modalActive);
    }

    const determineResult = (user, house) => {
        if (user === house) return "draw";
        else {
            if (user === "rock") {
                if (house === "paper") return "lose";
                else if (house === "scissors") return "win";
            }
            else {
                if (user === "paper") {
                    if (house === "rock") return "win";
                    else if (house === "scissors") return "lose";
                }
                else if (user === "scissors") {
                    if (house === "rock") return "lose";
                    else if (house === "paper") return "win";
                }
            }
        }
    }

    return (
        <main className="game">
            <Header score={score} modalActive={modalActive} modalHandler={modalHandler}/>
            {!started ? <GameInitial onPick={gamePlayHandler} /> :
                <GamePlay
                    userPick={userPick}
                    housePick={housePick}
                    result={result}
                    onRestart={restartHandler}
                />}
            <div className="footer">
                <p>Made with <span class="heart animate-beat">🧡</span> by <a href="https://github.com/codedr0id" rel="noreferrer" target="_blank" style={{fontVariant: "small-caps", marginLeft: "5px", color: "cyan", textDecoration: "none"}}>Mehul</a></p>
            </div>
        </main>
    )
}

export default Game; 