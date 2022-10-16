import React,{FC} from 'react'
import {product} from '../interfaces'
import styles from "./product-list-components.module.css";
import { FaStar } from "react-icons/fa";

interface Props extends product{
    onFav:(id:string)=>void;
}

const Product:FC<Props> = ({title,rating,price,description,id,onFav,isFavorite}) => {
    const {product: productClass, productBody, actionBarItem, actionBarItemLabel,action_bar,} = styles
  return (
    <div className={productClass}>
        <h3 className={styles['product-title']}>{title}</h3>

    <p><b>Rating: {rating ? `${rating.rate}/5` : ''}</b></p>

    <p><b>Price: ${price}</b></p>

    <p className={productBody}>
      <span><b>Description:</b></span>
      <br/>
      {description}
   </p>

    <div className={`${action_bar}`}>
      <button
        className={`${actionBarItem} ${isFavorite ? "active" : ""}`}
        onClick={() => {onFav(id)}}>
        <FaStar /> <span className={actionBarItemLabel}>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</span>
      </button>
    </div>
  
  </div>
  )
}

export default Product