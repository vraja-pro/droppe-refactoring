export type Rating = {
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

export interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement,
  description:HTMLInputElement,
  price:HTMLInputElement,
}

export interface ProductFormElement extends HTMLFormElement {
  readonly elements: FormElements
}