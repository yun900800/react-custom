import {
    enclosingEnvironment,
    firstFrame,
    theEmptyEnvironment,
    makeFrame,
    frameSymbols,
    frameValues,
    extendEnviroment,
    lookupSymbolValue,
    assignSymbolValue
} from './evaluator-enviroment';

import {
    list
} from '../list/list';

describe('evaluator-enviroment test',()=>{
    it('extendEnviroment lookupSymbolValue assignSymbolValue test',()=>{
        const symbols = list('name','age','sex');
        const values = list('hekai',35,'M');
        const enviroment1 = extendEnviroment(symbols,values, null);

        let value = lookupSymbolValue('name',enviroment1);
        expect(value).toEqual('hekai');
        value = lookupSymbolValue('age',enviroment1);
        expect(value).toEqual(35);
        value = lookupSymbolValue('sex',enviroment1);
        expect(value).toEqual('M');

        assignSymbolValue('sex','F', enviroment1);
        value = lookupSymbolValue('sex',enviroment1);
        expect(value).toEqual('F');
    });

    it('enclosingEnvironment test',()=>{
        const symbols = list('name','age','sex');
        const values = list('hekai',35,'M');
        const enviroment1 = extendEnviroment(symbols,values, null);
        expect(enclosingEnvironment(enviroment1)).toBeNull();
        expect(enclosingEnvironment(enviroment1)).toEqual(theEmptyEnvironment);
    });

    it('firstFrame test',()=>{
        const symbols = list('name','age','sex');
        const values = list('hekai',35,'M');
        const enviroment1 = extendEnviroment(symbols,values, null);
        const frame = firstFrame(enviroment1);
        expect(frameSymbols(frame)).toEqual(symbols);
        expect(frameValues(frame)).toEqual(values);
    });

    it('makeFrame test',()=>{
        const symbols = list('name','age','sex');
        const values = list('hekai',35,'M');
        const frame = makeFrame(symbols,values);
        expect(frameSymbols(frame)).toEqual(symbols);
        expect(frameValues(frame)).toEqual(values);
    });

    it('multi enviroment test',()=>{
        const symbols = list('name','age','sex','time');
        const values = list('hekai',35,'M',25);
        const enviroment1 = extendEnviroment(symbols,values, null);
        const symbols1 = list('name','age','sex');
        const values1 = list('heyu',36,'F');
        const enviroment2 = extendEnviroment(symbols1,values1, enviroment1);
        let value = lookupSymbolValue('name',enviroment2);
        expect(value).toEqual('heyu');
        value = lookupSymbolValue('time',enviroment2);
        expect(value).toEqual(25);
        value = lookupSymbolValue('age',enviroment2);
        expect(value).toEqual(36);
    });

});