import React from 'react'
import {render,screen, cleanup, fireEvent} from '@testing-library/react'
import {Form} from '../components/form';
import ShopApp from '../ShopApp';
import renderer from 'react-test-renderer'

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

