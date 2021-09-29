import React from "react";
import{ render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life'}
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory} 
            currentCategory={mockCurrentCategory}   
        />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory} 
            currentCategory={mockCurrentCategory}   
        />);

        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visable', () => {
    it('inserts emoji intot the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory} 
            currentCategory={mockCurrentCategory}   
        />);
        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

describe('links are visable', () => {
    it('inserts test into the links', () => {
        const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory} 
            currentCategory={mockCurrentCategory}   
        />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})