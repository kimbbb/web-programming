import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { compareHand, generateRandomHand } from './utils';
import {useState} from 'react';


let win=[]
let lose=[]
let non=[]
function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) {
    win.push('승리')
    console.log(win)
    return '승리';
  }
  if (comparison < 0) {
    lose.push('패배')
    console.log(lose)
    return '패배';
  }
  non.push('무승부')
  console.log(non)
  return '무승부';
}


function App() {
  
  let [hand,setHand] = useState('rock');
  let [otherHand, setOtherHand] = useState('scissor');


  const handleButtonClick = (nextHand) => {
    setHand(nextHand);
    setOtherHand(generateRandomHand())
  };

  const handleClearClick = () => {
    setOtherHand('rock');
    setHand('rock');
  };

  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <p>{getResult(hand, otherHand)} {win.length/2}승 {non.length/2}무 {lose.length/2}패</p>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;

