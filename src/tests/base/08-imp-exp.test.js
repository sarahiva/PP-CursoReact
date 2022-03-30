import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes' , () => {
    test('debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData );
    })

    test('debe retornar un undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    })

    //debe de retornar un arreglo con los heroes de DC
    //owner
    //toEqual al arreglo filtrado
    test('debe de retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        const heroesAux = heroes.filter(h => h.owner === owner);

        expect( heroes ).toEqual( heroesAux );
    })

    //debe de retornar un arreglo con los heroes de Marvel
    //length = 2 // toBe
    test('debe de retornar un arreglo con los heroes de Marvel', () => {
        const heroes = getHeroesByOwner( 'Marvel' );

        expect( heroes.length ).toBe( 2 );
    })
});