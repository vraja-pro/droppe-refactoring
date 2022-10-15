import React,{FC} from "react";
import { Button } from "./button";
import styles from "./form.module.css";

type IFormProps = {
  "onSubmit": (payload: { title: string; description: string; price: string }) => void;
}

export const Form: FC<IFormProps> = ({onSubmit}) => {

  const handleSubmit = (e: any) => {
    
    e.preventDefault();
    if (!e.target.title.value) {
      alert("Your product needs a title");

      return;
    }

    if (!e.target.description.value || !e.target.price.value) {
      alert("Your product needs some content");

      return;
    }
    onSubmit({
      title: e.target.title.value,
      description: e.target.description.value,
      price: e.target.price.value,
    });

    e.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
      <span className={styles.label}>Product title: *</span>

      <input
        name="title"
        placeholder="Title..."
        className={styles.input}
      />

      <span className={styles.label}>Product details: *</span>

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
