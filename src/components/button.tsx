import React,{FC} from "react";
import styles from "./button.module.css";

interface props {
  children: string;
  onClick?: () => void;
}

export const Button:FC<props> = ({ children, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
