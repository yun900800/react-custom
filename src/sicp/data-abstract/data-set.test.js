import {
    elementOfSet,
    adJoinSet,
    interSectionSet,
    unionSet,

    isElementOfSet,
    adJoinSetOrder,
    interSectionSetOrder,
    unionSetOrder,

    treeToList1,
    treeToList2
} from './data-set';
import {
    head,
    listJs,
    printListJs,
    tail,
    makeTree,
    entry,
    leftBranch,
    rightBranch
} from './sicp';
describe('elementOfSet function test',()=>{
    it('elementOfSet function test',()=>{
        const result = elementOfSet(1,listJs(1,2,3,4));
        expect(result).toBeTruthy();
    });

    it('adJoinSet function test',()=>{
        const set1 = adJoinSet(5,listJs(1,2,3,4));
        const result = elementOfSet(5,set1);
        expect(result).toBeTruthy();
    });

    it('interSectionSet function test', ()=>{
        const set1 = listJs(1,2,3,4);
        const set2 = listJs(3,4,5,6);
        const interSet = interSectionSet(set1,set2);
        const result = elementOfSet(3,interSet);
        expect(result).toBeTruthy();
    });

    it('unionSet function test', ()=>{
        const set1 = listJs(1,2,3,4);
        const set2 = listJs(3,4,5,6);
        const unionSet1 = unionSet(set1,set2);
        let result = elementOfSet(1,unionSet1);
        expect(result).toBeTruthy();
        result = elementOfSet(5,unionSet1);
        expect(result).toBeTruthy();
    });

    it('adJoinSetOrder function test', ()=>{
        const set1 = adJoinSetOrder(1, null);
        const set2 = adJoinSetOrder(16, set1);
        const set3 = adJoinSetOrder(8, set2);
        const set4 = adJoinSetOrder(12, set3);
        const set5 = adJoinSetOrder(5, set4);
        expect(isElementOfSet(5,set5)).toBeTruthy();
        expect(isElementOfSet(2,set5)).toBeFalsy();
    });

    it('interSectionSetOrder function test',()=>{
        const set1 = adJoinSetOrder(1, null);
        const set2 = adJoinSetOrder(16, set1);
        const set3 = adJoinSetOrder(8, set2);
        const set4 = adJoinSetOrder(12, set3);
        const set5 = adJoinSetOrder(5, set4);

        const set6 = adJoinSetOrder(50,null);
        const set7 = adJoinSetOrder(5,set6);
        const set8 = adJoinSetOrder(36,set7);
        const result = interSectionSetOrder(set5, set8);
        expect(isElementOfSet(5,result)).toBeTruthy();
        expect(isElementOfSet(50,result)).toBeFalsy();
    });

    it('unionSetOrder function test',()=>{
        const set1 = adJoinSetOrder(1, null);
        const set2 = adJoinSetOrder(16, set1);
        const set3 = adJoinSetOrder(8, set2);
        const set4 = adJoinSetOrder(12, set3);
        const set5 = adJoinSetOrder(5, set4);

        const set6 = adJoinSetOrder(50,null);
        const set7 = adJoinSetOrder(5,set6);
        const set8 = adJoinSetOrder(36,set7);
        const result = unionSetOrder(set5, set8);
        expect(isElementOfSet(5,result)).toBeTruthy();
        expect(isElementOfSet(50,result)).toBeTruthy();
        expect(isElementOfSet(1,result)).toBeTruthy();
    });
});

describe('treeToList two method test',()=>{
    it('treeToList method1 test',()=>{
        const tree = makeTree(7, 
            makeTree(3,
                makeTree(1, null, null),
                makeTree(5, null, null)
            ),
            makeTree(9,
                null,
                makeTree(11, null,null)
            )
        );
        const list = treeToList1(tree);
        //printListJs(list)
        expect(1).toEqual(head(list));
    });

    it('treeToList method2 test' ,()=>{
        const tree = makeTree(7, 
            makeTree(3,
                makeTree(1, null, null),
                makeTree(5, null, null)
            ),
            makeTree(9,
                makeTree(8,null,null),
                makeTree(11, null,null)
            )
        );
        const list = treeToList2(tree);
        //printListJs(list)
        expect(1).toEqual(head(list));
    })
});