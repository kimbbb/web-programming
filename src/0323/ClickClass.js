import React, {Component} from "react";

class Click extends Component{
  state={number:0};
  render(){
    const {number} = this.state;
    return(
      <>
      <h2>추가 실습과제2</h2>
      <p>{number}</p>
      <button onClick={()=>{
        this.setState(
          {
            number:number+1
          },
          ()=>{
            console.log('방금 setState가 호출되었습니다.');
            console.log(this.state);
          }
        )
      }}>
        +1
      </button>

      <button onClick={()=>{
        this.setState(
          {
            number:number-1
          },
          ()=>{
            console.log('방금 setState가 호출되었습니다.');
            console.log(this.state);
          }
        )
      }}>
        -1
      </button>
      </>
    );
  }
}

export default Click
