//import * as React from 'react';
import './hello.css';
import Sparkles from '../sparkle/sparkles';
import IMAGE from '../assets/images/process-picture.jpg'; 
import SVG from '../assets/svg/sparkle.svg';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
        <Sparkles color="red">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      </Sparkles>
      <img src={IMAGE} width={400} height={400}></img>
      <img src={SVG} width={40} height={40}></img>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}