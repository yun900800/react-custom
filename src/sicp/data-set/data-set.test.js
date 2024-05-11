import {
    elementOfSet,
    adJoinSet,
    interSectionSet,
    unionSet,

    elementOfSetWithOrder,
    adJoinSetWithOrder,
    interSectionSetWithOrder,
    unionSetWithOrder,

    adJoinSetWithDuplication,
    interSectionSetWitDuplication,

    makeTree,
    entry,
    leftBranch,
    rightBranch,
    key,
    value,
    elementOfSetWithTree,
    adJoinSetWithTree,
    interSectionTree,
    unionTree,

    treeToListOne,
    treeToListTwo,

    listTree,
    lookup,
    lookupWithTree
} from './data-set';

import {
    list,
    printList
} from '../list/list';
import { head, pair } from '../pair/pair';

describe('data-set test',()=> {
    it('elementOfSet function test',()=>{
        let result = elementOfSet(1,list(1,2,3,4));
        expect(result).toBeTruthy();
        result = elementOfSet(5,list(1,2,3,4));
        expect(result).toBeFalsy();
    });
    it('adJoinSet test',()=>{
        const set1 = adJoinSet(5,list(1,2,3,4));
        let result = elementOfSet(5,set1);
        expect(result).toBeTruthy();
        result = elementOfSet(1,set1);
        expect(result).toBeTruthy();
        result = elementOfSet(0,set1);
        expect(result).toBeFalsy();
    });

    it('interSectionSet test', ()=>{
        const set1 = list(1,2,3,4);
        const set2 = list(3,4,5,6);
        const interSet = interSectionSet(set1,set2);
        let result = elementOfSet(3,interSet);
        expect(result).toBeTruthy();
        result = elementOfSet(6,interSet);
        expect(result).toBeFalsy();
        result = elementOfSet(1,interSet);
        expect(result).toBeFalsy();
    });
    it('unionSet function test', ()=>{
        const set1 = list(1,2,3,4);
        const set2 = list(3,4,5,6);
        const unionSet1 = unionSet(set1,set2);
        let result = elementOfSet(1,unionSet1);
        expect(result).toBeTruthy();
        result = elementOfSet(5,unionSet1);
        expect(result).toBeTruthy();
        result = elementOfSet(3,unionSet1);
        expect(result).toBeTruthy();
    });

    it('adJoinSetWithOrder test', ()=>{
        const set1 = adJoinSetWithOrder(1, null);
        const set2 = adJoinSetWithOrder(16, set1);
        const set3 = adJoinSetWithOrder(8, set2);
        const set4 = adJoinSetWithOrder(12, set3);
        const set5 = adJoinSetWithOrder(5, set4);
        expect(elementOfSetWithOrder(5,set5)).toBeTruthy();
        expect(elementOfSetWithOrder(2,set5)).toBeFalsy();
    });

    it('interSectionSetWithOrder function test',()=>{
        const set1 = adJoinSetWithOrder(1, null);
        const set2 = adJoinSetWithOrder(16, set1);
        const set3 = adJoinSetWithOrder(8, set2);
        const set4 = adJoinSetWithOrder(12, set3);
        const set5 = adJoinSetWithOrder(5, set4);

        const set6 = adJoinSetWithOrder(50,null);
        const set7 = adJoinSetWithOrder(5,set6);
        const set8 = adJoinSetWithOrder(36,set7);
        const result = interSectionSetWithOrder(set5, set8);
        expect(elementOfSetWithOrder(5,result)).toBeTruthy();
        expect(elementOfSetWithOrder(50,result)).toBeFalsy();
    });

    it('unionSetWithOrder function test',()=>{
        const set1 = adJoinSetWithOrder(1, null);
        const set2 = adJoinSetWithOrder(16, set1);
        const set3 = adJoinSetWithOrder(8, set2);
        const set4 = adJoinSetWithOrder(12, set3);
        const set5 = adJoinSetWithOrder(5, set4);

        const set6 = adJoinSetWithOrder(50,null);
        const set7 = adJoinSetWithOrder(5,set6);
        const set8 = adJoinSetWithOrder(36,set7);
        const result = unionSetWithOrder(set5, set8);
        expect(elementOfSetWithOrder(5,result)).toBeTruthy();
        expect(elementOfSetWithOrder(50,result)).toBeTruthy();
        expect(elementOfSetWithOrder(1,result)).toBeTruthy();
    });

    it('adJoinSetWithDuplication test',()=> {
        const set1 = list(1,2,3);
        const set2 = adJoinSetWithDuplication(1,set1);
        expect('1,1,2,3').toEqual(printList(set2));
        const set3 = adJoinSetWithDuplication(1,set2);
        expect('1,1,1,2,3').toEqual(printList(set3));
    });

    it('interSectionSetWitDuplication test',()=> {
        const set1 = list(1,2,3);
        const set2 = list(1,1,2,4,5,6)
        const set3 = interSectionSetWitDuplication(set1,set2);
        expect('1,2').toEqual(printList(set3));   
    });

    it('makeTree, entry, leftBranch, rightBranch, key, value test',()=> {
        const tree1 = makeTree(1,2,3);
        expect(entry(tree1)).toEqual(1);
        expect(leftBranch(tree1)).toEqual(2);
        expect(rightBranch(tree1)).toEqual(3);

        const tree2 = makeTree(pair("hello",1),2,3);
        expect(value(entry(tree2))).toEqual(1);
        expect(key(entry(tree2))).toEqual('hello');
        expect(leftBranch(tree2)).toEqual(2);
        expect(rightBranch(tree2)).toEqual(3);
    });

    it('adJoinSetWithTree test',()=> {
        const set1 = adJoinSetWithTree(15,null);
        const set2 = adJoinSetWithTree(1,set1);
        const set3 = adJoinSetWithTree(20,set2);
        const set4 = adJoinSetWithTree(7,set3);
        const set5 = adJoinSetWithTree(12,set4);
        expect(elementOfSetWithTree(7,set5)).toBeTruthy();
        expect(elementOfSetWithTree(30,set5)).toBeFalsy();
    });

    it('interSectionTree test',()=>{
        const tree1 = listTree(list(1,2,3,4,5));
        const tree2 = listTree(list(1,3,5,7,9));
        const treeSet = interSectionTree(tree1,tree2);
        expect(elementOfSetWithTree(3,treeSet)).toBeTruthy();
        expect(elementOfSetWithTree(7,treeSet)).toBeFalsy();
    });

    it('unionTree test',()=>{
        const tree1 = listTree(list(1,2,3,4,5));
        const tree2 = listTree(list(1,3,5,7,9));
        const treeSet = unionTree(tree1,tree2);
        expect(elementOfSetWithTree(3,treeSet)).toBeTruthy();
        expect(elementOfSetWithTree(7,treeSet)).toBeTruthy();
    })
});

describe('treeToList two method test',()=>{
    it('treeToListOne test',()=>{
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
        const list = treeToListOne(tree);
        expect('1,3,5,7,9,11').toEqual(printList(list));
    });

    it('treeToListTwo test' ,()=>{
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
        const list = treeToListTwo(tree);
        expect('1,3,5,7,8,9,11').toEqual(printList(list));
    });

    it('listTree test',()=> {
        const tree = listTree(list(1,3,5,7,9,11));
        expect(entry(tree)).toEqual(5);
    });

    it('lookup test',()=>{
        const list1 = list(pair('hello',1), pair('world',2), pair('nice',3));
        let result = lookup('hello',list1);
        expect(value(result)).toEqual(1);
        result = lookup('hello1',list1);
        expect(result).toBeFalsy();
        result = lookup('nice',list1);
        expect(value(result)).toEqual(3);
    });

    it('lookupWithTree test',()=>{
        const tree1 = makeTree(pair(7,'hello'), 
            makeTree(pair(3,'nice'),
                makeTree(pair(1,'meet'), null, null),
                makeTree(pair(5,'haha'), null, null),
            ),
            makeTree(pair(9,'hehe'),
                makeTree(pair(8,'hutu'),null,null),
                makeTree(pair(11,'hello9'), null,null)
            )
        );
        let result = lookupWithTree(9,tree1);
        expect(value(result)).toEqual('hehe');
        result = lookupWithTree(15,tree1);
        expect(result).toBeFalsy();
    })
});