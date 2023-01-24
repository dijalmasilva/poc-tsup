import styles from './style.module.scss'

import React from "react";
import {ReactNode} from "react";

type ButtonProps = {
    children: string | ReactNode
}

const Button = ({ children }: ButtonProps) => {
    return <button className={`${styles.button}`}>{ children }</button>
}

export default Button