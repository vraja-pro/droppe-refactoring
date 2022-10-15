import React,{useRef,FC} from "react";
import { Button } from "./button";
import styles from "./form.module.css";

type IFormProps = {
  "onSubmit": (payload: { title: string; description: string; price: string }) => void;
}

export const Form: FC<IFormProps> = ({onSubmit}) => {
  let formRef = useRef<HTMLFormElement>(null);
  let titleRef = useRef<HTMLInputElement>(null);
  let priceRef = useRef<HTMLInputElement>(null);
  let descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!titleRef.current?.value) {
      alert("Your product needs a title");

      return;
    }

    if (!descriptionRef.current?.value || !priceRef.current?.value) {
      alert("Your product needs some content");

      return;
    }
    // onSubmit({
    //   title: titleRef.current && titleRef.current.value,
    //   description: descriptionRef.current && descriptionRef.current.value,
    //   price: priceRef.current && priceRef.current.value,
    // });

    formRef.current?.reset();
  };

  return (
    <form className={styles.form} onSubmit={(event) => handleSubmit(event)} ref={formRef}>
      <span className={styles.label}>Product title: *</span>

      <input
        ref={titleRef}
        placeholder="Title..."
        className={styles.input}
      />

      <span className={styles.label}>Product details: *</span>

      <input
        ref={priceRef}
        placeholder="Price..."
        className={styles.input}
      />

      <textarea
        ref={descriptionRef}
        placeholder="Start typing product description here..."
        className={styles.textarea}
      />

      <Button>Add a product</Button>
    </form>
  );
};
