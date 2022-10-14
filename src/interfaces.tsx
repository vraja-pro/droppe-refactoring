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