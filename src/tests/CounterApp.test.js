import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
    let wrapper = shallow(<CounterApp />);

    //Para inicializar el componente
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    //Debe de mostrar <CounterApp /> correctamente (hacer match con un snapshot)
    //y sus valores por defecto
    test('Debe de mostrar <CounterApp /> correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    //Debe de mostrar el valor por defecto de 100
    //usar el wrapper.find, tomando el elemeto html donde se muestre el valor del contador
    test('Debe de mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>);

        const counterText = wrapper.find('h2').text();
        expect( counterText ).toBe('100');
    });

    test('debe de incrementar con el boton de +1', () => {
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');
    });

    test('debe de decrementar con el boton de -1', () => {
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');
    });

    test('debe de colocar el valor por defecto con el btn reset', () => {
        const wrapper = shallow(<CounterApp value={105}/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('105');

    });
});