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
});