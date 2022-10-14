import React from 'react'
import {render,screen, cleanup, fireEvent} from '@testing-library/react'
import Product from '../components/Product';
import renderer from 'react-test-renderer'

afterEach(()=>{
    cleanup();
});

const onFav = jest.fn;
const productProps = {id:'5',title:'product title', description:'product description',price:'100',isFavorite:false,onFav}


test('should render not favorite in Product component', () => { 
    render(<Product {...productProps}/>);
    const productElement = screen.getByTestId('product-1');
    expect(productElement).toBeInTheDocument();
    expect(productElement).toHaveTextContent('Add to favorites');
    
})

test('should render favorite in Product component', () => { 
    const productProps = {id:'2',title:'product title', description:'product description',price:'100',isFavorite:true,onFav}
    render(<Product {...productProps}/>);
    const productElement = screen.getByTestId('product-2');
    expect(productElement).toBeInTheDocument();
    expect(productElement).toHaveTextContent('Remove from favorites');

})

test('product card matches snapshot', () => { 
  
    const tree = renderer.create(<Product {...productProps}/>).toJSON();
     expect(tree).toMatchSnapshot();
 })

test('onFav function working', () => { 
    const onFav = jest.fn;
    render(<Product onFav={onFav}/>);
    const button = screen.getByRole('button');
     fireEvent.click(button)
      expect(onFav).toHaveBeenCalled;
    
  })
