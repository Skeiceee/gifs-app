import { render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe("Pruebas en <GifGrid />", () => {

    const category = "Black Clover";

    test("debe de mostrar el loading inicialmente", () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        const loadingElement = screen.getByLabelText('loading');
        expect( loadingElement ).not.toBeNull();

    })

    test("debe de mostrar items de los gifs de useFetchGifs", () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Black Clover',
                url: 'https://localhost/blackclover.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={category} /> );

        expect( screen.getAllByRole('img').length ).toBe(2)

    })

});