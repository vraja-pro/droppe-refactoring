import React,{FC} from "react";
import styles from "./button.module.css";
import {ButtonProps} from '../interfaces'

export const Button:FC<ButtonProps> = ({ children, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
