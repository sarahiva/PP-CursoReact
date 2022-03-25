test('esta es mi primera prueba', () => { 
    const isActive = true;

    if(isActive){
        throw new Error('No esta activo');
    }
});