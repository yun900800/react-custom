import useRandomInterval from './useRandomInterval';
import { renderHook,waitFor } from "@testing-library/react";
//jest.useFakeTimers();
//jest.spyOn(global, 'setTimeout');
describe('useRandomInterval hook test', () => {
    it('callback should have execute once', async () => {
        jest.useFakeTimers();
        const callback = jest.fn();
        renderHook(() => useRandomInterval(callback,1000,3000));
        jest.advanceTimersByTime(4000);
        expect(callback).toBeCalled();
    });

    it('callback should not have execute', async () => {
        jest.useFakeTimers();
        const callback = jest.fn();
        renderHook(() => useRandomInterval(callback,'',3000));
        jest.advanceTimersByTime(4000);
        await waitFor(() =>
            expect(callback).not.toBeCalled()
        ); 
    });

    it('useRandomInterval return a function',async ()=>{
        jest.useFakeTimers();
        const callback = jest.fn();
        const {result} = renderHook(() => useRandomInterval(callback,1000,3000));
        result.current();
        jest.advanceTimersByTime(4000);
        expect(result.current).toBeInstanceOf(Function); 
        await waitFor(() =>
            expect(callback).not.toBeCalled()
        ); 
        
    });
});