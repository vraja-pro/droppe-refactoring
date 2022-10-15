import React from 'react'
import {render,screen, cleanup, fireEvent} from '@testing-library/react'
import Product from '../components/Product';
import renderer from 'react-test-renderer'



test('should render not favorite in Product component', () => { 
    render(<Product isFavorite={false}/>);
    const productElement = screen.getByText('Add to favorites');
    expect(productElement).toBeInTheDocument();
    
})

test('should render favorite in Product component', () => { 
    render(<Product isFavorite={true}/>);
    const productElement = screen.getByText('Remove from favorites');
    expect(productElement).toBeInTheDocument();
})

test('product card matches snapshot', () => { 
    const productProps = {id:'5',title:'product title', description:'product description',price:'100',isFavorite:false}
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
