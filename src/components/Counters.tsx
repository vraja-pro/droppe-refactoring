import React,{FC} from 'react'
import styles from "../shopApp.module.css";

type Props = {
    total:number,
    favorites:number
}

const Counters:FC<Props> = ({total,favorites}) => {
  return (
    <div className={styles.statsContainer}>
    <span>{`Total products: ${total} - Number of favorites: ${favorites}`}</span>
 </div>
  )
}

export default Counters