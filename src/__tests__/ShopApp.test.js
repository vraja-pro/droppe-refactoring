import React from 'react'
import {render,screen, fireEvent} from '@testing-library/react'
import ShopApp from '../ShopApp';
describe('ShopApp',()=>{
    it('should add a product to list after submit', async () => {
        render(<ShopApp/>)
        const button = screen.getByText('Send product proposal');
        fireEvent.click(button)
        setFormData ();
        const buttonElement = screen.getByRole("button", {name: /Add a product/i})
        fireEvent.click(buttonElement)
        const divElementTitle = await screen.findByText(/random title/i);
        expect(divElementTitle).toBeInTheDocument();
      
    });
})
const setFormData = () => {
    const inputElement = screen.getByPlaceholderText(/title\.\.\./i)
        fireEvent.change(inputElement,{target:{value:"random title"}})
        const priceTextBox = screen.getByPlaceholderText(/price\.\.\./i);
        fireEvent.change(priceTextBox,{target:{value:"100"}})
        const descriptionTextBox = screen.getByPlaceholderText(/start typing product description here\.\.\./i);
        fireEvent.change(descriptionTextBox,{target:{value:"random description"}})
        return;
}