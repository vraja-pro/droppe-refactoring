import React,{FC,FormEvent} from "react";
import { Button } from "./button";
import styles from "./form.module.css";
import {ProductFormElement,FormProps} from '../interfaces'

export const Form: FC<FormProps> = ({onSubmit}) => {

  const handleSubmit = (e:FormEvent<ProductFormElement>) => {
    
    e.preventDefault();
    if (!e.currentTarget.elements.title.value) {
      alert("Your product needs a title");
      return;
    }

    if (!e.currentTarget.elements.description.value || !e.currentTarget.elements.price.value) {
      alert("Your product needs some content");
      return;
    }
    onSubmit({
      title: e.currentTarget.elements.title.value,
      description: e.currentTarget.elements.description.value,
      price: e.currentTarget.elements.price.value,
    });

    e.currentTarget.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} data-testid="add-product-form">
      <label className={styles.label}>Product title: *</label>

      <input
        name="title"
        placeholder="Title..."
        className={styles.input}
      />

      <label className={styles.label}>Product details: *</label>

      <input
        name="price"
        placeholder="Price..."
        className={styles.input}
      />

      <textarea
        name="description"
        placeholder="Start typing product description here..."
        className={styles.textarea}
      />

      <Button>Add a product</Button>
    </form>
  );
};
