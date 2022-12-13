import {findVal, saveData, getData} from './util';

afterAll(() => {
    localStorage.removeItem('test');
});

describe('Utility Test for Finding object in data', () =>{
    let city = 'berlin';
    let object = {
        "Berlin":{
            temperature: 20,
            humidity: 10,
            windspeed: 10
        }
    }
    let unknownCity = 'London';
    test('Test if object in objects is checking for case sensitivity', () =>{
        expect(findVal(object, city)).toEqual(object["Berlin"]);
    })

    test('If object not found', () =>{
        expect(findVal(object, unknownCity)).toBeNull();
    })

})

describe('Utility Test for Local Storage', () =>{
    saveData('test', 'test-value');
    test('Test if local storage is saving data', () =>{
        expect(getData('test')).toEqual('test-value');
    });   
})