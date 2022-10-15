import React from 'react'
import {render,screen, cleanup, fireEvent} from '@testing-library/react'
import {Form} from '../components/form';
import ShopApp from '../ShopApp';
import renderer from 'react-test-renderer'
import user from '@testing-library/user-event'


afterEach(()=>{
    cleanup();
});

test('form matches snapshot', () => { 
    const onSubmit = jest.fn;
   const tree = renderer.create(<Form onSubmit={onSubmit}/>).toJSON();
    expect(tree).toMatchSnapshot();
 })

 
test('is form being rendered', () => { 
    const showModal = jest.fn;
    render(<ShopApp />);
    const button = screen.getByText('Send product proposal');
    fireEvent.click(button)
    expect(showModal).toHaveBeenCalled;
    const productFormElement = screen.getByTestId('add-product-form');
    expect(productFormElement).toBeInTheDocument();
})
   
it('onSubmit is called when all fields pass validation', async () => {
    const onSubmit = jest.fn;
    render(<Form onSubmit={onSubmit}/>);
    const titleTextBox = screen.getByTestId('title');
    user.type(titleTextBox,"product title");
    const priceTextBox = screen.getByTestId('price');
    user.type(priceTextBox,"1000");
    const descriptionTextBox = screen.getByTestId('description');
    user.type(descriptionTextBox,"product description");
    user.click(screen.getByText('Add a product'));
    expect(onSubmit).toHaveBeenCalled;
  
});



