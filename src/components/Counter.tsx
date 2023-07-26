import React, { useState } from "react";
import styles from './Counter.module.scss'
export const Counter = () => {
    let[count, setCount] = useState(0);
    let inc = () => {
        setCount(count + 1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={inc} className={styles.button}>incriment</button>
        </div>
    )
}