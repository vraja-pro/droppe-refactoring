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


type Rating = {
  rate:number;
}
export interface product {
  id:string,
  title:string;
  description:string;
  price: string;
  isFavorite?:boolean;
  rating?:Rating;
}

type data = {
  products: product[]; 
  isOpen: boolean; 
  isShowingMessage: boolean;
  message:string; 
  numFavorites: number; 
  prodCount: number;
}

 export const ShopApp = () => {
   const [shopData,setShopData] = useState<data>({products:[], isOpen: false, isShowingMessage: false, message: '', numFavorites: 0, prodCount: 0 });
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
    //console.log(updatedProducts)
   }

   useEffect(  () => {
   getProducts();
    
   }, [])
   

    return (
      <>
      
         <Header /> 
      
      <div className="container">
       
         {products && products.map((obj)=><Product {...obj} onFav={favClick} key={obj.id}/>)}
         </div>
           
        
      </>
    );
  
}
