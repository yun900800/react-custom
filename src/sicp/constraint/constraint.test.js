import {
    probe,
    celsiusFahrenheitConverter,
    makeConnector,
    setValue,
    forgetValue
} from './constraint';

describe('constraint test',()=>{
    it('celsiusFahrenheitConverter test',()=>{
        const C = makeConnector();
        const F = makeConnector();
        celsiusFahrenheitConverter(C,F);
        probe('Celsius temp',C);
        probe('Fahrenheit temp',F);
        setValue(C,25,'User');

        //setValue(F,212,'User');
        forgetValue(C,'User');

        setValue(F,212,'User');
    });
})