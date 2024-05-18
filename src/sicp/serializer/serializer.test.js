import {
    makeSerializer,
    makeAccount
} from './serializer';

describe('serializer test',()=>{
    it('makeSerializer test',()=>{
        expect(makeSerializer).toBeInstanceOf(Function);
    });

    it('makeAccount test',()=>{
        const account1 = makeAccount(100);
        expect(account1('withdraw')(30)).toEqual(70)
    });
});