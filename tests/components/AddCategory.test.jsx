import { fireEvent, render, screen } from "@testing-library/react"
import AddCategory from "../../src/components/AddCategory"

describe("Pruebas en <AddCategory/>", () => {
    
    test("debe de cambiar el valor de la caja de texto", () => {
        render( <AddCategory onAddCategory={ () => {} }/> );
        
        const input = screen.getByRole('searchbox');
        fireEvent.input( input, { target: {value: 'Saitama'} } )

        expect(input.value).toBe('Saitama')

    })

    test("debe de llamar onAddCategory si el input tinene un valor", () => {

        const inputValue = 'Black Clover';
        const onAddCategory = jest.fn()

        render( <AddCategory onAddCategory={ onAddCategory }/> );
        
        const input = screen.getByRole('searchbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue} } )
        fireEvent.submit( form )

        expect( input.value ).toBe('')
        expect( onAddCategory ).toHaveBeenCalledTimes(1);
        expect( onAddCategory ).toHaveBeenCalledWith( inputValue );
        
        
    })

    test("no debe llamar a onAddCategory si el input está vació", () => {

        const inputValue = '';
        const onAddCategory = jest.fn()

        render( <AddCategory onAddCategory={ onAddCategory }/> );
        
        const input = screen.getByRole('searchbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue} } )
        fireEvent.submit( form )

        expect( onAddCategory ).toHaveBeenCalledTimes(0);
        expect( onAddCategory ).not.toHaveBeenCalled();
        
    })

})