import { useState } from "react";
import { getRolls, sum} from "./utils";

function Lucky7() {
    const [dice, setDice] = useState(getRolls(2));
    const won = sum(dice) === 7

    function roll() {
        setDice(getRolls(2));
    }

    return (
        <main className="Lucky7">
            <h1>Lucky 7 {won && "you won!"}</h1>
            <section className="Lucky7-dice">
                <div className="Luck7-die">{dice[0]}</div>
                <div className="Luck7-die">{dice[1]}</div>
            </section>
            <button onSubmit={roll}>Roll Again!</button>
        </main>
    );
}

export default Lucky7;