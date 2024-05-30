import {
    theGlobalEnvironment,
    applyPrimitiveFunction
} from './evaluator-global';
import {
    lookupSymbolValue
} from './evaluator-enviroment';

import {
    pair,
    head,
    tail
} from '../pair/pair';
describe('evaluator-global test',()=>{
    it('theGlobalEnvironment test',()=>{
        let value = lookupSymbolValue('math_PI',theGlobalEnvironment);
        expect(value).toEqual(Math.PI);
        
        value = lookupSymbolValue('pair',theGlobalEnvironment);
        expect(head(tail(value))).toEqual(pair)  
    });
});