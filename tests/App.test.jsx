import { fireEvent, render, renderHook, screen, waitFor } from "@testing-library/react";
import App from "../src/App";
import useFetchGifs from "../src/hooks/useFetchGifs";

describe('Pruebas en <App />', () => {

    const InputValue = 'Black Clover'

    test('should', async () => {

        render( <App /> );

        const input = screen.getByRole('searchbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, { target: {value: InputValue} } )

        expect(input.value).toBe(InputValue)

        fireEvent.submit( form )

        const { result } = renderHook( () => {
            return useFetchGifs('Black Clover');
        })

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {}
        );

        // screen.debug()
    
    })

})