import React, { useEffect, useState ,useRef} from 'react';
import styled from 'styled-components';
import useStickyState from '../hooks/use-sticky-state';
import createPersistedState from 'use-persisted-state';
const useCounterState = createPersistedState('count1');
const useMaterialListState = createPersistedState('materialList');
 

const StyledCounter = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:840px;
    width:100%;
    background:#efefef;
    border-radius:4px;
    flex-direction:column;
    border:1px solid #eee;
    padding-top: 16px;
`;

const Paragraph = styled.p`
    line-height:3rem;
    padding: 16px 48px;
    background:#fff;
    margin-bottom: 40px;
    border-radius:8px;
`;

const Button = styled.button`
    width:60px;
    height:60px;
    background: yellow;
    border-radius:8px;
    padding: 20px 40px;
    margin-bottom: 40px;
`

export default function Counter() {
    const [count, setCount] = useStickyState(0, 'count');
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <StyledCounter>
            <Paragraph>{count}</Paragraph>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
        </StyledCounter>
    );
}

export function Counter2() {
    const [count, setCount] = useCounterState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <StyledCounter>
            <Paragraph>{count}</Paragraph>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
        </StyledCounter>
    );
}

export function MaterialList(){
    const [data, setData] = useState([]);
    const [materials,setMaterials] = useMaterialListState([]);
    useEffect(() => { 
        fetch('/api/material/materials')
        .then(response => response.json())
        .then(data => {
            setMaterials(data);
            setData(data);
        });
    }, []);
    return (
        <div className='bg-primary custom-card'>
            <ul className='content-auto'>
                {materials.map((item, index) => (
                    <li key={index}>{item.materialMaster.name}</li>
                ))}
            </ul>
        
        </div>
    );
};

export function Timer() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      countRef.current += 1;
      console.log("Count:", countRef.current); // 组件不会重新渲染，但 count 仍然在增加
      //只有count變化的時候才會渲染
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='custom-card'>
      <p>Render count: {renderCount}</p>
      <div className="bg-background-light dark:bg-background-dark">主题测试</div>
      <button onClick={() => {
        setRenderCount((prev) => prev + 1);
        document.documentElement.classList.toggle('dark')
        }}>
        Force Render
      </button>
    </div>
  );
}

// export default class Counter extends React.Component {
    
//     state = { count: 0 };
  
  
//     increment = () => this.setState({ count: this.state.count + 1 });
//     decrement = () => this.setState({ count: this.state.count - 1 });
  
  
//     render() {
//       return (
//         <StyledCounter>
//           <Paragraph>{this.state.count}</Paragraph>
//           <Button onClick={this.increment}>+</Button>
//           <Button onClick={this.decrement}>-</Button>
//         </StyledCounter>
//       );
//     }
//   }