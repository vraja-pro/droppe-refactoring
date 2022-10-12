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


type product = {
  title:string;
  description:string;
  price: string;
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


   const getProducts = () => {
      axios(PRODUCTS_API).then((response=>{
         setShopData({...shopData,products: response.data})
      })).catch(err=>{
        console.log(err)
      }); 
   }

   const favClick = (id:string) => {
    

   }

   useEffect(  () => {
    getProducts();
    
   }, [])
   

    return (
      <>
      
         <Header /> 
      

       
         {/* {shopData.products &&  <ProductList products={shopData.products} onFav={favClick} /> : <div></div>} */}
      
           
        
      </>
    );
  
}
