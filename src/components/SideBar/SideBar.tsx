import React, {useEffect, useState} from 'react';
import {appData} from "../../redux/selectors";
import TextField from "@mui/material/TextField";
import {List} from "../List/List";
import styles from "./SideBar.module.css";

interface IProps {
    setInputText: (x: string) => void;
}
export const SideBar = ({ setInputText }: IProps): JSX.Element => {
    const clickSideBar = (e: any) => {
        setInputText(e.target.text.toLowerCase());
    }

    return (
        <div className={styles.container}>
            <nav className={styles.AlphabetNav}>
                <a onClick={clickSideBar}>A</a>
                <a onClick={clickSideBar}>B</a>
                <a onClick={clickSideBar}>C</a>
                <a onClick={clickSideBar}>D</a>
                <a onClick={clickSideBar}>E</a>
                <a onClick={clickSideBar}>F</a>
                <a onClick={clickSideBar}>G</a>
                <a onClick={clickSideBar}>H</a>
                <a onClick={clickSideBar}>I</a>
                <a onClick={clickSideBar}>J</a>
                <a onClick={clickSideBar}>K</a>
                <a onClick={clickSideBar}>L</a>
                <a onClick={clickSideBar}>M</a>
                <a onClick={clickSideBar}>N</a>
                <a onClick={clickSideBar}>O</a>
                <a onClick={clickSideBar}>P</a>
                <a onClick={clickSideBar}>Q</a>
                <a onClick={clickSideBar}>R</a>
                <a onClick={clickSideBar}>S</a>
                <a onClick={clickSideBar}>T</a>
                <a onClick={clickSideBar}>U</a>
                <a onClick={clickSideBar}>V</a>
                <a onClick={clickSideBar}>W</a>
                <a onClick={clickSideBar}>X</a>
                <a onClick={clickSideBar}>Y</a>
                <a onClick={clickSideBar}>Z</a>
            </nav>
        </div>
    )
}