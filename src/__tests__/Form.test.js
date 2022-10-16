import React from 'react'
import {render,screen, fireEvent, waitFor} from '@testing-library/react'
import {Form} from '../components/form';
import ShopApp from '../ShopApp';
import renderer from 'react-test-renderer'
import user from '@testing-library/user-event'


it('is form being rendered', () => { 
    render(<ShopApp />);
    const button = screen.getByText('Send product proposal');
    fireEvent.click(button)
    const productFormElement = screen.getByTestId('add-product-form');
    expect(productFormElement).toBeInTheDocument();
})
   
it('form matches snapshot', () => { 
    const tree = renderer.create(<Form/>).toJSON();
     expect(tree).toMatchSnapshot();
  })

describe('form validation', () => { 
    it('should type in title', () => {
        render(<Form/>);
        const inputElement = screen.getByPlaceholderText(/title\.\.\./i)
        fireEvent.change(inputElement,{target:{value:"radom title"}})
        expect(inputElement.value).toBe("radom title");
    });

   
    
    it('onSubmit is called when all fields pass validation', async () => {
        const mockedOnSubmit = jest.fn();
        render(<Form onSubmit={mockedOnSubmit}/>);
        const titleTextBox = screen.getByPlaceholderText(/title\.\.\./i);
        user.type(titleTextBox,"product title");
        const priceTextBox = screen.getByPlaceholderText(/price\.\.\./i);
        user.type(priceTextBox,"1000");
        const descriptionTextBox = screen.getByPlaceholderText(/start typing product description here\.\.\./i);
        user.type(descriptionTextBox,"product description");
        const buttonElement = screen.getByRole("button", {name: /Add a product/i})
        user.click(buttonElement);
        expect(mockedOnSubmit).toHaveBeenCalledTimes(1);
        expect(titleTextBox.value).toBe('')
        expect(priceTextBox.value).toBe('')
        expect(descriptionTextBox.value).toBe('')
    });


 })



