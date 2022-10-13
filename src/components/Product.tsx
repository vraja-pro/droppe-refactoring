import React,{FC} from 'react'
import {product} from '../ShopApp'
import styles from "./product-list-components.module.css";
import { FaStar } from "react-icons/fa";


const Product:FC<product> = ({title,rating,price,description,id,onFav}) => {
    const {product: productClass, productBody, actionBarItem, actionBarItemLabel,action_bar,isFavorite} = styles
  return (
    <div className={productClass}>
        <h3>{title}</h3>

    <p><b>Rating: {rating ? `${rating.rate}/5` : ''}</b></p>

    <p><b>Price: ${price}</b></p>

    <p className={productBody}>
      <span><b>Description:</b></span>
      <br/>
      {description}
   </p>

    <span className={`${action_bar}`}>
      <button
        className={`${actionBarItem} ${isFavorite ? "active" : ""}`}
        role="button"
        onClick={() => {
            onFav(id);
        }}
      >
        <FaStar /> <span className={actionBarItemLabel}>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</span>
      </button>
    </span>
  
  </div>
  )
}

export default Product