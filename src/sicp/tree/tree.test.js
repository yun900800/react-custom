import {
    printTree,
    countTree,
    printTrees,
    deepReverse,
    deepReverseSimple,
    treeTraverse,
    fringe,

    makeMobile,
    lBranch,
    rBranch,
    makeBranch,
    bLengh,
    bStructure,

    totalWeight,
    branchTorque,
    mobileBalance,

    scaleTree,
    scaleTreeWithMap,
    squareTree,
    squareMapTree,
    treeMap,

    subset
} from './tree';

import {
    pair,
    head,
    tail
} from '../pair/pair';

import {
    list,
    squareListWithIter1,
    printList,
    reverse
} from '../list/list';

import {
    append
} from '../utils/utils'

describe('tree test',()=> {
    it('countTree test',()=>{
        const list1 = list(2,4,8,16);
        const list2 = squareListWithIter1(list1);
        expect(countTree(list2)).toEqual(4);
    });

    it('printTrees test',()=>{
        const list1 = list(2,4,8,16);
        const list2 = squareListWithIter1(list1);
        let result = printTrees(list2);
        expect('4 ===> 16 ===> 64 ===> 256').toEqual(result);

        const list3 = list(1, list(2, list(3, 4)));
        result = printTrees(list3);
        expect('1 ===> 2 ===> 3 ===> 4').toEqual(result);
    });

    it('pair append list test',()=> {
        const list1 = list(1,2,3);
        const list2 = list(4,5,6);
        const list3 = append(list1,list2);
        expect('1,2,3,4,5,6').toEqual(printList(list3));

        const list4 = pair(list1,list2);
        let result = printTrees(list4);
        expect('1 ===> 2 ===> 3 ===> 4 ===> 5 ===> 6').toEqual(result);
        
        const list5 = list(list1,list2);
        result = printTrees(list5);
        expect('1 ===> 2 ===> 3 ===> 4 ===> 5 ===> 6').toEqual(result);
    });

    it('deepReverse test',()=> {
        const tree = list(list(1,2),list(3,4));
        let result = printTrees(tree);
        expect('1 ===> 2 ===> 3 ===> 4').toEqual(result);

        const reverseTree = reverse(tree);
        result = printTrees(reverseTree);
        expect('3 ===> 4 ===> 1 ===> 2').toEqual(result);

        const deepReverseTree = deepReverse(tree);
        result = printTrees(deepReverseTree);
        expect('4 ===> 3 ===> 2 ===> 1').toEqual(result);
    });

    it('deepReverseSimple test',()=> {
        const tree = list(list(1,2),list(3,4));

        const deepReverseTree = deepReverseSimple(tree);
        let result = printTrees(deepReverseTree);
        expect('4 ===> 3 ===> 2 ===> 1').toEqual(result);
    });

    it('treeTraverse test',()=> {
        const tree = list(list(1,2),list(3,4));

        const deepReverseTree = treeTraverse(tree);
        let result = printTrees(deepReverseTree);
        expect('4 ===> 3 ===> 2 ===> 1').toEqual(result);

        const tree1 = list(list(1,2),list(3,4),list(5,6));
        const deepReverseTree1 = treeTraverse(tree1);
        result = printTrees(deepReverseTree1);
        expect('6 ===> 5 ===> 4 ===> 3 ===> 2 ===> 1').toEqual(result);
    });

    it('fringe test',() => {
        const tree = list(list(1,2),list(3,4));
        let result = fringe(tree);
        expect('1,2,3,4').toEqual(printList(result));

        const tree1 = list(tree, tree);
        result = fringe(tree1);
        expect('1,2,3,4,1,2,3,4').toEqual(printList(result));
    });
});

describe('mobile test',()=> {
    it('makeMobile test',()=>{
        const mobile = makeMobile(makeBranch(10,25),makeBranch(5,20));
        expect('10,25').toEqual(printList(lBranch(mobile)));
        expect('5,20').toEqual(printList(rBranch(mobile)))
    });

    it('branch test',()=>{
        const mobile = makeMobile(makeBranch(10,25),makeBranch(5,20));
        expect(bLengh(lBranch(mobile))).toEqual(10);
        expect(bStructure(lBranch(mobile))).toEqual(25);
        expect(bLengh(rBranch(mobile))).toEqual(5);
        expect(bStructure(rBranch(mobile))).toEqual(20);
    });

    it('totalWeight test', ()=> {
        const mobile = makeMobile(makeBranch(10,25),makeBranch(5,20));
        let result = totalWeight(mobile);
        expect(45).toEqual(result);

        const anotherMobile = makeMobile(makeBranch(10,mobile ), makeBranch(10,20));
        result = totalWeight(anotherMobile);
        expect(65).toEqual(result);
    });

    it('branchTorque test' ,()=> {
        const branch1 = makeBranch(10,20);
        expect(200).toEqual(branchTorque(branch1));
    });

    it('mobileBalance test',()=> {
        const balanceMobile = makeMobile(makeBranch(10,10), makeBranch(10,10))
        expect(mobileBalance(balanceMobile)).toBeTruthy();
        const unBalanceMobile = makeMobile(makeBranch(0,0), makeBranch(10,10))
        expect(mobileBalance(unBalanceMobile)).toBeFalsy();
        const balanceMobileWithSub = makeMobile(makeBranch(10,balanceMobile), makeBranch(10,balanceMobile))
        expect(mobileBalance(balanceMobileWithSub)).toBeTruthy();
    })
});

describe('tree operations test', () => {
    it('scaleTree test',()=> {
        const tree1 = list(1, list(2, list(3,4),5), list(6,7));
        const scaleTree1 = scaleTree(tree1,10);
        const result = printTrees(scaleTree1);
        expect('10 ===> 20 ===> 30 ===> 40 ===> 50 ===> 60 ===> 70').toEqual(result);
    });
    it('scaleTreeWithMap test',()=> {
        const tree1 = list(1, list(2, list(3,4),5), list(6,7));
        const scaleTree1 = scaleTreeWithMap(tree1,10);
        const result = printTrees(scaleTree1);
        expect('10 ===> 20 ===> 30 ===> 40 ===> 50 ===> 60 ===> 70').toEqual(result);
    });

    it('squareTree test',()=> {
        const tree1 = list(1, list(2, list(3,4) ,5), list(6,7));
        const squareTree1 = squareTree(tree1);
        const result = printTrees(squareTree1);
        expect('1 ===> 4 ===> 9 ===> 16 ===> 25 ===> 36 ===> 49').toEqual(result);
    });
    it('squareMapTree test',()=> {
        const tree1 = list(1, list(2, list(3,4) ,5), list(6,7));
        const squareTree1 = squareMapTree(tree1);
        const result = printTrees(squareTree1);
        expect('1 ===> 4 ===> 9 ===> 16 ===> 25 ===> 36 ===> 49').toEqual(result);
    });

    it('treeMap test',()=> {
        const tree1 = list(1, list(2, list(3,4) ,5), list(6,7));
        let treeMapResult = treeMap(item=>item*item,tree1);
        let result = printTrees(treeMapResult);
        expect('1 ===> 4 ===> 9 ===> 16 ===> 25 ===> 36 ===> 49').toEqual(result);

        treeMapResult = treeMap(item=>item*10,tree1);
        result = printTrees(treeMapResult);
        expect('10 ===> 20 ===> 30 ===> 40 ===> 50 ===> 60 ===> 70').toEqual(result);
    })
});

describe('subset test', ()=> {
    it('subset test',()=> {
        const list1 = list(1,2,3);
        const list2 = subset(list1);
        printTree(list2);
        const result = printTrees(list2);
        console.log('--------------------')
        console.log(result)
    });
})