import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function App() {
  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);


  return (
    <>
      <div style={
        {
          width:'500px',
          height:"600px",
          border:"1px solid #000",
          borderRadius:"10px"
        }
      }>
        <div>
          <p style={{ margin:'0px'}}>제목</p>
          <input style={{width:'90%'}}/>

          <p style={{ margin:'0px'}}>목록</p>
          <select style={{width:'90%'}}>
            <option>1</option>
            <option>2</option>
          </select>

          <div>
            <input type='radio' style={{margin:'14px 4px 14px 0px'}}/>
            <input type='checkbox' />
          </div>
          
          <div>
            <button style={{width:'40px', backgroundColor:'yellow', marginRight:'6px'}}>+</button>
            <button style={{width:'40px', backgroundColor:'yellow'}}>-</button>
          </div>

          <textarea style={{width:'90%', height:'300px', marginTop:'20px', resize:'none'}}/>

          <div>
            <Button variant="primary" style={{margin:"5px"}}>등록</Button>
            <Button variant="primary" style={{margin:"5px"}}>수정</Button>
            <Button variant="primary" style={{margin:"5px"}}>삭제</Button>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
