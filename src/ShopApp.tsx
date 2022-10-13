import React, {useState, useEffect} from "react";
import lodash from 'lodash';
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { Button } from "./components/button";
import ProductList from "./components/product-list-components";
import { Form } from "./components/form";
import {PRODUCTS_API} from "./constants";
import Header from './components/Header';
import axios from "axios";
import Product from './components/Product';
import styles from "./shopApp.module.css";
import Counters from './components/Counters';
import {product} from './interfaces'


type data = {
  isOpen: boolean; 
  isShowingMessage: boolean;
  message:string; 
  prodCount: number;
}

 export const ShopApp = () => {
   const [shopData,setShopData] = useState<data>({isOpen: false, isShowingMessage: false, message: '', prodCount: 0 });
  const [products,setProducts] = useState<product[]>([])

   const getProducts = () => {
      axios(PRODUCTS_API).then(((response)=>{
        setProducts(response.data)
      })).catch(err=>{
        console.log(err)
      }); 
   }

   const favClick = (id:string) => {
     const updatedProducts = products.map((obj:product)=>{
      if(obj.id == id){
          return {...obj,isFavorite:obj?.isFavorite ? !obj.isFavorite : true};
      }else{
        return obj;
      }
    })
    setProducts(updatedProducts)
   }

   useEffect(  () => {
   getProducts();
    
   }, [])
   

    return (
      <>
      
         <Header /> 
      
      <div className="container">

        <Counters total={products.length} favorites={products.filter(obj=>obj.isFavorite).length}/>
     
         {products && products.map((obj)=><Product {...obj} onFav={favClick} key={obj.id}/>)}
         </div>
           
        
      </>
    );
  
}
