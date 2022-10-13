import React, {useState, useEffect} from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { Button } from "./components/button";
import { Form } from "./components/form";
import {PRODUCTS_API, ADDING_PRODUCT_MSG} from "./constants";
import Header from './components/Header';
import axios from "axios";
import Product from './components/Product';
import styles from "./shopApp.module.css";
import Counters from './components/Counters';
import {product} from './interfaces'


type data = {
  isOpen: boolean,
  isShowingMessage: boolean,
}

 export const ShopApp = () => {
   const [shopData,setShopData] = useState<data>({isOpen: false, isShowingMessage: false});
  const [products,setProducts] = useState<product[]>([])

   const getProducts = () => {
      axios(PRODUCTS_API).then(((response)=>{
        setProducts(response.data)
      })).catch(err=>{
        console.log(err)
      }); 
   }

   const handleFormSubmit = (payload: { title: string; description: string, price: string }) =>{
    setShopData({...shopData,isOpen:false,isShowingMessage:true})
      axios.post(PRODUCTS_API,payload).then(((response)=>{
        setProducts([{...response.data},...products])
        setShopData({...shopData,isOpen:false,isShowingMessage:false})
      })).catch(err=>{
        console.log(err)
      }); 
   
   }

   const favClick = (id:string) => {
     const updatedProducts = products.map((obj:product)=>{
      if(obj.id === id){
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

      <div className={styles.buttonWrapper}>
            
               <Button onClick={()=>setShopData({...shopData,isOpen:true})} >Send product proposal</Button>
         
             {shopData.isShowingMessage && <div className={styles.messageContainer}>
                <i>{ADDING_PRODUCT_MSG}</i>
             </div>}
          </div>


        <Counters total={products.length} favorites={products.filter(obj=>obj.isFavorite).length}/>
     
         {products && products.map((obj)=><Product {...obj} onFav={favClick} key={obj.id}/>)}


         <Modal
              isOpen={shopData.isOpen}
              className={styles.reactModalContent}
              overlayClassName={styles.reactModalOverlay}
           >
              <div className={styles.modalContentHelper}>
                 <div
                    className={styles.modalClose}
                    onClick={()=>setShopData({...shopData,isOpen:false})}
                 ><FaTimes /></div>

                 <Form
                    on-submit={handleFormSubmit}
                 />
              </div>
           </Modal>
         </div>
           
        
      </>
    );
  
}
